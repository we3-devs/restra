const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function getCanonicalSiteUrl(value: string | undefined): string {
  const fallback = "https://restraservices.com";

  if (!value) return fallback;

  try {
    const url = new URL(value);
    // Search engines should see one production origin, regardless of whether
    // a deployment environment was configured with http or www.
    url.protocol = "https:";
    url.hostname = url.hostname.replace(/^www\./i, "");
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.origin;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: "RESTRA",
  /** Other spellings people search for; surfaced to Google via JSON-LD alternateName. */
  alternateNames: ["Restra", "Restra Services", "restraservices.com"],
  title: "RESTRA - Restaurant Management System",
  developer: "Inovexa Labs",
  contactEmail: "restraservices@gmail.com",
  contactPhone: "+977 9761093528",
  socialProfiles: ["https://www.instagram.com/restra_services", "https://github.com/we3-devs/"],
  /**
   * Business address for Organization / LocalBusiness structured data. Add
   * streetAddress / postalCode here when published; every schema picks it up.
   */
  address: { addressLocality: "Birtamod", addressRegion: "Jhapa", addressCountry: "NP" } as {
    addressCountry: string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  },
  /** Human-readable form of `address`, shown in the footer and contact page. */
  location: "Birtamod, Jhapa, Nepal",
  /** Square brand mark (512px) used by schema.org logos and the web manifest. */
  logoPath: "/icons/icon-512.png",
  themeColor: "#FAFAF8",
  description:
    "RESTRA is restaurant management software for restaurants, cafés, and cloud kitchens in Nepal: POS, billing, QR ordering, inventory, kitchen display, reports.",
  url: getCanonicalSiteUrl(configuredUrl),
  keywords: [
    "RESTRA",
    "restaurant management system Nepal",
    "restaurant management software",
    "restaurant POS system",
    "QR code ordering",
    "restaurant billing software",
    "restaurant inventory management",
    "restaurant staff management software",
    "restaurant order tracking",
    "all-in-one restaurant software",
  ],
} as const;
