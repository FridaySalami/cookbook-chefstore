import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getProducts, getProduct } from '$lib/auth/shopify/shopify';
import { dev } from '$app/environment';

/**
 * GET handler for fetching products
 * - If handle parameter is provided, fetches a single product
 * - Otherwise fetches all products
 */
export const GET: RequestHandler = async ({ url }) => {
  try {
    // Check if a specific product handle is requested
    const handle = url.searchParams.get('handle');
    console.log(`API request received. Handle parameter: "${handle}"`);

    if (handle) {
      try {
        console.log(`Attempting to fetch product with handle: ${handle}`);
        const product = await getProduct(handle);
        console.log(`Successfully retrieved product:`, product.title);
        return json(product);
      } catch (error) {
        console.error(`Failed to fetch product with handle: ${handle}`, error);
        return json({
          error: error instanceof Error ? error.message : 'Unknown error fetching product'
        }, { status: 404 });
      }
    } else {
      const products = await getProducts();
      console.log(`Fetched ${products.length} products`);
      return json(products, {
        headers: {
          // Cache for 5 minutes in production, no cache in dev
          'cache-control': dev
            ? 'no-store, max-age=0'
            : 'public, max-age=300'
        }
      });
    }
  } catch (error) {
    console.error('Error in products API:', error);
    return json({
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, {
      status: 500
    });
  }
};