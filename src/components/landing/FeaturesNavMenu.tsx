"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureIcon } from "@/components/seo/FeatureIcon";
import { featurePages, featurePath } from "@/lib/seo-content";

/**
 * Hover/focus dropdown listing every feature page. Split from Navbar and
 * loaded on demand so pages that never show it don't ship framer-motion.
 */
export default function FeaturesNavMenu({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const suppressFocusOpen = useRef(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => {
        if (suppressFocusOpen.current) {
          suppressFocusOpen.current = false;
          return;
        }
        setOpen(true);
      }}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(nextTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        // Escape closes the menu and returns focus to the trigger (WCAG 1.4.13).
        if (event.key !== "Escape" || !open) return;
        event.preventDefault();
        setOpen(false);
        if (triggerRef.current && document.activeElement !== triggerRef.current) {
          suppressFocusOpen.current = true;
          triggerRef.current.focus();
        }
      }}
    >
      <Link
        ref={triggerRef}
        href="/features"
        aria-haspopup="menu"
        aria-expanded={open}
        className={`group inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-body text-sm font-medium transition-all duration-300 hover:bg-restra-yellow/10 hover:text-restra-text ${
          open
            ? "bg-restra-yellow/10 text-restra-text shadow-[0_6px_18px_rgba(245,197,24,0.12)]"
            : "text-restra-text-secondary"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-all duration-300 group-hover:text-restra-yellow ${
            open ? "rotate-180 text-restra-yellow" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="features-menu"
            role="menu"
            aria-label="Restaurant features"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-4 w-[42rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-restra-bg/70 shadow-2xl shadow-black/20 backdrop-blur-lg"
          >
            {/* Glass shine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-restra-cyan/[0.04]"
            />

            <div className="relative p-5">
              {/* Feature links */}
              <ul className="grid grid-cols-2 gap-1">
                {featurePages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={featurePath(page.slug)}
                      onClick={closeMenu}
                      role="menuitem"
                      className="group flex items-center gap-2.5 rounded-lg border border-transparent px-3 py-2.5 transition-all duration-200 hover:-translate-y-px hover:border-restra-yellow/20 hover:bg-restra-yellow/[0.06] hover:shadow-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-restra-cyan transition-colors group-hover:border-restra-yellow/30 group-hover:text-restra-yellow">
                        <FeatureIcon slug={page.slug} className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-restra-text transition-colors group-hover:text-restra-yellow">
                        {page.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick links */}
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.08] px-1 pt-3.5">
                <Link
                  href="/features"
                  onClick={closeMenu}
                  role="menuitem"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-restra-text-secondary transition-colors hover:text-restra-yellow"
                >
                  All features
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/restaurant-management-system"
                  onClick={closeMenu}
                  role="menuitem"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-restra-text-muted transition-colors hover:text-restra-text"
                >
                  Restaurant management software
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
