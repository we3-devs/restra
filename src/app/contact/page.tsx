import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import ContactView from "@/components/contact/ContactView";

const title = "Contact Us — Talk to the Team";
const description =
  "Contact the Restra team about restaurant management software — WhatsApp, email, or the contact form. We answer questions about POS, QR ordering, pricing, and onboarding.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
  socialTitle: "Contact Restra — Talk to the Team",
  socialDescription: "WhatsApp, email, or the contact form — we usually reply within one business day.",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({ type: "ContactPage", path: "/contact", name: title, description }),
          ),
        }}
      />
      <SiteHeader />
      <ContactView />
      <SiteFooter />
    </>
  );
}
