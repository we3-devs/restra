import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { Check, Star } from "lucide-react";

const plans = [
  {
    nameKey: "price.monthly" as TranslationKey,
    labelKey: "price.payAsYouGo" as TranslationKey,
    price: "NPR XX,XXX",
    periodKey: "price.periodMonth" as TranslationKey,
    highlight: false,
    features: [
      "price.f1m", "price.f2m", "price.f3m",
      "price.f4m", "price.f5m", "price.f6m",
    ] as TranslationKey[],
  },
  {
    nameKey: "price.6months" as TranslationKey,
    labelKey: "price.betterValue" as TranslationKey,
    price: "NPR XX,XXX",
    periodKey: "price.period6m" as TranslationKey,
    highlight: false,
    features: [
      "price.f1s", "price.f2s", "price.f3s",
      "price.f4s", "price.f5s", "price.f6s",
    ] as TranslationKey[],
  },
  {
    nameKey: "price.yearly" as TranslationKey,
    labelKey: "price.bestValueLabel" as TranslationKey,
    price: "NPR XX,XXX",
    periodKey: "price.periodYear" as TranslationKey,
    highlight: true,
    features: [
      "price.f1y", "price.f2y", "price.f3y",
      "price.f4y", "price.f5y", "price.f6y",
    ] as TranslationKey[],
  },
];

export default function Pricing() {
  const { t } = useI18n();
  const titleParts = t("price.title").split(t("price.titleHighlight"));

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("price.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {titleParts[0]}
            <span className="text-restra-yellow">{t("price.titleHighlight")}</span>
            {titleParts[1] || ""}
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg max-w-xl mx-auto">
            {t("price.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl border p-6 transition-all duration-300 ${
                plan.highlight
                  ? "border-restra-yellow/30 bg-restra-yellow/[0.04] shadow-lg shadow-restra-yellow/[0.05]"
                  : "border-white/[0.06] bg-restra-card hover:border-white/[0.12]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-restra-yellow px-3 py-1">
                    <Star className="h-3 w-3 fill-restra-bg text-restra-bg" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-restra-bg">
                      {t("price.bestValue")}
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wider ${
                  plan.highlight ? "text-restra-yellow" : "text-restra-text-muted"
                }`}>
                  {t(plan.labelKey)}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-restra-text">
                  {t(plan.nameKey)}
                </h3>
              </div>

              <div className="mb-6">
                <span className="font-display text-3xl font-semibold text-restra-text">
                  {plan.price}
                </span>
                <span className="text-sm text-restra-text-muted">{t(plan.periodKey)}</span>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${
                      plan.highlight ? "text-restra-yellow" : "text-restra-cyan"
                    }`} />
                    <span className="text-sm text-restra-text-secondary">{t(fKey)}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-restra-yellow text-restra-bg hover:bg-restra-yellow/90 hover:translate-y-[-1px]"
                    : "border border-white/[0.1] bg-white/[0.03] text-restra-text hover:bg-white/[0.06]"
                }`}
              >
                {t("price.choose")} {t(plan.nameKey)}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-restra-text-muted">
          {t("price.disclaimer")}
        </p>
      </div>
    </section>
  );
}
