import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import {
  Smartphone,
  ChefHat,
  CreditCard,
  PackageCheck,
  BarChart3,
  CircleDot,
  CheckCircle2,
  Clock,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

const workflowStepKeys: { icon: typeof Smartphone; labelKey: TranslationKey; detailKey: TranslationKey }[] = [
  { icon: Smartphone, labelKey: "workflow.step1", detailKey: "workflow.step1d" },
  { icon: UtensilsCrossed, labelKey: "workflow.step2", detailKey: "workflow.step2d" },
  { icon: ChefHat, labelKey: "workflow.step3", detailKey: "workflow.step3d" },
  { icon: Clock, labelKey: "workflow.step4", detailKey: "workflow.step4d" },
  { icon: Flame, labelKey: "workflow.step5", detailKey: "workflow.step5d" },
  { icon: CreditCard, labelKey: "workflow.step6", detailKey: "workflow.step6d" },
  { icon: PackageCheck, labelKey: "workflow.step7", detailKey: "workflow.step7d" },
  { icon: BarChart3, labelKey: "workflow.step8", detailKey: "workflow.step8d" },
];

const orderLifecycleKeys: { statusKey: TranslationKey; color: string; textColor: string }[] = [
  { statusKey: "workflow.statusNew", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { statusKey: "workflow.statusConfirmed", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { statusKey: "workflow.statusPreparing", color: "bg-restra-yellow", textColor: "text-restra-yellow" },
  { statusKey: "workflow.statusReady", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { statusKey: "workflow.statusServed", color: "bg-emerald-500", textColor: "text-emerald-400" },
];

const orderStepKeys: { icon: typeof CircleDot; labelKey: TranslationKey; descKey: TranslationKey; color: string; textColor: string; dotColor: string }[] = [
  { icon: CircleDot, labelKey: "workflow.statusNew", descKey: "workflow.orderNewDesc", color: "border-restra-cyan/40 bg-restra-cyan/10", textColor: "text-restra-cyan", dotColor: "bg-restra-cyan" },
  { icon: CheckCircle2, labelKey: "workflow.statusConfirmed", descKey: "workflow.orderConfirmedDesc", color: "border-restra-cyan/40 bg-restra-cyan/10", textColor: "text-restra-cyan", dotColor: "bg-restra-cyan" },
  { icon: Flame, labelKey: "workflow.statusPreparing", descKey: "workflow.orderPreparingDesc", color: "border-restra-yellow/40 bg-restra-yellow/10", textColor: "text-restra-yellow", dotColor: "bg-restra-yellow" },
  { icon: UtensilsCrossed, labelKey: "workflow.statusReady", descKey: "workflow.orderReadyDesc", color: "border-restra-cyan/40 bg-restra-cyan/10", textColor: "text-restra-cyan", dotColor: "bg-restra-cyan" },
  { icon: CheckCircle2, labelKey: "workflow.statusServed", descKey: "workflow.orderServedDesc", color: "border-emerald-500/40 bg-emerald-500/10", textColor: "text-emerald-400", dotColor: "bg-emerald-500" },
];

export default function ProductWorkflow() {
  const { t } = useI18n();

  return (
    <section id="workflow" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(34,211,238,0.03),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("workflow.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("workflow.title").replace(t("workflow.titleHighlight"), "").trimEnd() + " "}
            <span className="text-restra-yellow">{t("workflow.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
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
                <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4 transition-all duration-300 hover:border-white/[0.12]">
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

          {/* Desktop: horizontal pipeline */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              {orderStepKeys.map((step, i) => (
                <div key={step.labelKey} className="flex items-center gap-2 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex-1 rounded-xl border border-white/[0.06] bg-restra-card p-4"
                  >
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg border ${step.color}`}>
                      <step.icon className={`h-4 w-4 ${step.textColor}`} />
                    </div>
                    <p className={`text-sm font-semibold ${step.textColor}`}>{t(step.labelKey)}</p>
                    <p className="mt-1 text-xs text-restra-text-muted">{t(step.descKey)}</p>
                  </motion.div>
                  {i < orderStepKeys.length - 1 && (
                    <div className="flex h-px w-6 shrink-0 items-center justify-center">
                      <div className="h-px w-full bg-gradient-to-r from-white/[0.12] to-white/[0.04]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden">
            <div className="relative ml-4 space-y-4 border-l border-white/[0.06] pl-6">
              {orderStepKeys.map((step, i) => (
                <motion.div
                  key={step.labelKey}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className={`absolute -left-[calc(1.5rem+5px)] top-3 flex h-[10px] w-[10px] items-center justify-center rounded-full border ${step.color}`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${step.dotColor}`} />
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4">
                    <p className={`text-sm font-semibold ${step.textColor}`}>{t(step.labelKey)}</p>
                    <p className="mt-1 text-xs text-restra-text-muted">{t(step.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status visualization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 rounded-xl border border-white/[0.06] bg-restra-card p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-restra-text">#1042</span>
                <span className="text-xs text-restra-text-muted">Table 7 · Butter Chicken, Naan, Lassi</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {orderLifecycleKeys.map((s, i) => (
                  <div key={s.statusKey} className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${s.textColor} bg-white/[0.03] border border-current/20`}>
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
