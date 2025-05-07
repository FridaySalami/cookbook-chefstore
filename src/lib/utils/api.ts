import { dev } from '$app/environment';

/**
 * Get the correct API URL.
 * In both development and production, we use the standard SvelteKit path.
 * Netlify redirects, managed by @sveltejs/adapter-netlify, will route
 * requests to the appropriate functions in production.
 */
export function getApiUrl(path: string): string {
  // Ensure the path starts with /api/
  // Example input: "products?handle=xyz" or "products"
  // Example output: "/api/products?handle=xyz" or "/api/products"
  if (path.startsWith('/api/')) {
    return path;
  }
  if (path.startsWith('api/')) {
    return `/${path}`;
  }
  return `/api/${path}`;
}