"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { dashainOffer, dashainWhatsAppMessage, isDashainOfferActive } from "@/lib/offers";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Dashain campaign surfaces, all driven by `dashainOffer` in lib/offers and
 * hidden automatically once the offer ends:
 * - <DashainOfferPill />   small link above the hero headline
 * - <DashainOffer />       full home-page section with the poster
 * - <DashainOfferBanner /> compact strip for the pricing page
 * - <DashainOfferPopup />  one-time-per-session poster dialog
 */

const OFFER_ANCHOR = "dashain-offer";
const whatsAppHref = getWhatsAppLink(dashainWhatsAppMessage);

/** Offer visibility is decided after mount so SSR and hydration never disagree. */
function useOfferActive() {
  const [active, setActive] = useState(false);
  useEffect(() => setActive(isDashainOfferActive()), []);
  return active;
}

function ClaimButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#F5C518] px-6 py-3 text-sm font-bold text-[#141108] shadow-lg shadow-[#F5C518]/20 transition-all hover:-translate-y-0.5 hover:bg-[#FFD43B]"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Claim on WhatsApp
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={dashainOffer.phoneHref}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#F5C518]/50 hover:bg-white/[0.08]"
      >
        <Phone className="h-4 w-4 text-[#F5C518]" aria-hidden="true" />
        {dashainOffer.phone}
      </a>
    </div>
  );
}

function PriceBlock({ size = "lg" }: { size?: "lg" | "sm" }) {
  return (
    <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
          Initial price{" "}
          <span className="ml-1 text-sm font-semibold normal-case tracking-normal text-white/60 line-through decoration-[#F5C518] decoration-2">
            {dashainOffer.originalPrice}
          </span>
        </p>
        <p
          className={cn(
            "font-display font-semibold leading-none tracking-tight text-white",
            size === "lg" ? "mt-2 text-5xl sm:text-6xl lg:text-5xl xl:text-6xl" : "mt-1 text-3xl",
          )}
        >
          <span className="mr-2 align-middle text-base font-body font-medium text-white/60">Just</span>
          {dashainOffer.offerPrice}
        </p>
      </div>
      <span
        className={cn(
          "inline-flex -rotate-3 items-center rounded-lg bg-[#F5C518] font-display font-bold text-[#141108] shadow-lg shadow-[#F5C518]/25",
          size === "lg" ? "mb-1 px-3 py-1.5 text-2xl" : "px-2 py-1 text-base",
        )}
      >
        {dashainOffer.discount} OFF
      </span>
    </div>
  );
}

