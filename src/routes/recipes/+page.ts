import { dev } from '$app/environment';
import type { PageLoad } from './$types';

// Assuming RecipeMetadata is defined elsewhere or copy it here if needed
interface RecipeMetadata {
  title: string;
  slug: string;
  description?: string;
  date: string;
  // ... other metadata fields
  draft?: boolean;
  featured?: boolean; // Add missing featured property
  image: string; // Keep image for card display
  difficulty?: string; // Keep difficulty for card display
  // Add other properties used in mock data if necessary
  prepTime?: number;
  cookTime?: number;
  totalTime?: number;
  servings?: number; // Add missing servings property
  tags?: string[]; // Add tags property
}

export const load: PageLoad = async () => {
  // Import only metadata eagerly - Corrected type annotation
  const recipeModules = import.meta.glob<RecipeMetadata>('/src/content/recipes/*.md', {
    import: 'metadata',
    eager: true
  });

  try {
    // Process the metadata into recipe data
    const recipes = Object.entries(recipeModules)
      // Filter out modules that didn't load metadata correctly (e.g., empty files)
      .filter(([, module]) => module) // Simplified filter: just check if module exists
      .map(([path, module]) => {
        // module here IS RecipeMetadata because of `import: 'metadata'`
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.md', '') || '';

        // module IS the metadata object directly
        return {
          ...module, // Spread the metadata object directly
          slug: module.slug || filename,
          tags: module.tags || [] // Ensure tags is always an array
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Extract all unique tags
    const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))].sort();

    return { recipes, allTags }; // Return recipes and unique tags
  } catch (error) {
    console.error("Error loading recipes:", error);

    return { recipes: [], allTags: [] }; // Return empty arrays on error
  }
}