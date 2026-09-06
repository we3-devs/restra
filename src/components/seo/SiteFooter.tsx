import Link from "next/link";
import { ArrowRight, Github, Instagram, Mail, X, Youtube, Facebook } from "lucide-react";
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
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="restra-footer relative overflow-hidden px-4 py-12"
      style={{ backgroundColor: "#FFFFE0" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Multi-column layout */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white"
            >
              <img src="/logo.svg" alt="RESTRA logo" className="h-8 w-auto" />
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
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Left: Copyright */}
          <div>
            <p className="text-white text-sm leading-tight">
              © {currentYear} {siteConfig.name}
            </p>
            <p className="text-white text-sm font-semibold">
              All rights reserved.
            </p>
          </div>

          {/* Middle: Legal Links */}
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-white/70 transition-colors hover:text-white">
              Terms & Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-white/70 transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white" aria-label="X (Twitter)">
              <X className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Language Selector */}
          <select className="h-8 rounded-full border border-white/40 bg-transparent px-3 pr-8 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-white">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Português</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
