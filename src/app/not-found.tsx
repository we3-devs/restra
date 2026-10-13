import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import SiteFooter from "@/components/seo/SiteFooter";
import SiteHeader from "@/components/seo/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

const popularPages = [
  { label: "Restaurant management software", href: "/restaurant-management-system" },
  { label: "All features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex min-h-screen flex-col items-center justify-center bg-restra-bg px-6 pb-20 pt-32 text-restra-text"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
          404
        </p>
        <h1 className="mt-4 text-center font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-center leading-relaxed text-restra-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Head back
          home, or explore what RESTRA can do for your restaurant.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
          >
            <LayoutGrid className="h-4 w-4 text-restra-cyan" aria-hidden="true" />
            Explore features
          </Link>
        </div>

        <nav aria-label="Popular pages" className="mt-12 w-full max-w-md">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted">
            Popular pages
          </h2>
          <ul className="mt-4 divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-restra-card">
            {popularPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-yellow"
                >
                  {page.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
