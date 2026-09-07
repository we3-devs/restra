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
  title: "RESTRA - Restaurant Management System",
  developer: "We-3: tech & innovation",
  contactEmail: "restraservices@gmail.com",
  contactPhone: "+977 9761093528",
  socialProfiles: ["https://www.instagram.com/restra_services", "https://github.com/we3-devs/"],
  description:
    "RESTRA - Restaurant Management System for restaurants, cafes, and cloud kitchens. Manage POS, billing, QR ordering, inventory, kitchen workflows, staff permissions, and reporting in one platform.",
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
