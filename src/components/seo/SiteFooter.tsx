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

// The navbar only links to homepage sections, so these standalone pages need
// a crawlable link from every content page.
const companyLinks = [
  { label: "All Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

/**
 * Rich footer shared by all content pages. Lists the whole feature cluster and
 * the latest blog posts, so every page internally links the rest of the site.
 */
export default async function SiteFooter() {
  const posts = (await getAllPosts()).slice(0, 3);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="restra-footer relative overflow-hidden px-4 py-12"
      style={{ backgroundColor: "#FFFFE0" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Multi-column layout */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white"
            >
              {/* Decorative: the link text "RESTRA" already names the destination. */}
              {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo; next/image adds nothing for SVG */}
              <img src="/logo.svg" alt="" width={1306} height={1205} className="h-8 w-auto" />
              <span>RESTRA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Restaurant management software for restaurants, cafés, and cloud kitchens in
              Nepal — POS, billing, QR ordering, inventory, kitchen workflows, and reports
              in one connected system.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-white/20"
              >
                Get Started <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/restaurant-management-system"
                className="inline-flex items-center rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Restaurant management software
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <nav aria-label="Features">
            <h4 className="text-restra-footer-heading">Features</h4>
            <ul className="mt-4 space-y-3">
              {featureSlugs.slice(0, 5).map((slug) => (
                <li key={slug}>
                  <Link
                    href={featurePath(slug)}
                    className="text-base text-white/85 transition-colors hover:text-white"
                  >
                    {seoPages[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More features">
            <h4 className="text-restra-footer-heading">More features</h4>
            <ul className="mt-4 space-y-3">
              {featureSlugs.slice(5).map((slug) => (
                <li key={slug}>
                  <Link
                    href={featurePath(slug)}
                    className="text-base text-white/85 transition-colors hover:text-white"
                  >
                    {seoPages[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4 className="text-restra-footer-heading">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Latest posts */}
          <nav aria-label="Latest blog posts">
            <h4 className="text-restra-footer-heading">Latest articles</h4>
            <ul className="mt-4 space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <span className="block text-base font-medium leading-snug text-white/85 transition-colors group-hover:text-white">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-xs text-white/60">
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

        {/* Divider */}
        <div className="my-10 h-px bg-white/15" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm leading-tight text-white">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-white/70">
              A product of {siteConfig.developer} · {siteConfig.location} ·{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="underline-offset-2 hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
