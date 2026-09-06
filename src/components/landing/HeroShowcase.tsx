import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  CalendarCheck,
  ChefHat,
  CreditCard,
  Soup,
  TrendingUp,
  Users,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

/**
 * Hero product showcase — a restaurant-management dashboard mock rendered
 * in the light theme: browser-framed window, KPI row, revenue chart,
 * orders/reservations/occupancy panels, with small overlapping glass cards.
 * Purely presentational, so it stays server-renderable.
 */

const kpis = [
  {
    label: "Today's Sales",
    value: "NPR 84,250",
    change: "+12.4% vs yesterday",
    changeClass: "text-emerald-600",
    icon: Soup,
    iconWrap: "bg-restra-yellow/10 text-restra-yellow",
  },
  {
    label: "Orders",
    value: "126",
    change: "+8 this hour",
    changeClass: "text-restra-cyan",
    icon: CreditCard,
    iconWrap: "bg-restra-cyan/10 text-restra-cyan",
  },
  {
    label: "Reservations",
    value: "24",
    change: "6 upcoming",
    changeClass: "text-restra-text-muted",
    icon: CalendarCheck,
    iconWrap: "bg-restra-cyan/10 text-restra-cyan",
  },
];

const revenueBars = [38, 54, 46, 68, 58, 82, 64, 92, 74, 100];

const orders = [
  { id: "#1042", table: "Table 7 · Dine-in", amount: "NPR 2,450", status: "Preparing", statusClass: "bg-restra-yellow/15 text-restra-yellow" },
  { id: "#1041", table: "Table 3 · QR order", amount: "NPR 1,120", status: "Ready", statusClass: "bg-restra-cyan/15 text-restra-cyan" },
  { id: "#1040", table: "Table 12 · Dine-in", amount: "NPR 1,890", status: "Served", statusClass: "bg-emerald-500/15 text-emerald-600" },
];

const reservations = [
  { name: "Sharma family", time: "7:00 PM", party: "4 guests", color: "bg-restra-cyan" },
  { name: "Karki, A.", time: "7:30 PM", party: "2 guests", color: "bg-restra-yellow" },
  { name: "Gurung birthday", time: "8:00 PM", party: "8 guests", color: "bg-restra-cyan" },
];

const tables = [
  { id: "T1", state: "occupied" },
  { id: "T2", state: "occupied" },
  { id: "T3", state: "free" },
  { id: "T4", state: "occupied" },
  { id: "T5", state: "served" },
  { id: "T6", state: "occupied" },
  { id: "T7", state: "free" },
  { id: "T8", state: "occupied" },
];

const tableClasses: Record<string, string> = {
  occupied: "bg-restra-yellow/20 text-restra-text ring-1 ring-restra-yellow/40",
  served: "bg-restra-cyan/15 text-restra-cyan ring-1 ring-restra-cyan/30",
  free: "bg-restra-surface text-restra-text-muted",
};

