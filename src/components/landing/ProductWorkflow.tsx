import { motion } from "framer-motion";
import {
  BarChart3,
  ChefHat,
  ClipboardList,
  PackageCheck,
  Settings2,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import Reveal from "@/components/reusable/Reveal";

const workflowSteps = [
  {
    number: "01",
    label: "STEP 1",
    title: "Set Up Your Restaurant",
    description:
      "Add your restaurant, tables, menu, staff, and essential settings in minutes. Everything is organized in one simple workspace.",
    icon: Settings2,
  },
  {
    number: "02",
    label: "STEP 2",
    title: "Capture Every Order",
    description:
      "Take dine-in, takeaway, delivery, and QR orders in one connected flow, with every detail visible to your team.",
    icon: ClipboardList,
  },
  {
    number: "03",
    label: "STEP 3",
    title: "Run Your Kitchen",
    description:
      "Send the right order to the kitchen, track preparation status, and keep service moving without missed tickets.",
    icon: ChefHat,
  },
  {
    number: "04",
    label: "STEP 4",
    title: "Stay In Control",
    description:
      "Keep inventory, staff activity, billing, and daily operations organized from one powerful restaurant workspace.",
    icon: PackageCheck,
  },
  {
    number: "05",
    label: "STEP 5",
    title: "Track & Grow",
    description:
      "Monitor sales, performance, and business insights so you can make smarter decisions and grow your restaurant.",
    icon: BarChart3,
  },
];

export default function ProductWorkflow() {
  const { t } = useI18n();

  return (
    <section id="workflow" className="relative overflow-hidden py-[4.8rem] lg:py-[6.4rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_18%_50%,rgba(34,211,238,0.04),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("workflow.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("workflow.title").replace(t("workflow.titleHighlight"), "").trimEnd()}{" "}
            <span className="text-restra-yellow">{t("workflow.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
            {t("workflow.subtitle")}
          </p>
        </motion.div>

        {/* Day in the restaurant flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
            {t("workflow.dayTitle")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowStepKeys.map((step, i) => (
              <motion.div
                key={step.labelKey}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative"
              >
                <div className="rounded-xl border border-white/[0.06] bg-restra-card p-3 transition-all duration-300 hover:border-white/[0.12]">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-restra-yellow/10">
                      <step.icon className="h-4 w-4 text-restra-yellow" />
                    </div>
                    <span className="text-[10px] font-bold text-restra-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-restra-text">{t(step.labelKey)}</h4>
                  <p className="mt-1 text-xs text-restra-text-muted">{t(step.detailKey)}</p>
                </div>
                {i < workflowStepKeys.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-white/[0.08] lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Order Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
            {t("workflow.orderLifecycle")}
          </h3>

          {/* 3D showcase */}
          <OrderLifecycle3D
            steps={orderStepKeys.map((step) => ({
              key: step.labelKey,
              icon: step.icon,
              label: t(step.labelKey),
              desc: t(step.descKey),
              color: step.color,
              textColor: step.textColor,
              dotColor: step.dotColor,
              image: step.image,
            }))}
            onActiveChange={setActiveLifecycleStep}
          />

          {/* Status visualization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 rounded-xl border border-white/[0.06] bg-restra-card p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-restra-text">#1042</span>
                <span className="text-xs text-restra-text-muted">Table 7 · Butter Chicken, Naan, Lassi</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {orderLifecycleKeys.map((s, i) => (
                  <div key={s.statusKey} className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${s.textColor} border ${
                        i === activeLifecycleStep
                          ? "bg-current/10 border-current shadow-sm scale-105"
                          : "bg-white/[0.03] border-current/20"
                      }`}
                    >
                      {t(s.statusKey)}
                    </span>
                    {i < orderLifecycleKeys.length - 1 && (
                      <span className="text-restra-text-muted/30">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
