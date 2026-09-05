import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { faqPageItems } from "@/lib/faq-data";
import FaqPageView from "@/components/faq/FaqPageView";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Restaurant Management Software FAQ | Restra Nepal",
  description:
    "Find answers about Restra restaurant management software, POS, billing, QR ordering, inventory, staff management, reports, pricing, setup and support.",
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "Restaurant Management Software FAQ | Restra Nepal",
    description:
      "Answers about Restra restaurant management software: POS, billing, QR ordering, inventory, staff roles, reports, pricing, setup and support.",
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Management Software FAQ | Restra Nepal",
    description:
      "Answers about Restra restaurant management software: POS, billing, QR ordering, inventory, staff roles, reports, pricing, setup and support.",
  },
};

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
      <main className="min-h-screen bg-restra-bg text-restra-text">
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
