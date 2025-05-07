import { error, type HttpError } from '@sveltejs/kit'; // Import HttpError
import type { PageLoad, EntryGenerator } from './$types'; // Import EntryGenerator
import { dev } from '$app/environment'; // Import dev

// Define the type for our markdown module metadata
interface RecipeMetadata {
  title: string;
  slug?: string;
  description?: string;
  date: string;
  updated?: string;
  featured?: boolean;
  image: string;
  prepTime?: number | string; // Allow string for parsing flexibility
  cookTime?: number | string; // Allow string for parsing flexibility
  totalTime?: number | string; // Allow string for parsing flexibility
  servings?: number;
  categories?: string[];
  tags?: string[];
  difficulty?: string;
  draft?: boolean;
  recipeCuisine?: string[];
  relatedProducts?: Array<{ handle: string, featured?: boolean }>;
}

// Define the type for our markdown module
interface RecipeModule {
  metadata: RecipeMetadata;
  default: any; // This will be the rendered component
}

// Define the type for the dynamic import map
type RecipeModuleImporter = () => Promise<RecipeModule>;
type RecipeModuleMap = Record<string, RecipeModuleImporter>;

// Define and EXPORT the expected return type for the load function
export interface LoadReturn {
  metadata: RecipeMetadata;
  ingredients: string[];
  instructions: { '@type': 'HowToStep'; text: string }[];
  relatedRecipes: RecipeMetadata[];
  productLinks: Array<{ id: string, url: string }>;
  rawContent: string; // Add this to store raw markdown content
  relatedProducts: Array<{ handle: string, featured?: boolean }>;
}

// Add this entries function
export const entries: EntryGenerator = async () => {
  // Use import.meta.glob to find all markdown files
  const modules = import.meta.glob<RecipeModule>('/src/content/recipes/*.md');
  const slugs: { slug: string }[] = [];

  for (const path in modules) {
    // Extract the filename (slug) from the path
    const slug = path.split('/').pop()?.replace('.md', '');
    if (slug) {
      slugs.push({ slug });
    }
  }

  return slugs;
};

// Add this line
export const prerender = true;

// Explicitly type the load function with LoadReturn
export const load: PageLoad<LoadReturn> = async ({ params, parent }) => {
  // First, get any data that was returned from the server load function
  const parentData = await parent() as { relatedProducts?: Array<{ handle: string, featured?: boolean }> };

  const { slug } = params;

  try {
    // Dynamic import of all markdown files (returns functions to load modules)
    const modules: Record<string, () => Promise<RecipeModule>> =
      import.meta.glob<RecipeModule>('/src/content/recipes/*.md');
    // Import raw content as well - Updated to use 'query'
    const rawModules: Record<string, () => Promise<string>> = import.meta.glob<string>(
      '/src/content/recipes/*.md',
      { query: '?raw', import: 'default' } // Updated from 'as: "raw"'
    );

    // Construct the expected path and get the importer function directly
    const modulePath = `/src/content/recipes/${slug}.md`;
    const moduleImporter = modules[modulePath];
    const rawImporter = rawModules[modulePath]; // Get raw importer

    if (!moduleImporter || !rawImporter) {
      throw error(404, `Recipe "${slug}" not found`);
    }

    // Load the matching module and raw content by calling the importer functions
    const [post, rawContent] = await Promise.all([moduleImporter(), rawImporter()]);

    // --- Simple Parsing Logic ---
    const ingredients: string[] = [];
    // Use the HowToStep type from the LoadReturn interface
    const instructions: LoadReturn['instructions'] = [];
    let currentSection: 'ingredients' | 'instructions' | null = null;

    // Extract product links from ingredients
    const productLinks: Array<{ id: string, url: string }> = [];
    const linkRegex = /\[.*?\]\((.*?)\)/g;

    const lines = rawContent.split('\n'); // Use '\n' for splitting lines from raw import

    for (const line of lines) {
      const trimmedLine = line.trim();
      // Use startsWith for section headers
      if (trimmedLine.startsWith('## Ingredients')) {
        currentSection = 'ingredients';
        continue;
      }
      if (trimmedLine.startsWith('## Instructions')) {
        currentSection = 'instructions';
        continue;
      }
      // Reset section if another H2 is encountered
      if (trimmedLine.startsWith('## ')) {
        currentSection = null;
        continue;
      }

      // Extract list items based on current section
      if (currentSection === 'ingredients' && trimmedLine.startsWith('- ')) {
        // Extract the ingredient text (without link formatting)
        const ingredientText = trimmedLine.substring(2).trim().replace(/\[(.*?)\]\(.*?\)/g, '$1');
        ingredients.push(ingredientText);

        // Extract product links from this ingredient line
        let match;
        while ((match = linkRegex.exec(trimmedLine)) !== null) {
          const url = match[1];
          // Extract product ID from URL
          const urlParts = url.split('/');
          const id = urlParts[urlParts.length - 1].split('?')[0];

          productLinks.push({ id, url });
        }
      } else if (currentSection === 'instructions' && /^\d+\.\s/.test(trimmedLine)) {
        // Regex for numbered list items (e.g., "1. ")
        instructions.push({
          '@type': 'HowToStep', // This will now correctly match the type
          text: trimmedLine.replace(/^\d+\.\s/, '').trim()
        });
      }
    }
    // --- End Parsing Logic ---

    // --- Find Related Recipes ---
    const allRecipeModules = import.meta.glob<RecipeMetadata>('/src/content/recipes/*.md', {
      import: 'metadata',
      eager: true
    });

    const allRecipes = Object.entries(allRecipeModules)
      .filter(([, module]) => module)
      .map(([path, module]) => {
        const filename = path.split('/').pop()?.replace('.md', '') || '';
        return {
          ...module,
          slug: module.slug || filename
        };
      })
      .filter(recipe => dev ? true : !recipe.draft)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const currentTags = post.metadata.tags || [];
    const relatedRecipes = allRecipes
      .filter(recipe => {
        // Exclude the current recipe
        if (recipe.slug === slug) return false;
        // Include if any tags match
        return currentTags.some(tag => recipe.tags?.includes(tag));
      })
      .slice(0, 3); // Limit to 3 related recipes

    // IMPORTANT: Check if the server already provided relatedProducts data
    const relatedProducts = parentData.relatedProducts || post.metadata.relatedProducts || [];
    console.log('Page.ts relatedProducts:', JSON.stringify(relatedProducts));

    // Return only serializable data (exclude any functions like the component)
    return {
      metadata: post.metadata,
      ingredients,
      instructions,
      relatedRecipes,
      productLinks,
      rawContent, // Add the raw markdown content to the returned data
      relatedProducts // Use server data if available, fall back to local data
    };
  } catch (e) {
    // Improve error handling
    console.error(`Error loading recipe: ${e}`);
    if (e instanceof Error) {
      throw error(500, e.message);
    }
    throw error(500, 'An unknown error occurred while loading the recipe');
  }
};