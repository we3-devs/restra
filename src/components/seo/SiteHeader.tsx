"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  LayoutGrid,
  Menu,
  Newspaper,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { featurePages, featurePath } from "@/lib/seo-content";
import ThemeSwitcher from "@/components/landing/ThemeSwitcher";
import { FeatureIcon } from "./FeatureIcon";

function useIsActive(href: string, pathname: string): boolean {
  if (href === "/features") {
    return pathname === "/features" || pathname.startsWith("/features/");
  }
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  return pathname === href;
}

function FeaturesDropdown({ isActive = false }: { isActive?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(nextTarget)) setOpen(false);
      }}
    >
      <Link
        href="/features"
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? "text-restra-text" : "text-restra-text-secondary hover:text-restra-text"
        }`}
      >
        Features
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? "rotate-180 text-restra-yellow" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="menu"
            aria-label="Restaurant features"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[30rem] -translate-x-1/2 rounded-2xl border border-white/10 bg-restra-bg/80 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl backdrop-saturate-150"
          >
            <div className="grid grid-cols-2 gap-1">
              {featurePages.map((page) => (
                <Link
                  key={page.slug}
                  href={featurePath(page.slug)}
                  role="menuitem"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-restra-cyan transition-colors group-hover:border-restra-yellow/30 group-hover:text-restra-yellow">
                    <FeatureIcon slug={page.slug} className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-restra-text">
                      {page.title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-restra-text-muted">
                      {page.intro}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/features"
              role="menuitem"
              className="mt-1 flex items-center justify-between rounded-lg border-t border-white/[0.08] px-3 pt-3 text-sm font-semibold text-restra-yellow transition-colors hover:text-restra-text"
            >
              View all features
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (active: boolean) =>
    `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
      active ? "bg-white/[0.05] text-restra-text" : "text-restra-text-secondary"
    }`;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-restra-text"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-t border-white/[0.06] bg-restra-bg/95 shadow-2xl shadow-black/30 backdrop-blur-2xl backdrop-saturate-150"
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted">
                Explore
              </p>
              <nav className="mt-3 space-y-1">
                <Link
                  href="/features"
                  className={linkClass(
                    pathname === "/features" || pathname.startsWith("/features/"),
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <LayoutGrid className="h-4 w-4 text-restra-cyan" /> All Features
                  </span>
                  <ArrowRight className="h-4 w-4 text-restra-text-muted" />
                </Link>
                <Link
                  href="/blog"
                  className={linkClass(
                    pathname === "/blog" || pathname.startsWith("/blog/"),
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Newspaper className="h-4 w-4 text-restra-cyan" /> Blog
                  </span>
                  <ArrowRight className="h-4 w-4 text-restra-text-muted" />
                </Link>
                <Link
                  href="/restaurant-management-system"
                  className={linkClass(false)}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <LayoutGrid className="h-4 w-4 text-restra-cyan" /> What is RESTRA?
                  </span>
                  <ArrowRight className="h-4 w-4 text-restra-text-muted" />
                </Link>
              </nav>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-restra-text-muted">
                Features
              </p>
              <div className="mt-3 space-y-1">
                {featurePages.map((page) => (
                  <Link
                    key={page.slug}
                    href={featurePath(page.slug)}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-restra-text-secondary transition-colors hover:bg-white/[0.05] hover:text-restra-text"
                  >
                    <FeatureIcon slug={page.slug} className="h-4 w-4 text-restra-cyan" />
                    {page.title}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/**
 * Sticky glass header shared by content pages (/features/*, /blog/*).
 * Client component so it can highlight the active route and show a mobile menu.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const isFeaturesActive = useIsActive("/features", pathname);
  const isBlogActive = useIsActive("/blog", pathname);

  const desktopLink = (href: string, label: string, active: boolean) => {
    return (
      <Link
        key={href}
        href={href}
        className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          active ? "text-restra-text" : "text-restra-text-secondary hover:text-restra-text"
        }`}
      >
        {label}
        {active ? (
          <motion.span
            layoutId="header-active-dot"
            className="absolute inset-x-3 -bottom-px h-px bg-restra-yellow"
          />
        ) : null}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-restra-bg/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href="/"
          aria-label="RESTRA home"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-restra-text"
        >
          <img src="/logo.svg" alt="RESTRA logo" className="h-8 w-auto" />
          <span className="hidden sm:inline">RESTRA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <FeaturesDropdown isActive={isFeaturesActive} />
          {desktopLink("/blog", "Blog", isBlogActive)}
          <span className="mx-2 h-5 w-px bg-white/[0.08]" />
          <div className="flex items-center gap-1.5">
            <ThemeSwitcher />
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-restra-yellow px-4 py-2 text-sm font-semibold text-restra-bg transition-colors hover:bg-restra-yellow/90"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>

        {/* Mobile: theme + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
