import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA restaurant management software FAQ";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "FAQ",
    title: "Restaurant management software questions, answered",
  });
}
