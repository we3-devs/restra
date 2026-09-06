import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import HeroShowcase from "./HeroShowcase";

/**
 * Centered SaaS hero that sits directly below the existing fixed navbar:
 * headline → supporting paragraph → CTA pair → oversized dashboard showcase
 * that overlaps the lower portion of the section for depth.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export default function Hero() {
  const { t } = useI18n();

  const [beforeHighlight, afterHighlight] = t("hero.title").split(
    t("hero.titleHighlight"),
  );

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background photo + readability overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Wash the photo out so copy stays readable on the light theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-restra-bg/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_30%,transparent_35%,rgba(250,250,248,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-restra-bg" />
        {/* Subtle brand glows on top of the photo wash */}
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(212,160,23,0.08),transparent_65%)]" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-restra-cyan/[0.05] blur-3xl" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-restra-yellow/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        {/* Copy */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-restra-text-secondary shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-restra-yellow" aria-hidden="true" />
              Restaurant management, simplified
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            id="hero-heading"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-restra-text sm:text-6xl lg:text-[4.25rem]"
          >
            {beforeHighlight}
            <span className="text-restra-yellow">{t("hero.titleHighlight")}</span>
            {afterHighlight ?? ""}
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 max-w-2xl text-base leading-relaxed text-restra-text-secondary sm:mt-6 sm:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-restra-yellow px-7 py-3 text-sm font-semibold text-[#241D05] shadow-lg shadow-restra-yellow/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-restra-yellow/90 hover:shadow-xl hover:shadow-restra-yellow/25 sm:w-auto"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-restra-border bg-white px-7 py-3 text-sm font-semibold text-restra-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DCDCD5] hover:shadow-lg hover:shadow-black/5 sm:w-auto"
            >
              {t("hero.cta.secondary")}
            </Link>
          </motion.div>
        </div>

        {/* Oversized showcase overlapping the hero's lower edge */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="relative mt-14 sm:mt-16 lg:mt-20"
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
