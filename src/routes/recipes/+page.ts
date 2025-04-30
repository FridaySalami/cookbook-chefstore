import { dev } from '$app/environment';
import type { PageLoad } from './$types';

// Define metadata type (ensure it matches the actual metadata structure)
interface RecipeMetadata {
  title: string;
  slug: string;
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
}

// Define the expected return type for the load function
export interface LoadReturn {
  recipes: RecipeMetadata[];
  allTags: string[];
  currentPage: number;
  totalPages: number;
  totalRecipes: number;
  selectedTag: string | null;
}

const PAGE_SIZE = 12; // Number of recipes per page

export const load: PageLoad<LoadReturn> = async ({ url }) => {
  try {
    // --- Fetch All Recipe Metadata ---
    const recipeModules = import.meta.glob<RecipeMetadata>('/src/content/recipes/*.md', {
      import: 'metadata',
      eager: true
    });

    const allRecipes = Object.entries(recipeModules)
      .filter(([, module]) => module)
      .map(([path, module]) => {
        const filename = path.split('/').pop()?.replace('.md', '') || '';
        return {
          ...module,
          slug: module.slug || filename // Ensure slug exists
        };
      })
      .filter((recipe): recipe is RecipeMetadata & { slug: string } => !!recipe.slug) // Type guard for slug
      .filter((recipe) => (dev ? true : !recipe.draft)) // Filter drafts in production
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date

    // --- Extract All Unique Tags (Normalized to Lowercase) ---
    const allTags = [
      ...new Set(
        allRecipes.flatMap((recipe) => recipe.tags?.map((t) => t.toLowerCase()) || [])
      )
    ].sort(); // Get unique lowercase tags and sort

    // --- Filtering (Using Lowercase) ---
    const selectedTagParam = url.searchParams.get('tag'); // Get raw param
    const selectedTag = selectedTagParam ? selectedTagParam.toLowerCase() : null; // Normalize selected tag

    console.log('Server: selectedTag:', selectedTag);
    console.log('Server: allTags:', allTags); // Verify these are lowercase

    const filteredRecipes = selectedTag
      ? allRecipes.filter((recipe) => {
          const lowerCaseRecipeTags = recipe.tags?.map((t) => t.toLowerCase()) || [];
          const isIncluded = lowerCaseRecipeTags.includes(selectedTag);
          // Optional: Log individual recipe checks
          // console.log(`Server: Recipe ${recipe.slug}, Tags: ${lowerCaseRecipeTags.join(', ')}, Includes ${selectedTag}? ${isIncluded}`);
          return isIncluded;
        })
      : allRecipes;

    console.log('Server: Number of recipes BEFORE pagination:', filteredRecipes.length); // Check count after filtering

    // --- Pagination ---
    const pageParam = url.searchParams.get('page');
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
    const totalRecipes = filteredRecipes.length;
    const totalPages = Math.ceil(totalRecipes / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);

    // Validate currentPage
    if (currentPage > totalPages && totalPages > 0) {
      // Redirect to last page if requested page is out of bounds
      // Or handle as an error, depending on desired UX
      // For now, let's return an empty array for the recipes on this invalid page
      // A better approach might be a redirect in a hook or returning an error
      return {
        recipes: [], // Return empty if page is invalid
        allTags,
        currentPage,
        totalPages,
        totalRecipes,
        selectedTag
      };
    }

    return {
      recipes: paginatedRecipes,
      allTags, // Return the unique lowercase tags
      currentPage,
      totalPages,
      totalRecipes,
      selectedTag // Return the normalized (lowercase) selected tag
    };
  } catch (error) {
    console.error('Error loading recipes:', error);
    // Return empty state on error
    return {
      recipes: [],
      allTags: [],
      currentPage: 1,
      totalPages: 0,
      totalRecipes: 0,
      selectedTag: null
    };
  }
};