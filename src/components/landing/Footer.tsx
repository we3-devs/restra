import { useNavigate } from "react-router";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How it works", href: "#workflow" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-white/[0.06] bg-restra-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-restra-text"
            >
              Restra
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-restra-text-muted">
              Restaurant management, without the unnecessary complexity.
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-restra-yellow/10 px-4 py-2 text-xs font-semibold text-restra-yellow transition-all hover:bg-restra-yellow/20"
            >
              Get Started →
            </button>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-sm text-restra-text-secondary transition-colors hover:text-restra-text"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-restra-text-muted">
            © {new Date().getFullYear()} Restra. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-restra-text-muted">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
