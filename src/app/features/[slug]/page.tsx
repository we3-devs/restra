import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoPageView, { seoJsonLd } from "@/components/seo/SeoPage";
import {
  absoluteUrl,
  featurePath,
  featureSlugs,
  getSeoPage,
} from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  const url = absoluteUrl(featurePath(slug));

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const path = featurePath(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd(page, path)) }}
      />
      <SeoPageView page={page} />
    </>
  );
}
