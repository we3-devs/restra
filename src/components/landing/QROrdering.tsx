import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { QrCode, ShoppingCart, CheckCircle2 } from "lucide-react";

const menuItems = [
  { name: "Butter Chicken", price: "NPR 450", category: "Mains" },
  { name: "Garlic Naan (2)", price: "NPR 120", category: "Breads" },
  { name: "Mango Lassi", price: "NPR 180", category: "Drinks" },
  { name: "Veg Momos (8)", price: "NPR 220", category: "Starters" },
];

const stepKeys: { step: string; key: TranslationKey }[] = [
  { step: "01", key: "qr.step1" },
  { step: "02", key: "qr.step2" },
  { step: "03", key: "qr.step3" },
  { step: "04", key: "qr.step4" },
];

export default function QROrdering() {
  const { t } = useI18n();
  const titleParts = t("qr.title").split(t("qr.titleHighlight"));

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
              {t("qr.badge")}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
              {titleParts[0]}
              <span className="text-restra-yellow">{t("qr.titleHighlight")}</span>
              {titleParts[1] || ""}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
              {t("qr.subtitle")}
            </p>

            <div className="mt-8 space-y-4">
              {stepKeys.map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-restra-yellow/10 font-display text-xs font-bold text-restra-yellow">
                    {item.step}
                  </span>
                  <span className="text-sm text-restra-text-secondary">{t(item.key)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="mx-auto w-[280px] rounded-[2.5rem] border-[3px] border-white/[0.1] bg-restra-bg p-2 shadow-2xl shadow-black/50">
                <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-white/[0.06]" />

                <div className="overflow-hidden rounded-[2rem] bg-restra-surface">
                  <div className="flex items-center justify-between px-5 py-2">
                    <span className="text-[10px] font-medium text-restra-text-muted">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-3 rounded-sm bg-restra-text-muted/40" />
                      <div className="h-2 w-3 rounded-sm bg-restra-text-muted/40" />
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="mb-4 text-center">
                      <p className="font-display text-base font-semibold text-restra-text">
                        Curry House
                      </p>
                      <p className="text-[10px] text-restra-text-muted">{t("qr.scanToOrder")}</p>
                    </div>

                    <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-xl border-2 border-dashed border-restra-yellow/30 bg-restra-yellow/5">
                      <QrCode className="h-12 w-12 text-restra-yellow/60" />
                    </div>

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("qr.popularItems")}
                    </p>

                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                        className="mb-2 flex items-center justify-between rounded-lg bg-restra-bg/60 px-3 py-2.5"
                      >
                        <div>
                          <p className="text-xs font-medium text-restra-text">{item.name}</p>
                          <p className="text-[9px] text-restra-text-muted">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-restra-yellow">{item.price}</span>
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03]">
                            <span className="text-[8px] text-restra-text-muted">+</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <div className="mt-3 flex items-center justify-between rounded-lg bg-restra-yellow px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="h-3.5 w-3.5 text-restra-bg" />
                        <span className="text-xs font-semibold text-restra-bg">2 items</span>
                      </div>
                      <span className="text-xs font-bold text-restra-bg">NPR 570</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[10px] font-medium text-emerald-400">{t("qr.orderSent")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-x-16 top-1/4 h-48 rounded-full bg-restra-yellow/[0.04] blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
