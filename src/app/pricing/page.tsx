import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import PricingPageView from "@/components/pricing/PricingPageView";

const title = "Pricing — Restaurant Management System Plans";
const description =
  "Simple monthly, 6-month, and yearly plans for Restra restaurant management software. No hidden fees — full access to POS, QR ordering, inventory, and analytics.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/pricing",
  socialTitle: "Pricing — Restra Restaurant Management System",
  socialDescription: "Monthly, 6-month, and yearly plans. Every plan includes the full Restra platform.",
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({ type: "WebPage", path: "/pricing", name: title, description }),
          ),
        }}
      />
      <SiteHeader />
      <PricingPageView />
      <SiteFooter />
    </>
  );
}
