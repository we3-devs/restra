"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import {
  ArrowRight,
  BarChart3,
  ChefHat,
  ClipboardList,
  CreditCard,
  Monitor,
  Package,
  Pause,
  Play,
  QrCode,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reusable/Reveal";
import MockupRenderer from "@/components/mockups/MockupRenderer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

/**
 * How-it-works timeline: interactive auto-advancing stepper that follows one
 * order through the full restaurant flow. Clicking a step pauses autoplay.
 */

type Step = {
  icon: LucideIcon;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  /** Module powering this step (icon rendered in the detail panel). */
  moduleIcon: LucideIcon;
  moduleKey: TranslationKey;
  mockKey: "qr" | "kitchen" | "pos" | "inventory" | "analytics";
};

const steps: Step[] = [
  {
    icon: QrCode,
    labelKey: "qr.step1",
    descKey: "home.connectedStep1d",
    moduleIcon: Smartphone,
    moduleKey: "showcase.qrBadge",
    mockKey: "qr",
  },
  {
    icon: ClipboardList,
    labelKey: "workflow.step2",
    descKey: "workflow.step2d",
    moduleIcon: ClipboardList,
    moduleKey: "sf.orders.title",
    mockKey: "kitchen",
  },
  {
    icon: ChefHat,
    labelKey: "workflow.step3",
    descKey: "workflow.step3d",
    moduleIcon: ChefHat,
    moduleKey: "features.more.title",
    mockKey: "kitchen",
  },
  {
    icon: Monitor,
    labelKey: "workflow.step4",
    descKey: "workflow.step4d",
    moduleIcon: Monitor,
    moduleKey: "showcase.posBadge",
    mockKey: "pos",
  },
  {
    icon: CreditCard,
    labelKey: "workflow.step6",
    descKey: "workflow.step6d",
    moduleIcon: CreditCard,
    moduleKey: "showcase.posBadge",
    mockKey: "pos",
  },
  {
    icon: Package,
    labelKey: "workflow.step7",
    descKey: "workflow.step7d",
    moduleIcon: Package,
    moduleKey: "showcase.inventoryBadge",
    mockKey: "inventory",
  },
  {
    icon: BarChart3,
    labelKey: "workflow.step8",
    descKey: "workflow.step8d",
    moduleIcon: BarChart3,
    moduleKey: "showcase.analyticsBadge",
    mockKey: "analytics",
  },
];

const ROTATE_MS = 3600;

export default function HowItWorksView() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [playing]);

  const selectStep = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

  const current = steps[active];

  return (
    <main className="min-h-screen bg-restra-bg text-restra-text">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_-10%,rgba(255,212,59,0.07),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-restra-text-muted">
              <Link href="/" className="transition-colors hover:text-restra-yellow">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-restra-text-secondary">{t("hiw.badge")}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
              {t("hiw.badge")}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {t("hiw.title").replace(t("hiw.titleHighlight"), "").trimEnd()}{" "}
              <span className="text-restra-yellow">{t("hiw.titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
              {t("hiw.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("hiw.timelineTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary lg:text-base">
                {t("hiw.timelineSubtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={playing}
              aria-label={playing ? t("hiw.pause") : t("hiw.play")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs font-semibold text-restra-text transition-colors hover:border-restra-yellow/40 hover:text-restra-yellow"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? t("hiw.pause") : t("hiw.play")}
            </button>
          </Reveal>

          {/* Stepper rail */}
          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-white/[0.07] lg:block" />
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={step.labelKey}>
                    <button
                      type="button"
                      onClick={() => selectStep(i)}
                      aria-current={isActive ? "step" : undefined}
                      className={cn(
                        "group relative flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 lg:flex-col lg:items-start",
                        isActive
                          ? "border-restra-yellow/40 bg-restra-yellow/[0.06]"
                          : "border-white/[0.06] bg-restra-card hover:border-white/[0.14]",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-restra-bg transition-colors",
                          isActive
                            ? "border-restra-yellow text-restra-yellow"
                            : isDone
                              ? "border-restra-cyan/60 text-restra-cyan"
                              : "border-white/[0.1] text-restra-text-muted",
                        )}
                      >
                        <step.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-restra-text-muted">
                          {t("workflow.badge")} {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "block truncate text-xs font-semibold",
                            isActive ? "text-restra-yellow" : "text-restra-text",
                          )}
                        >
                          {t(step.labelKey)}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Detail panel */}
          <div className="mt-10 grid items-center gap-8 rounded-2xl border border-white/[0.07] bg-restra-card p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
            <div>
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
                <current.moduleIcon className="h-4 w-4" />
                {t(current.moduleKey)}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-restra-text sm:text-3xl">
                {t(current.labelKey)}
              </h3>
              <p className="mt-3 leading-relaxed text-restra-text-secondary">
                {t(current.descKey)}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {steps.map((step, i) => (
                  <button
                    key={step.labelKey}
                    type="button"
                    onClick={() => selectStep(i)}
                    aria-label={t(step.labelKey)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === active ? "w-7 bg-restra-yellow" : "w-1.5 bg-white/[0.15] hover:bg-white/[0.3]",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <MockupRenderer mock={current.mockKey} />
            </div>
          </div>
        </div>
      </section>

      {/* Statuses strip */}
      <section className="border-t border-white/[0.05] bg-restra-surface/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("hiw.statusTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary lg:text-base">
              {t("hiw.statusSubtitle")}
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {(
              [
                { key: "workflow.statusNew", tone: "border-restra-cyan/40 bg-restra-cyan/[0.06] text-restra-cyan" },
                { key: "workflow.statusConfirmed", tone: "border-restra-cyan/40 bg-restra-cyan/[0.06] text-restra-cyan" },
                { key: "workflow.statusPreparing", tone: "border-restra-yellow/40 bg-restra-yellow/[0.06] text-restra-yellow" },
                { key: "workflow.statusReady", tone: "border-restra-cyan/40 bg-restra-cyan/[0.06] text-restra-cyan" },
                { key: "workflow.statusServed", tone: "border-emerald-500/40 bg-emerald-500/[0.06] text-emerald-400" },
              ] as const
            ).map((status, i) => (
              <Reveal key={status.key} delay={i * 0.05}>
                <li className={cn("rounded-xl border p-4", status.tone)}>
                  <p className="text-[9px] font-bold uppercase tracking-wider opacity-70">
                    Status {i + 1}
                  </p>
                  <p className="mt-1 text-sm font-bold">{t(status.key)}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-restra-text sm:text-4xl">
              {t("hiw.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-restra-text-secondary">
              {t("hiw.ctaSubtitle")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
              >
                {t("cta.talkToUs")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                {t("nav.features")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subtle background texture */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.04}
          duration={4}
          className="[mask-image:radial-gradient(ellipse_50%_40%_at_80%_10%,black,transparent)]"
        />
      </div>
    </main>
  );
}

