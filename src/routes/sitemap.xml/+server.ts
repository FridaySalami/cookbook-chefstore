import type { RequestHandler } from './$types';
import { dev } from '$app/environment'; 

interface RecipeMetadata {
  slug: string;
  date: string; 
  draft?: boolean;
}

const site = 'chefstorecookbook.netlify.app';

export const GET: RequestHandler = async () => {
  const recipeModules = import.meta.glob<RecipeMetadata>('/src/content/recipes/*.md', {
    import: 'metadata',
    eager: true
  });

  const recipes = Object.entries(recipeModules)
    .filter(([, module]) => module) 
    .map(([path, module]) => {
      const filename = path.split('/').pop()?.replace('.md', '') || '';
      return {
        ...module,
        slug: module.slug || filename, 
        date: module.date 
      };
    })
    .filter((recipe): recipe is RecipeMetadata & { slug: string; date: string } => !!recipe.slug && !!recipe.date) // Type guard and ensure slug/date exist
    .filter(recipe => dev ? true : !recipe.draft); 

  const body = render(recipes);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600', 
    'Content-Type': 'application/xml',
  };
  return new Response(body, { headers });
};

const render = (recipes: RecipeMetadata[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/recipes</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${recipes
    .map(
      (recipe: RecipeMetadata) => `
  <url>
    <loc>${site}/recipes/${recipe.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date(recipe.date).toISOString().split('T')[0]}</lastmod>
    <priority>0.5</priority>
  </url>
  `
    )
    .join('')}
</urlset>`;
