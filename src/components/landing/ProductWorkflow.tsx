import { motion } from "framer-motion";
import {
  Smartphone,
  ChefHat,
  Truck,
  CreditCard,
  PackageCheck,
  BarChart3,
  CircleDot,
  CheckCircle2,
  Clock,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

const workflowSteps = [
  { icon: Smartphone, label: "Customer arrives", detail: "Scans QR code at the table" },
  { icon: UtensilsCrossed, label: "Order placed", detail: "Digital order goes straight to kitchen" },
  { icon: ChefHat, label: "Kitchen receives", detail: "Preparation begins immediately" },
  { icon: Clock, label: "Order tracked", detail: "Staff sees live preparation status" },
  { icon: Flame, label: "Food served", detail: "Table notified when ready" },
  { icon: CreditCard, label: "Bill generated", detail: "Accurate billing in seconds" },
  { icon: PackageCheck, label: "Inventory updated", detail: "Stock adjusts automatically" },
  { icon: BarChart3, label: "Manager sees performance", detail: "Full day's insights at a glance" },
];

const orderLifecycle = [
  { status: "New", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { status: "Confirmed", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { status: "Preparing", color: "bg-restra-yellow", textColor: "text-restra-yellow" },
  { status: "Ready", color: "bg-restra-cyan", textColor: "text-restra-cyan" },
  { status: "Served", color: "bg-emerald-500", textColor: "text-emerald-400" },
];

const orderSteps = [
  {
    icon: CircleDot,
    label: "New",
    description: "Order placed and received by the system",
    color: "border-restra-cyan/40 bg-restra-cyan/10",
    textColor: "text-restra-cyan",
    dotColor: "bg-restra-cyan",
  },
  {
    icon: CheckCircle2,
    label: "Confirmed",
    description: "Kitchen acknowledges the order",
    color: "border-restra-cyan/40 bg-restra-cyan/10",
    textColor: "text-restra-cyan",
    dotColor: "bg-restra-cyan",
  },
  {
    icon: Flame,
    label: "Preparing",
    description: "Food is being prepared in the kitchen",
    color: "border-restra-yellow/40 bg-restra-yellow/10",
    textColor: "text-restra-yellow",
    dotColor: "bg-restra-yellow",
  },
  {
    icon: UtensilsCrossed,
    label: "Ready",
    description: "Order is ready for pickup or serving",
    color: "border-restra-cyan/40 bg-restra-cyan/10",
    textColor: "text-restra-cyan",
    dotColor: "bg-restra-cyan",
  },
  {
    icon: CheckCircle2,
    label: "Served",
    description: "Order delivered to the customer",
    color: "border-emerald-500/40 bg-emerald-500/10",
    textColor: "text-emerald-400",
    dotColor: "bg-emerald-500",
  },
];

export default function ProductWorkflow() {
  return (
    <section id="workflow" className="relative py-24 lg:py-32">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(34,211,238,0.03),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            How it works
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            From order to insight,{" "}
            <span className="text-restra-yellow">one flow</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
            See how Restra connects every step of restaurant operations.
          </p>
        </motion.div>

        {/* Day in the restaurant flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
            A day in your restaurant
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative"
              >
                <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4 transition-all duration-300 hover:border-white/[0.12]">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-restra-yellow/10">
                      <step.icon className="h-4 w-4 text-restra-yellow" />
                    </div>
                    <span className="text-[10px] font-bold text-restra-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-restra-text">{step.label}</h4>
                  <p className="mt-1 text-xs text-restra-text-muted">{step.detail}</p>
                </div>
                {/* Connector */}
                {i < workflowSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-white/[0.08] lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Order Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
            Order lifecycle
          </h3>

          {/* Desktop: horizontal pipeline */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              {orderSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex-1 rounded-xl border border-white/[0.06] bg-restra-card p-4"
                  >
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg border ${step.color}`}>
                      <step.icon className={`h-4 w-4 ${step.textColor}`} />
                    </div>
                    <p className={`text-sm font-semibold ${step.textColor}`}>{step.label}</p>
                    <p className="mt-1 text-xs text-restra-text-muted">{step.description}</p>
                  </motion.div>
                  {i < orderSteps.length - 1 && (
                    <div className="flex h-px w-6 shrink-0 items-center justify-center">
                      <div className="h-px w-full bg-gradient-to-r from-white/[0.12] to-white/[0.04]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden">
            <div className="relative ml-4 space-y-4 border-l border-white/[0.06] pl-6">
              {orderSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className={`absolute -left-[calc(1.5rem+5px)] top-3 flex h-[10px] w-[10px] items-center justify-center rounded-full border ${step.color}`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${step.dotColor}`} />
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-restra-card p-4">
                    <p className={`text-sm font-semibold ${step.textColor}`}>{step.label}</p>
                    <p className="mt-1 text-xs text-restra-text-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status visualization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 rounded-xl border border-white/[0.06] bg-restra-card p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-restra-text">#1042</span>
                <span className="text-xs text-restra-text-muted">Table 7 · Butter Chicken, Naan, Lassi</span>
              </div>
              <div className="flex items-center gap-2">
                {orderLifecycle.map((s, i) => (
                  <div key={s.status} className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${s.textColor} bg-white/[0.03] border border-current/20`}>
                      {s.status}
                    </span>
                    {i < orderLifecycle.length - 1 && (
                      <span className="text-restra-text-muted/30">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
