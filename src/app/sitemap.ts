import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog-content";
import { featureSlugs } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/restaurant-management-system`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${siteUrl}/features`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/how-it-works`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/cookies`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/refund-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...featureSlugs.map((slug) => ({
      url: `${siteUrl}/features/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
