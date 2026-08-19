import { useNavigate } from "react-router";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,212,59,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(34,211,238,0.03),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-restra-cyan animate-pulse" />
                <span className="text-xs font-medium text-restra-text-secondary">
                  Restaurant management, simplified
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-restra-text sm:text-5xl lg:text-6xl"
            >
              Run your{" "}
              <span className="text-restra-yellow">restaurant</span>.
              <br />
              Without the chaos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-restra-text-secondary lg:text-lg"
            >
              Restra brings POS, billing, QR ordering, inventory, order tracking, staff roles and more
              into one restaurant management system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => navigate("/auth")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-restra-yellow/10"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("#features")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-3 text-sm font-medium text-restra-text transition-all hover:bg-white/[0.05] hover:border-white/[0.15]"
              >
                <Play className="h-3.5 w-3.5" />
                Explore Restra
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 border-t border-white/[0.06] pt-6"
            >
              <div>
                <p className="font-display text-2xl font-semibold text-restra-text">1</p>
                <p className="text-[11px] text-restra-text-muted">Unified Platform</p>
              </div>
              <div className="h-8 w-px bg-white/[0.06]" />
              <div>
                <p className="font-display text-2xl font-semibold text-restra-text">7+</p>
                <p className="text-[11px] text-restra-text-muted">Core Modules</p>
              </div>
              <div className="h-8 w-px bg-white/[0.06]" />
              <div>
                <p className="font-display text-2xl font-semibold text-restra-text">24/7</p>
                <p className="text-[11px] text-restra-text-muted">Operations</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard preview */}
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
