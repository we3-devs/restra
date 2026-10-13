import { getAllPosts } from "@/lib/blog-content";
import { canonicalUrl } from "@/lib/metadata";
import { plansByDuration } from "@/lib/pricing";
import { featureSlugs, seoPages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";
import { getTranslation } from "@/lib/translations";

export const dynamic = "force-static";

const link = (title: string, path: string, description?: string) =>
  `- [${title}](${canonicalUrl(path)})${description ? `: ${description}` : ""}`;

/**
 * /llms.txt (https://llmstxt.org): a plain-markdown map of the site for AI
 * assistants, generated from the same content that renders the pages.
 */
export async function GET() {
  const posts = await getAllPosts();
  const overview = seoPages["restaurant-management-system"];

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${overview.intro} ${siteConfig.name} is built by ${siteConfig.developer} in ${siteConfig.location} and runs in a web browser, so restaurants can use existing laptops, tablets, and phones.`,
    "",
    "## Key pages",
    "",
    link("Home", "/", "Product overview"),
    link(overview.title, "/restaurant-management-system", overview.description),
    link("Features", "/features", "Every RESTRA module in one place"),
    link("How it works", "/how-it-works", "How one order flows from QR scan to kitchen, billing, inventory, and reports"),
    link("Pricing", "/pricing", "Monthly, 6-month, and yearly plans; every plan includes the full platform"),
    link("FAQ", "/faq", "Answers about setup, pricing, features, and support"),
    link("About", "/about", "The team behind RESTRA"),
    link("Contact", "/contact", "WhatsApp, email, and contact form"),
    "",
    "## Features",
    "",
    ...featureSlugs.map((slug) =>
      link(seoPages[slug].title, `/features/${slug}`, seoPages[slug].description),
    ),
    "",
    "## Pricing (NPR)",
    "",
    ...plansByDuration.map(
      (plan) => `- ${getTranslation("en", plan.nameKey)}: ${plan.price}`,
    ),
    "",
    "## Blog",
    "",
    ...posts.map((post) => link(post.title, `/blog/${post.slug}`, post.description)),
    "",
    "## Contact",
    "",
    `- Email: ${siteConfig.contactEmail}`,
    `- Phone / WhatsApp: ${siteConfig.contactPhone}`,
    `- Address: ${siteConfig.location}`,
    `- Website: ${siteConfig.url}`,
    "",
    "## Optional",
    "",
    link("Privacy Policy", "/privacy"),
    link("Terms of Service", "/terms"),
    link("Cookie Policy", "/cookies"),
    link("Refund Policy", "/refund-policy"),
    link("Sitemap", "/sitemap.xml"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
