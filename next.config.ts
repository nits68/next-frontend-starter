import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Disable React Strict Mode
  // reactStrictMode: false,

  // Disable image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
