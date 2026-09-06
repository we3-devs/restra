import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | Restra",
  description:
    "Terms and conditions for using Restra restaurant management software. By using Restra, you agree to these terms.",
  alternates: { canonical: `${siteConfig.url}/terms` },
  openGraph: {
    title: "Terms of Service | Restra",
    description:
      "Review the terms and conditions for using Restra restaurant management software.",
    url: `${siteConfig.url}/terms`,
    type: "website",
  },
};

const LAST_UPDATED = "September 6, 2026";

export default function TermsPage() {
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
              <span className="text-restra-text-secondary">Terms of Service</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-restra-text sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-sm text-restra-text-muted">
              <span className="font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-restra-text-secondary">
              Please read these Terms of Service carefully. They explain the rules
              and conditions for using Restra&apos;s website and restaurant management
              software.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="mb-12 text-base leading-8 text-restra-text-secondary">
            By accessing or using Restra, you agree to be bound by these Terms. If
            you do not agree with any part of these terms, you may not access or use
            the Service.
          </p>

          <div className="space-y-12">
            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">1</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Introduction
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Welcome to Restra (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). These Terms of Service
                  (&quot;Terms&quot;) govern your access to and use of the Restra website and
                  restaurant management software platform (collectively, the &quot;Service&quot;).
                </p>
                <p>
                  Restra is an all-in-one restaurant management software designed to help
                  restaurants, cafés, cloud kitchens, and other food businesses manage
                  daily operations, including point-of-sale (POS), orders, QR ordering,
                  billing, inventory, staff roles, attendance, reporting, and related
                  restaurant-management functions.
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by these Terms.
                  If you do not agree, you may not use the Service.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">2</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Acceptance of Terms
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  You confirm that you are authorized to accept these Terms on behalf of
                  yourself or the business you represent. If you are using the Service on
                  behalf of a business, you represent that you have the authority to bind
                  that business to these Terms.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">3</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Description of Restra
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra provides a cloud-based restaurant management platform. Depending on
                  the plan and features you use, the Service may include:
                </p>
                <ul>
                  <li>Point-of-sale (POS) and billing functions</li>
                  <li>Order management and order tracking</li>
                  <li>QR code ordering and digital menu features</li>
                  <li>Inventory management and low-stock alerts</li>
                  <li>Kitchen display and preparation workflows</li>
                  <li>Table management for dine-in operations</li>
                  <li>Staff roles and permission controls</li>
                  <li>Reports and analytics dashboards</li>
                </ul>
                <p>
                  The exact features available to you may vary based on the plan you choose
                  and the configuration of your restaurant account.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">4</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Account Registration
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  To access certain features of the Service, you may need to create an
                  account. You agree to provide accurate, current, and complete information
                  during registration and to keep your login credentials secure.
                </p>
                <p>
                  You are responsible for all activity on your account and for maintaining
                  the confidentiality of any password, access code, or other authentication
                  information associated with your account.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">5</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                User Responsibilities
              </h2>
              <div className="policy-copy mt-5">
                <p>You are responsible for:</p>
                <ul>
                  <li>Using the Service in accordance with these Terms and all applicable laws</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>Ensuring that any information you submit through the Service is accurate and lawful</li>
                  <li>Not sharing your account access with unauthorized persons</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">6</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Restaurant/Business Responsibilities
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you use Restra to manage a restaurant or other food business, you are
                  responsible for:
                </p>
                <ul>
                  <li>Entering accurate menu, pricing, inventory, and other business information</li>
                  <li>Ensuring you have the appropriate rights and permissions to collect, store, and process any customer, employee, or business information you enter into the Service</li>
                  <li>Configuring staff roles and permissions appropriately for your team</li>
                  <li>Complying with applicable tax, labor, hospitality, and data-protection laws in your jurisdiction</li>
                </ul>
                <p>
                  You are responsible for ensuring that your use of the Service supports
                  compliance with your legal and operational obligations.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">7</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Subscription and Billing
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Some features of the Service may require a paid subscription. If you
                  subscribe to a paid plan, you agree to pay the applicable fees as
                  described on the pricing page or in your subscription agreement.
                </p>
                <p>
                  Fees are typically billed in advance for the applicable subscription
                  period. Subscriptions may renew automatically unless canceled before the
                  renewal date. If you believe a charge is incorrect, you should contact us
                  promptly using the contact information provided below.
                </p>
                <p>
                  Prices shown on the website may be placeholders and could change before
                  final confirmation. Any final pricing will be confirmed at the time of
                  purchase or as otherwise communicated by Restra.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">8</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Free Trial
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra may offer a free trial so you can evaluate the Service before
                  committing to a paid plan. Trial availability, duration, and conditions
                  may vary. If you are offered a trial, you are responsible for
                  understanding and complying with the trial terms communicated to you.
                </p>
                <p>
                  We may limit, suspend, or end a trial at our discretion if we reasonably
                  believe it is being misused or if trial terms are violated.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">9</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Software Usage
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  You may use the Service only for its intended purpose: managing your
                  restaurant operations. You may not:
                </p>
                <ul>
                  <li>Reverse engineer, decompile, disassemble, or modify the Service, except where such activity is expressly permitted by law</li>
                  <li>Remove, alter, or obscure any proprietary notices, labels, or marks</li>
                  <li>Use the Service to operate another competing software service</li>
                  <li>Attempt to access data, accounts, or functionality you are not authorized to use</li>
                  <li>Interfere with, disrupt, or overload the Service or its infrastructure</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">10</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Acceptable Use
              </h2>
              <div className="policy-copy mt-5">
                <p>You agree not to use the Service to:</p>
                <ul>
                  <li>Send unlawful, harassing, fraudulent, abusive, or otherwise objectionable content</li>
                  <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
                  <li>Infringe the intellectual property rights of others</li>
                  <li>Distribute malware, enable unauthorized access, or engage in other malicious activity</li>
                  <li>Use the Service in a manner that violates applicable law or these Terms</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">11</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Intellectual Property
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  The Service, including its software, code, design, text, graphics,
                  logos, and other materials, is owned by Restra or its licensors and is
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You do not acquire any ownership rights in the Service by using it. You
                  may not use Restra&apos;s trademarks, logos, or brand identifiers without our
                  prior written permission, except as reasonably necessary to refer to your
                  legitimate use of the Service.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">12</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Third-Party Services
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  The Service may integrate with, link to, or depend on third-party
                  services, including payment processors, hosting providers, cloud
                  infrastructure, email delivery services, and other tools. Your use of any
                  such third-party services is subject to their own terms and privacy
                  policies.
                </p>
                <p>
                  Restra is not responsible for the content, policies, security, or
                  practices of third-party services that are not controlled by us.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">13</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Service Availability
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We aim to make the Service available and reliable, but we do not guarantee
                  uninterrupted, error-free, or perfectly available service at all times.
                  The Service may be unavailable from time to time for maintenance, updates,
                  technical issues, or other operational reasons.
                </p>
                <p>
                  To the fullest extent permitted by law, we are not liable for
                  interruptions, delays, loss of data, or service unavailability caused by
                  events beyond our reasonable control, including system failures,
                  telecommunications issues, internet service disruptions, acts of third
                  parties, or force majeure events.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">14</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Updates and Changes
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may update, modify, improve, or discontinue features of the Service from
                  time to time, including by adding or removing functionality, changing user
                  interfaces, or adjusting how features work.
                </p>
                <p>
                  We may also update these Terms to reflect changes in our business, legal
                  obligations, or the Service. Where reasonably practicable, we will note
                  material changes and update the &quot;Last Updated&quot; date at the top of this
                  page.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">15</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Account Suspension or Termination
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may suspend, limit, or terminate your access to the Service if we
                  reasonably believe:
                </p>
                <ul>
                  <li>You have violated these Terms or the acceptable use expectations described above</li>
                  <li>Your use of the Service presents a security risk or legal concern</li>
                  <li>Payment obligations for a paid subscription are not met</li>
                  <li>Termination is required for legal or operational reasons</li>
                </ul>
                <p>
                  In some cases, we may provide notice before suspension or termination.
                  Where immediate action is necessary for security, legal, or operational
                  reasons, notice may not be possible.
                </p>
                <p>
                  You may also stop using the Service at any time. If you cancel a paid
                  subscription, your access to paid features may end at the end of the
                  current billing period, subject to the applicable subscription terms.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">16</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Limitation of Liability
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  To the fullest extent permitted by applicable law, Restra and its
                  developers, contributors, and service providers shall not be liable for:
                </p>
                <ul>
                  <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service</li>
                  <li>Loss of profits, revenue, data, business opportunities, or goodwill</li>
                  <li>Any damages resulting from interruptions, delays, errors, omissions, or service unavailability</li>
                </ul>
                <p>
                  Restra is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent
                  permitted by law. We do not guarantee that the Service will meet your
                  specific requirements, will be error-free, or will achieve any particular
                  business outcome.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">17</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Disclaimer
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Except where a specific promise is expressly and separately made in
                  writing by Restra, the Service is provided without guarantees of a
                  particular result, level of performance, security outcome, or business
                  benefit. Restaurant owners remain responsible for operating their
                  businesses in compliance with applicable laws and for the accuracy and
                  lawfulness of the information they enter into the Service.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">18</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Indemnification
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  To the extent permitted by law, you agree to defend, indemnify, and hold
                  harmless Restra and its developers, contributors, and service providers
                  from and against claims, liabilities, damages, losses, costs, and expenses
                  arising from:
                </p>
                <ul>
                  <li>Your use of the Service in violation of these Terms</li>
                  <li>Your violation of applicable law</li>
                  <li>Your infringement of a third party&apos;s intellectual property rights</li>
                  <li>Facts or circumstances you create, control, or are responsible for</li>
                </ul>
                <p>
                  This indemnification obligation does not apply to claims to the extent they
                  are caused by Restra&apos;s own negligence, misconduct, or breach of these Terms.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">19</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Governing Law
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  These Terms are governed by the laws of Nepal, without regard to its
                  conflict-of-law principles, unless a different governing law applies under
                  mandatory legal requirements.
                </p>
                <p>
                  Any disputes relating to these Terms or the Service should first be
                  addressed by contacting us directly, so we can try to resolve the matter
                  informally.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">20</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Changes to Terms
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may revise these Terms from time to time. When we make material changes,
                  we will update the &quot;Last Updated&quot; date at the top of this page. We
                  encourage you to review these Terms periodically.
                </p>
                <p>
                  If you continue using the Service after a change takes effect, you accept
                  the updated Terms, unless we state otherwise or the law requires a
                  different approach.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">21</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Contact Information
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you have questions about these Terms, please contact Restra through our
                  official website.
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
              Still have questions about these Terms? Get in touch with the Restra
              team.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-restra-yellow px-5 py-2.5 text-sm font-semibold text-[#241D05] transition-all hover:bg-restra-yellow/90"
              >
                Contact Restra
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                Privacy Policy
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
