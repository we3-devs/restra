import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Restra",
  description:
    "Learn how Restra collects, uses, stores, and protects personal and business information.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Restra",
    description:
      "How Restra handles personal information and restaurant business data.",
    url: `${siteConfig.url}/privacy-policy`,
    type: "website",
  },
};

const sections = [
  {
    title: "About Restra",
    content: (
      <p>
        Restra is an all-in-one restaurant management software designed to help
        restaurants manage daily operations, including point-of-sale (POS), orders,
        QR ordering, billing, inventory, staff roles, attendance, reporting, and
        related restaurant-management functions.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        <h3>Information You Provide</h3>
        <p>
          When you contact us, register for an account, request a demonstration,
          purchase or use our services, we may collect:
        </p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Restaurant or business name and business address</li>
          <li>Account login information</li>
          <li>Information submitted through contact or inquiry forms</li>
          <li>Billing or transaction-related information</li>
          <li>Other information you voluntarily provide</li>
        </ul>

        <h3>Restaurant and Business Data</h3>
        <p>
          Restaurants may enter the following information into the platform:
        </p>
        <ul>
          <li>Menu and product information</li>
          <li>Restaurant information, orders, and sales records</li>
          <li>Inventory, reports, and analytics</li>
          <li>Employee, staff, and attendance information</li>
          <li>Customer information entered by the restaurant</li>
          <li>User roles, permissions, and other operational data</li>
        </ul>
        <p>
          Restaurants are responsible for ensuring that they have the appropriate
          rights and permissions to collect and process information entered into Restra.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          We may automatically collect IP address, browser and device information,
          operating system, pages visited, approximate usage information, access times,
          and diagnostic and security information.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <>
        <p>We may use collected information to:</p>
        <ul>
          <li>Provide and operate Restra services</li>
          <li>Create and manage user accounts</li>
          <li>Process restaurant orders and business operations</li>
          <li>Provide support and respond to inquiries</li>
          <li>Improve our software and website</li>
          <li>Monitor system performance and maintain security</li>
          <li>Detect, prevent, and investigate fraud, abuse, and security incidents</li>
          <li>Communicate important service-related information</li>
          <li>Provide service updates</li>
          <li>Comply with applicable laws and legal obligations</li>
        </ul>
        <p>
          We do not use restaurant business data for purposes unrelated to providing or
          improving Restra unless permitted by law or otherwise agreed with the customer.
        </p>
      </>
    ),
  },
  {
    title: "How We Share Information",
    content: (
      <>
        <p>We do not sell or rent your personal information to third parties.</p>
        <p>
          We may share information with trusted service providers when necessary to
          operate Restra, including providers of cloud hosting, databases and
          infrastructure, authentication, email delivery, analytics, security and
          monitoring, and payment processing. These providers are expected to process
          information only as necessary to provide their services and subject to
          appropriate safeguards.
        </p>
        <p>
          We may also disclose information when required by law, legal process, court
          order, or government request, or when reasonably necessary to protect the
          rights, security, and property of Restra, our users, or others.
        </p>
      </>
    ),
  },
  {
    title: "Restaurant Customer and Staff Data",
    content: (
      <p>
        Restra is a platform used by restaurants to manage their operations. If you are
        an employee, staff member, or customer whose information has been entered by a
        restaurant, that restaurant may control how your information is collected and
        used. You may need to contact the relevant restaurant regarding requests about
        your personal information. Restaurants using Restra are responsible for
        complying with applicable privacy and data-protection requirements.
      </p>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect information
        against unauthorized access, loss, misuse, alteration, or disclosure. However,
        no internet-based service can guarantee absolute security. Use strong passwords,
        protect your account credentials, and notify us if you believe your account has
        been compromised.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain information for as long as reasonably necessary to provide services,
        maintain business and transaction records, fulfill contractual obligations,
        resolve disputes, maintain security, and comply with legal requirements. When
        information is no longer required, we may delete, anonymize, or securely dispose
        of it, subject to applicable legal and operational requirements.
      </p>
    ),
  },
  {
    title: "Cookies and Similar Technologies",
    content: (
      <p>
        Our website may use cookies and similar technologies to keep the website
        functioning properly, understand usage, improve performance, remember
        preferences, and support security and analytics. You can control or disable
        cookies through your browser settings. Some features may not function properly
        if certain cookies are disabled.
      </p>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <p>
        Restra may use third-party services and infrastructure providers to operate and
        improve the platform. These providers may process information according to their
        own privacy policies and applicable agreements. Restra is not responsible for the
        privacy practices of third-party websites or services that we do not control.
      </p>
    ),
  },
  {
    title: "Payments",
    content: (
      <p>
        If payments are processed through third-party payment providers, payment
        information may be handled directly by those providers. Restra does not
        necessarily store complete payment card information on its own systems. Payment
        providers may process information according to their own terms and privacy
        policies.
      </p>
    ),
  },
  {
    title: "Your Privacy Rights",
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Request restriction of certain processing</li>
          <li>Object to certain uses of your information</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>
          Some requests may be subject to legal, contractual, or operational limitations.
          To make a privacy-related request, contact Restra using the information below.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Restra services are intended for businesses and their authorized users and are
        not directed toward children. We do not knowingly collect personal information
        directly from children for the purpose of providing our services. If you believe
        that a child has provided personal information to us, please contact us.
      </p>
    ),
  },
  {
    title: "International Data Processing",
    content: (
      <p>
        Depending on the infrastructure and service providers used to operate Restra,
        information may be stored or processed in countries outside Nepal. Where
        required, we take reasonable measures to ensure that information is handled with
        appropriate security and protection.
      </p>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes to our
        services, technology, legal requirements, or business practices. When we make
        changes, we will update the Last Updated date at the top of this page. We
        encourage you to review this policy periodically.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or
          the handling of your information, contact Restra through our official website.
        </p>
        <address className="not-italic">
          <strong>Restra</strong>
          <br />
          WhatsApp: <a href={`https://wa.me/${siteConfig.contactPhone.replace(/\D/g, "")}`}>{siteConfig.contactPhone}</a>
          <br />
          Email: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </address>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-restra-bg text-restra-text">
        <section className="border-b border-black/10 bg-restra-surface/40 px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-restra-text sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-sm text-restra-text-muted">Last updated: September 6, 2026</p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-restra-text-secondary">
              At Restra, we respect your privacy and are committed to protecting the
              personal and business information entrusted to us.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="mb-12 text-base leading-8 text-restra-text-secondary">
            This Privacy Policy explains how Restra collects, uses, stores, and protects
            information when you visit our website, use our restaurant management
            software, or interact with our services. By using Restra&apos;s website or
            services, you agree to the practices described in this Privacy Policy.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.title} className="border-t border-black/10 pt-8">
                <p className="text-sm font-semibold text-restra-yellow">{index + 1}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                  {section.title}
                </h2>
                <div className="policy-copy mt-5">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
