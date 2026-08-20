import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import DashboardPreview from "./DashboardPreview";
import MultiDeviceShowcase from "./MultiDeviceShowcase";

const SLIDE_INTERVAL = 7000;

export default function Hero() {
  const router = useRouter();
  const { t } = useI18n();
  const [slide, setSlide] = useState<0 | 1>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slide]);

  const goTo = useCallback((next: 0 | 1) => setSlide(next), []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const titleParts =
    slide === 0
      ? t("hero.title").split(t("hero.titleHighlight"))
      : t("hero.slide2.title").split(t("hero.slide2.titleHighlight"));

  return (
    <section id="hero" className="relative overflow-hidden pt-22 pb-6 flex items-center wrap min-h-dvh sm:pt-26 sm:pb-10 lg:min-h-screen lg:pt-40 lg:pb-24">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,212,59,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(34,211,238,0.03),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Copy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
            >
              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-restra-text sm:text-5xl lg:text-6xl lg:mt-16">
                {titleParts[0]}
                <span className="text-restra-yellow">
                  {slide === 0 ? t("hero.titleHighlight") : t("hero.slide2.titleHighlight")}
                </span>
                {titleParts[1] || ""}
              </h1>

              {/* Preview (shown right after headline on mobile, right column on desktop) */}
              <div className="relative order-2 mt-4 w-full lg:hidden">
                <button
                  type="button"
                  onClick={() => goTo(slide === 0 ? 1 : 0)}
                  aria-label="Previous slide"
                  className="absolute -left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-restra-card/90 text-restra-text-secondary shadow-lg backdrop-blur transition-colors hover:text-restra-text"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="mx-auto max-w-60">
                  <AnimatePresence mode="wait">
                    {slide === 0 ? (
                      <DashboardPreview key="dashboard-m" compact />
                    ) : (
                      <MultiDeviceShowcase key="devices-m" compact />
                    )}
                  </AnimatePresence>
                </div>
                <button
                  type="button"
                  onClick={() => goTo(slide === 0 ? 1 : 0)}
                  aria-label="Next slide"
                  className="absolute -right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-restra-card/90 text-restra-text-secondary shadow-lg backdrop-blur transition-colors hover:text-restra-text"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <p className="order-3 mt-4 max-w-lg text-sm leading-relaxed text-restra-text-secondary sm:text-base lg:text-lg">
                {slide === 0 ? t("hero.subtitle") : t("hero.slide2.subtitle")}
              </p>

              <div className="order-4 mt-5 flex flex-col gap-2.5 sm:flex-row">
                <button
                  onClick={() => router.push("/")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-2.5 text-sm font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-restra-yellow/10 sm:py-3"
                >
                  {slide === 0 ? t("nav.getStarted") : t("hero.slide2.cta")}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollTo("#features")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] px-6 py-2.5 text-sm font-medium text-restra-text transition-all hover:bg-white/[0.05] hover:border-white/[0.15] sm:py-3"
                >
                  <Play className="h-3.5 w-3.5" />
                  {t("hero.explore")}
                </button>
              </div>

              {/* Trust indicators */}
              <div className="order-5 mt-6 flex items-center gap-6 border-t border-white/[0.06] pt-4 lg:mt-12 lg:pt-6">
                <div>
                  <p className="font-display text-xl font-semibold text-restra-text lg:text-2xl">{t("hero.stat1Value")}</p>
                  <p className="text-[11px] text-restra-text-muted">{t("hero.stat1Label")}</p>
                </div>
                <div className="h-8 w-px bg-white/[0.06]" />
                <div>
                  <p className="font-display text-xl font-semibold text-restra-text lg:text-2xl">{t("hero.stat2Value")}</p>
                  <p className="text-[11px] text-restra-text-muted">{t("hero.stat2Label")}</p>
                </div>
                <div className="h-8 w-px bg-white/[0.06]" />
                <div>
                  <p className="font-display text-xl font-semibold text-restra-text lg:text-2xl">{t("hero.stat3Value")}</p>
                  <p className="text-[11px] text-restra-text-muted">{t("hero.stat3Label")}</p>
                </div>
              </div>

              {/* Slide indicators */}
              <div className="order-6 mt-4 flex items-center justify-center gap-2 lg:hidden">
                {[0, 1].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i as 0 | 1)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      slide === i ? "w-6 bg-restra-yellow" : "w-1.5 bg-white/[0.15]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Preview (desktop only) */}
          <div className="relative order-2 hidden lg:block">
            <button
              type="button"
              onClick={() => goTo(slide === 0 ? 1 : 0)}
              aria-label="Previous slide"
              className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-restra-card/90 text-restra-text-secondary shadow-lg backdrop-blur transition-colors hover:text-restra-text"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <AnimatePresence mode="wait">
              {slide === 0 ? <DashboardPreview key="dashboard" /> : <MultiDeviceShowcase key="devices" />}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => goTo(slide === 0 ? 1 : 0)}
              aria-label="Next slide"
              className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-restra-card/90 text-restra-text-secondary shadow-lg backdrop-blur transition-colors hover:text-restra-text"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
