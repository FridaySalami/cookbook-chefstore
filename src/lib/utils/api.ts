import { dev } from '$app/environment';

/**
 * Get the correct API URL based on environment
 * In development: /api/path
 * In production: /.netlify/functions/server/api/path
 */
export function getApiUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/api/') ? path.substring(4) : path;

  // In development, use the regular path
  if (dev) {
    return `/api/${cleanPath}`;
  }

  // In production, use the Netlify Function path with the server prefix
  return `/.netlify/functions/server/api/${cleanPath}`;
}