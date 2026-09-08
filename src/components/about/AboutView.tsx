"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import {
  ArrowRight,
  Facebook,
  Github,
  Globe,
  Layers,
  Linkedin,
  ShieldCheck,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/reusable/Reveal";
import SectionHeading from "@/components/reusable/SectionHeading";

/**
 * About page: story (editorial two-column), working values, and team grid
 * using the real member data shared with the landing Team section.
 */

type Member = {
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  quoteKey: TranslationKey;
  photo: string;
  socials: { icon: LucideIcon; url: string; label: string }[];
};

const members: Member[] = [
  {
    nameKey: "team.m1.name",
    roleKey: "team.m1.role",
    quoteKey: "team.m1.quote",
    photo: "/team/sujan.jpg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61556730426323" },
      { icon: Github, label: "GitHub", url: "https://github.com/sujan-977" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/sujan-katwal-247a103a5/" },
      { icon: Globe, label: "Portfolio", url: "https://sujan-katuwal.com.np/" },
    ],
  },
  {
    nameKey: "team.m2.name",
    roleKey: "team.m2.role",
    quoteKey: "team.m2.quote",
    photo: "/team/prashanta.jpeg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/prashanta.93/" },
      { icon: Github, label: "GitHub", url: "https://github.com/prashantaguragain" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/prashanta-guragain-0a24bb335/" },
      { icon: Globe, label: "Portfolio", url: "https://www.prashantaguragain.com.np/" },
    ],
  },
  {
    nameKey: "team.m3.name",
    roleKey: "team.m3.role",
    quoteKey: "team.m3.quote",
    photo: "/team/ujwal.jpg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/ujwalkhatiwadaa" },
      { icon: Github, label: "GitHub", url: "https://github.com/ujwalkhatiwadaa" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ujwalkhatiwadaa/" },
      { icon: Globe, label: "Portfolio", url: "https://ujwalkhatiwada.com.np/" },
    ],
  },
];

const values: { icon: LucideIcon; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Timer, titleKey: "about.value1Title", descKey: "about.value1Desc" },
  { icon: ShieldCheck, titleKey: "about.value2Title", descKey: "about.value2Desc" },
  { icon: Layers, titleKey: "about.value3Title", descKey: "about.value3Desc" },
  { icon: Users, titleKey: "about.value4Title", descKey: "about.value4Desc" },
];

export default function AboutView() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-restra-bg text-restra-text">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-14 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_-10%,rgba(255,212,59,0.07),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-restra-text-muted">
              <Link href="/" className="transition-colors hover:text-restra-yellow">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-restra-text-secondary">{t("about.badge")}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
              {t("about.badge")}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {t("about.title").replace(t("about.titleHighlight"), "").trimEnd()}{" "}
              <span className="text-restra-yellow">{t("about.titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
              {t("about.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <SectionHeading
              badge={t("about.storyBadge")}
              title={t("about.storyTitle")}
            />
            <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
              <p>{t("about.storyP1")}</p>
              <p>{t("about.storyP2")}</p>
              <p>{t("about.storyP3")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/[0.05] bg-restra-surface/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge={t("about.valuesBadge")}
            title={t("about.valuesTitle")}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.titleKey} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-white/[0.07] bg-restra-card p-4 transition-colors hover:border-restra-yellow/40">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-restra-yellow/10 text-restra-yellow">
                    <value.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-restra-text">
                    {t(value.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-restra-text-secondary">
                    {t(value.descKey)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge={t("about.teamBadge")}
            title={t("about.teamTitle")}
            subtitle={t("about.teamSubtitle")}
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <Reveal key={member.nameKey} delay={i * 0.08}>
                <article className="group mx-auto w-full max-w-72 overflow-hidden rounded-2xl border border-white/[0.07] bg-restra-card transition-all duration-300 hover:border-white/[0.16]">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={t(member.nameKey)}
                      fill
                      sizes="(min-width: 1024px) 288px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-restra-bg via-restra-bg/70 to-transparent p-4 pt-12">
                      <h3 className="font-display text-base font-semibold text-restra-text">
                        {t(member.nameKey)}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-restra-yellow">
                        {t(member.roleKey)}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-restra-text-secondary">
                      {t(member.quoteKey)}
                    </p>
                    <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                      {member.socials.map(({ icon: Icon, url, label }) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t(member.nameKey)} — ${label}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-restra-surface text-restra-text-secondary transition-colors hover:text-restra-yellow"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="text-sm text-restra-text-muted">{t("about.teamSectionCta")}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-restra-yellow/40 hover:text-restra-yellow"
            >
              {t("cta.talkToUs")}
              <ArrowRight className="h-4 w-4 text-restra-cyan" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-restra-text sm:text-4xl">
              {t("about.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-restra-text-secondary">
              {t("about.ctaSubtitle")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-7 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
            >
              {t("cta.talkToUs")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
