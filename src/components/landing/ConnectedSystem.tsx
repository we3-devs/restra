"use client";

import { useI18n } from "@/contexts/I18nContext";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  CircleDot,
  CreditCard,
  Flame,
  Package,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reusable/Reveal";
import type { TranslationKey } from "@/lib/translations";

/**
 * "One connected system" flow strip: shows how a single order propagates
 * through five modules — the core product argument as a compact diagram.
 */

type Step = {
  icon: LucideIcon;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  tone: string;
};

const steps: Step[] = [
  {
    icon: CircleDot,
    labelKey: "home.connectedStep1",
    descKey: "home.connectedStep1d",
    tone: "border-restra-cyan/30 bg-restra-cyan/[0.06] text-restra-cyan",
  },
  {
    icon: Flame,
    labelKey: "home.connectedStep2",
    descKey: "home.connectedStep2d",
    tone: "border-restra-yellow/30 bg-restra-yellow/[0.06] text-restra-yellow",
  },
  {
    icon: Package,
    labelKey: "home.connectedStep3",
    descKey: "home.connectedStep3d",
    tone: "border-restra-cyan/30 bg-restra-cyan/[0.06] text-restra-cyan",
  },
  {
    icon: CreditCard,
    labelKey: "home.connectedStep4",
    descKey: "home.connectedStep4d",
    tone: "border-restra-yellow/30 bg-restra-yellow/[0.06] text-restra-yellow",
  },
  {
    icon: BarChart3,
    labelKey: "home.connectedStep5",
    descKey: "home.connectedStep5d",
    tone: "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-400",
  },
];

export default function ConnectedSystem() {
  const { t } = useI18n();

  return (
    <section className="relative border-y border-white/[0.05] bg-restra-surface/40 py-16 lg:py-[5.6rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-text-muted">
                <span aria-hidden="true" className="h-px w-6 bg-restra-yellow/60" />
                {t("home.connectedBadge")}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-restra-text sm:text-4xl lg:text-[2.75rem]">
                {t("home.connectedTitle").replace(t("home.connectedTitleHighlight"), "").trimEnd()}{" "}
                <span className="text-restra-yellow">{t("home.connectedTitleHighlight")}</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
                {t("home.connectedSubtitle")}
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="mb-4 text-sm font-semibold text-restra-text-secondary">
                {t("home.connectedFlowTitle")}
              </p>
            </Reveal>
            <ol className="space-y-2.5">
              {steps.map((step, i) => (
                <motion.li
                  key={step.labelKey}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3.5"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      step.tone,
                    )}
                  >
                    <step.icon className="h-4.5 w-4.5" />
                  </span>
                  <div
                    className={cn(
                      "flex flex-1 items-center justify-between gap-3 rounded-xl border bg-restra-card px-3 py-2.5",
                      i % 2 === 0 ? "border-white/[0.07]" : "border-white/[0.05]",
                    )}
                  >
                    <div>
                      <p className="text-sm font-semibold text-restra-text">
                        <span className="mr-2 text-[10px] font-bold text-restra-text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {t(step.labelKey)}
                      </p>
                      <p className="mt-0.5 text-xs text-restra-text-muted">{t(step.descKey)}</p>
                    </div>
                    {i < steps.length - 1 ? (
                      <span aria-hidden="true" className="text-restra-text-muted/40">
                        ↓
                      </span>
                    ) : (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
