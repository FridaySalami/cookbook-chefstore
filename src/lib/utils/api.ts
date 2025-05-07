import { dev } from '$app/environment';

/**
 * Get the correct API URL based on environment
 * In development: /api/path
 * In production: Maps to the proper Netlify function paths
 */
export function getApiUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/api/') ? path.substring(4) : path;

  // In development, use the regular path
  if (dev) {
    return `/api/${cleanPath}`;
  }

  // In production with Netlify adapter, the API routes become serverless functions
  // that follow this pattern for dynamic routes
  const paramIndex = cleanPath.indexOf('?');

  if (paramIndex !== -1) {
    // For paths with query parameters (e.g., products?handle=xyz)
    const basePath = cleanPath.substring(0, paramIndex);
    const params = cleanPath.substring(paramIndex);
    return `/.netlify/functions/${basePath}${params}`;
  } else {
    // For paths without query parameters
    return `/.netlify/functions/${cleanPath}`;
  }
}