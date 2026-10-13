import Link from "next/link";
import { canonicalUrl } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/** schema.org BreadcrumbList for a trail that starts at the homepage. */
export function breadcrumbJsonLd(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/**
 * Visible breadcrumb trail plus its matching BreadcrumbList JSON-LD, so the
 * two never drift apart. `trail` excludes Home; the last item is the current page.
 */
export default function Breadcrumbs({
  trail,
  className,
}: {
  trail: Crumb[];
  className?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("mb-8 text-sm text-restra-text-muted", className)}
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-restra-yellow">
              Home
            </Link>
          </li>
          {trail.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {index === trail.length - 1 ? (
                <span aria-current="page" className="text-restra-text-secondary">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-restra-yellow"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
