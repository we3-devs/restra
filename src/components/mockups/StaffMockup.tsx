import { BadgeCheck, ShieldCheck, UserCog, Users } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Staff & roles mockup: team member list with role assignments and a
 * permission matrix showing admin/manager/worker access levels.
 */

const members = [
  { name: "Sita (Manager)", role: "Manager", tone: "bg-restra-cyan/10 text-restra-cyan", active: true },
  { name: "Bikash (Waiter)", role: "Worker", tone: "bg-restra-yellow/10 text-restra-yellow", active: true },
  { name: "Kiran (Kitchen)", role: "Worker", tone: "bg-restra-yellow/10 text-restra-yellow", active: true },
  { name: "Owner (You)", role: "Admin", tone: "bg-emerald-500/10 text-emerald-400", active: true },
];

const permissions = [
  { label: "Billing & Orders", admin: true, manager: true, worker: true },
  { label: "Inventory Management", admin: true, manager: true, worker: false },
  { label: "Inventory Settings", admin: true, manager: false, worker: false },
  { label: "Staff Roles", admin: true, manager: false, worker: false },
  { label: "Reports & Analytics", admin: true, manager: true, worker: false },
];

export default function StaffMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/[0.08] bg-restra-bg shadow-xl shadow-black/20",
        className,
      )}
      role="img"
      aria-label="RESTRA staff management screen showing roles and permissions"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-restra-surface px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/15 text-[10px] font-bold text-restra-yellow">
            R
          </span>
          <span className="text-xs font-semibold text-restra-text">Staff & Roles</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-restra-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-restra-cyan">
          <Users className="h-3 w-3" /> 4 accounts
        </span>
      </div>

      <div className="grid grid-cols-[1fr_1.25fr]">
        {/* Team list */}
        <div className="space-y-1.5 border-r border-white/[0.06] p-3.5">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-2.5 rounded-lg border border-white/[0.05] bg-restra-card px-2.5 py-2"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-restra-surface text-[10px] font-bold text-restra-text-secondary">
                {member.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-restra-text">{member.name}</p>
                <span
                  className={cn(
                    "mt-0.5 inline-block rounded-full px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide",
                    member.tone,
                  )}
                >
                  {member.role}
                </span>
              </div>
              {member.active ? (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-label="Active" />
              ) : null}
            </div>
          ))}

          <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-white/[0.05] bg-restra-surface px-2.5 py-2 text-[10px] text-restra-text-muted">
            <UserCog className="h-3.5 w-3.5 text-restra-cyan" />
            Permissions update instantly
          </div>
        </div>

        {/* Permission matrix */}
        <div className="p-3.5">
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] gap-1 border-b border-white/[0.05] pb-1.5 text-[8px] font-semibold uppercase tracking-wider text-restra-text-muted">
            <span>Permission</span>
            <span className="text-center">Admin</span>
            <span className="text-center">Mgr</span>
            <span className="text-center">Worker</span>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {permissions.map((perm) => (
              <div
                key={perm.label}
                className="grid grid-cols-[1.4fr_repeat(3,1fr)] items-center gap-1 py-[7px]"
              >
                <span className="truncate text-[10px] text-restra-text-secondary">{perm.label}</span>
                {[perm.admin, perm.manager, perm.worker].map((allowed, i) => (
                  <span key={i} className="flex justify-center">
                    <span
                      className={cn(
                        "flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold",
                        allowed
                          ? i === 0
                            ? "bg-restra-yellow/15 text-restra-yellow"
                            : "bg-restra-cyan/15 text-restra-cyan"
                          : "bg-white/[0.04] text-transparent",
                      )}
                    >
                      {allowed ? "✓" : "·"}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-2">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
            <span className="text-[9px] leading-snug text-restra-text-secondary">
              Workers only see the tools their job needs
            </span>
            <BadgeCheck className="ml-auto h-3.5 w-3.5 shrink-0 text-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
