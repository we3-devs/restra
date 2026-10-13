import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { webPageJsonLd } from "@/lib/structured-data";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import AboutView from "@/components/about/AboutView";

const title = "About Us — Restaurant Software Built in Nepal";
const description =
  "Meet the small team building Restra restaurant management software in Nepal — Sujan Katuwal, Prashanta Guragain, and Ujwal Khatiwada of Inovexa Labs.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about",
  socialTitle: "About — The Team Behind Restra",
  socialDescription: "A small team focused on making restaurant operations simpler.",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({ type: "AboutPage", path: "/about", name: title, description }),
          ),
        }}
      />
      <SiteHeader />
      <AboutView />
      <SiteFooter />
    </>
  );
}
