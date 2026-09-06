import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { featureSlugs, seoPages } from "@/lib/seo-content";
import type { TranslationKey } from "@/lib/translations";

type FooterLink = {
  labelKey: TranslationKey;
  href: string; // "/route" for pages, "#anchor" for in-page sections
};

const footerGroups: { titleKey: TranslationKey; links: FooterLink[] }[] = [
  {
    titleKey: "footer.product",
    links: [
      { labelKey: "footer.features", href: "/features" },
      { labelKey: "footer.howItWorks", href: "/how-it-works" },
      { labelKey: "footer.pricing", href: "/pricing" },
    ],
  },
  {
    titleKey: "footer.company",
    links: [
      { labelKey: "footer.about", href: "/about" },
      { labelKey: "nav.blog", href: "/blog" },
      { labelKey: "footer.contact", href: "/contact" },
      { labelKey: "nav.home", href: "/" },
    ],
  },
  {
    titleKey: "footer.legal",
    links: [
      { labelKey: "footer.privacy", href: "/privacy" },
      { labelKey: "footer.terms", href: "/terms" },
      { labelKey: "footer.cookies", href: "/cookies" },
      { labelKey: "footer.refundPolicy", href: "/refund-policy" },
    ],
  },
];

const resourcePages = [
  "/restaurant-management-system",
  ...featureSlugs.map((slug) => `/features/${slug}`),
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const { t } = useI18n();
  const className =
    "text-sm text-restra-footer-muted transition-colors hover:text-white";

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {t(link.labelKey)}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (link.href.startsWith("#")) {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className={className}
    >
      {t(link.labelKey)}
    </button>
  );
}

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="restra-footer relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_0%,rgba(255,255,255,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-end gap-1 font-display text-xl font-semibold tracking-tight text-restra-footer-heading"
            >
              <img src="/logo.svg" alt="RESTRA logo" className="h-11 w-auto shrink-0" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-restra-footer-muted">
              {t("footer.desc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-xs font-bold text-[#8a6a08] shadow-sm transition-all hover:bg-white"
              >
                {t("common.getTableStarted")}
              </Link>
              <Link
                href="/cookies"
                className="text-xs font-medium text-restra-footer-muted transition-colors hover:text-white"
              >
                {t("footer.cookieSettings")}
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerGroups.map((group) => (
            <div key={group.titleKey}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-restra-footer-heading">
                {t(group.titleKey)}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.labelKey}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav
          aria-label="RESTRA resources"
          className="mt-10 border-t border-white/25 pt-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-restra-footer-heading">
            Explore RESTRA
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-restra-footer-muted">
            {resourcePages.map((href) => (
              <Link key={href} href={href} className="transition-colors hover:text-white">
                {href === "/restaurant-management-system"
                  ? "What is RESTRA?"
                  : seoPages[href.replace("/features/", "")].title}
              </Link>
            ))}
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-8 sm:flex-row">
          <p className="text-xs text-restra-footer-muted">
            © {new Date().getFullYear()} Restra. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-medium text-white">
              {t("footer.systemsOk")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
