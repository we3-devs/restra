import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import CtaBand from "@/components/seo/CtaBand";
import SiteFooter from "@/components/seo/SiteFooter";
import SiteHeader from "@/components/seo/SiteHeader";
import MockupRenderer from "@/components/mockups/MockupRenderer";
import { featureIconMap } from "@/lib/showcase";
import {
  absoluteUrl,
  featurePath,
  seoPages,
} from "@/lib/seo-content";
import { featureGroups } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "Restaurant Software Features",
  description:
    "Explore RESTRA features: restaurant POS, billing, order management, inventory, kitchen workflows, table management, staff permissions, QR ordering, and analytics.",
  alternates: { canonical: absoluteUrl("/features") },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-restra-bg text-restra-text">
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
              <span className="text-restra-text-secondary">Features</span>
            </nav>

            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                RESTRA capabilities
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Everything your restaurant{" "}
                <span className="text-restra-yellow">actually needs</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
                RESTRA connects the operational workflows restaurants use every day — from
                taking an order to reviewing performance — as one system instead of a
                patchwork of disconnected tools.
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
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
                >
                  See how it works
                  <ArrowRight className="h-4 w-4 text-restra-cyan" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped feature sections */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="space-y-16 lg:space-y-24">
            {featureGroups.map((group, index) => {
              const Icon = featureIconMap[group.pages[0]];
              const flip = index % 2 === 1;
              return (
                <section
                  key={group.id}
                  id={group.id}
                  aria-labelledby={`${group.id}-title`}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Copy */}
                  <div className={flip ? "lg:order-2" : undefined}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-cyan">
                        {String(index + 1).padStart(2, "0")} · {group.tagline}
                      </span>
                    </div>
                    <h2
                      id={`${group.id}-title`}
                      className="mt-5 font-display text-3xl font-semibold tracking-tight text-restra-text sm:text-4xl"
                    >
                      {group.name}
                    </h2>
                    <p className="mt-4 max-w-xl leading-relaxed text-restra-text-secondary">
                      {group.description}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {group.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 text-sm text-restra-text-secondary"
                        >
                          <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-restra-yellow/15 text-restra-yellow">
                            <Check className="h-3 w-3" />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <Link
                        href={group.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {group.pages.map((slug) => (
                        <Link
                          key={slug}
                          href={featurePath(slug)}
                          className="text-sm font-medium text-restra-text-muted underline-offset-4 transition-colors hover:text-restra-yellow hover:underline"
                        >
                          {seoPages[slug].title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Product mockup */}
                  <div className={flip ? "lg:order-1" : undefined}>
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-6 rounded-2xl bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(255,212,59,0.05),transparent_70%)]"
                      />
                      <MockupRenderer mock={group.mock} className="relative" />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Overview card */}
          <div className="mt-20 flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-restra-card p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-restra-cyan/10 text-restra-cyan">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-restra-text">
                  What is RESTRA?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-restra-text-secondary">
                  {seoPages["restaurant-management-system"].intro}
                </p>
              </div>
            </div>
            <Link
              href="/restaurant-management-system"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
            >
              Read the overview
              <ArrowRight className="h-4 w-4 text-restra-cyan" />
            </Link>
          </div>

          <CtaBand />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
