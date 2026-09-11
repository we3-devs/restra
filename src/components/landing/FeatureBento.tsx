"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight } from "lucide-react";
import { featureGroups } from "@/lib/showcase";
import Reveal from "@/components/reusable/Reveal";
import SectionHeading from "@/components/reusable/SectionHeading";

/**
 * Product-modules grid. Each capability group uses one equal-width card so
 * the modules stay aligned in three columns on larger screens.
 */
export default function FeatureBento() {
  const { t } = useI18n();

  return (
    <section id="modules" className="relative py-16 lg:py-[5.6rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading
          badge={t("home.bentoBadge")}
          title={t("home.bentoTitle")}
          titleHighlight={t("home.bentoTitleHighlight")}
          subtitle={t("home.bentoSubtitle")}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.id}
                delay={(i % 3) * 0.06}
              >
                <Link
                  href={group.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-restra-card transition-all duration-300 hover:border-restra-yellow/40"
                >
                  {/* Copy */}
                  <div className="flex flex-1 flex-col p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-restra-yellow/10 text-restra-yellow">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3
                      className="mt-4 font-display text-base font-semibold tracking-tight text-restra-text"
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
