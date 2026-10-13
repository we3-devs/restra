import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Never publish browser source maps: they would expose the original source
  // in production. (This is the Next.js default; kept explicit on purpose.)
  productionBrowserSourceMaps: false,
  // Don't advertise the framework in an `X-Powered-By` response header.
  poweredByHeader: false,
  // Keep one URL form for every route. Requests with a trailing slash are
  // normalized by Next.js to the slashless URL used in the sitemap/canonicals.
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
  // Allow hero images/videos referenced from Supabase Storage public URLs
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "**.supabase.co" }],
  },
  // "@/..." import alias (mirrors the tsconfig `paths` entry)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
};

export default nextConfig;
