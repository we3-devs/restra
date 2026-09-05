import { CheckCircle2, CircleDot, Flame, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Kitchen Display System mockup: three live order tickets with progress
 * states. Static product-render styling, no animation loops.
 */

const tickets = [
  {
    id: "#1042",
    table: "Table 7",
    minutes: "6 min",
    status: "preparing" as const,
    items: [
      { name: "Butter Chicken ×2", done: true },
      { name: "Naan ×3", done: true },
      { name: "Mango Lassi ×2", done: false },
    ],
  },
  {
    id: "#1044",
    table: "QR · Table 12",
    minutes: "2 min",
    status: "new" as const,
    items: [
      { name: "Chicken Thukpa", done: false },
      { name: "Veg Momos ×2", done: false },
    ],
  },
  {
    id: "#1041",
    table: "Takeaway",
    minutes: "Done",
    status: "ready" as const,
    items: [{ name: "Chowmein", done: true }, { name: "Spring Rolls", done: true }],
  },
];

const statusStyles: Record<string, { bar: string; chip: string; label: string }> = {
  new: { bar: "bg-restra-cyan", chip: "bg-restra-cyan/10 text-restra-cyan", label: "New" },
  preparing: { bar: "bg-restra-yellow", chip: "bg-restra-yellow/10 text-restra-yellow", label: "Preparing" },
  ready: { bar: "bg-emerald-500", chip: "bg-emerald-500/10 text-emerald-400", label: "Ready" },
};

const statusIcons = { new: CircleDot, preparing: Flame, ready: CheckCircle2 };

export default function KitchenMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-restra-bg shadow-xl shadow-black/20",
        className,
      )}
      role="img"
      aria-label="RESTRA kitchen display showing live order tickets"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
            K
          </span>
          <span className="text-xs font-semibold text-restra-text">Kitchen Display</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-restra-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-restra-cyan">
            3 active
          </span>
          <span className="text-[10px] text-restra-text-muted">19:24</span>
        </div>
      </div>

      {/* Tickets */}
      <div className="grid grid-cols-3 gap-2.5 p-3.5">
        {tickets.map((ticket) => {
          const style = statusStyles[ticket.status];
          const Icon = statusIcons[ticket.status];
          return (
            <div
              key={ticket.id}
              className="overflow-hidden rounded-lg border border-white/[0.06] bg-restra-card"
            >
              <div className={cn("h-1 w-full", style.bar)} />
              <div className="p-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-restra-text">{ticket.id}</span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide",
                      style.chip,
                    )}
                  >
                    <Icon className="h-2.5 w-2.5" />
                    {style.label}
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] text-restra-text-muted">
                  {ticket.table} · {ticket.minutes}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {ticket.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-1.5 text-[10px]">
                      <span
                        className={cn(
                          "flex h-3 w-3 shrink-0 items-center justify-center rounded-full border",
                          item.done
                            ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400"
                            : "border-white/[0.12] bg-white/[0.03]",
                        )}
                      >
                        {item.done ? <CheckCircle2 className="h-2 w-2" /> : null}
                      </span>
                      <span
                        className={cn(
                          item.done
                            ? "text-restra-text-muted line-through decoration-restra-text-muted/50"
                            : "text-restra-text",
                        )}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
                {ticket.status !== "new" ? (
                  <div className="mt-2.5 border-t border-white/[0.05] pt-2">
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className={cn("h-full rounded-full", style.bar)}
                        style={{ width: ticket.status === "ready" ? "100%" : "66%" }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between border-t border-white/[0.06] bg-restra-surface px-4 py-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] text-restra-text-muted">
          <UtensilsCrossed className="h-3 w-3 text-restra-cyan" />
          Avg prep today: 12 min
        </span>
        <span className="text-[10px] text-restra-text-muted">Auto-refresh on</span>
      </div>
    </div>
  );
}
