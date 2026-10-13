import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Uptime-check JSON endpoints, not pages.
      disallow: ["/api/", "/health"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
