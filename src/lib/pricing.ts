import type { TranslationKey } from "@/lib/translations";

export type PricingPlan = {
  id: string;
  nameKey: TranslationKey;
  labelKey: TranslationKey;
  periodKey: TranslationKey;
  price: string;
  /** Billing period length; used to list plans shortest-first. */
  months: number;
  /** Per-month equivalent shown small under the price. */
  perMonth?: string;
  highlight: boolean;
  featureKeys: TranslationKey[];
  savingKey?: TranslationKey;
};

/**
 * Pricing plans (NPR). Amounts live in one place
 * so the home-page and /pricing surfaces stay in sync.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    nameKey: "price.monthly",
    labelKey: "price.payAsYouGo",
    periodKey: "price.periodMonth",
    price: "NPR 2,199",
    months: 1,
    highlight: false,
    featureKeys: [
      "price.f1m",
      "price.f2m",
      "price.f3m",
      "price.f4m",
      "price.f5m",
      "price.f6m",
    ],
  },
  {
    id: "yearly",
    nameKey: "price.yearly",
    labelKey: "price.bestValueLabel",
    periodKey: "price.periodYear",
    price: "NPR 22,999",
    months: 12,
    perMonth: undefined,
    highlight: true,
    savingKey: "price.bestValue",
    featureKeys: [
      "price.f1y",
      "price.f2y",
      "price.f3y",
      "price.f4y",
      "price.f5y",
      "price.f6y",
    ],
  },
  {
    id: "6months",
    nameKey: "price.6months",
    labelKey: "price.betterValue",
    periodKey: "price.period6m",
    price: "NPR 11,999",
    months: 6,
    highlight: false,
    featureKeys: [
      "price.f1s",
      "price.f2s",
      "price.f3s",
      "price.f4s",
      "price.f5s",
      "price.f6s",
    ],
  },
];

/** Plans shortest period first, for tables and single-column (mobile) lists. */
export const plansByDuration = [...pricingPlans].sort((a, b) => a.months - b.months);

/**
 * On phones the cards stack, so list them by duration; from md up the grid
 * keeps the source order, which puts the highlighted plan in the middle.
 */
export function mobilePlanOrderClass(plan: PricingPlan): string {
  const index = plansByDuration.indexOf(plan);
  return ["order-1", "order-2", "order-3"][index] + " md:order-none";
}
