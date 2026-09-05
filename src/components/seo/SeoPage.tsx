import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  absoluteUrl,
  featurePath,
  featureSlugs,
  seoPages,
  type SeoPage,
} from "@/lib/seo-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CtaBand from "./CtaBand";
import { FeatureIcon } from "./FeatureIcon";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */

export function seoJsonLd(page: SeoPage, path: string) {
  const url = absoluteUrl(path);
  const isFeaturePage = path.startsWith("/features/");

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ...(isFeaturePage
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: "Restaurant Software Features",
              item: absoluteUrl("/features"),
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: isFeaturePage ? 3 : 2,
        name: page.title,
        item: url,
      },
    ],
  };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    breadcrumb,
  ];

  if (page.faqs) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/* ------------------------------------------------------------------ */
/*  Shared atoms                                                       */
/* ------------------------------------------------------------------ */

function FeatureHero({ page, isFeaturePage }: { page: SeoPage; isFeaturePage: boolean }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_-10%,rgba(255,212,59,0.08),transparent_60%),radial-gradient(ellipse_60%_50%_at_90%_0%,rgba(34,211,238,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-restra-text-muted"
        >
          <Link
            href="/"
            className="transition-colors hover:text-restra-yellow"
          >
            Home
          </Link>
          <span aria-hidden="true">/</span>
          {isFeaturePage ? (
            <>
              <Link
                href="/features"
                className="transition-colors hover:text-restra-yellow"
              >
                Features
              </Link>
              <span aria-hidden="true">/</span>
            </>
          ) : null}
          <span className="text-restra-text-secondary">{page.title}</span>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Copy */}
          <div>
            <Link
              href={isFeaturePage ? "/features" : "/"}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted transition-colors hover:text-restra-yellow"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {isFeaturePage ? "All features" : "Back to home"}
            </Link>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              {isFeaturePage ? "RESTRA feature" : "RESTRA — Restaurant Management System"}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-restra-text sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
              {page.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to the team
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
              >
                Compare all features
                <ArrowRight className="h-4 w-4 text-restra-cyan" />
              </Link>
            </div>
          </div>

          {/* Icon stage */}
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="absolute inset-0 -z-0 rounded-3xl bg-restra-yellow/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-restra-card p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow">
                <FeatureIcon slug={page.slug} className="h-9 w-9" />
              </div>
              <p className="mt-6 font-display text-xl font-semibold text-restra-text">
                One platform.
              </p>
              <p className="mt-1 text-sm text-restra-text-secondary">
                Every module works together — order, kitchen, stock, bill, and report as
                one connected flow.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                  POS
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                  QR
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                  Stock
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                  Reports
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  View                                                               */
/* ------------------------------------------------------------------ */

export default function SeoPageView({ page }: { page: SeoPage }) {
  const isFeaturePage = page.slug !== "restaurant-management-system";

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-restra-bg text-restra-text">
        <FeatureHero page={page} isFeaturePage={isFeaturePage} />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Body sections */}
          <div className="mx-auto max-w-3xl space-y-14">
            {page.sections.map((section, index) => (
              <section key={section.heading}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] font-display text-sm font-semibold text-restra-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-restra-text">
                      {section.heading}
                    </h2>
                    <p className="mt-4 leading-8 text-restra-text-secondary">
                      {section.body}
                    </p>
                  </div>
                </div>

                {section.bullets ? (
                  <ul className="mt-8 grid gap-3 pl-13 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-restra-card p-4 text-sm leading-relaxed text-restra-text-secondary"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                          <Check className="h-3 w-3" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {/* FAQ */}
          {page.faqs ? (
            <section
              className="mx-auto mt-20 max-w-3xl"
              aria-labelledby="faq-heading"
            >
              <h2
                id="faq-heading"
                className="font-display text-3xl font-semibold tracking-tight text-restra-text"
              >
                Frequently asked questions
              </h2>
              <Accordion type="single" collapsible className="mt-8 w-full">
                {page.faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-7 text-restra-text-secondary">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ) : null}

          {/* Related features */}
          <RelatedFeatures currentSlug={page.slug} />

          {/* CTA */}
          <CtaBand />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function RelatedFeatures({ currentSlug }: { currentSlug: string }) {
  const isFeaturePage = featureSlugs.includes(currentSlug as (typeof featureSlugs)[number]);
  // Feature pages point at each other; the overview page points at the cluster.
  const related = isFeaturePage
    ? featureSlugs.filter((slug) => slug !== currentSlug).slice(0, 4)
    : featureSlugs.slice(0, 6);

  return (
    <section className="mx-auto mt-24 max-w-5xl" aria-labelledby="related-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
            Explore more
          </p>
          <h2
            id="related-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-restra-text"
          >
            {isFeaturePage ? "Related features" : "Everything in RESTRA"}
          </h2>
        </div>
        <Link
          href="/features"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-restra-text-secondary transition-colors hover:text-restra-yellow"
        >
          View all features <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {related.map((slug) => {
          const page = seoPages[slug];
          return (
            <Link
              key={slug}
              href={featurePath(slug)}
              className="group flex flex-col rounded-xl border border-white/[0.08] bg-restra-card p-6 transition-all hover:-translate-y-0.5 hover:border-restra-yellow/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow transition-colors group-hover:border-restra-yellow/40">
                <FeatureIcon slug={slug} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-restra-text transition-colors group-hover:text-restra-yellow">
                {page.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                {page.intro}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-restra-yellow">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
