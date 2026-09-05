import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Disable React StrictMode double-render in dev to match Vite behavior
  reactStrictMode: true,
  // Allow hero images/videos referenced from Supabase Storage public URLs
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**.supabase.co" }],
  },
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
