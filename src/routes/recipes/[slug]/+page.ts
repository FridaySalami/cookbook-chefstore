import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { dev } from '$app/environment';

// Define the type for our markdown module metadata
interface RecipeMetadata {
  title: string;
  slug?: string;
  description?: string;
  date: string;
  updated?: string;
  featured?: boolean;
  image: string;
  prepTime?: number | string;
  cookTime?: number | string;
  totalTime?: number | string;
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
  default: any; // This will be the rendered component
}

// Define and EXPORT the expected return type for the load function
export interface LoadReturn {
  metadata: RecipeMetadata;
  ingredients: string[];
  instructions: { '@type': 'HowToStep'; text: string; name?: string }[];
  relatedRecipes: RecipeMetadata[];
  productLinks: Array<{ id: string, url: string }>;
  rawContent: string;
  relatedProducts: Array<{ handle: string, featured?: boolean }>;
}

// Fix the entries function to ensure all returned slugs are defined strings
export const entries: EntryGenerator = async () => {
  // Use import.meta.glob to find all metadata.js files
  const modules = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
    eager: true
  });

  const slugs = Object.entries(modules)
    .filter(([, module]) => module?.metadata)
    .map(([path]) => {
      // Extract the filename (slug) from the path
      const slug = path.split('/').pop()?.replace('.metadata.js', '');
      return slug;
    })
    .filter((slug): slug is string => slug !== undefined) // Type guard to ensure slug is string
    .map(slug => ({ slug })); // Create the object with the slug property

  return slugs;
};

export const prerender = true;

// Explicitly type the load function with LoadReturn
export const load: PageLoad<LoadReturn> = async ({ params, parent }) => {
  // Get any data that was returned from the server load function
  const parentData = await parent() as { relatedProducts?: Array<{ handle: string, featured?: boolean }> };

  const { slug } = params;

  try {
    // Load the metadata from the .metadata.js file
    const metadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
      eager: true
    });

    // Find the metadata for this slug
    const metadataPath = `/src/content/recipe-metadata/${slug}.metadata.js`;
    const metadataModule = metadataImports[metadataPath];

    if (!metadataModule || !metadataModule.metadata) {
      throw error(404, `Recipe "${slug}" not found`);
    }

    // Load the markdown module for content
    const moduleImporter = await import(`../../../content/recipes/${slug}.md`);

    // Get raw content
    const rawContent = await import(`../../../content/recipes/${slug}.md?raw`).then(m => m.default);

    if (!rawContent) {
      throw error(404, `Recipe content not found`);
    }

    // --- Simple Parsing Logic ---
    const ingredients: string[] = [];
    const instructions: LoadReturn['instructions'] = [];
    let currentSection: 'ingredients' | 'instructions' | null = null;

    // Extract product links from ingredients
    const productLinks: Array<{ id: string, url: string }> = [];
    const linkRegex = /\[.*?\]\((.*?)\)/g;

    const lines = rawContent.split('\n');

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('## Ingredients')) {
        currentSection = 'ingredients';
        continue;
      }
      if (trimmedLine.startsWith('## Instructions')) {
        currentSection = 'instructions';
        continue;
      }
      if (trimmedLine.startsWith('## ')) {
        currentSection = null;
        continue;
      }

      if (currentSection === 'ingredients' && trimmedLine.startsWith('- ')) {
        const ingredientText = trimmedLine.substring(2).trim().replace(/\[(.*?)\]\(.*?\)/g, '$1');
        ingredients.push(ingredientText);

        let match;
        while ((match = linkRegex.exec(trimmedLine)) !== null) {
          const url = match[1];
          const urlParts = url.split('/');
          const id = urlParts[urlParts.length - 1].split('?')[0];
          productLinks.push({ id, url });
        }
      } else if (currentSection === 'instructions' && /^\*\*.*\*\*/.test(trimmedLine)) {
        // Handle steps that start with bold (for unnumbered or bolded steps)
        const boldMatch = trimmedLine.match(/\*\*(.*?)\*\*/);
        const name = boldMatch ? boldMatch[1] : `Step ${instructions.length + 1}`;
        instructions.push({
          '@type': 'HowToStep',
          name,
          text: trimmedLine
        });
      } else if (currentSection === 'instructions' && /^\d+\.\s/.test(trimmedLine)) {
        // Numbered steps (with or without bold)
        const stepText = trimmedLine.replace(/^\d+\.\s/, '').trim();
        const boldMatch = stepText.match(/\*\*(.*?)\*\*/);
        const name = boldMatch ? boldMatch[1] : `Step ${instructions.length + 1}`;
        instructions.push({
          '@type': 'HowToStep',
          name,
          text: stepText
        });
      }
    }

    // --- Find Related Recipes ---
    const allMetadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
      eager: true
    });

    const allRecipes = Object.entries(allMetadataImports)
      .filter(([, module]) => module?.metadata)
      .map(([path, module]) => {
        const filename = path.split('/').pop()?.replace('.metadata.js', '') || '';
        return {
          ...module.metadata,
          slug: module.metadata.slug || filename
        };
      })
      .filter(recipe => dev ? true : !recipe.draft)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const currentTags = metadataModule.metadata.tags || [];
    const relatedRecipes = allRecipes
      .filter(recipe => {
        if (recipe.slug === slug) return false;
        return currentTags.some(tag => recipe.tags?.includes(tag));
      })
      .slice(0, 3);

    const relatedProducts = parentData.relatedProducts || metadataModule.metadata.relatedProducts || [];
    console.log('Page.ts relatedProducts:', JSON.stringify(relatedProducts));

    return {
      metadata: metadataModule.metadata,
      ingredients,
      instructions,
      relatedRecipes,
      productLinks,
      rawContent,
      relatedProducts
    };
  } catch (e) {
    console.error(`Error loading recipe: ${e}`);
    if (e instanceof Error) {
      throw error(500, e.message);
    }
    throw error(500, 'An unknown error occurred while loading the recipe');
  }
};