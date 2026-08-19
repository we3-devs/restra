import { motion } from "framer-motion";
import {
  Monitor,
  Receipt,
  QrCode,
  GitBranch,
  Package,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "POS System",
    description: "Handle restaurant sales and transactions from a centralized point of sale.",
    accent: "yellow",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Receipt,
    title: "Bill Printing",
    description: "Generate and print restaurant bills quickly and accurately.",
    accent: "cyan",
    span: "lg:col-span-1",
  },
  {
    icon: QrCode,
    title: "QR Ordering",
    description: "Customers scan a QR code, view the menu, and place orders directly.",
    accent: "yellow",
    span: "lg:col-span-1",
  },
  {
    icon: GitBranch,
    title: "Order Tracking",
    description: "Track every order from placement through preparation to completion.",
    accent: "cyan",
    span: "lg:col-span-1",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Monitor stock levels and keep track of every ingredient moving through your kitchen.",
    accent: "yellow",
    span: "lg:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description: "Give administrators, managers, and workers different levels of control.",
    accent: "cyan",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: MessageSquare,
    title: "Restaurant Chatbot",
    description: "An integrated assistant for restaurant-related questions and operational guidance.",
    accent: "yellow",
    span: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Understand sales, orders, inventory movement, and overall restaurant activity.",
    accent: "cyan",
    span: "lg:col-span-1",
  },
  {
    icon: Plus,
    title: "More Tools",
    description: "Kitchen display, table management, shift scheduling, and other essentials — all built in.",
    accent: "muted",
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            Capabilities
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            Everything your restaurant{" "}
            <span className="text-restra-yellow">actually needs</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
            Built as one connected system — not a patchwork of disconnected tools.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group rounded-xl border border-white/[0.06] bg-restra-card p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-restra-card/80 ${feature.span}`}
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                  feature.accent === "yellow"
                    ? "bg-restra-yellow/10 text-restra-yellow"
                    : feature.accent === "cyan"
                      ? "bg-restra-cyan/10 text-restra-cyan"
                      : "bg-white/[0.05] text-restra-text-muted"
                }`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-restra-text">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-restra-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
