/**
 * Seasonal campaign config. Every surface that shows the offer (hero pill,
 * home section, pricing banner, popup) reads from here, and all of them hide
 * automatically once `endsAt` has passed.
 */
export const dashainOffer = {
  id: "dashain-2083",
  name: "Dashain Offer",
  tagline: "Grow your restaurant with Restra this Dashain",
  product: "Restaurant Management System (RMS)",
  originalPrice: "Rs. 18,000",
  offerPrice: "Rs. 12,600",
  discount: "30%",
  image: {
    src: "/offers/dashain-offer.jpg",
    width: 1121,
    height: 1403,
    alt: "Restra Dashain offer: Restaurant Management System, initial price Rs. 18,000, now 30% off at just Rs. 12,600.",
  },
  features: [
    "POS & Billing",
    "Bill Printing",
    "QR Ordering",
    "Menu & Inventory",
    "Staff & Role Management",
    "Reports & Analytics",
    "Any Device Access",
  ],
  /** Sales line printed on the poster. */
  phone: "+977-9844688164",
  phoneHref: "tel:+9779844688164",
  /** Last moment the offer is shown (Nepal time). */
  endsAt: "2026-10-31T23:59:59+05:45",
  endsLabel: "31 October 2026",
} as const;

export function isDashainOfferActive(now: Date = new Date()): boolean {
  return now.getTime() <= new Date(dashainOffer.endsAt).getTime();
}

export const dashainWhatsAppMessage = `Hi Restra! I'd like to claim the Dashain offer: ${dashainOffer.product} at ${dashainOffer.offerPrice} (${dashainOffer.discount} off ${dashainOffer.originalPrice}). Please share the details.`;
