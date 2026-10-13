import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "RESTRA restaurant software features";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Features",
    title: "Everything your restaurant actually needs",
  });
}
