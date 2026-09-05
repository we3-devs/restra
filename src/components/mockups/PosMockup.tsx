"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, QrCode, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Realistic RESTRA POS terminal mockup: left order cart, right menu keypad,
 * bottom bill strip. Static markup with tiny CSS transitions only — reads as a
 * product screenshot, not an abstraction.
 */

const menuItems = [
  { name: "Momos (buff)", price: 180, tag: "popular" },
  { name: "Butter Chicken", price: 420, tag: null },
  { name: "Chicken Thukpa", price: 320, tag: null },
  { name: "Veg Fried Rice", price: 250, tag: null },
  { name: "Naan", price: 60, tag: null },
  { name: "Mango Lassi", price: 150, tag: "drink" },
  { name: "Chowmein", price: 220, tag: "popular" },
  { name: "Gulab Jamun", price: 120, tag: null },
];

const cartItems = [
  { name: "Butter Chicken", qty: 2, price: 840 },
  { name: "Naan", qty: 3, price: 180 },
  { name: "Mango Lassi", qty: 2, price: 300 },
];

export default function PosMockup({ className }: { className?: string }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const vat = Math.round(subtotal * 0.13);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-restra-bg shadow-xl shadow-black/20",
        className,
      )}
      role="img"
      aria-label="RESTRA point-of-sale screen showing a table order being billed"
    >
      {/* App top bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
            R
          </span>
          <span className="text-xs font-semibold text-restra-text">RESTRA POS</span>
          <span className="ml-2 rounded-md bg-restra-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-restra-cyan">
            Dine-in · Table 7
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md border border-white/[0.08] px-2 py-1 text-[10px] text-restra-text-muted">
            Manager
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1.15fr]">
        {/* Cart */}
        <div className="flex flex-col border-r border-white/[0.06] p-3.5">
          <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-restra-text-muted">
            Order #1042
          </p>
          <div className="space-y-1.5">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-restra-card px-2.5 py-2"
              >
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-restra-text">{item.name}</p>
                  <p className="text-[10px] text-restra-text-muted">
                    {item.qty} × {(item.price / item.qty).toFixed(0)}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-restra-text">
                  {item.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-3 space-y-1 border-t border-white/[0.06] pt-2.5 text-[10px] text-restra-text-secondary">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT 13%</span>
              <span>Rs. {vat.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-white/[0.06] pt-1.5 text-xs font-bold text-restra-text">
              <span>Total</span>
              <span className="text-restra-yellow">Rs. {(subtotal + vat).toLocaleString()}</span>
            </div>
          </div>

          {/* Payment actions */}
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-restra-yellow px-2 py-2 text-[10px] font-bold text-restra-bg">
              <Receipt className="h-3 w-3" /> Print Bill
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-lg border border-restra-cyan/30 bg-restra-cyan/10 px-2 py-2 text-[10px] font-bold text-restra-cyan">
              <CreditCard className="h-3 w-3" /> Pay Card
            </div>
          </div>
        </div>

        {/* Menu keypad */}
        <div className="p-3.5">
          <div className="mb-2.5 flex items-center gap-2">
            <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-white/[0.06] bg-restra-card px-2.5 py-1.5 text-[10px] text-restra-text-muted">
              <QrCode className="h-3 w-3" />
              Search menu…
            </div>
            <span className="rounded-md bg-restra-cyan/10 px-2 py-1 text-[10px] font-semibold text-restra-cyan">
              QR
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn(
                  "relative rounded-lg border px-2.5 py-2",
                  i < 2
                    ? "border-restra-yellow/40 bg-restra-yellow/[0.07]"
                    : "border-white/[0.05] bg-restra-card",
                )}
              >
                <p className="truncate text-[11px] font-medium text-restra-text">{item.name}</p>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[10px] text-restra-text-muted">Rs. {item.price}</span>
                  {i < 2 ? (
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-restra-yellow text-[8px] font-bold text-restra-bg">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                  ) : null}
                </div>
                {item.tag === "popular" ? (
                  <span className="absolute -top-1.5 right-1.5 rounded-full bg-restra-cyan px-1.5 py-px text-[8px] font-bold text-restra-bg">
                    POPULAR
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
