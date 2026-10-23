import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Disable React Strict Mode
  // reactStrictMode: false,

  // Disable image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
