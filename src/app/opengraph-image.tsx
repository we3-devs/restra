import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "RESTRA - Restaurant Management System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = "data:image/png;base64," + logoBuffer.toString("base64");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "80px", backgroundColor: "#FAFAF8", backgroundImage: "radial-gradient(circle at 85% 20%, rgba(212,160,23,0.14), transparent 60%)", border: "1px solid #EAEAE5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
          <img src={logoSrc} width="72" height="72" alt="" />
          <span style={{ fontSize: "40px", fontWeight: 600, color: "#1A1C1C", letterSpacing: "-0.02em" }}>RESTRA</span>
        </div>
        <div style={{ display: "flex", fontSize: "64px", fontWeight: 600, color: "#1A1C1C", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: "980px" }}>Run your restaurant without the chaos.</div>
        <div style={{ display: "flex", marginTop: "28px", fontSize: "28px", color: "#B8860B", fontWeight: 500 }}>POS - Billing - QR Ordering - Inventory - Staff Management</div>
      </div>
    ),
    { ...size },
  );
}
