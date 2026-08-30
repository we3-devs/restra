const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "RESTRA",
  title: "RESTRA - Restaurant Management System",
  developer: "We-3: tech & innovation",
  contactEmail: "restraservices@gmail.com",
  socialProfiles: ["https://www.instagram.com/restra_services", "https://github.com/we3-devs/"],
  description:
    "RESTRA - Restaurant Management System for restaurants, cafes, and cloud kitchens. Manage POS, billing, QR ordering, inventory, kitchen workflows, staff permissions, and reporting in one platform.",
  url: configuredUrl || "https://restra-services.vercel.app",
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
