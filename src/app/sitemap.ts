import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const publicPaths = ["", "/restaurant-management-system", "/features", "/features/pos", "/features/inventory", "/features/kitchen-display-system", "/features/table-management", "/features/qr-ordering", "/features/analytics"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path, index) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
