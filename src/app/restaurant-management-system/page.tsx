import type { Metadata } from "next";
import SeoPageView, { seoJsonLd } from "@/components/seo/SeoPage";
import { pageMetadata } from "@/lib/metadata";
import { getSeoPage } from "@/lib/seo-content";

const page = getSeoPage("restaurant-management-system");

export const metadata: Metadata = page
  ? pageMetadata({
      title: page.title,
      description: page.description,
      path: "/restaurant-management-system",
    })
  : {};

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
