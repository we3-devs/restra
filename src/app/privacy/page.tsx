import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Restra",
  description:
    "Learn how Restra collects, uses, stores, and protects personal and business information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | Restra",
    description:
      "How Restra handles personal information and restaurant business data.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
  },
};

const LAST_UPDATED = "September 6, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-restra-bg text-restra-text">
        <section className="border-b border-black/10 bg-restra-surface/40 px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-sm text-restra-text-muted"
            >
              <Link href="/" className="transition-colors hover:text-restra-yellow">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-restra-text-secondary">Privacy Policy</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-restra-text sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-sm text-restra-text-muted">
              <span className="font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-restra-text-secondary">
              At Restra, we respect your privacy and are committed to protecting the
              personal and business information entrusted to us.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="space-y-12">
            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">1</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                About Restra
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra is an all-in-one restaurant management software designed to help
                  restaurants, cafés, cloud kitchens, and other food businesses manage
                  daily operations, including point-of-sale (POS), orders, QR ordering,
                  billing, inventory, staff roles, attendance, reporting, and related
                  restaurant-management functions.
                </p>
                <p>
                  This Privacy Policy explains how Restra collects, uses, stores, and
                  protects information when you visit our website, use our restaurant
                  management software, or interact with our services. By using Restra&apos;s
                  website or services, you agree to the practices described in this Privacy
                  Policy.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">2</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Information We Collect
              </h2>
              <div className="policy-copy mt-5">
                <h3>Information You Provide Directly</h3>
                <p>
                  When you contact us, register for an account, request a demonstration,
                  purchase or use our services, or otherwise interact with us, we may
                  collect:
                </p>
                <ul>
                  <li>Name, email address, and phone number</li>
                  <li>Restaurant or business name, address, and contact details</li>
                  <li>Account login information and profile data</li>
                  <li>Information submitted through contact forms, demo requests, or inquiry forms</li>
                  <li>Billing or transaction-related information where applicable</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>

                <h3>Restaurant and Business Data</h3>
                <p>
                  Restaurants, cafés, and other food businesses may enter the following
                  kinds of information into the platform:
                </p>
                <ul>
                  <li>Menu items, pricing, and product information</li>
                  <li>Orders, sales records, and receipts</li>
                  <li>Inventory, ingredient, and stock information</li>
                  <li>Reports, analytics, and operational records</li>
                  <li>Employee, staff, and attendance information</li>
                  <li>Customer information entered by the restaurant</li>
                  <li>User roles, permissions, and other operational settings</li>
                </ul>
                <p>
                  Restaurants are responsible for ensuring that they have the appropriate
                  rights and permissions to collect, enter, and process information in
                  Restra, including any customer or employee information.
                </p>

                <h3>Automatically Collected Technical Information</h3>
                <p>
                  When you visit our website or use the Service, we may automatically
                  collect certain technical and usage information, such as:
                </p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type, browser version, and device information</li>
                  <li>Operating system and platform</li>
                  <li>Pages visited and navigation patterns</li>
                  <li>Approximate time and duration of visits</li>
                  <li>Access times and referring URLs</li>
                  <li>Diagnostic, error, and security-related information</li>
                </ul>
                <p>
                  This type of information is generally collected for operational, security,
                  and analytics purposes. It is distinct from the personal and business
                  information you provide directly.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">3</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                How We Use Information
              </h2>
              <div className="policy-copy mt-5">
                <p>We may use collected information to:</p>
                <ul>
                  <li>Provide, operate, and maintain the Restra Service</li>
                  <li>Create and manage user accounts and access permissions</li>
                  <li>Process restaurant orders, billing, and day-to-day operational functions</li>
                  <li>Respond to inquiries, support requests, and feedback</li>
                  <li>Improve the software, website, and user experience</li>
                  <li>Monitor system performance, reliability, and security</li>
                  <li>Detect, prevent, and investigate fraud, abuse, or security incidents</li>
                  <li>Send important service-related notices or updates</li>
                  <li>Communicate with you about Restra products, features, or account matters</li>
                  <li>Comply with legal obligations and resolve disputes</li>
                </ul>
                <p>
                  We do not use restaurant business data for purposes unrelated to providing
                  or improving the Service unless permitted by law or otherwise agreed with
                  the customer.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">4</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                How We Store Information
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Information may be stored on secure servers, cloud infrastructure, and
                  backup systems operated by Restra or its trusted service providers. We use
                  reasonable technical and organizational measures to protect stored
                  information against unauthorized access, alteration, disclosure, loss, or
                  destruction, subject to the limitations described in this policy.
                </p>
                <p>
                  Depending on the infrastructure and service providers used, information may
                  be stored or processed in countries outside Nepal. Where required, we take
                  reasonable measures to ensure information is handled with appropriate
                  security and protection.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">5</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Third-Party Service Providers
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra may use third-party services and infrastructure providers to operate
                  and improve the platform. These may include providers of:
                </p>
                <ul>
                  <li>Cloud hosting and database infrastructure</li>
                  <li>Authentication and account services</li>
                  <li>Email delivery and notification services</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Security, monitoring, and error reporting</li>
                  <li>Payment processing, where applicable</li>
                </ul>
                <p>
                  These providers are expected to process information only as necessary to
                  provide their services and subject to appropriate contractual and security
                  safeguards. Restra is not responsible for the privacy practices of
                  third-party websites or services that we do not control.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">6</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Data Sharing
              </h2>
              <div className="policy-copy mt-5">
                <p>We do not sell or rent your personal information to third parties.</p>
                <p>We may share information when:</p>
                <ul>
                  <li>It is necessary to operate the Service or provide requested features</li>
                  <li>It is shared with trusted service providers who process it on our behalf</li>
                  <li>It is required by law, legal process, court order, or government request</li>
                  <li>It is reasonably necessary to protect the rights, security, property, or safety of Restra, our users, or others</li>
                  <li>It is required to resolve disputes, enforce these Terms, or protect legitimate business interests</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">7</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Restaurant Customer and Staff Data
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra is a platform used by restaurants to manage their operations. If you
                  are an employee, staff member, or customer whose information has been
                  entered by a restaurant, that restaurant may control how your information
                  is collected, used, and shared within the platform.
                </p>
                <p>
                  You may need to contact the relevant restaurant regarding requests about
                  your personal information. Restaurants using Restra are responsible for
                  complying with applicable privacy and data-protection requirements in
                  relation to the information they collect and process.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">8</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Data Retention
              </h2>
              <div className="policy-copy mt-5">
                <p>We retain information for as long as reasonably necessary to:</p>
                <ul>
                  <li>Provide and improve the Service</li>
                  <li>Maintain business and transaction records</li>
                  <li>Fulfill contractual and legal obligations</li>
                  <li>Resolve disputes and enforce our terms</li>
                  <li>Maintain security and prevent fraud</li>
                  <li>Comply with applicable legal requirements</li>
                </ul>
                <p>
                  When information is no longer required, we may delete, anonymize, or
                  securely dispose of it, subject to applicable legal and operational
                  requirements.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">9</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Security
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We take reasonable technical and organizational measures to protect
                  information against unauthorized access, loss, misuse, alteration, or
                  disclosure. However, no internet-based service can guarantee absolute
                  security.
                </p>
                <p>
                  You should use strong passwords, protect your account credentials, and
                  notify us promptly if you believe your account has been compromised or if
                  you notice suspicious activity.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">10</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                User Rights
              </h2>
              <div className="policy-copy mt-5">
                <p>Depending on applicable law, you may have the right to:</p>
                <ul>
                  <li>Request access to personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of certain personal information, where permitted</li>
                  <li>Request restriction of certain processing, where applicable</li>
                  <li>Object to certain uses of your information, where permitted</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  Some requests may be subject to legal, contractual, technical, or
                  operational limitations. To make a privacy-related request, contact Restra
                  using the information below.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">11</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Children&apos;s Privacy
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra services are intended for businesses and their authorized users and
                  are not directed toward children. We do not knowingly collect personal
                  information directly from children for the purpose of providing our
                  services.
                </p>
                <p>
                  If you believe that a child has provided personal information to us, please
                  contact us using the information below so we can address the matter
                  appropriately.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">12</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Cookies and Similar Technologies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Our website may use cookies and similar technologies to keep the website
                  functioning properly, understand usage, improve performance, remember
                  preferences, and support security and analytics. You can control or disable
                  cookies through your browser settings. Some features may not function
                  properly if certain cookies are disabled.
                </p>
                <p>
                  For more detail, please see our{" "}
                  <Link href="/cookies" className="text-[#8a6a08] font-semibold underline underline-offset-2 hover:text-[#1a1c1c]">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">13</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Changes to This Privacy Policy
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes to
                  our services, technology, legal requirements, or business practices. When we
                  make changes, we will update the "Last Updated" date at the top of this
                  page.
                </p>
                <p>
                  We encourage you to review this policy periodically. If we make material
                  changes, we may also notify users through the Service or by other means
                  where practicable.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">14</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Contact Us
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy
                  or the handling of your information, contact Restra through our official
                  website.
                </p>
                <address className="not-italic">
                  <strong>Restra</strong>
                  <br />
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${siteConfig.contactPhone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.contactPhone}
                  </a>
                  <br />
                  Email:{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
                </address>
              </div>
            </section>
          </div>

          <div className="mt-16 rounded-xl border border-white/[0.08] bg-restra-card p-6 text-center">
            <p className="text-sm text-restra-text-secondary">
              Have a question about how we handle your information? Reach out to the
              Restra team.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-[#241D05] transition-all hover:bg-restra-yellow/90"
              >
                Contact Restra
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
