"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight } from "lucide-react";
import { featureGroups } from "@/lib/showcase";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reusable/Reveal";
import SectionHeading from "@/components/reusable/SectionHeading";

/**
 * Product-modules bento grid. Eight capability groups in an asymmetric grid:
 * two wide feature tiles with mockups and six compact tiles, each linking to
 * its crawlable feature page.
 */
export default function FeatureBento() {
  const { t } = useI18n();

  const wideIds = new Set(["pos-billing", "qr-ordering"]);

  return (
    <section id="modules" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge={t("home.bentoBadge")}
          title={t("home.bentoTitle")}
          titleHighlight={t("home.bentoTitleHighlight")}
          subtitle={t("home.bentoSubtitle")}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((group, i) => {
            const wide = wideIds.has(group.id);
            const Icon = group.icon;
            return (
              <Reveal
                key={group.id}
                delay={(i % 3) * 0.06}
                className={cn(wide && "sm:col-span-2 lg:col-span-2")}
              >
                <Link
                  href={group.href}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-restra-card transition-all duration-300 hover:border-restra-yellow/40",
                    wide && "lg:flex-row lg:items-stretch",
                  )}
                >
                  {/* Copy */}
                  <div className={cn("flex flex-1 flex-col p-4", wide && "lg:max-w-[46%]")}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3
                      className={cn(
                        "mt-4 font-display font-semibold tracking-tight text-restra-text",
                        wide ? "text-xl" : "text-base",
                      )}
                    >
                      {group.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-restra-cyan">
                      {group.tagline}
                    </p>
                    <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-restra-text-secondary">
                      {group.description}
                    </p>
                    <span className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-restra-yellow">
                      {t("showcase.learnMore")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* Mockup panel for wide tiles */}
                  {wide ? (
                    <div className="relative hidden items-center justify-center border-l border-white/[0.05] bg-restra-surface/50 p-5 lg:flex lg:w-[54%]">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(255,212,59,0.05),transparent_60%)]"
                      />
                      <span className="sr-only">{group.name} preview</span>
                    </div>
                  ) : null}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-restra-yellow/40 hover:text-restra-yellow"
          >
            {t("home.bentoExplore")}
            <ArrowRight className="h-4 w-4 text-restra-cyan" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
