import type { TranslationKey } from "@/lib/translations";

export type PricingPlan = {
  id: string;
  nameKey: TranslationKey;
  labelKey: TranslationKey;
  periodKey: TranslationKey;
  price: string;
  /** Per-month equivalent shown small under the price. */
  perMonth?: string;
  highlight: boolean;
  featureKeys: TranslationKey[];
  savingKey?: TranslationKey;
};

/**
 * Pricing plans. Amounts are placeholders (final pricing confirmed at launch)
 * and stay in one place so both pricing surfaces stay in sync.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    nameKey: "price.monthly",
    labelKey: "price.payAsYouGo",
    periodKey: "price.periodMonth",
    price: "NPR XX,XXX",
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
    id: "6months",
    nameKey: "price.6months",
    labelKey: "price.betterValue",
    periodKey: "price.period6m",
    price: "NPR XX,XXX",
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
  {
    id: "yearly",
    nameKey: "price.yearly",
    labelKey: "price.bestValueLabel",
    periodKey: "price.periodYear",
    price: "NPR XX,XXX",
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
];
