import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
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
    titleKey: "roles.admin" as TranslationKey,
    subtitleKey: "roles.adminSub" as TranslationKey,
    descKey: "roles.adminDesc" as TranslationKey,
    permissions: [
      { nameKey: "roles.perm.userManagement" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.reports" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.inventorySettings" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.systemSettings" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.billing" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.staffRoles" as TranslationKey, allowed: true },
    ],
    accentColor: "text-restra-yellow",
    borderColor: "border-restra-yellow/20",
    bgColor: "bg-restra-yellow/5",
    iconBg: "bg-restra-yellow/10",
  },
  {
    icon: UserCog,
    titleKey: "roles.manager" as TranslationKey,
    subtitleKey: "roles.managerSub" as TranslationKey,
    descKey: "roles.managerDesc" as TranslationKey,
    permissions: [
      { nameKey: "roles.perm.userManagement" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.reports" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.inventoryMgmt" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.systemSettings" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.billing" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.staffOversight" as TranslationKey, allowed: true },
    ],
    accentColor: "text-restra-cyan",
    borderColor: "border-restra-cyan/20",
    bgColor: "bg-restra-cyan/5",
    iconBg: "bg-restra-cyan/10",
  },
  {
    icon: HardHat,
    titleKey: "roles.worker" as TranslationKey,
    subtitleKey: "roles.workerSub" as TranslationKey,
    descKey: "roles.workerDesc" as TranslationKey,
    permissions: [
      { nameKey: "roles.perm.userManagement" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.reports" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.inventoryView" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.systemSettings" as TranslationKey, allowed: false },
      { nameKey: "roles.perm.billing" as TranslationKey, allowed: true },
      { nameKey: "roles.perm.tableMgmt" as TranslationKey, allowed: true },
    ],
    accentColor: "text-restra-text-secondary",
    borderColor: "border-white/[0.08]",
    bgColor: "bg-white/[0.02]",
    iconBg: "bg-white/[0.05]",
  },
];

export default function RoleBasedAccess() {
  const { t } = useI18n();

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
            {t("roles.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("roles.title").replace(t("roles.titleHighlight"), "").trimEnd() + " "}
            <span className="text-restra-yellow">{t("roles.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base text-restra-text-secondary lg:text-lg">
            {t("roles.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border ${role.borderColor} ${role.bgColor} p-6 transition-all duration-300 hover:border-white/[0.15]`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${role.iconBg}`}>
                  <role.icon className={`h-5 w-5 ${role.accentColor}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-restra-text">{t(role.titleKey)}</h3>
                  <p className="text-xs text-restra-text-muted">{t(role.subtitleKey)}</p>
                </div>
              </div>

              <p className="mb-5 text-sm text-restra-text-secondary">{t(role.descKey)}</p>

              <div className="space-y-2.5">
                {role.permissions.map((perm) => (
                  <div key={perm.nameKey} className="flex items-center justify-between">
                    <span className="text-xs text-restra-text-secondary">{t(perm.nameKey)}</span>
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
