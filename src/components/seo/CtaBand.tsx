import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type CtaBandProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Conversion band shown at the bottom of every content page. Links point to
 * the contact section on the landing page, which is where RESTRA converts.
 */
export default function CtaBand({
  title = "Ready to run your restaurant on one system?",
  subtitle = "Talk to the RESTRA team about your restaurant, café, or cloud kitchen — no commitment, no jargon.",
  primaryLabel = "Get Started",
  primaryHref = "/#contact",
  secondaryLabel = "Explore Features",
  secondaryHref = "/features",
}: CtaBandProps) {
  return (
    <section
      aria-label="Get started with RESTRA"
      className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card bg-[radial-gradient(ellipse_120%_100%_at_0%_0%,rgba(255,212,59,0.07),transparent_55%),radial-gradient(ellipse_100%_100%_at_100%_100%,rgba(34,211,238,0.05),transparent_60%)] p-6 sm:p-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
          RESTRA
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-7 text-restra-text-secondary">{subtitle}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
          >
            <MessageCircle className="h-4 w-4 text-restra-cyan" />
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
