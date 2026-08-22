import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import {
  Layers,
  Zap,
  Eye,
  ShieldCheck,
  Receipt,
  QrCode,
  BarChart3,
} from "lucide-react";

const reasons: { icon: typeof Layers; textKey: TranslationKey }[] = [
  { icon: Layers, textKey: "why.r1" },
  { icon: Zap, textKey: "why.r2" },
  { icon: Eye, textKey: "why.r3" },
  { icon: ShieldCheck, textKey: "why.r4" },
  { icon: Receipt, textKey: "why.r5" },
  { icon: QrCode, textKey: "why.r6" },
  { icon: BarChart3, textKey: "why.r7" },
];

export default function WhyRestra() {
  const { t } = useI18n();
  const titleParts = t("why.title").split(t("why.titleHighlight"));

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-restra-surface/50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
              {t("why.badge")}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
              {titleParts[0]}
              <span className="text-restra-yellow">{t("why.titleHighlight")}</span>
              {titleParts[1] || ""}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
              {t("why.subtitle")}
            </p>
          </motion.div>

          {/* Right: Benefits list */}
          <div className="flex flex-col justify-center gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.textKey}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-xl border border-white/[0.04] bg-restra-card/50 p-4 transition-all duration-300 hover:border-white/[0.1] hover:bg-restra-card"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-restra-yellow/10">
                  <reason.icon className="h-4 w-4 text-restra-yellow" />
                </div>
                <p className="text-sm leading-relaxed text-restra-text-secondary pt-1.5">
                  {t(reason.textKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
