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
    // Instead of directly accessing files, use Vite's import.meta.glob
    const recipeModules = import.meta.glob('/src/content/recipes/*.md', { eager: true });
    
    // Process the markdown files into recipe data
    const recipes = Object.entries(recipeModules)
      .map(([path, module]) => {
        // @ts-expect-error - Module structure varies based on markdown parser
        const { metadata } = module;
        
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.md', '') || '';
        
        return {
          ...metadata,
          slug: metadata.slug || filename
        } as RecipeMetadata;
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // For now, return mock data if no recipes are found
    if (recipes.length === 0) {
      return {
        recipes: getMockRecipes(),
        featuredRecipes: getMockRecipes()
      };
    }
    
    const featuredRecipes = recipes
      .filter(recipe => recipe.featured)
      .slice(0, 3);
    
    return {
      recipes,
      featuredRecipes
    };
  } catch (error) {
    console.error("Error loading recipes:", error);
    
    // Return mock data as fallback
    return {
      recipes: getMockRecipes(),
      featuredRecipes: getMockRecipes()
    };
  }
};

// Mock data function for development
function getMockRecipes(): RecipeMetadata[] {
  return [
    {
      title: "Classic Chocolate Cake",
      slug: "chocolate-cake",
      description: "Rich and moist chocolate cake perfect for any occasion",
      date: "2025-03-15",
      featured: true,
      image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      prepTime: 20,
      cookTime: 35,
      totalTime: 55,
      difficulty: "Medium"
    },
    {
      title: "Garlic Butter Shrimp Pasta",
      slug: "shrimp-pasta",
      description: "Creamy pasta with garlic butter shrimp",
      date: "2025-03-10",
      featured: true,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      prepTime: 10,
      cookTime: 15,
      totalTime: 25,
      difficulty: "Easy"
    },
    {
      title: "Classic French Ratatouille",
      slug: "ratatouille",
      description: "Traditional vegetable stew from Provence",
      date: "2025-03-05",
      featured: true,
      image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      prepTime: 30,
      cookTime: 60,
      totalTime: 90,
      difficulty: "Medium"
    }
  ];
}