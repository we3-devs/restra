import type { Metadata } from "next";
import SeoPageView, { seoJsonLd } from "@/components/seo/SeoPage";
import { absoluteUrl, getSeoPage } from "@/lib/seo-content";

const page = getSeoPage("restaurant-management-system");

export const metadata: Metadata = {
  title: page?.title,
  description: page?.description,
  alternates: { canonical: absoluteUrl("/restaurant-management-system") },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: absoluteUrl("/restaurant-management-system"),
    type: "website",
  },
};

export default function RestaurantManagementSystemPage() {
  if (!page) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seoJsonLd(page, "/restaurant-management-system"),
          ),
        }}
      />
      <SeoPageView page={page} />
    </>
  );
}
