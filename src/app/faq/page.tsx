import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { faqPageItems } from "@/lib/faq-data";
import FaqPageView from "@/components/faq/FaqPageView";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant Management Software FAQ (Nepal)",
  description: "Find answers about Restra restaurant management software, POS, billing, QR ordering, inventory, staff management, reports, pricing, setup and support.",
  path: "/faq",
  socialTitle: "Restaurant Management Software FAQ | Restra Nepal",
  socialDescription: "Answers about Restra restaurant management software: POS, billing, QR ordering, inventory, staff roles, reports, pricing, setup and support.",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPageItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-restra-bg text-restra-text">
        <FaqPageView />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
