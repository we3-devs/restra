import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const DEFAULT_TAGLINE = "POS - Billing - QR Ordering - Inventory - Staff Management";

/**
 * Branded 1200x630 share card used by every route's `opengraph-image`.
 * Rendered at build time, so each page gets its own static PNG.
 */
export async function renderOgImage({
  title,
  eyebrow,
  tagline = DEFAULT_TAGLINE,
}: {
  title: string;
  eyebrow?: string;
  tagline?: string;
}) {
  const logo = await readFile(join(process.cwd(), "public/icons/icon-192.png"));
  const logoSrc = "data:image/png;base64," + logo.toString("base64");
  const titleSize = title.length > 48 ? 56 : 64;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "80px", backgroundColor: "#FAFAF8", backgroundImage: "radial-gradient(circle at 85% 20%, rgba(212,160,23,0.14), transparent 60%)", border: "1px solid #EAEAE5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img>; next/image is not available here. */}
          <img src={logoSrc} width="72" height="72" alt="" />
          <span style={{ fontSize: "40px", fontWeight: 600, color: "#1A1C1C", letterSpacing: "-0.02em" }}>RESTRA</span>
        </div>
        {eyebrow ? (
          <div style={{ display: "flex", marginBottom: "20px", fontSize: "26px", fontWeight: 600, color: "#B8860B", textTransform: "uppercase", letterSpacing: "0.12em" }}>{eyebrow}</div>
        ) : null}
        <div style={{ display: "flex", fontSize: `${titleSize}px`, fontWeight: 600, color: "#1A1C1C", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: "1000px" }}>{title}</div>
        <div style={{ display: "flex", marginTop: "28px", fontSize: "28px", color: "#B8860B", fontWeight: 500 }}>{tagline}</div>
      </div>
    ),
    { ...ogSize },
  );
}
