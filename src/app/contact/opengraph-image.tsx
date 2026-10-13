import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Contact the RESTRA team";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Talk to the RESTRA team",
  });
}
