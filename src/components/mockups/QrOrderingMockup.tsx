import Image from "next/image";
import { Check, ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * QR ordering customer-phone mockup: digital menu with cart and order-status
 * state, plus a printed table QR card beside it.
 */

const menuItems = [
  { name: "Butter Chicken", price: 420, tag: "Chef's pick" },
  { name: "Chicken Thukpa", price: 320, tag: null },
  { name: "Veg Momos", price: 180, tag: "Popular" },
  { name: "Mango Lassi", price: 150, tag: null },
];

export default function QrOrderingMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative flex items-end justify-center gap-5", className)}
      role="img"
      aria-label="Customer phone showing the RESTRA digital menu ordered by scanning a table QR code"
    >
      {/* Phone */}
      <div className="w-44 overflow-hidden rounded-[1.4rem] border-[3px] border-white/[0.12] bg-restra-bg shadow-2xl shadow-black/30 sm:w-48">
        <div className="flex items-center justify-between bg-restra-surface px-3 pt-2.5 pb-2">
          <span className="text-[9px] font-semibold text-restra-text-muted">9:41</span>
          <div className="h-3 w-14 rounded-full bg-black/60" />
          <span className="text-[9px] text-restra-text-muted">100%</span>
        </div>

        {/* App header */}
        <div className="border-b border-white/[0.06] bg-restra-bg px-3 pb-2.5 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wider text-restra-cyan">
                Table 7 · Himalayan Kitchen
              </p>
              <p className="text-xs font-bold text-restra-text">Digital Menu</p>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
              R
            </span>
          </div>
        </div>

        {/* Menu items */}
        <div className="space-y-1.5 p-2.5">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center gap-2 rounded-lg border p-1.5",
                i === 0
                  ? "border-restra-yellow/40 bg-restra-yellow/[0.06]"
                  : "border-white/[0.05] bg-restra-card",
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-restra-yellow/10">
                {i === 0 ? (
                  <Image src="/features/qr-menu.png" alt="" width={32} height={32} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-[10px]">🍲</span>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-medium text-restra-text">{item.name}</p>
                <p className="text-[9px] text-restra-text-muted">
                  Rs. {item.price}
                  {item.tag ? (
                    <span className="ml-1.5 inline-flex items-center gap-0.5 text-restra-cyan">
                      <Star className="h-2 w-2" /> {item.tag}
                    </span>
                  ) : null}
                </p>
              </div>
              {i === 0 ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-restra-yellow text-[8px] font-bold text-restra-bg">
                  2
                </span>
              ) : (
                <span className="h-4 w-4 rounded-full border border-white/[0.12]" />
              )}
            </div>
          ))}
        </div>

        {/* Cart + status */}
        <div className="border-t border-white/[0.06] bg-restra-card px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-restra-text">
              <ShoppingBag className="h-3 w-3 text-restra-yellow" />
              3 items
            </span>
            <span className="text-xs font-bold text-restra-yellow">Rs. 1,170</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1.5">
            <Check className="h-3 w-3 text-emerald-400" />
            <span className="text-[9px] font-medium text-emerald-400">
              Order sent — preparing in kitchen
            </span>
          </div>
        </div>
      </div>

      {/* Table QR card */}
      <div className="hidden w-28 shrink-0 rounded-xl border border-white/[0.08] bg-restra-card p-3 text-center shadow-lg shadow-black/20 sm:block">
        <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-lg border border-white/[0.08] bg-white p-1">
          <Image src="/features/qr-menu.png" alt="" fill sizes="80px" className="object-contain p-1" />
        </div>
        <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-restra-text">
          Scan to order
        </p>
        <p className="mt-0.5 text-[8px] text-restra-text-muted">Table 7</p>
      </div>

      {/* Soft grounding shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/25 blur-xl"
      />
    </div>
  );
}
