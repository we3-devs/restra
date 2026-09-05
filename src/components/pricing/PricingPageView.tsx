"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { ArrowRight, Check, Minus, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { pricingPlans } from "@/lib/pricing";
import { pricingFaqs } from "@/lib/faq-data";
import Reveal from "@/components/reusable/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/**
 * Pricing page: three premium plan cards (yearly highlighted), a full
 * feature-comparison table, FAQ accordion, and a multi-outlet CTA band.
 */

type ComparisonRow = {
  featureKey: TranslationKey;
  monthly: TranslationKey | boolean;
  sixMonths: TranslationKey | boolean;
  yearly: TranslationKey | boolean;
};

const comparisonRows: ComparisonRow[] = [
  { featureKey: "pricingPage.featureCore", monthly: "pricingPage.valueCore", sixMonths: "pricingPage.valueCore", yearly: "pricingPage.valueCore" },
  { featureKey: "pricingPage.featurePos", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureQr", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureOrders", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureKitchen", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureInventory", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureAnalytics", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureRoles", monthly: true, sixMonths: true, yearly: true },
  { featureKey: "pricingPage.featureDevices", monthly: true, sixMonths: true, yearly: true },
  {
    featureKey: "pricingPage.featureSupport",
    monthly: "pricingPage.valueSupportM",
    sixMonths: "pricingPage.valueSupportS",
    yearly: "pricingPage.valueSupportY",
  },
  {
    featureKey: "pricingPage.featureAccounts",
    monthly: "pricingPage.valueAccountsM",
    sixMonths: "pricingPage.valueAccountsS",
    yearly: "pricingPage.valueAccountsY",
  },
];

function ComparisonCell({ value }: { value: TranslationKey | boolean }) {
  const { t } = useI18n();
  if (value === true) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-restra-yellow/15 text-restra-yellow" aria-label="Included">
        <Check className="h-3 w-3" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.04] text-restra-text-muted" aria-label="Not included">
        <Minus className="h-3 w-3" />
      </span>
    );
  }
  return <span className="text-xs font-medium text-restra-text-secondary">{t(value)}</span>;
}

export default function PricingPageView() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-restra-bg text-restra-text">
      {/* Hero + plans */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-14 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(255,212,59,0.07),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
              {t("price.badge")}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              {t("pricingPage.title").replace(t("pricingPage.titleHighlight"), "").trimEnd()}{" "}
              <span className="text-restra-yellow">{t("pricingPage.titleHighlight")}</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
              {t("pricingPage.subtitle")}
            </p>
          </Reveal>

          {/* Plan cards */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.08}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
                    plan.highlight
                      ? "border-restra-yellow/50 bg-restra-yellow/[0.05] shadow-lg shadow-restra-yellow/[0.06]"
                      : "border-white/[0.08] bg-restra-card hover:border-white/[0.16]",
                  )}
                >
                  {plan.highlight ? (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-restra-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-restra-bg">
                        <Star className="h-3 w-3 fill-restra-bg" />
                        {t("price.bestValue")}
                      </span>
                    </div>
                  ) : null}

                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider",
                      plan.highlight ? "text-restra-yellow" : "text-restra-text-muted",
                    )}
                  >
                    {t(plan.labelKey)}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text">
                    {t(plan.nameKey)}
                  </h2>

                  <div className="mt-5">
                    <span className="font-display text-4xl font-semibold tracking-tight text-restra-text">
                      {plan.price}
                    </span>
                    <span className="text-sm text-restra-text-muted">{t(plan.periodKey)}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.featureKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-2.5">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            plan.highlight ? "text-restra-yellow" : "text-restra-cyan",
                          )}
                        />
                        <span className="text-sm text-restra-text-secondary">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppLink(
                      `Hi Restra! I'm interested in the ${t(plan.nameKey)} plan. Please share more details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "btn-cta mt-7 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all",
                      plan.highlight
                        ? "bg-restra-yellow text-restra-bg hover:-translate-y-0.5 hover:bg-restra-yellow/90"
                        : "border border-white/[0.1] bg-white/[0.03] text-restra-text hover:bg-white/[0.06]",
                    )}
                  >
                    {t("price.choose")} {t(plan.nameKey)}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-xs text-restra-text-muted">
              {t("pricingPage.pageDisclaimer")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
              {t("pricingPage.compareBadge")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("pricingPage.compareTitle")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.08] bg-restra-card">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">{t("pricingPage.compareTitle")}</caption>
                <thead>
                  <tr className="border-b border-white/[0.07] text-xs">
                    <th scope="col" className="px-5 py-3.5 font-semibold text-restra-text-muted">
                      {t("price.badge")}
                    </th>
                    {pricingPlans.map((plan) => (
                      <th
                        key={plan.id}
                        scope="col"
                        className={cn(
                          "px-5 py-3.5 text-center font-semibold",
                          plan.highlight ? "text-restra-yellow" : "text-restra-text",
                        )}
                      >
                        {t(plan.nameKey)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {comparisonRows.map((row) => (
                    <tr key={row.featureKey} className="transition-colors hover:bg-white/[0.02]">
                      <th scope="row" className="px-5 py-3 text-sm font-medium text-restra-text-secondary">
                        {t(row.featureKey)}
                      </th>
                      <td className="px-5 py-3 text-center">
                        <ComparisonCell value={row.monthly} />
                      </td>
                      <td className="px-5 py-3 text-center">
                        <ComparisonCell value={row.sixMonths} />
                      </td>
                      <td className="px-5 py-3 text-center">
                        <ComparisonCell value={row.yearly} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.05] bg-restra-surface/40 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
              {t("pricingPage.faqBadge")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("pricingPage.faqTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {pricingFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-white/[0.07]">
                  <AccordionTrigger className="text-left text-base font-semibold text-restra-text hover:no-underline hover:text-restra-yellow">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-restra-text-secondary">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Multi-outlet CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-restra-text sm:text-4xl">
              {t("pricingPage.customTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-restra-text-secondary">
              {t("pricingPage.customSubtitle")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-7 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
            >
              {t("pricingPage.customCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
