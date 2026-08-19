import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinkKeys = [
  { key: "nav.features" as const, href: "#features" },
  { key: "nav.howItWorks" as const, href: "#workflow" },
  { key: "nav.pricing" as const, href: "#pricing" },
  { key: "nav.contact" as const, href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
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
        className={`mx-auto grid grid-cols-2 items-center overflow-hidden px-6 transition-[height,max-width,border-radius,background-color,box-shadow,border-color] duration-500 ease-in-out md:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled
            ? "h-14 max-w-4xl rounded-full border border-white/8 bg-restra-bg/60 shadow-lg shadow-black/5 backdrop-blur-2xl backdrop-saturate-150"
            : "h-30 max-w-[1600px] rounded-none border border-transparent bg-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-1 font-display text-xl font-semibold tracking-tight text-restra-text"
        >
          <img src="/logo.svg" alt="Restra logo" className="h-11 w-auto shrink-0" />

        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex md:justify-self-center">
          {navLinkKeys.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
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

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 justify-self-end md:hidden">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            className="text-restra-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-restra-bg/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinkKeys.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="py-2.5 text-left text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
              >
                {t(link.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
