"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reusable/Reveal";

export default function RestaurantShowcase() {
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="restaurant-showcase-heading"
      className="relative overflow-hidden bg-restra-surface/40 border-y border-white/[0.05] py-20 lg:py-28"
    >
      {/* Ambient brand glow behind the visual */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-10 h-[34rem] w-[90%] -translate-x-1/2 rounded-full bg-restra-yellow/[0.06] blur-3xl" />
        <div className="absolute -right-32 top-28 h-80 w-80 rounded-full bg-restra-cyan/[0.05] blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-restra-yellow/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading + intro + CTAs */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-text-muted">
            <span aria-hidden="true" className="h-px w-6 bg-restra-cyan/60" />
            {t("showcase.restaurantBadge")}
          </p>
          <h2
            id="restaurant-showcase-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-restra-text sm:text-4xl"
          >
            {t("showcase.restaurantTitle")}
            <span className="text-restra-yellow">{t("showcase.restaurantTitleHighlight")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-restra-text-secondary sm:mt-5">
            {t("showcase.restaurantSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-restra-yellow px-7 py-3 text-sm font-semibold text-[#241D05] shadow-lg shadow-restra-yellow/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-restra-yellow/90 hover:shadow-xl hover:shadow-restra-yellow/25"
            >
              {t("showcase.restaurantCta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-xl border border-restra-border bg-white px-7 py-3 text-sm font-semibold text-restra-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DCDCD5] hover:shadow-lg hover:shadow-black/5"
            >
              {t("showcase.restaurantSeeHow")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
