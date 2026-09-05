"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { faqPageItems, faqPageSections } from "@/lib/faq-data";

function FaqSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search your question..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 px-4 pr-10 text-base"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      >
        ⌕
      </span>
    </div>
  );
}

/** Visible heading, but visually hidden from sighted users when empty. */
function VisuallyHidden({ children, when = true }: { children: React.ReactNode; when?: boolean }) {
  return (
    <span
      style={{
        position: "absolute",
        width: when ? 1 : 0,
        height: when ? 1 : 0,
        overflow: "hidden",
        clip: when ? "rect(0 0 0 0)" : "rect(0 0 0 0)",
        whiteSpace: "nowrap",
        border: "0",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </span>
  );
}

export default function FaqPageView() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqPageSections;

    return faqPageSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  const matchedCount = filteredSections.reduce((acc, section) => acc + section.items.length, 0);
  const totalCount = faqPageItems.length;

  return (
    <>
      <section
        className="overflow-hidden border-b border-white/[0.06] bg-restra-bg"
        aria-labelledby="faq-intro-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              FAQ
            </p>
            <h1
              id="faq-intro-heading"
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-restra-text sm:text-4xl lg:text-5xl"
            >
              Frequently Asked Questions About Restra Restaurant Management
              Software
            </h1>
            <p className="mt-6 leading-8 text-restra-text-secondary">
              Answers to the questions restaurant owners and managers ask most about
              Restra — a restaurant management software in Nepal that covers POS,
              billing, QR ordering, inventory, staff roles, and reporting.
            </p>
            <p className="mt-4 leading-8 text-restra-text-secondary">
              If you are comparing a restaurant management system or thinking about
              restaurant POS software for your outlet, you can use the search box to
              find a specific question, or browse the sections below.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
              >
                Talk to the team
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
              >
                See Restra pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/[0.06] bg-restra-card py-12 lg:py-16"
        aria-labelledby="faq-search-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="faq-search-heading"
            className="sr-only"
          >
            Search the Restra FAQ
          </h2>
          <FaqSearch value={query} onChange={setQuery} />
          <p
            aria-live="polite"
            aria-atomic="true"
            className="mt-4 text-sm text-restra-text-muted"
          >
            {matchedCount === 0
              ? "No matching questions found."
              : `${matchedCount} of ${totalCount} questions shown.`}
          </p>
          {query && matchedCount === 0 ? (
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-restra-surface/60 p-4 text-sm text-restra-text-secondary">
              Try a different search term, for example{" "}
              <span className="font-medium">POS</span>,{" "}
              <span className="font-medium">QR ordering</span>,{" "}
              <span className="font-medium">inventory</span>, or{" "}
              <span className="font-medium">pricing</span>.
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="border-b border-white/[0.06]"
        aria-labelledby="faq-accordion-heading"
      >
        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
          <h2
            id="faq-accordion-heading"
            className="font-display text-2xl font-semibold tracking-tight text-restra-text"
          >
            All Restra questions
          </h2>
          <p className="mt-3 text-restra-text-secondary">
            Tap a question to expand the answer. Open more than one if you want to
            compare answers.
          </p>

          <VisuallyHidden when={query.length > 0}>
            {query.length > 0
              ? `${matchedCount} of ${totalCount} questions shown for ${query}`
              : `All ${totalCount} questions shown`}
          </VisuallyHidden>

          {filteredSections.length === 0 ? (
            <div className="mt-8 rounded-xl border border-white/[0.08] bg-restra-surface/60 p-6 text-center text-sm text-restra-text-secondary">
              No questions match “{query}”. Try a broader search.
            </div>
          ) : (
            <Accordion type="multiple" className="mt-8 space-y-4 divide-y divide-white/[0.06]">
              {filteredSections.map((section) => (
                <div key={section.heading}>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-restra-text">
                    {section.heading}
                  </h3>
                  <Accordion type="multiple" className="-my-4 divide-y divide-white/[0.06]">
                    {section.items.map((item) => (
                      <AccordionItem key={item.question} value={item.question}>
                        <AccordionTrigger className="text-left text-base font-semibold text-restra-text py-4 px-1">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="leading-7 text-restra-text-secondary">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      <section
        id="contact"
        className="overflow-hidden rounded-2xl border border-white/[0.08] bg-restra-card bg-[radial-gradient(ellipse_120%_100%_at_0%_0%,rgba(255,212,59,0.07),transparent_55%),radial-gradient(ellipse_100%_100%_at_100%_100%,rgba(34,211,238,0.05),transparent_60%)] p-8 sm:p-12 lg:p-16"
        aria-labelledby="faq-cta-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-restra-yellow">
            Still have questions?
          </p>
          <h2
            id="faq-cta-heading"
            className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl"
          >
            Talk to the Restra team
          </h2>
          <p className="mt-4 leading-7 text-restra-text-secondary">
            Learn how Restra can help simplify your restaurant operations, from POS
            and billing to QR ordering, inventory, and reporting.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
            >
              Contact Restra
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
