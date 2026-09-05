import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";

export const metadata: Metadata = {
  title: "How Restra Works — Restaurant Workflow",
  description:
    "See how Restra connects a customer order to the kitchen, billing, inventory, and analytics — one workflow for restaurants, cafés, and cloud kitchens in Nepal.",
  alternates: { canonical: `${siteConfig.url}/how-it-works` },
  openGraph: {
    title: "How Restra Works — Restaurant Workflow",
    description:
      "From QR scan to analytics: follow one order through every Restra module.",
    url: `${siteConfig.url}/how-it-works`,
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <HowItWorksView />
      <SiteFooter />
    </>
  );
}
