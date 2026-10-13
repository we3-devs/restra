import type { Metadata } from "next";
import Landing from "@/views/Landing";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "RESTRA | Restaurant Management System in Nepal",
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return <Landing />;
}
