import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Home,
  LayoutGrid,
  Mail,
  Tag,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureIcon } from "@/components/seo/FeatureIcon";
import { useI18n } from "@/contexts/I18nContext";
import { featurePages, featurePath } from "@/lib/seo-content";
import type { TranslationKey } from "@/lib/translations";

type SectionNavItem = {
  type: "section";
  key: TranslationKey;
  section: string; // in-page anchor, e.g. "#hero"
  icon: LucideIcon;
};

type PageNavItem = {
  type: "page";
  key: TranslationKey;
  path: string; // real route, e.g. "/features"
  icon: LucideIcon;
};

export type NavItem = SectionNavItem | PageNavItem;

const navItems: NavItem[] = [
  { type: "section", key: "nav.home", section: "#hero", icon: Home },
  { type: "page", key: "nav.features", path: "/features", icon: LayoutGrid },
  { type: "page", key: "nav.howItWorks", path: "/how-it-works", icon: Workflow },
  { type: "page", key: "nav.pricing", path: "/pricing", icon: Tag },
  { type: "section", key: "nav.team", section: "#team", icon: Users },
  { type: "page", key: "nav.contact", path: "/contact", icon: Mail },
];

const sectionItems = navItems.filter(
  (item): item is SectionNavItem => item.type === "section",
);
const defaultSection = sectionItems[0]?.section ?? "#hero";

function scrollToSection(section: string) {
  const el = document.querySelector(section);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------ */
/*  Features hover menu                                                */
/* ------------------------------------------------------------------ */

function FeaturesNavMenu({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
                  What is RESTRA?
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

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(defaultSection);
  const { t } = useI18n();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = defaultSection;
      if (atBottom) {
        const last = sectionItems[sectionItems.length - 1];
        current = last?.section ?? defaultSection;
      } else {
        for (const link of sectionItems) {
          const el = document.querySelector(link.section);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = link.section;
            break;
          }
          if (rect.top <= 120) {
            current = link.section;
          }
        }
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-[top] duration-500 ease-in-out ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <nav
        className={`mx-auto grid grid-cols-2 items-center px-4 transition-[height,max-width,border-radius,background-color,box-shadow,border-color] duration-500 ease-in-out sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled
            ? "h-12 max-w-4xl rounded-full border border-white/8 bg-restra-bg/60 shadow-lg shadow-black/5 backdrop-blur-lg"
            : "h-16 max-w-[1600px] rounded-none border border-transparent bg-transparent shadow-none sm:h-18 lg:h-22"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-1 font-display text-lg font-semibold tracking-tight text-restra-text"
        >
          <img src="/logo.svg" alt="RESTRA logo" className="h-7 w-auto shrink-0 sm:h-9" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex md:justify-self-center">
          {navItems.map((item) => {
            const isActive = item.type === "section" && item.section === activeHref;
            const className = `font-body text-sm font-medium transition-colors hover:text-restra-text ${
              isActive ? "text-restra-text" : "text-restra-text-secondary"
            }`;

            if (item.type === "page" && item.path === "/features") {
              return <FeaturesNavMenu key={item.path} label={t(item.key)} />;
            }

            if (item.type === "page") {
              return (
                <Link key={item.path} href={item.path} className={className}>
                  {t(item.key)}
                </Link>
              );
            }

            if (pathname !== "/") {
              return (
                <Link
                  key={item.section}
                  href={item.section === "#hero" ? "/" : `/${item.section}`}
                  className={className}
                >
                  {t(item.key)}
                </Link>
              );
            }

            return (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={className}
              >
                {t(item.key)}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex md:justify-self-end">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-1.5 rounded-lg bg-restra-yellow px-3.5 py-1.5 font-body text-sm font-semibold text-restra-bg transition-all hover:-translate-y-px hover:bg-restra-yellow/90"
          >
            {t("nav.getStarted")}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 justify-self-end md:hidden">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-1.5 rounded-lg bg-restra-yellow px-3 py-1.5 text-xs font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90"
          >
            {t("nav.getStarted")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile tab bar                                                     */
/* ------------------------------------------------------------------ */

export function MobileTabBar() {
  const [activeHref, setActiveHref] = useState(defaultSection);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = defaultSection;
      if (atBottom) {
        const last = sectionItems[sectionItems.length - 1];
        current = last?.section ?? defaultSection;
      } else {
        for (const link of sectionItems) {
          const el = document.querySelector(link.section);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = link.section;
            break;
          }
          if (rect.top <= 120) {
            current = link.section;
          }
        }
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item: NavItem) => {
    if (item.type === "section") scrollToSection(item.section);
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/8 bg-restra-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-stretch justify-between px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.type === "section" && item.section === activeHref;

          const inner = (
            <>
              <Icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? "text-restra-cyan" : "text-restra-text-secondary"
                }`}
              />
              <span
                className={isActive ? "text-restra-cyan" : "text-restra-text-secondary"}
              >
                {t(item.key)}
              </span>
            </>
          );

          if (item.type === "page") {
            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors"
              >
                {inner}
              </Link>
            );
          }

          return (
            <button
              key={item.section}
              onClick={() => handleNav(item)}
              className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors"
            >
              {inner}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
