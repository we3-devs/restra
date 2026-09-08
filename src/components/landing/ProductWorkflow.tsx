"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Boxes,
  ChefHat,
  ClipboardList,
  PackageCheck,
  ReceiptText,
  ScanLine,
  Settings2,
  Users,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import Reveal from "@/components/reusable/Reveal";
import OrderLifecycle3D from "@/components/landing/OrderLifecycle3D";

const workflowStepKeys = [
  { labelKey: "workflow.step1", detailKey: "workflow.step1d", icon: Users },
  { labelKey: "workflow.step2", detailKey: "workflow.step2d", icon: ScanLine },
  { labelKey: "workflow.step3", detailKey: "workflow.step3d", icon: ChefHat },
  { labelKey: "workflow.step4", detailKey: "workflow.step4d", icon: BellRing },
  { labelKey: "workflow.step5", detailKey: "workflow.step5d", icon: PackageCheck },
  { labelKey: "workflow.step6", detailKey: "workflow.step6d", icon: ReceiptText },
  { labelKey: "workflow.step7", detailKey: "workflow.step7d", icon: Boxes },
  { labelKey: "workflow.step8", detailKey: "workflow.step8d", icon: BarChart3 },
] as const;

const orderStepKeys = [
  { labelKey: "workflow.statusNew", descKey: "workflow.orderNewDesc", icon: ClipboardList, color: "border-restra-cyan/30 bg-restra-cyan/10", textColor: "text-restra-cyan", dotColor: "bg-restra-cyan", image: "/order-lifecycle/order-new.png" },
  { labelKey: "workflow.statusConfirmed", descKey: "workflow.orderConfirmedDesc", icon: Settings2, color: "border-blue-400/30 bg-blue-400/10", textColor: "text-blue-300", dotColor: "bg-blue-400", image: "/order-lifecycle/order-confirmed.png" },
  { labelKey: "workflow.statusPreparing", descKey: "workflow.orderPreparingDesc", icon: ChefHat, color: "border-restra-yellow/30 bg-restra-yellow/10", textColor: "text-restra-yellow", dotColor: "bg-restra-yellow", image: "/order-lifecycle/order-preparing.png" },
  { labelKey: "workflow.statusReady", descKey: "workflow.orderReadyDesc", icon: PackageCheck, color: "border-emerald-400/30 bg-emerald-400/10", textColor: "text-emerald-300", dotColor: "bg-emerald-400", image: "/order-lifecycle/order-ready.png" },
  { labelKey: "workflow.statusServed", descKey: "workflow.orderServedDesc", icon: BarChart3, color: "border-violet-400/30 bg-violet-400/10", textColor: "text-violet-300", dotColor: "bg-violet-400", image: "/order-lifecycle/order-served.png" },
] as const;

const orderLifecycleKeys = orderStepKeys.map((step) => ({
  statusKey: step.labelKey,
  textColor: step.textColor,
}));

export default function ProductWorkflow() {
  const { t } = useI18n();
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);

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
        </Reveal>
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
