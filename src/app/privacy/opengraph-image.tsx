import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA privacy policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy Policy",
  });
}
