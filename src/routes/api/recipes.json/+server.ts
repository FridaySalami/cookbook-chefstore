import type { RequestHandler } from '@sveltejs/kit';

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

export const GET: RequestHandler = async () => {
  const recipeMetadataImports = import.meta.glob<{ metadata: RecipeMetadata }>('/src/content/recipe-metadata/*.metadata.js', {
    eager: true
  });

  const recipes = Object.entries(recipeMetadataImports)
    .filter(([, module]) => module?.metadata && !module.metadata.draft)
    .map(([path, module]) => {
      const filename = path.split('/').pop()?.replace('.metadata.js', '') || '';
      const metadata = module.metadata;
      return {
        title: metadata.title,
        slug: metadata.slug || filename,
        tags: metadata.tags || [],
      };
    });

  return new Response(JSON.stringify(recipes), {
    headers: { 'Content-Type': 'application/json' }
  });
};
