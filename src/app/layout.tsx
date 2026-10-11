import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/lib/site-config";

// Self-hosted at build time by next/font, so visitors' browsers never contact
// Google Fonts (no third-party IP transfer, no extra consent needed).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s - " + siteConfig.name },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/logo.svg" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  verification: { google: "okZp2oXhviRyArGcUE2WunTNT0JAO3ABFpuYyMaFmcg" },
};

const entityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteConfig.url + "/#organization",
      name: siteConfig.developer,
      url: siteConfig.url,
      logo: siteConfig.url + "/logo.svg",
      description: siteConfig.description,
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
      },
      areaServed: { "@type": "Country", name: "Nepal" },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contactEmail,
        telephone: siteConfig.contactPhone,
        contactType: "customer support",
        areaServed: "NP",
      },
      sameAs: siteConfig.socialProfiles,
    },
    {
      "@type": "WebSite",
      "@id": siteConfig.url + "/#website",
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      url: siteConfig.url,
      publisher: { "@id": siteConfig.url + "/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": siteConfig.url + "/#software",
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteConfig.description,
      url: siteConfig.url,
      publisher: { "@id": siteConfig.url + "/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <meta name="google-site-verification" content="T-fSL7dAgM_eZ5J2qTxTLE1L39X-zm0FeAapdg_4UWw" />
        <meta name="theme-color" content="#FAFAF8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-restra-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-restra-text focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
