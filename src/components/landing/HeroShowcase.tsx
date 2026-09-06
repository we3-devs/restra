import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  ChefHat,
  Coffee,
  CreditCard,
  Check,
  Soup,
  TrendingUp,
  Users,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

/**
 * Hero product showcase — a restaurant-management dashboard mock rendered
 * in the light theme, photographed at a cafe. The photo sits behind the
 * browser frame and glass cards; dashboard content and floating cards layer
 * on top. Purely presentational so it stays server-renderable.
 */

const dashboardBg = "/images/dashboard-bg.jpg";
// TODO: replace placeholder with actual cafe photo at /images/dashboard-bg.jpg

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
    <div className="relative mx-auto w-full max-w-4xl" aria-hidden="true">      {/* Cafe photo behind the dashboard */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={dashboardBg}
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft wash so dashboard text stays readable over the cafe photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.55] via-white/[0.35] to-white/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,rgba(250,250,248,0.75)_100%)]" />
        {/* Warm brand glows sit on top of the photo wash, under the glass cards */}
        <div className="absolute -left-32 top-40 h-[22rem] w-[22rem] rounded-full bg-restra-cyan/[0.06] blur-3xl" />
        <div className="absolute -right-32 top-72 h-[22rem] w-[22rem] rounded-full bg-restra-yellow/[0.07] blur-3xl" />
      </div>

      {/* Atmospheric glows behind the dashboard — kept for the brand beams */}
      <div className="pointer-events-none absolute -inset-x-10 top-10 -bottom-16 rounded-[2.5rem] bg-gradient-to-b from-restra-yellow/[0.08] via-restra-cyan/[0.04] to-transparent blur-2xl" />

      {/* Foreground cafe table items layered in front of the dashboard */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {/* Coffee mug — left side */}        <div className="-left-10 top-[24%] hidden h-28 w-24 lg:block xl:-left-20">
          <div className="absolute right-0 top-2 h-14 w-10 -translate-y-1/2 rotate-[8deg]">
            <div className="absolute -left-2 top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 shadow-lg shadow-black/10">
              <div className="absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F1EB] shadow-inner">
                <Coffee className="h-8 w-8 text-[#4B4F4C]" />
              </div>
            </div>
          </div>

        </div>        {/* Smartphone — lower right */}
        <div className="right-2 top-[78%] hidden h-24 w-16 lg:block xl:bottom-4 xl:right-2">          <div className="absolute inset-0 rounded-[1.25rem] border-2 border-white/90 shadow-md shadow-black/10">
            <div className="absolute inset-2 rounded-[0.85rem] bg-[#1A1C1C]">
              <div className="mx-auto h-9 w-10">
                <div className="mx-auto mb-1 h-2 w-10 rounded bg-white/20" />
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="mx-auto mt-1 h-2 w-6 rounded bg-restra-yellow/80" />
              </div>
            </div>
          </div>
        </div>

        {/* Spiral notepad — right side */}
        <div className="right-2 top-[22%] hidden h-44 w-44 rotate-[4deg] lg:block xl:right-0 xl:top-[20%]">
          <div className="absolute inset-0 rounded-[0.75rem] border border-white/90 shadow-md shadow-black/10">
            <div className="absolute left-2 h-full w-5 -translate-x-1/2 rounded-full bg-white/95 shadow-sm shadow-black/5" />
            <div className="absolute left-2 top-1 h-6 w-0.5 rounded-full bg-[#D4A017]" />
            <div className="mx-3 my-2.5 h-3 w-10 rounded border border-[#EAEAE5]" />
            <div className="mx-3 h-2 w-12 rounded border border-[#EAEAE5]" />
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex h-2.5 w-8 rounded border border-[#D4A017] items-center justify-center">
                <div className="h-1 w-[58%] rounded bg-[#0891B2]" />
              </div>
              <div className="flex h-2.5 w-8 rounded border border-[#EAEAE5] items-center justify-center">
                <div className="h-1 w-[58%] rounded bg-[#0891B2]" />
              </div>
              <div className="flex h-2.5 w-8 rounded border border-[#D4A017] items-center justify-center" />
              <div className="flex h-2.5 w-8 rounded border border-[#EAEAE5] items-center justify-center" />
            </div>
          </div>
        </div>
      </div>

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

      {/* Floating notepad over the cafe photo */}
      <motion.div
        initial={{ opacity: 0, rotate: -4, y: 22 }}
        animate={{ opacity: 1, rotate: -4, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        className="absolute -right-2 top-[28%] z-10 hidden w-48 rotate-[-3deg] lg:block xl:-right-16"
      >
        <GlassCard className="p-3">
          <BorderBeam
            size={120}
            duration={7}
            delay={2.5}
            borderWidth={1.5}
            colorFrom="#0891B2"
            colorTo="#D4A017"
            reverse
          />
          <p className="text-[10px] font-semibold uppercase tracking-wider text-restra-cyan">Today</p>
          <ul className="mt-2 space-y-1.5">
            {[
              { label: "Check orders", done: true },
              { label: "Update menu", done: true },
              { label: "Inventory", done: true },
              { label: "Staff schedule", done: true },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-[11px]">
                <span
                  className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${item.done ? "bg-emerald-500" : "bg-restra-border"}`}
                >
                  {item.done && <span className="text-white"><Check className="h-2.5 w-2.5" /></span>}
                </span>
                <span className={`${item.done ? "text-restra-text" : "text-restra-text-muted"}`}>{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-border pt-2 text-[9px] text-restra-text-muted">
            Restra Cafe · Admin
          </p>
        </GlassCard>
      </motion.div>

      {/* Floating coffee mug card over the cafe photo */}        <motion.div
        initial={{ opacity: 0, rotate: 3, y: 20 }}
        animate={{ opacity: 1, rotate: 3, y: 0 }}
        transition={{ duration: 0.6, delay: 1.55, ease: EASE }}
        className="-left-2 top-[26%] z-10 hidden h-32 w-28 rotate-[2deg] lg:block xl:-left-14"
      >
        <GlassCard className="flex h-full flex-col items-center justify-center p-3">
          <BorderBeam
            size={80}
            duration={7}
            delay={3}
            borderWidth={1.5}
            colorFrom="#0891B2"
            colorTo="#D4A017"
          />

          <Coffee className="h-8 w-8 text-restra-yellow" />

          <p className="mt-1 text-[10px] font-medium text-restra-text-secondary">Pulled espresso</p>
          <p className="text-[9px] text-restra-text-muted">fresh refill</p>
        </GlassCard>
      </motion.div>

      {/* Floating phone card over the cafe photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 0.92, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7, ease: EASE }}
        className="absolute bottom-8 right-2 z-10 hidden h-28 w-20 lg:block xl:bottom-6 xl:right-4"
      >
        <GlassCard className="flex h-full flex-col items-center justify-center p-2">
          <BorderBeam
            size={90}
            duration={7}
            delay={3.5}
            borderWidth={1.5}
            colorFrom="#D4A017"
            colorTo="#0891B2"
          />
          <div className="flex h-12 w-full items-center justify-center rounded-md border border-border bg-restra-surface/60">
            <span className="text-[9px] uppercase tracking-wider text-restra-text-muted">Phone view</span>
          </div>
          <p className="text-[9px] text-restra-text-muted">Mobile view</p>
        </GlassCard>
      </motion.div>

    </div>
  );
}
