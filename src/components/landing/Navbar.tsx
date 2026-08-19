import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-restra-bg/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-restra-text"
        >
          Restra
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
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
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <div className="h-5 w-px bg-white/[0.08] mx-1" />
          <button
            onClick={() => router.push("/auth")}
            className="text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
          >
            {t("nav.login")}
          </button>
          <button
            onClick={() => router.push("/auth")}
            className="rounded-lg bg-restra-yellow px-5 py-2 text-sm font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90 hover:translate-y-[-1px]"
          >
            {t("nav.getStarted")}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
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
            <div className="my-2 h-px bg-white/[0.06]" />
            <button
              onClick={() => { setMobileOpen(false); router.push("/auth"); }}
              className="py-2.5 text-left text-sm font-medium text-restra-text-secondary"
            >
              {t("nav.login")}
            </button>
            <button
              onClick={() => { setMobileOpen(false); router.push("/auth"); }}
              className="mt-2 w-full rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg"
            >
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
