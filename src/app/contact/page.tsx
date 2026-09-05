import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact Restra — Talk to the Team",
  description:
    "Contact the Restra team about restaurant management software — WhatsApp, email, or the contact form. We answer questions about POS, QR ordering, pricing, and onboarding.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Restra — Talk to the Team",
    description:
      "WhatsApp, email, or the contact form — we usually reply within one business day.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactView />
      <SiteFooter />
    </>
  );
}
