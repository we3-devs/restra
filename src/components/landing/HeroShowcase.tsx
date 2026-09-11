import type { PointerEvent, ReactNode } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  ChefHat,
  CreditCard,
  Soup,
  TrendingUp,
  Users,
} from "lucide-react";

import { useI18n } from "@/contexts/I18nContext";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";


/**
 * Hero product showcase — a restaurant-management dashboard mock rendered
 * in the light theme, photographed at a cafe. The photo sits behind the
 * browser frame and glass cards; dashboard content and floating cards layer
 * on top. Purely presentational so it stays server-renderable.
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
  const { t } = useI18n();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 22, mass: 0.7 };
  const tiltX = useSpring(useTransform(pointerY, [-1, 1], [28, -28]), springConfig);
  const tiltY = useSpring(useTransform(pointerX, [-1, 1], [-28, 28]), springConfig);

  const restaurantImg = "/images/dashboard-bg.jpeg";

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1);
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl" aria-hidden="true">
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="group"
    >
          {/* Visual composition */}
          <div className="relative mt-16 sm:mt-20 lg:mt-0">
          {/* Restaurant environment image */}
          <motion.div
            className="relative mx-auto w-full max-w-2xl rounded-[2.25rem] shadow-[0_24px_70px_rgba(212,160,23,0.22)]"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.25rem] border border-white/[0.12] shadow-2xl shadow-black/10 ring-1 ring-white/20"
              aria-hidden="true"
            >
            <Image
              src={restaurantImg}
              alt={t("home.restaurantSectionAlt")}
              priority
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover object-left"
            />
            {/* Darker warm wash so Restra UI reads well over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1C]/40 via-[#1A1C1C]/18 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,transparent_35%,rgba(15,17,16,0.35)_100%)]" />
            </div>
          </motion.div>

          {/* Floating card: Weekly Sales — upper-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute right-0 bottom-0 z-20 hidden w-fit sm:block lg:right-0 restra-float-delayed"
          >
            <div className="origin-bottom-right scale-90 rounded-xl border border-restra-border bg-white/95 p-2 shadow-lg shadow-black/5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                Weekly Sales
              </p>
              <p className="mt-0.5 font-display text-xl font-semibold text-restra-text">
                Rs. 92,450
              </p>

              <div className="mt-3 flex items-center gap-3">
                {/* Simple donut-ish visualization */}
                <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white/60 shadow-inner">
                  <svg
                    viewBox="0 0 36 36"
                    className="h-full w-full -rotate-90"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="18" r="15.5" className="text-restra-border" fill="none" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#0891B2"
                      strokeWidth="3"
                      strokeDasharray="48 207"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#0D9668"
                      strokeWidth="3"
                      strokeDasharray="32 207"
                      strokeDashoffset="-48"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#D4A017"
                      strokeWidth="3"
                      strokeDasharray="20 207"
                      strokeDashoffset="-80"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#0891B2]" />
                        Dine-in
                      </span>
                      <span className="font-semibold text-restra-text">48%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#0D9668]" />
                        Delivery
                      </span>
                      <span className="font-semibold text-restra-text">32%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-restra-text-secondary">
                        <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                        Takeout
                      </span>
                      <span className="font-semibold text-restra-text">20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card: Today's Orders — upper-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
            whileHover={{ y: -3 }}
            className="absolute left-0 top-0 z-20 hidden w-fit sm:block lg:left-0 restra-float"
            data-card="orders"
          >
            <div className="origin-top-left scale-90 rounded-xl border border-restra-border bg-white/95 p-2 shadow-lg shadow-black/5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-restra-cyan/10 text-restra-cyan">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-restra-text-muted">
                      Today&rsquo;s Orders
                    </p>
                    <p className="text-lg font-semibold text-restra-text">128</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                  +14.2%
                </span>
              </div>

              {/* Minimal upward trend */}
              <div className="mt-3 flex items-end gap-[4px] h-9">
                {[36, 52, 44, 68, 58, 74, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${i >= 6 ? "bg-restra-yellow" : "bg-restra-yellow/30"}`}
                    style={{ height: `${h}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-restra-text-muted">
                <span>9am</span>
                <span>3pm</span>
                <span>9pm</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative foreground dots: subtle restaurant/grid cue */}
          <div className="pointer-events-none absolute -z-10 left-[12%] top-[14%] hidden h-20 w-20 rounded-full bg-restra-yellow/8 blur-2xl sm:block lg:left-[14%] lg:top-[16%]" aria-hidden="true" />
          <div className="pointer-events-none absolute -z-10 right-[18%] bottom-[22%] hidden h-32 w-32 rounded-full bg-restra-cyan/8 blur-2xl sm:block lg:right-[20%] lg:bottom-[24%]" aria-hidden="true" />
        </div>
    </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .restra-float,
          .restra-float-delayed {
            animation: none !important;
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .restra-float {
            animation: restra-float 6s ease-in-out infinite;
          }
          .restra-float-delayed {
            animation: restra-float 7s ease-in-out infinite;
          }
          @keyframes restra-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        }
      `}</style>
    </div>    
  
  );
}
