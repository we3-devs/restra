import { useNavigate } from "react-router";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";

const footerLinks = [
  {
    titleKey: "footer.product" as TranslationKey,
    links: [
      { labelKey: "footer.features" as TranslationKey, href: "#features" },
      { labelKey: "footer.pricing" as TranslationKey, href: "#pricing" },
      { labelKey: "footer.howItWorks" as TranslationKey, href: "#workflow" },
    ],
  },
  {
    titleKey: "footer.company" as TranslationKey,
    links: [
      { labelKey: "footer.about" as TranslationKey, href: "#" },
      { labelKey: "footer.contact" as TranslationKey, href: "#contact" },
      { labelKey: "footer.careers" as TranslationKey, href: "#" },
    ],
  },
  {
    titleKey: "footer.legal" as TranslationKey,
    links: [
      { labelKey: "footer.privacy" as TranslationKey, href: "#" },
      { labelKey: "footer.terms" as TranslationKey, href: "#" },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useI18n();

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
              {t("footer.desc")}
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-restra-yellow/10 px-4 py-2 text-xs font-semibold text-restra-yellow transition-all hover:bg-restra-yellow/20"
            >
              {t("common.getTableStarted")}
            </button>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.titleKey}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
                {t(group.titleKey)}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.labelKey}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-sm text-restra-text-secondary transition-colors hover:text-restra-text"
                    >
                      {t(link.labelKey)}
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
            © {new Date().getFullYear()} Restra. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-restra-text-muted">{t("footer.systemsOk")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
