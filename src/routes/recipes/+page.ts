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
      .map(([path, module]) => { // module here IS RecipeMetadata because of `import: 'metadata'`
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.md', '') || '';

        // module IS the metadata object directly
        return {
          ...module, // Spread the metadata object directly
          slug: module.slug || filename
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { recipes };
  } catch (error) {
    console.error("Error loading recipes:", error);

    return { recipes: [] };
  }
}