import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/lib/site-config";

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
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contactEmail,
        contactType: "customer support",
      },
      sameAs: siteConfig.socialProfiles,
    },
    {
      "@type": "WebSite",
      "@id": siteConfig.url + "/#website",
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": siteConfig.url + "/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": siteConfig.url + "/#software",
      name: siteConfig.name,
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
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="T-fSL7dAgM_eZ5J2qTxTLE1L39X-zm0FeAapdg_4UWw" />
        <meta name="theme-color" content="#FBFAF7" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
