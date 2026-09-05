import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Analytics & reports mockup: live KPI row plus a simple sales bar chart for
 * the week. Pure CSS bars — no chart library needed for a product render.
 */

const kpis = [
  { label: "Today's Sales", value: "Rs. 284,500", change: "+12.4%", tone: "text-emerald-400" },
  { label: "Orders", value: "86", change: "+9.2%", tone: "text-emerald-400" },
  { label: "Avg. Ticket", value: "Rs. 1,240", change: "+3.1%", tone: "text-emerald-400" },
  { label: "Prep Time", value: "12 min", change: "−2 min", tone: "text-restra-cyan" },
];

const week = [
  { day: "Sun", pct: 52 },
  { day: "Mon", pct: 38 },
  { day: "Tue", pct: 46 },
  { day: "Wed", pct: 61 },
  { day: "Thu", pct: 74 },
  { day: "Fri", pct: 96 },
  { day: "Sat", pct: 88 },
];

const topItems = [
  { name: "Butter Chicken", sold: 34, pct: 92 },
  { name: "Veg Momos", sold: 28, pct: 76 },
  { name: "Chicken Thukpa", sold: 21, pct: 58 },
];

export default function AnalyticsMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-restra-bg shadow-xl shadow-black/20",
        className,
      )}
      role="img"
      aria-label="RESTRA analytics dashboard showing today's sales, orders, and weekly performance"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
            R
          </span>
          <span className="text-xs font-semibold text-restra-text">Reports</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-restra-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-restra-cyan">
            Live
          </span>
          <span className="rounded-md border border-white/[0.08] px-2 py-0.5 text-[10px] text-restra-text-muted">
            Today
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 divide-x divide-white/[0.06] border-b border-white/[0.06]">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-restra-text-muted">
              {kpi.label}
            </p>
            <p className="mt-0.5 truncate text-[13px] font-bold text-restra-text">{kpi.value}</p>
            <p className={cn("text-[9px] font-semibold", kpi.tone)}>{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.35fr_1fr] gap-4 p-3.5">
        {/* Weekly chart */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-restra-text-secondary">
              Sales this week
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400">
              <TrendingUp className="h-3 w-3" /> +18% vs last week
            </span>
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {week.map((day, i) => (
              <div key={day.day} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-full w-full items-end overflow-hidden rounded-md bg-white/[0.04]">
                  <div
                    className={cn(
                      "w-full rounded-md",
                      i === 5 ? "bg-restra-yellow" : "bg-restra-cyan/50",
                    )}
                    style={{ height: `${day.pct}%` }}
                  />
                </div>
                <span
                  className={cn(
                    "text-[8px]",
                    i === 5 ? "font-bold text-restra-yellow" : "text-restra-text-muted",
                  )}
                >
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top items */}
        <div>
          <p className="mb-2 text-[10px] font-semibold text-restra-text-secondary">Top sellers</p>
          <div className="space-y-2">
            {topItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="truncate text-restra-text">{item.name}</span>
                  <span className="text-restra-text-muted">{item.sold}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-restra-yellow/70"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
