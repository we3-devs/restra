import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import {
  Monitor,
  Receipt,
  QrCode,
  GitBranch,
  Package,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Plus,
} from "lucide-react";
import type { TranslationKey } from "@/lib/translations";

const features = [
  { icon: Monitor, titleKey: "features.pos.title" as TranslationKey, descKey: "features.pos.desc" as TranslationKey, accent: "yellow", span: "lg:col-span-2 lg:row-span-1" },
  { icon: Receipt, titleKey: "features.bill.title" as TranslationKey, descKey: "features.bill.desc" as TranslationKey, accent: "cyan", span: "lg:col-span-1" },
  { icon: QrCode, titleKey: "features.qr.title" as TranslationKey, descKey: "features.qr.desc" as TranslationKey, accent: "yellow", span: "lg:col-span-1" },
  { icon: GitBranch, titleKey: "features.tracking.title" as TranslationKey, descKey: "features.tracking.desc" as TranslationKey, accent: "cyan", span: "lg:col-span-1" },
  { icon: Package, titleKey: "features.inventory.title" as TranslationKey, descKey: "features.inventory.desc" as TranslationKey, accent: "yellow", span: "lg:col-span-1" },
  { icon: ShieldCheck, titleKey: "features.role.title" as TranslationKey, descKey: "features.role.desc" as TranslationKey, accent: "cyan", span: "lg:col-span-2 lg:row-span-1" },
  { icon: MessageSquare, titleKey: "features.chatbot.title" as TranslationKey, descKey: "features.chatbot.desc" as TranslationKey, accent: "yellow", span: "lg:col-span-1" },
  { icon: BarChart3, titleKey: "features.reports.title" as TranslationKey, descKey: "features.reports.desc" as TranslationKey, accent: "cyan", span: "lg:col-span-1" },
  { icon: Plus, titleKey: "features.more.title" as TranslationKey, descKey: "features.more.desc" as TranslationKey, accent: "muted", span: "lg:col-span-2" },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("features.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("features.title").replace(
              t("features.titleHighlight"),
              "",
            ).trimEnd() + " "}
            <span className="text-restra-yellow">{t("features.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group rounded-xl border border-white/[0.06] bg-restra-card p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-restra-card/80 ${feature.span}`}
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                  feature.accent === "yellow"
                    ? "bg-restra-yellow/10 text-restra-yellow"
                    : feature.accent === "cyan"
                      ? "bg-restra-cyan/10 text-restra-cyan"
                      : "bg-white/[0.05] text-restra-text-muted"
                }`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-restra-text">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-restra-text-secondary">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
