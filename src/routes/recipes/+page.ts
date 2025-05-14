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
    const recipeMetadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
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

    // Get all unique categories and tags
    const categories = [...new Set(recipes.flatMap(recipe => recipe.categories || []))].sort();
    const tags = [...new Set(recipes.flatMap(recipe => recipe.tags || []))].sort();

    return {
      recipes,
      categories,
      tags
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error loading recipes:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }

    return {
      recipes: [],
      categories: [],
      tags: []
    };
  }
}