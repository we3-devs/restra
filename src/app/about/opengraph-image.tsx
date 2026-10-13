import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "About the RESTRA team";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "About RESTRA",
    title: "Restaurant software built in Nepal",
  });
}
