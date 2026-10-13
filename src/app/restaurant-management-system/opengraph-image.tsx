import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Restaurant management software in Nepal by RESTRA";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Restaurant management system",
    title: "Restaurant Management Software in Nepal",
  });
}
