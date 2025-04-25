import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  
  try {
    // Dynamic import of all markdown files
    const modules = import.meta.glob<RecipeModule>('/src/content/recipes/*.md');
    
    // Find the module that matches our slug
    const matchingPath = Object.keys(modules).find(path => {
      return path.includes(`/${slug}.md`);
    });
    
    if (!matchingPath) {
      throw error(404, `Recipe "${slug}" not found`);
    }
    
    // Load the matching module
    const post = await modules[matchingPath]();
    
    // Return both the component and metadata
    return {
      component: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    console.error('Error loading recipe:', e);
    throw error(404, 'Recipe not found');
  }
};