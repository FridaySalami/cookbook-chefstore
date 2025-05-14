import { dev } from '$app/environment';
import type { PageLoad } from './$types';

interface RecipeMetadata {
  title: string;
  slug: string;
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
}

export const prerender = true; // Pre-render the homepage

export const load: PageLoad = async () => {
  try {
    // Import the metadata files directly instead of trying to extract from md files
    const recipeMetadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
      eager: true
    });

    // Process the metadata into recipe data
    const recipes = Object.entries(recipeMetadataImports)
      .filter(([, module]) => module?.metadata) // Ensure module and metadata exist
      .map(([path, module]) => {
        const filename = path.split('/').pop()?.replace('.metadata.js', '') || '';
        const metadata = module.metadata;
        return {
          ...metadata,
          slug: metadata.slug || filename,
          // Ensure date is a valid string, provide a fallback for robust parsing
          date: typeof metadata.date === 'string' ? metadata.date : '1970-01-01T00:00:00.000Z',
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        // Handle NaN cases to prevent sorting errors and keep a stable sort for invalid dates
        if (isNaN(dateA) && isNaN(dateB)) return 0;
        if (isNaN(dateA)) return 1; // Treat NaN dates as older
        if (isNaN(dateB)) return -1; // Treat NaN dates as older
        return dateB - dateA;
      });

    const featuredRecipes = recipes
      .filter(recipe => recipe.featured)
      .slice(0, 3);

    return {
      recipes,
      featuredRecipes
    };
  } catch (error) {
    // Check if the error is an instance of Error before logging
    if (error instanceof Error) {
      console.error("Error loading recipes:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }

    return {
      recipes: [],
      featuredRecipes: []
    };
  }
}