import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { AlertTriangle, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";

const inventoryItems = [
  { name: "Basmati Rice", unit: "kg", current: 2, min: 10, status: "low" as const, lastUpdate: "2h ago", movement: "out" as const },
  { name: "Chicken Breast", unit: "kg", current: 5, min: 8, status: "low" as const, lastUpdate: "1h ago", movement: "out" as const },
  { name: "Cooking Oil", unit: "L", current: 12, min: 5, status: "ok" as const, lastUpdate: "3h ago", movement: "out" as const },
  { name: "Tomatoes", unit: "kg", current: 8, min: 5, status: "ok" as const, lastUpdate: "30m ago", movement: "in" as const },
  { name: "Paneer", unit: "kg", current: 3, min: 4, status: "low" as const, lastUpdate: "45m ago", movement: "out" as const },
  { name: "Onions", unit: "kg", current: 15, min: 5, status: "ok" as const, lastUpdate: "5h ago", movement: "in" as const },
  { name: "Cream", unit: "L", current: 4, min: 3, status: "ok" as const, lastUpdate: "1h ago", movement: "out" as const },
  { name: "Garam Masala", unit: "g", current: 200, min: 100, status: "ok" as const, lastUpdate: "2h ago", movement: "out" as const },
];

export default function InventoryPreview() {
  const { t } = useI18n();
  const lowCount = inventoryItems.filter((i) => i.status === "low").length;
  const titleParts = t("inv.title").split(t("inv.titleHighlight"));

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-restra-surface/50" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
              {t("inv.badge")}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
              {titleParts[0]}
              <span className="text-restra-yellow">{t("inv.titleHighlight")}</span>
              {titleParts[1] || ""}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
              {t("inv.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-restra-yellow" />
                  <span className="text-[11px] font-medium text-restra-text-muted uppercase tracking-wider">
                    {t("inv.lowStock")}
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-semibold text-restra-yellow">{lowCount}</p>
                <p className="text-[11px] text-restra-text-muted">{t("inv.itemsNeed")}</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-restra-cyan" />
                  <span className="text-[11px] font-medium text-restra-text-muted uppercase tracking-wider">
                    {t("inv.totalItems")}
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-semibold text-restra-text">{inventoryItems.length}</p>
                <p className="text-[11px] text-restra-text-muted">{t("inv.trackedIngredients")}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Inventory table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-white/[0.06] bg-restra-card overflow-hidden">
              <div className="grid grid-cols-[1fr_60px_70px_70px_80px] gap-2 border-b border-white/[0.06] bg-restra-bg/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-restra-text-muted">
                <span>{t("inv.ingredient")}</span>
                <span className="text-right">{t("inv.stock")}</span>
                <span className="text-right">{t("inv.min")}</span>
                <span className="text-right">{t("inv.status")}</span>
                <span className="text-right">{t("inv.update")}</span>
              </div>

              {inventoryItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.2 + i * 0.04 }}
                  className={`grid grid-cols-[1fr_60px_70px_70px_80px] gap-2 items-center px-4 py-2.5 text-sm border-b border-white/[0.03] last:border-b-0 ${
                    item.status === "low" ? "bg-restra-yellow/[0.02]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.status === "low" && (
                      <div className="h-1.5 w-1.5 rounded-full bg-restra-yellow animate-pulse" />
                    )}
                    <span className="text-xs font-medium text-restra-text truncate">{item.name}</span>
                  </div>
                  <span className={`text-right text-xs font-semibold ${item.status === "low" ? "text-restra-yellow" : "text-restra-text"}`}>
                    {item.current} {item.unit}
                  </span>
                  <span className="text-right text-xs text-restra-text-muted">
                    {item.min} {item.unit}
                  </span>
                  <div className="flex justify-end">
                    {item.status === "low" ? (
                      <span className="rounded-full bg-restra-yellow/10 px-2 py-0.5 text-[9px] font-semibold text-restra-yellow uppercase">
                        {t("inv.low")}
                      </span>
                    ) : (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 uppercase">
                        {t("inv.ok")}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    {item.movement === "in" ? (
                      <ArrowDownRight className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <ArrowUpRight className="h-3 w-3 text-restra-cyan" />
                    )}
                    <span className="text-[10px] text-restra-text-muted">{item.lastUpdate}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
