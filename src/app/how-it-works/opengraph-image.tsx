import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "How RESTRA connects a restaurant's workflow";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "How it works",
    title: "From QR scan to analytics in one connected workflow",
  });
}
