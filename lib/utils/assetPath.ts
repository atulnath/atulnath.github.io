/**
 * Helper function to get the correct asset path based on the environment
 * For local development: returns /asset-path
 * For GitHub Pages: returns /portfolio/asset-path
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
