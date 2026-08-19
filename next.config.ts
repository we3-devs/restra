import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Disable React StrictMode double-render in dev to match Vite behavior
  reactStrictMode: true,
  // Preserve original Vite alias
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
  // Also support the @ alias via tsconfig paths (for Next.js native resolver)
  experimental: {
    // Allow importing .ts/.tsx files with extensions (Vite convention)
  },
};

export default nextConfig;
