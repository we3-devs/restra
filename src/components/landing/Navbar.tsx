import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => navigate("/auth")}
            className="text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="rounded-lg bg-restra-yellow px-5 py-2 text-sm font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90 hover:translate-y-[-1px]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-restra-text md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-restra-bg/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="py-2.5 text-left text-sm font-medium text-restra-text-secondary transition-colors hover:text-restra-text"
              >
                {link.label}
              </button>
            ))}
            <div className="my-2 h-px bg-white/[0.06]" />
            <button
              onClick={() => { setMobileOpen(false); navigate("/auth"); }}
              className="py-2.5 text-left text-sm font-medium text-restra-text-secondary"
            >
              Login
            </button>
            <button
              onClick={() => { setMobileOpen(false); navigate("/auth"); }}
              className="mt-2 w-full rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-restra-bg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
