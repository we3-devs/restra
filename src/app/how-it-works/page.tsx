import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";

const title = "How It Works — Restaurant Workflow";
const description =
  "See how Restra connects a customer order to the kitchen, billing, inventory, and analytics — one workflow for restaurants, cafés, and cloud kitchens in Nepal.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/how-it-works",
  socialTitle: "How Restra Works — Restaurant Workflow",
  socialDescription: "From QR scan to analytics: follow one order through every Restra module.",
});

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({ type: "WebPage", path: "/how-it-works", name: title, description }),
          ),
        }}
      />
      <SiteHeader />
      <HowItWorksView />
      <SiteFooter />
    </>
  );
}