export function DashainOfferPill() {
  const active = useOfferActive();
  if (!active) return null;

  return (
    <a
      href={`#${OFFER_ANCHOR}`}
      onClick={(event) => {
        const el = document.getElementById(OFFER_ANCHOR);
        if (!el) return;
        event.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-restra-yellow/40 bg-white/80 py-1 pl-1 pr-3 text-xs font-medium text-restra-text shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-restra-yellow hover:shadow-md"
    >
      <span className="inline-flex items-center gap-1 rounded-full bg-[#141108] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#F5C518]">
        <Sparkles className="h-3 w-3" aria-hidden="true" />
        {dashainOffer.name}
      </span>
      <span>
        {dashainOffer.discount} off — just <strong className="font-semibold">{dashainOffer.offerPrice}</strong>
      </span>
      <ArrowRight className="h-3.5 w-3.5 text-restra-yellow transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

export default function DashainOffer() {
  const active = useOfferActive();
  if (!active) return null;

  return (
    <section
      id={OFFER_ANCHOR}
      aria-labelledby="dashain-offer-heading"
      className="relative scroll-mt-24 py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[#F5C518]/20 bg-[#100E0A] shadow-2xl shadow-black/20"
        >
          {/* Warm festive glows */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#F5C518]/[0.12] blur-3xl" />
            <div className="absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-[#E8590C]/[0.10] blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:22px_22px]" />
          </div>

          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:p-14">
            {/* Copy */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#F5C518] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#141108]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {dashainOffer.name}
              </p>
              <h2
                id="dashain-offer-heading"
                className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Manage your hotel &amp; restaurant{" "}
                <span className="italic text-[#F5C518]">smarter</span>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                {dashainOffer.tagline}. Get the complete {dashainOffer.product} for smooth
                operations, better service and higher profits — at {dashainOffer.discount} off for
                a limited time.
              </p>

              <div className="mt-8">
                <PriceBlock />
              </div>

              <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {dashainOffer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5C518]/15 text-[#F5C518]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <ClaimButtons className="mt-9" />

              <p className="mt-5 text-xs text-white/45">
                Offer valid until {dashainOffer.endsLabel}. Cloud based, secure &amp; reliable, with
                dedicated support. Final price including applicable taxes is confirmed in writing
                before you pay.
              </p>
            </div>

            {/* Poster */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#F5C518]/40 via-transparent to-[#E8590C]/30 blur-xl" />
              <a
                href={dashainOffer.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:rotate-[0.4deg]"
                aria-label="Open the full Dashain offer poster"
              >
                <Image
                  src={dashainOffer.image.src}
                  alt={dashainOffer.image.alt}
                  width={dashainOffer.image.width}
                  height={dashainOffer.image.height}
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 28rem, 100vw"
                  className="h-auto w-full"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function DashainOfferBanner({ className }: { className?: string }) {
  const active = useOfferActive();
  if (!active) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#F5C518]/25 bg-[#100E0A] p-5 shadow-xl shadow-black/10 sm:p-6",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#F5C518]/[0.12] blur-3xl" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
        <Image
          src={dashainOffer.image.src}
          alt={dashainOffer.image.alt}
          width={dashainOffer.image.width}
          height={dashainOffer.image.height}
          sizes="112px"
          className="hidden h-auto w-28 shrink-0 rounded-lg border border-white/10 md:block"
        />
        <div className="flex-1">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F5C518]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {dashainOffer.name} · Limited time
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
            Complete {dashainOffer.product}
          </p>
          <div className="mt-3">
            <PriceBlock size="sm" />
          </div>
          <p className="mt-3 text-xs text-white/45">Valid until {dashainOffer.endsLabel}.</p>
        </div>
        <ClaimButtons className="md:flex-col" />
      </div>
    </div>
  );
}

const POPUP_SEEN_KEY = `restra:${dashainOffer.id}:popup-seen`;
const POPUP_DELAY_MS = 2500;

export function DashainOfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isDashainOfferActive()) return;
    try {
      if (sessionStorage.getItem(POPUP_SEEN_KEY)) return;
    } catch {
      // Storage blocked: still show once for this page view.
    }
    const timer = window.setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        sessionStorage.setItem(POPUP_SEEN_KEY, "1");
      } catch {
        // Ignore: the popup simply may show again next visit.
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] w-[calc(100%-2rem)] max-w-[26rem] gap-0 overflow-y-auto border-[#F5C518]/25 bg-[#100E0A] p-0 text-white sm:max-w-[26rem]"
      >
        <DialogTitle className="sr-only">
          {dashainOffer.name}: {dashainOffer.discount} off — {dashainOffer.offerPrice}
        </DialogTitle>
        <DialogDescription className="sr-only">{dashainOffer.image.alt}</DialogDescription>
        <button
          type="button"
          onClick={() => handleOpenChange(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]"
          aria-label="Close offer"
        >
          <X className="h-4 w-4" />
        </button>
        <Image
          src={dashainOffer.image.src}
          alt=""
          width={dashainOffer.image.width}
          height={dashainOffer.image.height}
          sizes="26rem"
          className="h-auto w-full"
        />
        <div className="p-4">
          <ClaimButtons className="sm:flex-col" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
