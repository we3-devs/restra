import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SiteHeader from "@/components/seo/SiteHeader";
import SiteFooter from "@/components/seo/SiteFooter";

export const metadata: Metadata = {
  title: "Cookie Policy | Restra",
  description:
    "Learn how Restra uses cookies and similar technologies on our website and platform.",
  alternates: { canonical: `${siteConfig.url}/cookies` },
  openGraph: {
    title: "Cookie Policy | Restra",
    description:
      "How Restra uses cookies, what choices you have, and how to manage your preferences.",
    url: `${siteConfig.url}/cookies`,
    type: "website",
  },
};

const LAST_UPDATED = "September 6, 2026";

export default function CookiePolicyPage() {
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
              <span className="text-restra-text-secondary">Cookie Policy</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-restra-yellow">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-restra-text sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-5 text-sm text-restra-text-muted">
              <span className="font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-restra-text-secondary">
              This Cookie Policy explains how Restra uses cookies and similar
              technologies on our website and platform, what choices you have, and
              how you can manage your preferences.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="space-y-12">
            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">1</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                What Are Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Cookies are small text files that are stored on your device when you visit
                  a website. Similar technologies, such as local storage, session storage,
                  and certain tracking identifiers, may also be used to collect and store
                  information about your browsing activity.
                </p>
                <p>
                  In this policy, the term &quot;cookies&quot; is used broadly to refer to cookies,
                  local storage, session storage, and similar technologies where they are
                  used for comparable purposes.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">2</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                How We Use Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Restra uses cookies and similar technologies on our website and, where
                  applicable, within the Service to:
                </p>
                <ul>
                  <li>Keep the website and platform functioning properly</li>
                  <li>Remember your preferences and settings</li>
                  <li>Support secure sessions and authentication where applicable</li>
                  <li>Understand how visitors use the website and improve its performance</li>
                  <li>Support security, error monitoring, and operational analytics</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">3</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Necessary Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Necessary cookies help make the website usable by enabling basic functions
                  like page navigation, security, access, and session management. The
                  website cannot function properly without these cookies, and they are
                  generally set in response to actions you take, such as signing in,
                  submitting a form, or adjusting settings.
                </p>
                <p>Necessary cookies may include:</p>
                <ul>
                  <li>Cookies required for secure access and session handling where applicable</li>
                  <li>Cookies used to remember essential user preferences needed for core functionality</li>
                  <li>Cookies used for error monitoring and basic operational stability</li>
                </ul>
                <p>
                  These cookies are usually set based on your actions and do not require
                  separate consent where they are strictly necessary for the service you
                  request.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">4</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Analytics Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Analytics cookies help us understand how visitors use the website, so we
                  can improve its content, performance, and user experience. These cookies
                  may collect information such as pages visited, time spent on the site, and
                  how visitors navigate between pages.
                </p>
                <p>
                  Analytics information is generally aggregated and anonymized to the extent
                  reasonably possible. It is used for operational and improvement purposes
                  rather than to identify you personally.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">5</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Functional Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Functional cookies allow the website to remember choices you make and
                  provide enhanced, more personalized features. For example, they may be used
                  to remember language or display preferences, or to remember settings that
                  improve the convenience of your visit.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">6</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Marketing Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Marketing cookies are used to track visitors across websites and deliver
                  advertising that is more relevant to you. They may also be used to measure
                  the effectiveness of marketing campaigns.
                </p>
                <p>
                  We do not claim to use marketing or advertising cookies unless they are
                  actually implemented on our website. If marketing cookies are introduced in
                  the future, we will update this policy and, where required by applicable law,
                  seek your consent before activating them.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">7</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Third-Party Cookies and Services
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Our website and Service may rely on third-party services that can also set
                  cookies or use similar technologies. These may include providers of:
                </p>
                <ul>
                  <li>Hosting and infrastructure services</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Security, error reporting, and monitoring tools</li>
                  <li>Other operational tools necessary for the functioning of the website</li>
                </ul>
                <p>
                  Third-party service providers may process information according to their own
                  privacy policies and applicable agreements. Restra is not responsible for the
                  privacy practices of third-party websites or services that are not under our
                  control.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">8</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Cookie Retention
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  How long a cookie remains on your device depends on whether it is a
                  session cookie or a persistent cookie.
                </p>
                <ul>
                  <li>
                    <strong>Session cookies</strong> are temporary and are deleted when you
                    close your browser.
                  </li>
                  <li>
                    <strong>Persistent cookies</strong> remain on your device for a longer
                    period, until they expire or are deleted by you or your browser.
                  </li>
                </ul>
                <p>
                  The retention period for specific cookies may vary depending on their
                  purpose and the settings of the service that sets them.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">9</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                How You Can Control Cookies
              </h2>
              <div className="policy-copy mt-5">
                <p>You have several ways to control cookies and similar technologies:</p>
                <ul>
                  <li>
                    Adjust your browser settings to block, restrict, or delete cookies.
                    Most browsers allow you to manage cookie settings through their
                    preferences or settings menu.
                  </li>
                  <li>
                    Use your browser&apos;s private, incognito, or similar browsing mode to
                    reduce the amount of data stored on your device during a session.
                  </li>
                  <li>
                    Clear cookies and browsing data at any time through your browser.
                  </li>
                  <li>
                    Use do-not-track or similar signals where available, although we cannot
                    guarantee that all services will respond to such signals.
                  </li>
                </ul>
                <p>
                  If you choose to disable or block certain cookies, some parts of the website
                  or Service may not work as intended, and you may have a less optimal
                  experience.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">10</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Cookie Consent
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  Where required by applicable law, we ask for your consent before setting
                  non-essential cookies or activating non-essential tracking. You can usually
                  accept all cookies, reject non-essential cookies, or manage your
                  preferences through the cookie banner and cookie settings available on our
                  website.
                </p>
                <p>
                  Necessary cookies that are strictly required for the website to function do
                  not require separate consent. Your consent choices may be remembered using
                  cookies or similar storage so that you are not asked again unnecessarily.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">11</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Updates to This Cookie Policy
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in the
                  cookies we use, the services we rely on, or legal requirements. When we make
                  changes, we will update the &quot;Last Updated&quot; date at the top of this page.
                </p>
                <p>
                  We encourage you to review this policy periodically, especially if you have
                  specific preferences about cookies and tracking.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-8">
              <p className="text-sm font-semibold text-restra-yellow">12</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-restra-text sm:text-3xl">
                Contact Us
              </h2>
              <div className="policy-copy mt-5">
                <p>
                  If you have questions about our use of cookies or your choices, contact
                  Restra through our official website.
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
              Have questions about how we use cookies? Get in touch with the Restra
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
