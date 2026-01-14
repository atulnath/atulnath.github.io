/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Use basePath only for builds (GitHub Pages), not for dev server
  // This allows localhost:3000/ to work while keeping deployment functional
  basePath: "",
  assetPrefix: "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
