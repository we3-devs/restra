import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA blog";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "RESTRA Blog",
    title: "Restaurant software, explained",
  });
}
