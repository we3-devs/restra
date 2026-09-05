import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import CtaBand from "@/components/seo/CtaBand";
import SiteFooter from "@/components/seo/SiteFooter";
import SiteHeader from "@/components/seo/SiteHeader";
import BlogCard, { blogPath } from "@/components/blog/BlogCard";
import BlogMedia from "@/components/blog/BlogMedia";
import { absoluteUrl } from "@/lib/seo-content";
import { formatPostDate, getAllPosts } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Restaurant Software Blog",
  description:
    "RESTRA blog — practical guides on restaurant POS, QR ordering, billing, inventory management, kitchen workflows, staff permissions, and running a restaurant in Nepal.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(blogPath(post.slug)),
      name: post.title,
    })),
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-restra-bg text-restra-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_-10%,rgba(255,212,59,0.08),transparent_60%),radial-gradient(ellipse_60%_50%_at_90%_0%,rgba(34,211,238,0.06),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-restra-text-muted"
            >
              <Link href="/" className="transition-colors hover:text-restra-yellow">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-restra-text-secondary">Blog</span>
            </nav>

            <div className="mx-auto max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted transition-colors hover:text-restra-yellow"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to home
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                RESTRA Blog
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Restaurant software, explained
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
                Practical guides on running a restaurant with one connected system — POS,
                billing, QR ordering, inventory, kitchen workflows, and reports.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/restaurant-management-system"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/1 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
                >
                  What is RESTRA?
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Featured post */}
          {featured ? (
            <article className="group grid gap-8 rounded-2xl border border-white/[0.08] bg-restra-card p-5 transition-colors hover:border-restra-yellow/50 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em]">
                  <span className="rounded-md bg-restra-yellow/15 px-2 py-1 text-restra-yellow">
                    Featured
                  </span>
                  <span className="text-restra-cyan">{featured.category}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text transition-colors group-hover:text-restra-yellow sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 leading-7 text-restra-text-secondary">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-restra-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {formatPostDate(featured.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featured.readMinutes} min read
                  </span>
                </div>
                <Link
                  href={blogPath(featured.slug)}
                  className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <Link href={blogPath(featured.slug)} aria-label={featured.title}>
                <BlogMedia
                  post={featured}
                  priority
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08]"
                />
              </Link>
            </article>
          ) : null}

          {/* Remaining posts */}
          {rest.length > 0 ? (
            <section className="mt-16" aria-labelledby="latest-posts">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                    Latest articles
                  </p>
                  <h2
                    id="latest-posts"
                    className="mt-3 font-display text-3xl font-semibold tracking-tight"
                  >
                    Recent posts
                  </h2>
                </div>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ) : null}

          <CtaBand
            title="Prefer a tour of the software itself?"
            subtitle="Browse every RESTRA module — POS, billing, QR ordering, inventory, kitchen workflows, staff permissions, and analytics — or talk to the team."
            primaryLabel="Explore Features"
            primaryHref="/features"
            secondaryLabel="Get Started"
            secondaryHref="/#contact"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
