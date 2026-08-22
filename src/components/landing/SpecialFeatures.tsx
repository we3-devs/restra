import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { Check, TrendingUp, Package, Wallet, AlertTriangle, CheckCircle2 } from "lucide-react";
import MultiDeviceShowcase from "./MultiDeviceShowcase";

const orderBulletKeys: TranslationKey[] = ["sf.orders.b1", "sf.orders.b2", "sf.orders.b3"];

function OrderMockup() {
  return (
    <div className="relative aspect-16/11 w-full overflow-hidden rounded-xl border border-white/6 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src="/features/manage-orders.png"
          alt="Restra order management dashboard"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

const inventoryStats = [
  { key: "total", label: "Total Items", value: "1,245", icon: Package, accent: "text-restra-cyan", bg: "bg-restra-cyan/10" },
  { key: "value", label: "Total Value", value: "542,000", icon: Wallet, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "low", label: "Low Stock", value: "4", icon: AlertTriangle, accent: "text-restra-yellow", bg: "bg-restra-yellow/10" },
  { key: "stock", label: "In Stock", value: "1,192", icon: CheckCircle2, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
];

function InventoryMockup() {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % inventoryStats.length);
    }, 900);
    return () => clearInterval(timer);
  }, [hovering]);

  return (
    <div
      className="relative h-56 w-full overflow-hidden pl-10 pt-8"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setCurrent(0);
      }}
    >
      {inventoryStats.map((stat, i) => {
        const offset = (i - current + inventoryStats.length) % inventoryStats.length;
        const isFront = offset === 0;
        return (
          <motion.div
            key={stat.key}
            animate={{
              x: -offset * 34,
              y: -offset * 24,
              rotate: -offset * 5,
              scale: 1 - offset * 0.06,
              opacity: offset > 2 ? 0 : 1,
              zIndex: inventoryStats.length - offset,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-40 rounded-2xl border border-white/[0.08] bg-restra-bg/90 p-4 shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.accent}`} />
              </div>
              {isFront && (
                <span className="rounded-md bg-restra-text px-2 py-0.5 text-[10px] font-semibold text-restra-bg">
                  In
                </span>
              )}
            </div>
            <p className="mt-4 text-xs text-restra-text-muted">{stat.label}</p>
            <p className="mt-1 font-display text-2xl font-semibold text-restra-text">{stat.value}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/6 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src="/features/billing-invoice.png"
          alt="Restra invoice and billing example"
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

function QrMockup() {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-xl border border-white/6 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src="/features/qr-menu.png"
          alt="Restra digital QR menu card"
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [40, 65, 50, 80, 60, 90];
  return (
    <div className="flex h-56 w-full flex-col justify-center rounded-xl border border-white/6 bg-restra-bg/60 p-5">
      <div className="mb-4 flex items-center gap-1.5 text-[11px] font-semibold text-restra-cyan">
        <TrendingUp className="h-3.5 w-3.5" />
        Revenue trending up
      </div>
      <div className="flex h-28 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-linear-to-t from-restra-cyan/50 to-restra-cyan/10"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SpecialFeatures() {
  const { t } = useI18n();
  const titleParts = t("sf.title").split(t("sf.titleHighlight"));

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("sf.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {titleParts[0]}
            <span className="text-restra-yellow">{t("sf.titleHighlight")}</span>
            {titleParts[1] || ""}
          </h2>
        </motion.div>

        <div className="space-y-5">
          {/* Order Management — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 rounded-2xl border border-white/[0.06] bg-restra-card p-6 lg:grid-cols-2 lg:items-center lg:p-10"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                {t("sf.orders.title")}{" "}
                <span className="text-restra-cyan">{t("sf.orders.highlight")}</span>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-restra-text-secondary">
                {t("sf.orders.desc")}
              </p>
              <ul className="mt-5 space-y-2.5">
                {orderBulletKeys.map((k) => (
                  <li key={k} className="flex items-center gap-2.5 text-sm text-restra-text-secondary">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>
            <OrderMockup />
          </motion.div>

          {/* Inventory + Billing — two columns */}
          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-restra-card bg-[radial-gradient(ellipse_120%_80%_at_0%_0%,rgba(34,211,238,0.05),transparent)] p-6"
            >
              <h3 className="font-display text-lg font-semibold text-restra-text">
                {t("sf.inventory.title")}{" "}
                <span className="text-restra-yellow">{t("sf.inventory.highlight")}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                {t("sf.inventory.desc")}
              </p>
              <div className="mt-5">
                <InventoryMockup />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-restra-card bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(255,212,59,0.05),transparent)] p-6"
            >
              <h3 className="font-display text-lg font-semibold text-restra-text">
                {t("sf.billing.title")}{" "}
                <span className="text-restra-cyan">{t("sf.billing.highlight")}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                {t("sf.billing.desc")}
              </p>
              <div className="mt-5 flex-1">
                <BillingMockup />
              </div>
            </motion.div>
          </div>

          {/* QR + Analytics — two columns */}
          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-restra-card bg-[radial-gradient(ellipse_120%_80%_at_0%_0%,rgba(255,212,59,0.05),transparent)] p-6"
            >
              <h3 className="font-display text-lg font-semibold text-restra-text">
                {t("sf.qr.title")} <span className="text-restra-yellow">{t("sf.qr.highlight")}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">{t("sf.qr.desc")}</p>
              <div className="mt-5">
                <QrMockup />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-restra-card bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(34,211,238,0.05),transparent)] p-6"
            >
              <h3 className="font-display text-lg font-semibold text-restra-text">
                {t("sf.analytics.title")} <span className="text-restra-cyan">{t("sf.analytics.highlight")}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">{t("sf.analytics.desc")}</p>
              <div className="mt-5">
                <AnalyticsMockup />
              </div>
            </motion.div>
          </div>

          {/* Available on any device — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 rounded-2xl border border-white/[0.06] bg-restra-card p-6 lg:grid-cols-2 lg:items-center lg:p-10"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                {t("sf.device.title")} <span className="text-restra-yellow">{t("sf.device.highlight")}</span>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-restra-text-secondary">
                {t("sf.device.desc")}
              </p>
            </div>
            <MultiDeviceShowcase compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
