import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Refund Policy | Restra",
  description:
    "Learn about Restra's subscription refund policy, cancellation, billing, and how to request a refund.",
  alternates: { canonical: `${siteConfig.url}/refund-policy` },
  openGraph: {
    title: "Refund Policy | Restra",
    description:
      "Understand Restra's refund policy for subscription payments, cancellations, and billing issues.",
    url: `${siteConfig.url}/refund-policy`,
    type: "website",
  },
};

const LAST_UPDATED = "September 6, 2026";

export default function RefundPolicyPage() {
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
              <span className="text-restra-text-secondary">Refund Policy</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-restra-text sm:text-5xl">
              Refund Policy
            </h1>
            <p className="mt-5 text-sm text-restra-text-muted">
              <span className="font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-restra-text-secondary">
              This Refund Policy explains how Restra handles subscription payments,
              cancellations, renewals, and refund requests. Please review it carefully.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="mb-12 text-base leading-8 text-restra-text-secondary">
            By purchasing or using a paid Restra subscription, you agree to the refund,
            cancellation, and billing terms described on this page and in any
            applicable subscription materials.
          </p>

          <div className="space-y-12">
            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">1</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Introduction
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  This Refund Policy explains how Restra handles subscription payments,
                  refunds, cancellations, renewals, and billing-related issues for customers
                  who use our restaurant management software and services.
                </p>
                <p>
                  If you have questions about a specific charge or refund request, please
                  contact us using the information provided at the end of this policy. Where
                  applicable, your eligibility for a refund may also be affected by the terms
                  of your subscription or service agreement.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">2</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Subscription Payments
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Some Restra services may be offered under a paid subscription. Subscription
                  payments are typically charged in advance for the applicable subscription
                  period, unless otherwise stated at the time of purchase.
                </p>
                <p>
                  Depending on the plan, subscriptions may be offered on a monthly,
                  six-month, yearly, or other periodic basis. If a subscription renews
                  automatically, you will generally be charged again at the start of each new
                  billing period unless you cancel before the renewal date.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">3</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Refund Eligibility
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Refunds may be available in some situations, including where a charge was
                  made in error, where a payment was duplicated, or where a subscription or
                  service was canceled within an eligible period.
                </p>
                <p>
                  Refunds are reviewed case by case based on the circumstances, the plan
                  involved, the timing of the request, and any applicable subscription terms.
                  We aim to handle refund requests fairly and promptly, but approval is not
                  guaranteed in every situation.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">4</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Cancellation
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  You may cancel a subscription or service at any time by contacting Restra or
                  following the cancellation process described in your account or subscription
                  materials.
                </p>
                <p>
                  In many cases, cancellation stops future renewal charges, but it does not
                  automatically refund fees already paid for the current billing period unless
                  a refund is approved under this policy or a separate agreement with Restra.
                </p>
                <p>
                  If you cancel a subscription, your access to paid features may continue until
                  the end of the current billing period, subject to the terms of your plan.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">5</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Renewal Payments
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If your subscription renews automatically, renewal charges are processed at
                  the beginning of the next billing period. You are responsible for ensuring
                  that your payment method is current and that you have reviewed any
                  renewal terms communicated to you.
                </p>
                <p>
                  To avoid an unwanted renewal charge, cancel your subscription before the
                  renewal date if you no longer wish to continue. If a renewal charge was
                  made but you canceled before the renewal date, please contact us and we will
                  review the situation.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">6</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Duplicate Payments
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you believe you were charged more than once for the same subscription,
                  service, or transaction, please contact us as soon as possible with the
                  relevant details.
                </p>
                <p>
                  Where a duplicate charge is confirmed, we will work to resolve it, which may
                  include issuing a refund or credit for the duplicate amount, depending on the
                  circumstances and the payment method used.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">7</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Failed or Incorrect Charges
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you believe a charge was made in error, was unauthorized, or does not match
                  the agreed pricing, please contact us promptly and provide as much information
                  as possible.
                </p>
                <p>
                  We will review the matter and, where appropriate, correct the charge, issue a
                  refund, or explain why the charge was applied. Please note that some billing
                  issues may need to be addressed through the payment provider or bank as well,
                  depending on the situation.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">8</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Promotional Pricing
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Where Restra offers promotional pricing, discounts, trial offers, or special
                  terms, those offers may be subject to additional conditions.
                </p>
                <p>
                  Refunds related to promotional pricing may be calculated based on the amount
                  actually paid, and any promotional discount may be taken into account. In some
                  cases, promotional pricing may not be combined with other offers, and refund
                  treatment may differ from standard pricing.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">9</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Non-Refundable Situations
              </h2>
              <div className="policy-copy mt-5">
                <p>Not all charges are refundable. Examples of situations where a refund may not be available include:</p>
                <ul>
                  <li>Fees for a subscription period that has already been used or accessed in full</li>
                  <li>Charges for services already delivered, unless the charge was made in error</li>
                  <li>Situations where cancellation occurs after the eligible refund window has passed</li>
                  <li>Refunds requested after a long delay, where records or authorizations are no longer available</li>
                  <li>Circumstances where a separate agreement expressly says a charge is non-refundable</li>
                </ul>
                <p>This list is not exhaustive. Each request is reviewed based on the relevant facts and any applicable terms.</p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">10</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                How to Request a Refund
              </h2>
              <div className="policy-copy mt-5">
                <p>To request a refund, please contact Restra through our official website and include as much of the following information as possible:</p>
                <ul>
                  <li>Your name and contact details</li>
                  <li>The email address or account associated with the purchase</li>
                  <li>The date of the charge or transaction</li>
                  <li>The amount charged</li>
                  <li>The plan or service involved</li>
                  <li>A brief explanation of why you are requesting a refund</li>
                </ul>
                <p>The more information you provide, the faster we can investigate and respond to your request.</p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">11</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Refund Processing
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Once we receive a refund request, we will review it and respond as quickly as
                  reasonably possible. If a refund is approved, it will generally be processed
                  using the same payment method used for the original payment, where
                  practicable.
                </p>
                <p>
                  Refund timing depends on the payment method, the payment provider, and
                  processing times that are outside our control. You may see the refund in your
                  account shortly after approval, but in some cases it can take longer to
                  appear.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">12</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Changes to This Refund Policy
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may update this Refund Policy from time to time to reflect changes in our
                  subscription offerings, billing practices, or legal requirements. When we make
                  material changes, we will update the &quot;Last Updated&quot; date at the top of this
                  page.
                </p>
                <p>
                  We encourage you to review this policy periodically so you understand how
                  refunds, cancellations, and billing issues are handled.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">13</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Contact Information
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you have questions about this Refund Policy, a subscription charge, or a
                  refund request, please contact Restra through our official website.
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
              Have a billing question or need to request a refund? Reach out to the
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
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                Pricing
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
