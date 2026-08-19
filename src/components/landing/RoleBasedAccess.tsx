import { motion } from "framer-motion";
import {
  Shield,
  UserCog,
  HardHat,
  Check,
  X,
} from "lucide-react";

const roles = [
  {
    icon: Shield,
    title: "Admin",
    subtitle: "Full control",
    description: "Complete access to every part of the restaurant system.",
    permissions: [
      { name: "User Management", allowed: true },
      { name: "Reports & Analytics", allowed: true },
      { name: "Inventory Settings", allowed: true },
      { name: "System Settings", allowed: true },
      { name: "Billing & Orders", allowed: true },
      { name: "Staff Roles", allowed: true },
    ],
    accentColor: "text-restra-yellow",
    borderColor: "border-restra-yellow/20",
    bgColor: "bg-restra-yellow/5",
    iconBg: "bg-restra-yellow/10",
  },
  {
    icon: UserCog,
    title: "Manager",
    subtitle: "Daily operations",
    description: "Manages orders, inventory, staff, and day-to-day activity.",
    permissions: [
      { name: "User Management", allowed: false },
      { name: "Reports & Analytics", allowed: true },
      { name: "Inventory Management", allowed: true },
      { name: "System Settings", allowed: false },
      { name: "Billing & Orders", allowed: true },
      { name: "Staff Oversight", allowed: true },
    ],
    accentColor: "text-restra-cyan",
    borderColor: "border-restra-cyan/20",
    bgColor: "bg-restra-cyan/5",
    iconBg: "bg-restra-cyan/10",
  },
  {
    icon: HardHat,
    title: "Worker",
    subtitle: "Assigned tasks",
    description: "Access only the tools needed for daily responsibilities.",
    permissions: [
      { name: "User Management", allowed: false },
      { name: "Reports & Analytics", allowed: false },
      { name: "Inventory Viewing", allowed: false },
      { name: "System Settings", allowed: false },
      { name: "Billing & Orders", allowed: true },
      { name: "Table Management", allowed: true },
    ],
    accentColor: "text-restra-text-secondary",
    borderColor: "border-white/[0.08]",
    bgColor: "bg-white/[0.02]",
    iconBg: "bg-white/[0.05]",
  },
];

export default function RoleBasedAccess() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-restra-surface/50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            Access Control
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            The right access for{" "}
            <span className="text-restra-yellow">every role</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
            Control who sees what — from full admin access to task-specific worker permissions.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border ${role.borderColor} ${role.bgColor} p-6 transition-all duration-300 hover:border-white/[0.15]`}
            >
              {/* Icon and title */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${role.iconBg}`}>
                  <role.icon className={`h-5 w-5 ${role.accentColor}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-restra-text">{role.title}</h3>
                  <p className="text-xs text-restra-text-muted">{role.subtitle}</p>
                </div>
              </div>

              <p className="mb-5 text-sm text-restra-text-secondary">{role.description}</p>

              {/* Permissions list */}
              <div className="space-y-2.5">
                {role.permissions.map((perm) => (
                  <div key={perm.name} className="flex items-center justify-between">
                    <span className="text-xs text-restra-text-secondary">{perm.name}</span>
                    {perm.allowed ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <X className="h-3.5 w-3.5 text-white/15" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
