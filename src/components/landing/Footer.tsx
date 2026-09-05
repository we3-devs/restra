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
      { labelKey: "footer.pricing", href: "#pricing" },
      { labelKey: "footer.howItWorks", href: "#workflow" },
    ],
  },
  {
    titleKey: "footer.company",
    links: [
      { labelKey: "nav.home", href: "#hero" },
      { labelKey: "nav.blog", href: "/blog" },
      { labelKey: "footer.contact", href: "#contact" },
    ],
  },
  {
    titleKey: "footer.legal",
    links: [
      { labelKey: "footer.about", href: "/restaurant-management-system" },
      { labelKey: "footer.privacy", href: "#" },
      { labelKey: "footer.terms", href: "#" },
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
    "text-sm text-restra-text-secondary transition-colors hover:text-restra-text";

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
    <footer className="border-t border-white/[0.06] bg-restra-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-end gap-1 font-display text-xl font-semibold tracking-tight text-restra-text"
            >
              <img src="/logo.svg" alt="RESTRA logo" className="h-11 w-auto shrink-0" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-restra-text-muted">
              {t("footer.desc")}
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-restra-yellow/10 px-4 py-2 text-xs font-semibold text-restra-yellow transition-all hover:bg-restra-yellow/20"
            >
              {t("common.getTableStarted")}
            </Link>
          </div>

          {/* Links */}
          {footerGroups.map((group) => (
            <div key={group.titleKey}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
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
          className="mt-10 border-t border-white/[0.06] pt-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
            Explore RESTRA
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-restra-text-secondary">
            {resourcePages.map((href) => (
              <Link key={href} href={href} className="transition-colors hover:text-restra-yellow">
                {href === "/restaurant-management-system"
                  ? "What is RESTRA?"
                  : seoPages[href.replace("/features/", "")].title}
              </Link>
            ))}
            <Link href="/blog" className="transition-colors hover:text-restra-yellow">
              Blog
            </Link>
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-restra-text-muted">
            © {new Date().getFullYear()} Restra. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-restra-text-muted">
              {t("footer.systemsOk")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
