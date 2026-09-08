"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowRight, Check } from "lucide-react";
import { getFeatureGroup, homeShowcaseIds, type FeatureGroup } from "@/lib/showcase";
import MockupRenderer from "@/components/mockups/MockupRenderer";
import Reveal from "@/components/reusable/Reveal";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const showcaseCopy: Record<
  string,
  {
    badgeKey: TranslationKey;
    titleKey: TranslationKey;
    highlightKey: TranslationKey;
    subtitleKey: TranslationKey;
  }
> = {
  "pos-billing": {
    badgeKey: "showcase.posBadge",
    titleKey: "showcase.posTitle",
    highlightKey: "showcase.posTitleHighlight",
    subtitleKey: "showcase.posSubtitle",
  },
  "qr-ordering": {
    badgeKey: "showcase.qrBadge",
    titleKey: "showcase.qrTitle",
    highlightKey: "showcase.qrTitleHighlight",
    subtitleKey: "showcase.qrSubtitle",
  },
  inventory: {
    badgeKey: "showcase.inventoryBadge",
    titleKey: "showcase.inventoryTitle",
    highlightKey: "showcase.inventoryTitleHighlight",
    subtitleKey: "showcase.inventorySubtitle",
  },
  "staff-roles": {
    badgeKey: "showcase.staffBadge",
    titleKey: "showcase.staffTitle",
    highlightKey: "showcase.staffTitleHighlight",
    subtitleKey: "showcase.staffSubtitle",
  },
  analytics: {
    badgeKey: "showcase.analyticsBadge",
    titleKey: "showcase.analyticsTitle",
    highlightKey: "showcase.analyticsTitleHighlight",
    subtitleKey: "showcase.analyticsSubtitle",
  },
};

/**
 * Full-width editorial showcase: alternating text/mockup split for the five
 * marquee modules. Copy comes from translations; mockups are realistic product
 * renders rather than abstract illustrations.
 */
export default function ModuleShowcase() {
  const { t } = useI18n();

  return (
    <>
      {homeShowcaseIds.map((id, index) => {
        const group = getFeatureGroup(id);
        if (!group) return null;
        const copy = showcaseCopy[id];
        const flip = index % 2 === 1;

        return (
          <section
            key={id}
            id={`showcase-${id}`}
            className={cn("relative py-[3.2rem] lg:py-[4.8rem]", index % 2 === 1 && "bg-restra-surface/40 border-y border-white/[0.05]")}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
              <div
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                )}
              >
                {/* Copy */}
                <Reveal className={cn(flip && "lg:order-2")}>
                  <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-text-muted">
                    <span aria-hidden="true" className="h-px w-6 bg-restra-cyan/60" />
                    {t(copy.badgeKey)}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-restra-text sm:text-4xl">
                    {t(copy.titleKey).replace(t(copy.highlightKey), "").trimEnd()}{" "}
                    <span className="text-restra-yellow">{t(copy.highlightKey)}</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-restra-text-secondary">
                    {t(copy.subtitleKey)}
                  </p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-restra-text-muted">
                    {t("showcase.benefitHeading")}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-restra-text-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-restra-yellow" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={group.href}
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-restra-yellow transition-colors hover:text-restra-text"
                  >
                    {t("showcase.learnMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>

                {/* Mockup */}
                <Reveal delay={0.12} direction={flip ? "left" : "right"} className={cn(flip && "lg:order-1")}>
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-6 rounded-2xl bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(255,212,59,0.05),transparent_70%)]"
                    />
                    <MockupRenderer mock={group.mock} className="relative" />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export type { FeatureGroup };
