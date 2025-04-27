import { error, type HttpError } from '@sveltejs/kit'; // Import HttpError
import type { PageLoad, EntryGenerator } from './$types'; // Import EntryGenerator

// Define the type for our markdown module
interface RecipeModule {
  metadata: {
    title: string;
    slug?: string;
    description?: string;
    date: string;
    updated?: string;
    featured?: boolean;
    image: string;
    prepTime?: number;
    cookTime?: number;
    totalTime?: number;
    servings?: number;
    categories?: string[];
    tags?: string[];
    difficulty?: string;
    draft?: boolean;
  };
  default: any; // This will be the rendered component
}

// Define the type for the dynamic import map
type RecipeModuleImporter = () => Promise<RecipeModule>;
type RecipeModuleMap = Record<string, RecipeModuleImporter>;

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

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  try {
    // Dynamic import of all markdown files (returns functions to load modules)
    const modules: RecipeModuleMap = import.meta.glob<RecipeModule>('/src/content/recipes/*.md');

    // Construct the expected path and get the importer function directly
    const modulePath = `/src/content/recipes/${slug}.md`;
    const moduleImporter = modules[modulePath];

    if (!moduleImporter) {
      throw error(404, `Recipe "${slug}" not found`);
    }

    // Load the matching module by calling the importer function
    const post = await moduleImporter();

    // Return both the component and metadata
    return {
      component: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    // Catch potential errors during import or if the file doesn't exist
    console.error('Error loading recipe:', e);
    // Use the slug in the error message if it's not the generic 404
    if (e && typeof e === 'object' && 'status' in e && e.status === 404) {
      // Cast to HttpError to safely access body.message
      const httpError = e as HttpError;
      throw error(404, httpError.body?.message || `Recipe "${slug}" not found`);
    }
    // Rethrow other errors or provide a generic message
    throw error(500, 'Could not load recipe');
  }
};