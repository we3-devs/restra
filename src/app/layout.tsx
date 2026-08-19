import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Restra — Restaurant Management System",
  description:
    "Run your restaurant without the chaos. Restra combines POS, billing, QR ordering, inventory, order tracking, and staff management into one platform.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    title: "Restra — Restaurant Management System",
    description:
      "Run your restaurant without the chaos. POS, billing, QR ordering, inventory, order tracking, and more — built together for modern restaurants.",
    siteName: "Restra",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restra — Restaurant Management System",
    description:
      "Run your restaurant without the chaos. POS, billing, QR ordering, inventory, order tracking, and more — built together for modern restaurants.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B0D0D" />
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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
