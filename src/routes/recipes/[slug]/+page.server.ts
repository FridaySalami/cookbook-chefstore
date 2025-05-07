import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface ProductLink {
  id: string;
  url: string;
  productName?: string;
}

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  try {
    // Import the requested recipe
    const recipeModule = await import(`../../../content/recipes/${slug}.md`);

    // Extract metadata
    const { metadata } = recipeModule;

    // Get the raw markdown content for parsing product links
    const rawContent = await import(`../../../content/recipes/${slug}.md?raw`);
    const content = rawContent.default;

    // Extract product links from markdown content
    const productLinks = extractProductLinks(content);

    // Get relatedProducts from frontmatter (if exists)
    const relatedProducts = metadata.relatedProducts || [];

    // Find related recipes (based on categories or tags)
    const relatedRecipes = await findRelatedRecipes(metadata, slug);

    // Parse recipe ingredients and instructions for structured data
    const ingredients = parseIngredients(content);
    const instructions = parseInstructions(content);

    return {
      metadata,
      productLinks,
      relatedProducts,
      relatedRecipes,
      ingredients,
      instructions
    };
  } catch (err) {
    console.error(`Error loading recipe ${slug}:`, err);
    throw error(404, `Recipe "${slug}" not found`);
  }
};

/**
 * Extract product links from markdown content
 * Format is [Product Name](https://www.example.com/products/product-id)
 */
function extractProductLinks(content: string): ProductLink[] {
  const productLinks: ProductLink[] = [];

  // Regular expression to match markdown links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const [, text, url] = match;

    // Check if the URL is from thechefstoreuk.com/products/
    if (url.includes('thechefstoreuk.com/products/')) {
      // Extract product ID from URL
      const urlParts = url.split('/');
      const productId = urlParts[urlParts.length - 1];

      productLinks.push({
        id: productId,
        url,
        productName: text
      });
    }
  }

  return productLinks;
}

/**
 * Find related recipes based on shared tags or categories
 */
async function findRelatedRecipes(metadata: any, currentSlug: string, limit = 4) {
  const allRecipes = import.meta.glob('../../../content/recipes/*.md', { eager: true });

  const recipes = Object.entries(allRecipes)
    .filter(([path, _]) => !path.includes(currentSlug)) // Exclude current recipe
    .map(([path, module]: [string, any]) => {
      const slug = path.split('/').pop()?.replace('.md', '');
      return { slug, ...module.metadata };
    })
    .filter((recipe) => recipe.metadata); // Ensure metadata exists

  // Sort by common tags/categories for better relevance
  const relatedRecipes = recipes
    .map((recipe) => {
      const commonTagsCount = countCommonItems(metadata.tags || [], recipe.tags || []);
      const commonCategoriesCount = countCommonItems(metadata.categories || [], recipe.categories || []);
      return { ...recipe, relevance: commonTagsCount + commonCategoriesCount };
    })
    .filter((recipe) => recipe.relevance > 0) // Only include recipes with some relevance
    .sort((a, b) => b.relevance - a.relevance) // Sort by relevance (descending)
    .slice(0, limit); // Limit to requested number

  // If we don't have enough related recipes, add some recent ones
  if (relatedRecipes.length < limit) {
    const recentRecipes = recipes
      .filter((recipe) => !relatedRecipes.some((r) => r.slug === recipe.slug))
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA; // Most recent first
      })
      .slice(0, limit - relatedRecipes.length);

    relatedRecipes.push(...recentRecipes);
  }

  return relatedRecipes;
}

/**
 * Count common items between two arrays
 */
function countCommonItems<T>(array1: T[], array2: T[]): number {
  return array1.filter((item) => array2.includes(item)).length;
}

/**
 * Parse ingredients from markdown content
 */
function parseIngredients(content: string): string[] {
  // Find content between "## Ingredients" and the next heading
  const ingredientsRegex = /## Ingredients\s+([\s\S]*?)(?=##|$)/;
  const match = content.match(ingredientsRegex);

  if (!match || !match[1]) return [];

  // Split by bullet points and clean up
  return match[1]
    .split(/\n-\s*/)
    .map(line => line.trim())
    .filter(Boolean)
    .filter(line => !line.startsWith('**') && !line.startsWith('Optional')); // Filter out section headings
}

/**
 * Parse instructions from markdown content
 */
function parseInstructions(content: string): { '@type': 'HowToStep', text: string }[] {
  // Find content between "## Instructions" and the next heading
  const instructionsRegex = /## Instructions\s+([\s\S]*?)(?=##|$)/;
  const match = content.match(instructionsRegex);

  if (!match || !match[1]) return [];

  // Split by numbered list items and clean up
  const steps = match[1]
    .split(/\n\d+\.\s*/)
    .map(line => line.trim())
    .filter(Boolean);

  // Format as HowToStep objects
  return steps.map(step => ({
    '@type': 'HowToStep',
    text: step
  }));
}