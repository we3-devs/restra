import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Mail, Tag, Users, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";

type SectionNavItem = {
  type: "section";
  key: TranslationKey;
  section: string; // in-page anchor, e.g. "#hero"
  /** Dedicated page for this section, linked from every page except home. */
  page: string;
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
  { type: "section", key: "nav.home", section: "#hero", page: "/", icon: Home },
  { type: "section", key: "nav.features", section: "#modules", page: "/features", icon: LayoutGrid },
  { type: "section", key: "nav.howItWorks", section: "#workflow", page: "/how-it-works", icon: Workflow },
  { type: "section", key: "nav.pricing", section: "#pricing", page: "/pricing", icon: Tag },
  { type: "section", key: "nav.team", section: "#team", page: "/about", icon: Users },
  { type: "section", key: "nav.contact", section: "#contact", page: "/contact", icon: Mail },
];

const sectionItems = navItems.filter(
  (item): item is SectionNavItem => item.type === "section",
);
const defaultSection = sectionItems[0]?.section ?? "#hero";

function scrollToSection(section: string) {
  const el = document.querySelector(section);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** True when `pathname` is `page` or one of its sub-pages (e.g. /features/pos). */
function isCurrentPage(pathname: string, page: string) {
  return pathname === page || (page !== "/" && pathname.startsWith(page + "/"));
}

/** Real anchor for crawlers and new-tab clicks; smooth-scrolls on a plain click. */
function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, section: string) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
  event.preventDefault();
  scrollToSection(section);
}

// Only rendered for a "page" nav item pointing at /features; loaded on demand.
const FeaturesNavMenu = dynamic(() => import("./FeaturesNavMenu"));

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
        className={`mx-auto grid grid-cols-2 items-center px-4 transition-[height,max-width,border-radius,background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-in-out sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8 ${
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
          {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo; next/image adds nothing for SVG */}
          <img src="/logo.svg" alt="RESTRA home" width={1306} height={1205} className="h-10 w-auto shrink-0" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex md:justify-self-center">
          {navItems.map((item) => {
            // Home page: scroll-spy section. Other pages: the section's own page.
            const isActive =
              item.type === "section" &&
              (pathname === "/" ? item.section === activeHref : isCurrentPage(pathname, item.page));
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
                  href={item.page}
                  className={className}
                  aria-current={isCurrentPage(pathname, item.page) ? "page" : undefined}
                >
                  {t(item.key)}
                </Link>
              );
            }

            return (
              <a
                key={item.section}
                href={item.section}
                onClick={(event) => handleSectionClick(event, item.section)}
                className={className}
              >
                {t(item.key)}
              </a>
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

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/45 bg-white/70 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(26,28,28,0.08)] backdrop-blur-xl backdrop-saturate-150 md:hidden"
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
            <a
              key={item.section}
              href={item.section}
              onClick={(event) => handleSectionClick(event, item.section)}
              className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors"
            >
              {inner}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
