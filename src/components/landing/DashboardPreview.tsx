import { motion } from "framer-motion";
import {
  DollarSign,
  ShoppingCart,
  Clock,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Today's Sales",
    value: "NPR 284,500",
    change: "+12.4%",
    icon: DollarSign,
    color: "text-restra-yellow",
  },
  {
    label: "Active Orders",
    value: "18",
    change: "3 pending",
    icon: ShoppingCart,
    color: "text-restra-cyan",
  },
  {
    label: "Tables Active",
    value: "14 / 20",
    change: "70% occupied",
    icon: Users,
    color: "text-restra-cyan",
  },
  {
    label: "Avg. Prep Time",
    value: "12 min",
    change: "-2 min",
    icon: Clock,
    color: "text-restra-yellow",
  },
];

const recentOrders = [
  { id: "#1042", table: "Table 7", items: "Butter Chicken, Naan, Lassi", amount: "NPR 2,450", status: "preparing" },
  { id: "#1041", table: "Table 3", items: "Momos, Thukpa", amount: "NPR 1,120", status: "ready" },
  { id: "#1040", table: "Table 12", items: "Biryani, Raita, Gulab Jamun", amount: "NPR 1,890", status: "served" },
  { id: "#1039", table: "Takeaway", items: "Chowmein, Spring Rolls", amount: "NPR 780", status: "served" },
];

const inventoryAlerts = [
  { item: "Basmati Rice", stock: "2 kg", status: "low" },
  { item: "Chicken Breast", stock: "5 kg", status: "low" },
  { item: "Cooking Oil", stock: "12 L", status: "ok" },
];

const statusColors: Record<string, string> = {
  preparing: "bg-restra-yellow/20 text-restra-yellow",
  ready: "bg-restra-cyan/20 text-restra-cyan",
  served: "bg-emerald-500/20 text-emerald-400",
};

const statusLabels: Record<string, string> = {
  preparing: "Preparing",
  ready: "Ready",
  served: "Served",
};

export default function DashboardPreview({ compact = false }: { compact?: boolean }) {
  const visibleStats = compact ? stats.slice(0, 2) : stats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Browser frame */}
      <div className="rounded-xl border border-white/[0.08] bg-restra-surface shadow-2xl shadow-black/40 overflow-hidden">
        {/* Browser chrome */}
        <div className={`flex items-center gap-2 border-b border-white/[0.06] bg-restra-bg/80 ${compact ? "px-3 py-2" : "px-4 py-2.5"}`}>
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          {!compact && (
            <div className="flex-1 text-center">
              <div className="mx-auto flex max-w-xs items-center justify-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1">
                <span className="text-[10px] text-restra-text-muted">app.restra.com/dashboard</span>
              </div>
            </div>
          )}
        </div>

        {/* Dashboard content */}
        <div className={compact ? "p-3" : "p-4 md:p-6"}>
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium text-restra-text-muted uppercase tracking-wider">Dashboard</p>
              <h3 className={`font-display font-semibold text-restra-text mt-0.5 ${compact ? "text-sm" : "text-lg"}`}>
                Good evening, <span className="text-restra-yellow">Manager</span>
              </h3>
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-restra-cyan/10 px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-restra-cyan animate-pulse" />
              <span className="text-[10px] font-medium text-restra-cyan">Live</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className={`grid grid-cols-2 gap-2.5 lg:grid-cols-4 ${compact ? "mb-0" : "mb-5"}`}>
            {visibleStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className={`rounded-lg border border-white/[0.06] bg-restra-bg/60 ${compact ? "p-2" : "p-3"}`}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-restra-text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <stat.icon className={`h-3.5 w-3.5 ${stat.color}`} />
                </div>
                <p className={`font-display font-semibold text-restra-text ${compact ? "text-base" : "text-xl"}`}>{stat.value}</p>
                <p className={`mt-0.5 text-[10px] font-medium ${
                  stat.change.includes("+") || stat.change.includes("-")
                    ? stat.change.startsWith("+") ? "text-emerald-400" : "text-restra-cyan"
                    : "text-restra-text-muted"
                }`}>
                  {stat.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom section: Orders + Inventory */}
          {!compact && (
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {/* Recent orders */}
            <div className="rounded-lg border border-white/[0.06] bg-restra-bg/60 p-3 lg:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-restra-text-secondary uppercase tracking-wider">
                  Recent Orders
                </span>
                <span className="text-[10px] text-restra-text-muted">Today</span>
              </div>
              <div className="space-y-2">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-md bg-restra-surface/60 px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-restra-text">{order.id}</span>
                      <span className="text-[10px] text-restra-text-muted">{order.table}</span>
                    </div>
                    <span className="hidden text-[10px] text-restra-text-muted sm:inline max-w-[200px] truncate">
                      {order.items}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-restra-text">{order.amount}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${statusColors[order.status]}`}>
                        {statusLabels[order.status]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory alerts */}
            <div className="rounded-lg border border-white/[0.06] bg-restra-bg/60 p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-restra-text-secondary uppercase tracking-wider">
                  Inventory Alerts
                </span>
                <AlertTriangle className="h-3.5 w-3.5 text-restra-yellow" />
              </div>
              <div className="space-y-2">
                {inventoryAlerts.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between rounded-md bg-restra-surface/60 px-3 py-2"
                  >
                    <span className="text-xs text-restra-text">{item.item}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-restra-text-secondary">{item.stock}</span>
                      {item.status === "low" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-restra-yellow animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 border-t border-white/[0.06] pt-3">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-restra-cyan" />
                  <span className="text-[10px] text-restra-text-muted">
                    Revenue: <span className="font-semibold text-restra-text">NPR 284,500</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-64 rounded-full bg-restra-yellow/[0.03] blur-3xl" />
    </motion.div>
  );
}
