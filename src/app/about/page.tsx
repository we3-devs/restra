import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About — The Team Behind Restra",
  description:
    "Meet the small team building Restra restaurant management software in Nepal — Sujan Katuwal, Prashanta Guragain, and Ujwal Khatiwada of We-3: tech & innovation.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About — The Team Behind Restra",
    description:
      "A small team focused on making restaurant operations simpler.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutView />
      <SiteFooter />
    </>
  );
}
