import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA terms of service";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Terms of Service",
  });
}
