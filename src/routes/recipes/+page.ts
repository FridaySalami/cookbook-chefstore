import { dev } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  // Import all markdown files in the recipes directory
  const recipeModules = import.meta.glob('/src/content/recipes/*.md', { eager: true });
  
  try {
    // Process the markdown files into recipe data
    const recipes = Object.entries(recipeModules)
      .map(([path, module]) => {
        // @ts-expect-error - Module structure varies
        const { metadata } = module;
        
        // Extract filename from path for fallback slug
        const filename = path.split('/').pop()?.replace('.md', '') || '';
        
        return {
          ...metadata,
          slug: metadata.slug || filename
        };
      })
      // Filter out drafts in production
      .filter(recipe => dev ? true : !recipe.draft)
      // Sort by date (newest first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // If no recipes are found but we're in development, return mock data
    if (recipes.length === 0 && dev) {
      return {
        recipes: getMockRecipes()
      };
    }
    
    return { recipes };
  } catch (error) {
    console.error("Error loading recipes:", error);
    
    // Return mock data as fallback in development
    if (dev) {
      return {
        recipes: getMockRecipes()
      };
    }
    
    return { recipes: [] };
  }
};

// Mock data function for development
function getMockRecipes() {
  return [
    {
      title: "Classic Chocolate Cake",
      slug: "chocolate-cake",
      description: "Rich and moist chocolate cake perfect for any occasion",
      date: "2025-03-15",
      featured: true,
      image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493",
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
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
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
      image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c",
      prepTime: 30,
      cookTime: 60,
      totalTime: 90,
      difficulty: "Medium"
    },
    {
      title: "Fluffy Buttermilk Pancakes",
      slug: "fluffy-buttermilk-pancakes",
      description: "Light and fluffy pancakes with a golden crust",
      date: "2025-04-24",
      featured: true,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
      prepTime: 10,
      cookTime: 15,
      totalTime: 25,
      difficulty: "Easy"
    }
  ];
}