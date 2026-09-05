import { AlertTriangle, Package, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Inventory management mockup: stock table with minimum levels, low-stock
 * alerts, and a movement summary.
 */

const stockItems = [
  { name: "Basmati Rice", stock: "2 kg", min: "5 kg", pct: 18, status: "low" as const },
  { name: "Chicken Breast", stock: "5 kg", min: "6 kg", pct: 32, status: "low" as const },
  { name: "Cooking Oil", stock: "12 L", min: "4 L", pct: 75, status: "ok" as const },
  { name: "Flour", stock: "9 kg", min: "5 kg", pct: 88, status: "ok" as const },
  { name: "Paneer", stock: "1.5 kg", min: "3 kg", pct: 22, status: "low" as const },
];

export default function InventoryMockup({ className }: { className?: string }) {
  const lowCount = stockItems.filter((item) => item.status === "low").length;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-restra-bg shadow-xl shadow-black/20",
        className,
      )}
      role="img"
      aria-label="RESTRA inventory screen showing ingredient stock levels and low-stock alerts"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
            R
          </span>
          <span className="text-xs font-semibold text-restra-text">Inventory</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-restra-yellow/10 px-2 py-0.5 text-[10px] font-semibold text-restra-yellow">
          <AlertTriangle className="h-3 w-3" />
          {lowCount} low stock
        </span>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
        {[
          { label: "Tracked items", value: "24", icon: Package, tone: "text-restra-cyan" },
          { label: "Restock needed", value: "3", icon: AlertTriangle, tone: "text-restra-yellow" },
          { label: "Movement today", value: "+18 / −42", icon: TrendingUp, tone: "text-restra-cyan" },
        ].map((card) => (
          <div key={card.label} className="px-3.5 py-2.5">
            <div className="flex items-center gap-1.5">
              <card.icon className={cn("h-3 w-3", card.tone)} />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-restra-text-muted">
                {card.label}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-bold text-restra-text">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Stock table */}
      <div className="p-3.5">
        <div className="grid grid-cols-[1.6fr_1fr_1.2fr_0.9fr] gap-2 border-b border-white/[0.05] pb-1.5 text-[9px] font-semibold uppercase tracking-wider text-restra-text-muted">
          <span>Ingredient</span>
          <span>Stock</span>
          <span>Level</span>
          <span className="text-right">Status</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {stockItems.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[1.6fr_1fr_1.2fr_0.9fr] items-center gap-2 py-2"
            >
              <span className="truncate text-[11px] font-medium text-restra-text">{item.name}</span>
              <span className="text-[11px] text-restra-text-secondary">{item.stock}</span>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      item.status === "low" ? "bg-restra-yellow" : "bg-restra-cyan",
                    )}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-[9px] text-restra-text-muted">min {item.min}</span>
              </div>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-center text-[9px] font-semibold uppercase tracking-wide",
                  item.status === "low"
                    ? "bg-restra-yellow/10 text-restra-yellow"
                    : "bg-emerald-500/10 text-emerald-400",
                )}
              >
                {item.status === "low" ? "Low" : "OK"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-restra-yellow/25 bg-restra-yellow/[0.05] px-3 py-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] text-restra-text-secondary">
            <TrendingDown className="h-3 w-3 text-restra-yellow" />
            Basmati Rice below minimum — reorder before Friday service
          </span>
          <span className="text-[10px] font-bold text-restra-yellow">Alert</span>
        </div>
      </div>
    </div>
  );
}
