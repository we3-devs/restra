"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, TrendingUp, Package, Check, X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reusable/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function RestaurantShowcase() {
  const { t } = useI18n();

  const restaurantImg = "/images/dashboard-bg.jpeg";

  return (
    <section
      aria-labelledby="restaurant-showcase-heading"
      className="relative overflow-hidden bg-restra-surface/40 border-y border-white/[0.05] py-20 lg:py-28"
    >
      {/* Ambient brand glow behind the visual */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-10 h-[34rem] w-[90%] -translate-x-1/2 rounded-full bg-restra-yellow/[0.06] blur-3xl" />
        <div className="absolute -right-32 top-28 h-80 w-80 rounded-full bg-restra-cyan/[0.05] blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-restra-yellow/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading + intro + CTAs */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-text-muted">
            <span aria-hidden="true" className="h-px w-6 bg-restra-cyan/60" />
            {t("showcase.restaurantBadge")}
          </p>
          <h2
            id="restaurant-showcase-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-restra-text sm:text-4xl"
          >
            {t("showcase.restaurantTitle")}
            <span className="text-restra-yellow">{t("showcase.restaurantTitleHighlight")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-restra-text-secondary sm:mt-5">
            {t("showcase.restaurantSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:w-auto sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-restra-yellow px-7 py-3 text-sm font-semibold text-[#241D05] shadow-lg shadow-restra-yellow/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-restra-yellow/90 hover:shadow-xl hover:shadow-restra-yellow/25"
            >
              {t("showcase.restaurantCta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-xl border border-restra-border bg-white px-7 py-3 text-sm font-semibold text-restra-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DCDCD5] hover:shadow-lg hover:shadow-black/5"
            >
              {t("showcase.restaurantSeeHow")}
            </Link>
          </div>
        </Reveal>

        {/* Visual composition */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Restaurant environment image */}
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-[2.25rem] border border-white/[0.12] shadow-2xl shadow-black/10 ring-1 ring-white/20"
            aria-hidden="true"
          >
            <Image
              src={restaurantImg}
              alt={t("home.restaurantSectionAlt")}
              priority
              fill
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover object-center"
            />
            {/* Darker warm wash so Restra UI reads well over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1C]/40 via-[#1A1C1C]/18 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,transparent_35%,rgba(15,17,16,0.35)_100%)]" />
          </div>

          {/* Floating card: New Order — bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute left-2 bottom-4 z-20 hidden w-[17.5rem] rotate-[1.6deg] sm:block lg:left-4 lg:w-[19rem] restra-float"
          >
            <div className="rounded-xl border border-restra-border bg-white/95 p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-restra-yellow/10 text-[#241D05]">
                    <ShoppingCart className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                      New Order
                    </p>
                    <p className="text-xs font-semibold text-restra-text">Table 7 · Dine-in</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-restra-text">Rs. 1,450</span>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs text-restra-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-restra-text-muted" />
                  Burger ×2
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-restra-text-muted" />
                  Fries ×1
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-restra-text-muted" />
                  Coke ×3
                </li>
              </ul>

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-restra-border bg-white px-3 py-2 text-xs font-semibold text-restra-text transition-all hover:border-restra-border-strong hover:shadow-sm"
                  aria-label="Decline order"
                >
                  <X className="h-3.5 w-3.5" />
                  Decline
                </button>
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-restra-yellow px-3 py-2 text-xs font-semibold text-[#241D05] shadow-sm shadow-restra-yellow/20 transition-all hover:bg-restra-yellow/90 hover:shadow-md hover:shadow-restra-yellow/25"
                  aria-label="Accept order"
                >
                  <Check className="h-3.5 w-3.5" />
                  Accept
                </button>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Weekly Sales — upper-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute right-0 top-6 z-20 hidden w-[17.5rem] sm:block lg:right-4 lg:w-[19rem] restra-float-delayed"
          >
            <div className="rounded-xl border border-restra-border bg-white/95 p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                Weekly Sales
              </p>
              <p className="mt-0.5 font-display text-xl font-semibold text-restra-text">
                Rs. 92,450
              </p>

              <div className="mt-3 flex items-center gap-3">
                {/* Simple donut-ish visualization */}
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white/60 shadow-inner">
                  <svg
                    viewBox="0 0 36 36"
                    className="h-full w-full -rotate-90"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="18" r="15.5" className="text-restra-border" fill="none" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#0891B2"
                      strokeWidth="3"
                      strokeDasharray="48 207"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#0D9668"
                      strokeWidth="3"
                      strokeDasharray="32 207"
                      strokeDashoffset="-48"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#D4A017"
                      strokeWidth="3"
                      strokeDasharray="20 207"
                      strokeDashoffset="-80"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#0891B2]" />
                        Dine-in
                      </span>
                      <span className="font-semibold text-restra-text">48%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#0D9668]" />
                        Delivery
                      </span>
                      <span className="font-semibold text-restra-text">32%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                        Takeout
                      </span>
                      <span className="font-semibold text-restra-text">20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Today's Orders — upper-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute left-2 top-6 z-20 hidden w-[13.5rem] sm:block lg:left-4 lg:w-[15rem] restra-float"
            data-card="orders"
          >
            <div className="rounded-xl border border-restra-border bg-white/95 p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-restra-cyan/10 text-restra-cyan">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                      Today&rsquo;s Orders
                    </p>
                    <p className="text-lg font-semibold text-restra-text">128</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                  +14.2%
                </span>
              </div>

              {/* Minimal upward trend */}
              <div className="mt-3 flex items-end gap-[4px] h-9">
                {[36, 52, 44, 68, 58, 74, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${i >= 6 ? "bg-restra-yellow" : "bg-restra-yellow/30"}`}
                    style={{ height: `${h}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-restra-text-muted">
                <span>9am</span>
                <span>3pm</span>
                <span>9pm</span>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Inventory — lower-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute right-0 bottom-4 z-20 hidden w-[13.5rem] sm:block lg:right-4 lg:w-[15rem] restra-float-delayed"
          >
            <div className="rounded-xl border border-restra-border bg-white/95 p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-restra-yellow/10 text-restra-yellow">
                  <Package className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                    Inventory
                  </p>
                  <p className="text-sm font-semibold text-restra-text">Low Stock: 4 items</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-lg border border-restra-border bg-restra-surface/50 px-3 py-1.5">
                <span className="text-[11px] text-restra-text-muted">Updated</span>
                <span className="text-[11px] font-semibold text-restra-text">Just now</span>
              </div>

              <div className="mt-2.5 flex items-center gap-2 text-[11px] text-restra-text-secondary">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-restra-border bg-white px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  synced
                </span>
                <span className="text-[10px] text-restra-text-muted">kitchen</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative foreground dots: subtle restaurant/grid cue */}
          <div className="pointer-events-none absolute -z-10 left-[12%] top-[14%] hidden h-20 w-20 rounded-full bg-restra-yellow/8 blur-2xl sm:block lg:left-[14%] lg:top-[16%]" aria-hidden="true" />
          <div className="pointer-events-none absolute -z-10 right-[18%] bottom-[22%] hidden h-32 w-32 rounded-full bg-restra-cyan/8 blur-2xl sm:block lg:right-[20%] lg:bottom-[24%]" aria-hidden="true" />
        </div>
      </div>              {/* Subtle floating animation for cards — disabled for reduced motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .restra-float,
          .restra-float-delayed {
            animation: none !important;
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .restra-float {
            animation: restra-float 7s ease-in-out infinite;
          }
          .restra-float-delayed {
            animation: restra-float 8.5s ease-in-out infinite;
          }
          @keyframes restra-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
        }
      `}</style>
    </section>
  );
}
