import { plansByDuration } from "./pricing";
import { siteConfig } from "./site-config";
import { getTranslation } from "./translations";

const organizationId = `${siteConfig.url}/#organization`;
const logoUrl = `${siteConfig.url}${siteConfig.logoPath}`;

/** "NPR 2,199" -> "2199" (schema.org prices are plain numbers). */
function numericPrice(price: string): string {
  return price.replace(/[^\d.]/g, "");
}

const offers = plansByDuration.map((plan) => ({
  "@type": "Offer",
  name: `${getTranslation("en", plan.nameKey)} plan`,
  price: numericPrice(plan.price),
  priceCurrency: "NPR",
  url: `${siteConfig.url}/pricing`,
}));

const priceRange = `${plansByDuration[0].price} - ${plansByDuration[plansByDuration.length - 1].price}`;

/** Site-wide entity graph rendered once in the root layout. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.developer,
      url: siteConfig.url,
      logo: logoUrl,
      description: siteConfig.description,
      address: { "@type": "PostalAddress", ...siteConfig.address },
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
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: logoUrl,
      image: `${siteConfig.url}/opengraph-image`,
      email: siteConfig.contactEmail,
      telephone: siteConfig.contactPhone,
      priceRange,
      currenciesAccepted: "NPR",
      address: { "@type": "PostalAddress", ...siteConfig.address },
      areaServed: { "@type": "Country", name: "Nepal" },
      parentOrganization: { "@id": organizationId },
      sameAs: siteConfig.socialProfiles,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      url: siteConfig.url,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteConfig.description,
      url: siteConfig.url,
      offers,
      publisher: { "@id": organizationId },
    },
  ],
};

/** Reference to the site publisher for page-level schemas (articles, pages). */
export const publisherRef = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.developer,
  logo: { "@type": "ImageObject", url: logoUrl },
};

/** WebPage-family node (AboutPage, ContactPage, ...) for a top-level page. */
export function webPageJsonLd({
  type = "WebPage",
  path,
  name,
  description,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
}) {
  const url = `${siteConfig.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": organizationId },
  };
}
