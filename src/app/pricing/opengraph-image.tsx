import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA pricing plans";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Pricing",
    title: "Simple plans with the full RESTRA platform",
  });
}