const staff = [
  { name: "Sita K. — Kitchen", role: "3 orders preparing", icon: ChefHat },
  { name: "Bikash R. — Floor", role: "Clearing Table 5", icon: Users },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-white/70 shadow-lg shadow-black/5 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-4xl" aria-hidden="true">
      {/* Atmospheric glows behind the dashboard */}
      <div className="pointer-events-none absolute -inset-x-10 top-10 -bottom-16 rounded-[2.5rem] bg-gradient-to-b from-restra-yellow/[0.08] via-restra-cyan/[0.04] to-transparent blur-2xl" />

      {/* Browser-framed dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/10"
      >
        {/* Animated brand beams tracing the frame edges */}
        <BorderBeam
          size={140}
          duration={9}
          delay={0}
          borderWidth={1.5}
          colorFrom="#D4A017"
          colorTo="#0891B2"
        />
        <BorderBeam
          size={110}
          duration={9}
          delay={4.5}
          borderWidth={1.5}
          colorFrom="#0891B2"
          colorTo="#D4A017"
          reverse
        />

        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-border bg-restra-bg/80 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-restra-text-muted/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-restra-text-muted/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-restra-text-muted/50" />
          </div>
          <div className="flex flex-1 justify-center">
            <span className="rounded-md bg-white px-3 py-0.5 text-[10px] text-restra-text-muted">
              app.restra.com/dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-restra-cyan/10 px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-restra-cyan" />
            <span className="text-[10px] font-semibold text-restra-cyan">Live</span>
          </div>
        </div>

        <div className="p-3.5 sm:p-5">
          {/* Dashboard header */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-restra-text-muted">
                Dashboard
              </p>
              <p className="mt-0.5 font-display text-base font-semibold text-restra-text sm:text-lg">
                Good evening, <span className="text-restra-yellow">Manager</span>
              </p>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 sm:flex">
              <span className="text-[10px] font-medium text-restra-text-muted">Today</span>
              <TrendingUp className="h-3 w-3 text-emerald-600" />
              <span className="text-[10px] font-semibold text-emerald-600">+12.4%</span>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + i * 0.1, ease: EASE }}
                className="rounded-xl border border-border bg-white p-3.5 transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                    {kpi.label}
                  </span>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md ${kpi.iconWrap}`}>
                    <kpi.icon className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-restra-text sm:text-xl">
                  {kpi.value}
                </p>
                <p className={`mt-0.5 text-[10px] font-medium ${kpi.changeClass}`}>{kpi.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Revenue + orders/reservations */}
          <div className="mt-3 grid gap-2.5 lg:grid-cols-5">
            {/* Revenue chart */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7, ease: EASE }}
              className="rounded-xl border border-border bg-white p-4 lg:col-span-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                  Revenue · Last 10 hours
                </span>
              </div>
              <p className="mt-1.5 font-display text-xl font-semibold text-restra-text">
                NPR 84,250
              </p>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {revenueBars.map((height, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.85 + i * 0.05, ease: EASE }}
                    style={{ height: `${height}%` }}
                    className={`flex-1 origin-bottom rounded-t-sm ${
                      i === revenueBars.length - 1
                        ? "bg-restra-yellow"
                        : "bg-restra-yellow/25"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-restra-text-muted">
                <span>10 AM</span>
                <span>3 PM</span>
                <span>8 PM</span>
              </div>
            </motion.div>

            {/* Recent orders */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.78, ease: EASE }}
              className="rounded-xl border border-border bg-white p-4 lg:col-span-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                  Live Orders
                </span>
                <span className="text-[10px] text-restra-text-muted">Today</span>
              </div>
              <div className="mt-3 space-y-2">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between gap-2 rounded-lg bg-restra-surface/70 px-3 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="text-xs font-semibold text-restra-text">{order.id}</span>
                      <span className="truncate text-[10px] text-restra-text-muted">{order.table}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-xs font-semibold text-restra-text">{order.amount}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${order.statusClass}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Reservations · occupancy · staff */}
          <div className="mt-3 grid gap-2.5 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.88, ease: EASE }}
              className="rounded-xl border border-border bg-white p-4"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                Reservations
              </span>
              <div className="mt-3 space-y-2">
                {reservations.map((res, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${res.color}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-restra-text">{res.name}</p>
                      <p className="text-[10px] text-restra-text-muted">{res.party}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium text-restra-text-secondary">
                      {res.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.96, ease: EASE }}
              className="rounded-xl border border-border bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                  Table Occupancy
                </span>
                <span className="text-[10px] font-semibold text-restra-yellow">70%</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className={`flex aspect-square items-center justify-center rounded-lg text-[9px] font-semibold ${tableClasses[table.state]}`}
                  >
                    {table.id}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.04, ease: EASE }}
              className="rounded-xl border border-border bg-white p-4"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-restra-text-muted">
                Staff Activity
              </span>
              <div className="mt-3 space-y-2.5">
                {staff.map((member) => (
                  <div key={member.name} className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-restra-surface text-restra-cyan">
                      <member.icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-restra-text">{member.name}</p>
                      <p className="text-[10px] text-restra-text-muted">{member.role}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border pt-2">
                  <p className="flex items-center gap-1.5 text-[10px] text-restra-text-muted">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-restra-cyan" />
                    Kitchen sync active
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
        className="absolute -left-6 top-48 z-10 hidden lg:block xl:-left-14"
      >
        <GlassCard className="w-44 p-3">
          <BorderBeam
            size={90}
            duration={7}
            delay={1}
            borderWidth={1.5}
            colorFrom="#0891B2"
            colorTo="#D4A017"
          />
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-restra-cyan/10 text-restra-cyan">
              <Soup className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-restra-text-muted">
                Kitchen
              </p>
              <p className="text-xs font-semibold text-restra-text">12 min avg</p>
            </div>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-restra-surface">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 0.6, delay: 1.3, ease: EASE }}
              className="block h-full rounded-full bg-restra-cyan"
            />
          </div>
          <p className="mt-1.5 text-[9px] text-restra-text-muted">Prep load 72%</p>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.25, ease: EASE }}
        className="absolute -right-6 bottom-16 z-10 hidden lg:block xl:-right-14"
      >
        <GlassCard className="w-44 p-3">
          <BorderBeam
            size={90}
            duration={7}
            delay={2.5}
            borderWidth={1.5}
            colorFrom="#D4A017"
            colorTo="#0891B2"
            reverse
          />
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-restra-yellow/10 text-restra-yellow">
              <Users className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-restra-text-muted">
                Guests Today
              </p>
              <p className="text-xs font-semibold text-restra-text">312 served</p>
            </div>
          </div>
          <div className="mt-2 flex items-end gap-1">
            {[5, 8, 6, 9, 7, 10, 8, 11].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h * 2.2}px` }}
                className={`w-2 rounded-t-sm ${i >= 6 ? "bg-restra-yellow" : "bg-restra-surface"}`}
              />
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
