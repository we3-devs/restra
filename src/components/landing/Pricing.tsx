import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    label: "Pay as you go",
    price: "NPR XX,XXX",
    period: "/month",
    highlight: false,
    features: [
      "Full access to all modules",
      "Unlimited orders",
      "Up to 10 staff accounts",
      "Inventory management",
      "QR ordering",
      "Email support",
    ],
  },
  {
    name: "6 Months",
    label: "Better value",
    price: "NPR XX,XXX",
    period: "/6 months",
    highlight: false,
    features: [
      "Everything in Monthly",
      "Up to 25 staff accounts",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Yearly",
    label: "Best value",
    price: "NPR XX,XXX",
    period: "/year",
    highlight: true,
    features: [
      "Everything in 6 Months",
      "Unlimited staff accounts",
      "Priority phone support",
      "Full analytics suite",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
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
            Pricing
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            Simple pricing for{" "}
            <span className="text-restra-yellow">real restaurants</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg max-w-xl mx-auto">
            No hidden fees. No surprise charges. Choose the plan that fits your restaurant.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
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
                      Best Value
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wider ${
                  plan.highlight ? "text-restra-yellow" : "text-restra-text-muted"
                }`}>
                  {plan.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-restra-text">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-6">
                <span className="font-display text-3xl font-semibold text-restra-text">
                  {plan.price}
                </span>
                <span className="text-sm text-restra-text-muted">{plan.period}</span>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${
                      plan.highlight ? "text-restra-yellow" : "text-restra-cyan"
                    }`} />
                    <span className="text-sm text-restra-text-secondary">{feature}</span>
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
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-restra-text-muted">
          Prices shown as placeholders. Final pricing will be confirmed upon launch.
        </p>
      </div>
    </section>
  );
}
