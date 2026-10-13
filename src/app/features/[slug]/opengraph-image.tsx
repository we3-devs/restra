import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";
import { featureSlugs, getSeoPage } from "@/lib/seo-content";

export const alt = "RESTRA restaurant management software feature";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  return renderOgImage({
    eyebrow: "RESTRA feature",
    title: page?.title ?? "Restaurant Software Features",
  });
}
