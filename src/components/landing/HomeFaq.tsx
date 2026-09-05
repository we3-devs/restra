"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs } from "@/lib/faq-data";
import SectionHeading from "@/components/reusable/SectionHeading";
import Reveal from "@/components/reusable/Reveal";

/** Home FAQ: the most common pre-sales questions, rendered with shadcn Accordion. */
export default function HomeFaq() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              badge={t("home.faqBadge")}
              title={t("home.faqTitle")}
              titleHighlight={t("home.faqTitleHighlight")}
            />
            <Link
              href="/faq"
              className="mt-6 inline-flex text-sm font-semibold text-restra-yellow underline-offset-4 transition-colors hover:text-restra-text hover:underline"
            >
              {t("home.faqViewAll")}
            </Link>
          </div>
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-white/[0.07]">
                  <AccordionTrigger className="text-left text-base font-semibold text-restra-text hover:no-underline hover:text-restra-yellow">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-restra-text-secondary">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
