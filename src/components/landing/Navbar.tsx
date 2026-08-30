import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Workflow,
  Tag,
  Users,
  Mail,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinkKeys = [
  { key: "nav.home" as const, href: "#hero", icon: Home },
  { key: "nav.features" as const, href: "#features", icon: LayoutGrid },
  { key: "nav.howItWorks" as const, href: "#workflow", icon: Workflow },
  { key: "nav.team" as const, href: "#team", icon: Users },
  { key: "nav.pricing" as const, href: "#pricing", icon: Tag },
  { key: "nav.contact" as const, href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinkKeys[0].href);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = navLinkKeys[0].href;
      if (atBottom) {
        current = navLinkKeys[navLinkKeys.length - 1].href;
      } else {
        for (const link of navLinkKeys) {
          const el = document.querySelector(link.href);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = link.href;
            break;
          }
          if (rect.top <= 120) {
            current = link.href;
          }
        }
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-[top] duration-500 ease-in-out ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <nav
        className={`mx-auto grid grid-cols-2 items-center overflow-hidden px-4 transition-[height,max-width,border-radius,background-color,box-shadow,border-color] duration-500 ease-in-out sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled
            ? "h-14 max-w-4xl rounded-full border border-white/8 bg-restra-bg/60 shadow-lg shadow-black/5 backdrop-blur-2xl backdrop-saturate-150"
            : "h-20 max-w-[1600px] rounded-none border border-transparent bg-transparent shadow-none sm:h-24 lg:h-30"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-1 font-display text-xl font-semibold tracking-tight text-restra-text"
        >
          <img src="/logo.svg" alt="RESTRA logo" className="h-8 w-auto shrink-0 sm:h-11" />

        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex md:justify-self-center">
          {navLinkKeys.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium transition-colors hover:text-restra-text ${
                link.href === activeHref ? "text-restra-text" : "text-restra-text-secondary"
              }`}
            >
              {t(link.key)}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex md:justify-self-end">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 justify-self-end md:hidden">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}

export function MobileTabBar() {
  const [activeHref, setActiveHref] = useState(navLinkKeys[0].href);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = navLinkKeys[0].href;
      if (atBottom) {
        current = navLinkKeys[navLinkKeys.length - 1].href;
      } else {
        for (const link of navLinkKeys) {
          const el = document.querySelector(link.href);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = link.href;
            break;
          }
          if (rect.top <= 120) {
            current = link.href;
          }
        }
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/8 bg-restra-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl backdrop-saturate-150 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-stretch justify-between px-1">
        {navLinkKeys.map((link) => {
          const Icon = link.icon;
          const isActive = link.href === activeHref;
          return (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors"
            >
              <Icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? "text-restra-cyan" : "text-restra-text-secondary"
                }`}
              />
              <span
                className={isActive ? "text-restra-cyan" : "text-restra-text-secondary"}
              >
                {t(link.key)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
