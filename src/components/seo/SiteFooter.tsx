import Link from "next/link";
import { ArrowRight, Github, Instagram, Mail } from "lucide-react";
import { featurePath, featureSlugs, seoPages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";
import { formatPostDate, getAllPosts } from "@/lib/blog-content";

const socialLinks = [
  { label: "Instagram", href: siteConfig.socialProfiles[0], icon: Instagram },
  { label: "GitHub", href: siteConfig.socialProfiles[1], icon: Github },
  { label: "Email", href: `mailto:${siteConfig.contactEmail}`, icon: Mail },
];

/**
 * Rich footer shared by all content pages. Lists the whole feature cluster and
 * the latest blog posts, so every page internally links the rest of the site.
 */
export default async function SiteFooter() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <footer className="restra-footer relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_0%,rgba(255,255,255,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-restra-text"
            >
              <img src="/logo.svg" alt="RESTRA logo" className="h-8 w-auto" />
              <span>RESTRA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-restra-footer-muted">
              Restaurant management software for restaurants, cafés, and cloud kitchens in
              Nepal — POS, billing, QR ordering, inventory, kitchen workflows, and reports
              in one connected system.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 px-4 py-2 text-sm font-bold text-[#8a6a08] shadow-sm transition-colors hover:bg-white"
              >
                Get Started <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/restaurant-management-system"
                className="inline-flex items-center rounded-lg border border-white/45 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                What is RESTRA?
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Feature links */}
          <nav aria-label="Features">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-restra-footer-heading">
              Features
            </h4>
            <ul className="mt-4 space-y-2.5">
              {featureSlugs.slice(0, 5).map((slug) => (
                <li key={slug}>
                  <Link
                    href={featurePath(slug)}
                    className="text-sm text-restra-footer-muted transition-colors hover:text-white"
                  >
                    {seoPages[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More features">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-restra-footer-heading">
              More features
            </h4>
            <ul className="mt-4 space-y-2.5">
              {featureSlugs.slice(5).map((slug) => (
                <li key={slug}>
                  <Link
                    href={featurePath(slug)}
                    className="text-sm text-restra-footer-muted transition-colors hover:text-white"
                  >
                    {seoPages[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Latest posts */}
          <nav aria-label="Latest blog posts">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-restra-footer-heading">
              Latest articles
            </h4>
            <ul className="mt-4 space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <span className="block text-sm font-medium leading-snug text-restra-footer-muted transition-colors group-hover:text-white">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-xs text-restra-footer-muted">
                      {formatPostDate(post.publishedAt)} · {post.readMinutes} min read
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:underline"
                >
                  View all articles <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-8 sm:flex-row">
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-3">
            <Link href="/privacy" className="text-xs text-restra-footer-muted transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-restra-footer-muted transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-restra-footer-muted transition-colors hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/refund-policy" className="text-xs text-restra-footer-muted transition-colors hover:text-white">
              Refund Policy
            </Link>
            <Link href="/contact" className="text-xs text-restra-footer-muted transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <p className="text-xs text-restra-footer-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
