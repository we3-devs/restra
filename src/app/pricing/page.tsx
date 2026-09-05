import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import PricingPageView from "@/components/pricing/PricingPageView";

export const metadata: Metadata = {
  title: "Pricing — Restra Restaurant Management System",
  description:
    "Simple monthly, 6-month, and yearly plans for Restra restaurant management software. No hidden fees — full access to POS, QR ordering, inventory, and analytics.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    title: "Pricing — Restra Restaurant Management System",
    description:
      "Monthly, 6-month, and yearly plans. Every plan includes the full Restra platform.",
    url: `${siteConfig.url}/pricing`,
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <PricingPageView />
      <SiteFooter />
    </>
  );
}
