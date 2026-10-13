import type { Metadata } from "next";
// Depends on site-config only: Breadcrumbs (used in client views) imports this
// module, and pulling in seo-content would ship all page copy to the browser.
import { siteConfig } from "./site-config";

type PageMetadataInput = {
  /** Page title; the root layout appends " | RESTRA" unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Route path, e.g. "/pricing". Used for the canonical and og:url. */
  path: string;
  /** Use `title` as-is, without the site-name template (homepage). */
  absoluteTitle?: boolean;
  /** Share-card title/description when they should differ from the meta tags. */
  socialTitle?: string;
  socialDescription?: string;
  type?: "website" | "article";
  /**
   * Share image for pages that have their own artwork (blog posts). Leave
   * unset to use the route's generated `opengraph-image` file.
   */
  image?: { url: string; alt: string };
  publishedTime?: string;
  modifiedTime?: string;
};

/** Canonical URL for a route path; the homepage has no trailing slash. */
export function canonicalUrl(path: string): string {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

/**
 * Builds a page's complete metadata: unique title and description, a
 * canonical on the production domain, and matching Open Graph / X cards.
 * Child `openGraph`/`twitter` objects replace the layout's instead of merging,
 * so every page sets the full set here.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  socialTitle,
  socialDescription,
  type = "website",
  image,
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = canonicalUrl(path);
  const shareTitle =
    socialTitle ?? (absoluteTitle ? title : `${title} | ${siteConfig.name}`);
  const shareDescription = socialDescription ?? description;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      title: shareTitle,
      description: shareDescription,
      // Without an explicit image, the route's `opengraph-image` file is used.
      // (Setting one here would override that file.)
      ...(image ? { images: [{ url: image.url, alt: image.alt }] } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      ...(image ? { images: [{ url: image.url, alt: image.alt }] } : {}),
    },
  };
}
