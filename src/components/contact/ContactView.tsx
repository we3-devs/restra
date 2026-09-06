"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Github,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { contactFaqs } from "@/lib/faq-data";
import Reveal from "@/components/reusable/Reveal";
import SectionHeading from "@/components/reusable/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/**
 * Contact page: prefilled-outbound contact form (WhatsApp or email — no
 * backend, nothing stored), direct-contact channels, hours, socials, and FAQ.
 */

type FormState = {
  name: string;
  email: string;
  restaurant: string;
  message: string;
};

const emptyForm: FormState = { name: "", email: "", restaurant: "", message: "" };

export default function ContactView() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<"name" | "message", string>>>({});
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  const update = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSentVia(null);
  };

  const buildMessage = (): string => {
    const lines = [
      "Hi Restra team!",
      "",
      `${t("contact.nameLabel")}: ${form.name}`,
      form.email ? `${t("contact.emailLabel")}: ${form.email}` : "",
      form.restaurant ? `${t("contact.restaurantLabel")}: ${form.restaurant}` : "",
      "",
      form.message,
    ];
    return lines.filter(Boolean).join("\n");
  };

  const handleSubmit = (channel: "whatsapp" | "email") => (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<"name" | "message", string>> = {};
    if (!form.name.trim()) nextErrors.name = t("contact.formErrorName");
    if (!form.message.trim()) nextErrors.message = t("contact.formErrorMessage");
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      `${siteConfig.name} inquiry${form.restaurant ? ` — ${form.restaurant}` : ""}`,
    );
    const body = encodeURIComponent(buildMessage());

    if (channel === "whatsapp") {
      window.open(getWhatsAppLink(buildMessage()), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    }
    setSentVia(channel);
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border bg-restra-card px-3.5 py-2.5 text-sm text-restra-text placeholder:text-restra-text-muted/70 transition-colors focus:outline-none focus:ring-2",
      hasError
        ? "border-red-400/60 focus:ring-red-400/30"
        : "border-white/[0.1] focus:border-restra-yellow/50 focus:ring-restra-yellow/20",
    );

  return (
    <main className="min-h-screen bg-restra-bg text-restra-text">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-14 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_-10%,rgba(255,212,59,0.07),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-restra-text-muted">
              <Link href="/" className="transition-colors hover:text-restra-yellow">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-restra-text-secondary">{t("contact.badge")}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
              {t("contact.badge")}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {t("contact.title").replace(t("contact.titleHighlight"), "").trimEnd()}{" "}
              <span className="text-restra-yellow">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-restra-text-secondary">
              {t("contact.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + direct channels */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            {/* Form */}
            <Reveal>
              <form
                onSubmit={handleSubmit("whatsapp")}
                noValidate
                className="rounded-2xl border border-white/[0.08] bg-restra-card p-6 sm:p-8"
                aria-labelledby="contact-form-title"
              >
                <h2 id="contact-form-title" className="font-display text-2xl font-semibold tracking-tight">
                  {t("contact.formTitle")}
                </h2>
                <p className="mt-1.5 text-sm text-restra-text-secondary">
                  {t("contact.formSubtitle")}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("contact.nameLabel")} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder={t("contact.namePlaceholder")}
                      className={inputClass(Boolean(errors.name))}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name ? (
                      <p id="contact-name-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder={t("contact.emailPlaceholder")}
                      className={inputClass(false)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-restaurant" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("contact.restaurantLabel")}
                    </label>
                    <input
                      id="contact-restaurant"
                      type="text"
                      value={form.restaurant}
                      onChange={update("restaurant")}
                      placeholder={t("contact.restaurantPlaceholder")}
                      className={inputClass(false)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("contact.messageLabel")} *
                    </label>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={update("message")}
                      placeholder={t("contact.messagePlaceholder")}
                      rows={5}
                      className={cn(inputClass(Boolean(errors.message)), "resize-y")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message ? (
                      <p id="contact-message-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    onClick={handleSubmit("whatsapp")}
                    className="btn-cta inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("contact.sendViaWhatsapp")}
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit("email")}
                    className="btn-cta inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
                  >
                    <Mail className="h-4 w-4 text-restra-cyan" />
                    {t("contact.sendViaEmail")}
                  </button>
                </div>

                {sentVia ? (
                  <p role="status" className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.07] px-3.5 py-2.5 text-xs text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {t("contact.formHint")}
                  </p>
                ) : (
                  <>
                    <p className="mt-4 text-xs leading-relaxed text-restra-text-muted">
                      {t("contact.formHint")}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-restra-text-muted">
                      {t("common.bySubmitting")}
                      <Link href="/privacy" className="font-semibold underline underline-offset-2 hover:text-restra-yellow">
                        {t("common.privacyPolicy")}
                      </Link>
                      {t("common.andConsent")}
                    </p>
                  </>
                )}
              </form>
            </Reveal>

            {/* Direct channels */}
            <div className="space-y-4">
              <Reveal delay={0.08}>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {t("contact.infoTitle")}
                </h2>
                <p className="mt-1.5 text-sm text-restra-text-secondary">
                  {t("contact.infoSubtitle")}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <a
                  href={getWhatsAppLink("Hi Restra team! I'd like to talk about my restaurant.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/45"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold text-restra-text">
                      {t("contact.whatsappCta")}
                    </span>
                    <span className="mt-0.5 block text-xs text-restra-text-secondary">
                      {t("contact.whatsappSub")}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-restra-card p-5 transition-all hover:-translate-y-0.5 hover:border-restra-yellow/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-restra-yellow/10 text-restra-yellow">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold text-restra-text">
                      {siteConfig.contactEmail}
                    </span>
                    <span className="mt-0.5 block text-xs text-restra-text-secondary">
                      {t("contact.emailSub")}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-restra-yellow transition-transform group-hover:translate-x-0.5" />
                </a>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="rounded-xl border border-white/[0.08] bg-restra-card p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                    <Clock className="h-3.5 w-3.5 text-restra-cyan" />
                    {t("contact.hoursTitle")}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-restra-text">
                    {t("contact.hoursValue")}
                  </p>
                  <div className="mt-4 border-t border-white/[0.06] pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-restra-text-muted">
                      {t("contact.socialTitle")}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      {[
                        { icon: Instagram, label: "Instagram", href: siteConfig.socialProfiles[0] },
                        { icon: Github, label: "GitHub", href: siteConfig.socialProfiles[1] },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-restra-text-muted transition-colors hover:border-restra-yellow/40 hover:text-restra-yellow"
                        >
                          <social.icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.05] bg-restra-surface/40 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            badge={t("contact.faqBadge")}
            title={t("contact.faqTitle")}
            align="center"
          />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {contactFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-white/[0.07]">
                  <AccordionTrigger className="text-left text-base font-semibold text-restra-text hover:no-underline hover:text-restra-yellow">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-restra-text-secondary">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-restra-text sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-restra-text-secondary">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={getWhatsAppLink("Hi Restra team! I'd like to see a demo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-7 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
              >
                <MessageCircle className="h-4 w-4" />
                {t("contact.whatsappCta")}
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-7 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                {t("nav.pricing")}
                <ArrowRight className="h-4 w-4 text-restra-cyan" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export type { TranslationKey };
