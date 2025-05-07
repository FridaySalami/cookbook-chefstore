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

export const load: PageLoad = async () => {
  try {
    // Import the metadata files directly instead of trying to extract from md files
    const recipeMetadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipes/*.metadata.js', {
      eager: true
    });

    // Process the metadata into recipe data
    const recipes = Object.entries(recipeMetadataImports)
      .filter(([, module]) => module?.metadata)
      .map(([path, module]) => {
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.metadata.js', '') || '';

        const metadata = module.metadata;
        return {
          ...metadata,
          slug: metadata.slug || filename
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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