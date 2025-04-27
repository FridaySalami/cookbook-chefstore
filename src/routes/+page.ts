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
    // Load only metadata eagerly - Corrected type annotation
    const recipeModules = import.meta.glob<RecipeMetadata>('/src/content/recipes/*.md', {
      import: 'metadata',
      eager: true
    });

    // Process the metadata into recipe data
    const recipes = Object.entries(recipeModules)
      // Simplified filter: just check if module exists
      .filter(([, module]) => module)
      .map(([path, module]) => { // module here IS RecipeMetadata because of `import: 'metadata'`
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.md', '') || '';

        // module IS the metadata object directly
        return {
          ...module, // Spread the metadata object directly
          slug: module.slug || filename // Use slug from the metadata object
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft) // Access draft directly
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Access date directly

    const featuredRecipes = recipes
      .filter(recipe => recipe.featured) // Access featured directly
      .slice(0, 3);

    return {
      recipes,
      featuredRecipes
    };
  } catch (error) {
    console.error("Error loading recipes:", error);

    return {
      recipes: [],
      featuredRecipes: []
    };
  }
}