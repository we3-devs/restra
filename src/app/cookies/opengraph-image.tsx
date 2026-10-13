import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA cookie policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Cookie Policy",
  });
}
