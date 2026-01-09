/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Use basePath only for builds (GitHub Pages), not for dev server
  // This allows localhost:3000/ to work while keeping deployment functional
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
