import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import BlogBlocks from "@/components/blog/BlogBlocks";
import BlogCard from "@/components/blog/BlogCard";
import BlogMedia from "@/components/blog/BlogMedia";
import CtaBand from "@/components/seo/CtaBand";
import SiteFooter from "@/components/seo/SiteFooter";
import SiteHeader from "@/components/seo/SiteHeader";
import {
  getBlogPost,
  getAllPosts,
  formatPostDate,
  type BlogPost,
} from "@/lib/blog-content";
import { absoluteUrl, featurePath, seoPages } from "@/lib/seo-content";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type RelatedTarget =
  | { kind: "blog"; post: BlogPost }
  | { kind: "feature"; slug: string };

function absoluteImage(src?: string): string | undefined {
  if (!src) return undefined;
  return /^https?:\/\//.test(src) ? src : absoluteUrl(src);
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${slug}`);
  const image = absoluteImage(post.imageUrl);

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

function resolveRelated(post: BlogPost, posts: BlogPost[]): RelatedTarget[] {
  const targets: RelatedTarget[] = [];
  const seen = new Set<string>([post.slug]);

  const addPost = (candidate: BlogPost | undefined) => {
    if (!candidate || seen.has(candidate.slug)) return;
    seen.add(candidate.slug);
    targets.push({ kind: "blog", post: candidate });
  };

  for (const ref of post.relatedSlugs ?? []) {
    if (ref.startsWith("/features/")) {
      const slug = ref.replace("/features/", "");
      if (seoPages[slug] && !seen.has(ref)) {
        seen.add(ref);
        targets.push({ kind: "feature", slug });
      }
    } else {
      addPost(posts.find((candidate) => candidate.slug === ref));
    }
  }

  // Fill the row with same-category posts, then the newest posts.
  if (targets.length < 2) {
    for (const candidate of posts) {
      if (targets.length >= 2) break;
      if (candidate.category === post.category) addPost(candidate);
    }
  }
  if (targets.length < 2) {
    for (const candidate of posts) {
      if (targets.length >= 2) break;
      addPost(candidate);
    }
  }

  return targets.slice(0, 2);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = absoluteUrl(`/blog/${slug}`);
  const image = absoluteImage(post.imageUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        ...(image ? { image: [image] } : {}),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: {
          "@type": "Person",
          name: post.authorName,
          ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...post.content
        .filter((block) => block.type === "faq")
        .flatMap((block) =>
          block.type === "faq"
            ? [{
                "@type": "FAQPage",
                mainEntity: block.items.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              }]
            : [],
        ),
    ],
  };

  const related = resolveRelated(post, posts);
  const relatedPosts = related.filter(
    (target): target is { kind: "blog"; post: BlogPost } => target.kind === "blog",
  );
  const relatedFeatures = related.filter(
    (target): target is { kind: "feature"; slug: string } => target.kind === "feature",
  );

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-restra-bg text-restra-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-restra-text-muted"
          >
            <Link href="/" className="transition-colors hover:text-restra-yellow">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors hover:text-restra-yellow">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-restra-text-secondary">{post.title}</span>
          </nav>

          <article className="mx-auto max-w-3xl">
            {/* Header */}
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-cyan">
                {post.category}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-restra-text-secondary">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/[0.06] py-4 text-sm text-restra-text-muted">
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-restra-yellow/10 font-display text-sm font-semibold text-restra-yellow"
                  >
                    {post.authorName.charAt(0)}
                  </span>
                  {post.authorName}
                </span>
                {post.authorSocials?.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-restra-yellow transition-colors hover:text-restra-text"
                  >
                    {social.label}
                  </a>
                ))}
                <time
                  dateTime={post.publishedAt}
                  className="inline-flex items-center gap-1.5"
                >
                  <CalendarDays className="h-4 w-4" />
                  {formatPostDate(post.publishedAt)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readMinutes} min read
                </span>
              </div>
            </header>

            {/* Hero media (image or Supabase video) */}
            {(post.imageUrl || post.videoUrl) && (
              <div className="mt-8">
                <BlogMedia
                  post={post}
                  priority
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08]"
                />
              </div>
            )}

            {/* Body */}
            <div className="mt-10">
              <BlogBlocks blocks={post.content} />
            </div>

            {/* Tags */}
            {post.tags.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-xs text-restra-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Feature CTA */}
            {post.featureCta && seoPages[post.featureCta] ? (
              <aside className="mt-12 rounded-xl border border-white/[0.08] bg-restra-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                    See it in RESTRA
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text">
                    {seoPages[post.featureCta].title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                    {seoPages[post.featureCta].intro}
                  </p>
                </div>
                <Link
                  href={featurePath(post.featureCta)}
                  className="mt-4 inline-flex shrink-0 items-center rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg transition-colors hover:bg-restra-yellow/90 sm:mt-0"
                >
                  Learn more
                </Link>
              </aside>
            ) : null}
          </article>

          {/* Related */}
          {related.length > 0 ? (
            <section className="mx-auto mt-20 max-w-5xl" aria-labelledby="related-posts">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2
                    id="related-posts"
                    className="font-display text-3xl font-semibold tracking-tight"
                  >
                    Keep reading
                  </h2>
                  <p className="mt-2 text-sm text-restra-text-secondary">
                    Related guides and RESTRA features.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-restra-yellow"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All posts
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map(({ post: relatedPost }) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
                {relatedFeatures.map(({ slug: featureSlug }) => (
                  <Link
                    key={featureSlug}
                    href={featurePath(featureSlug)}
                    className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-restra-card p-6 transition-colors hover:border-restra-yellow/50"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-restra-cyan">
                        RESTRA feature
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-restra-text transition-colors group-hover:text-restra-yellow">
                        {seoPages[featureSlug].title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                        {seoPages[featureSlug].intro}
                      </p>
                    </div>
                    <span className="mt-5 inline-block text-sm font-semibold text-restra-yellow">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mx-auto mt-20 max-w-5xl">
            <CtaBand />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
