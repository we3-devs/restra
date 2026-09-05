import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import CtaBand from "@/components/seo/CtaBand";
import { FeatureIcon } from "@/components/seo/FeatureIcon";
import SiteFooter from "@/components/seo/SiteFooter";
import SiteHeader from "@/components/seo/SiteHeader";
import {
  absoluteUrl,
  featurePath,
  featurePages,
  seoPages,
} from "@/lib/seo-content";

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
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted transition-colors hover:text-restra-yellow"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to home
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
                RESTRA capabilities
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Everything your restaurant actually needs
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
                  href="/restaurant-management-system"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
                >
                  What is RESTRA?
                  <ArrowRight className="h-4 w-4 text-restra-cyan" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featurePages.map((page) => (
              <Link
                key={page.slug}
                href={featurePath(page.slug)}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-restra-card p-6 transition-all hover:-translate-y-1 hover:border-restra-yellow/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow transition-colors group-hover:border-restra-yellow/40">
                    <FeatureIcon slug={page.slug} className="h-5 w-5" />
                  </span>
                  <ArrowRight className="h-4 w-4 text-restra-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-restra-yellow" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-restra-text transition-colors group-hover:text-restra-yellow">
                  {page.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-restra-text-secondary">
                  {page.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 border-t border-white/[0.06] pt-4 text-sm font-semibold text-restra-yellow">
                  Learn more
                </span>
              </Link>
            ))}
          </div>

          {/* Overview card */}
          <div className="mt-6 flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-restra-card p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-restra-cyan/10 text-restra-cyan">
                <FeatureIcon slug="analytics" className="h-5 w-5" />
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
