import type { Metadata } from "next";
import { SITE_URL, EMAIL, SITE_NAME, ADDRESS, ABN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Darnell Media",
  description:
    "Darnell Media privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy Policy | Darnell Media",
    description:
      "Darnell Media privacy policy. How we collect, use, and protect your personal information.",
    url: `${SITE_URL}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="text-sm text-gray-400 mb-2">Last updated: 1 January 2025</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            {SITE_NAME} (ABN {ABN}) is committed to protecting your privacy in
            accordance with the{" "}
            <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            This policy explains how we collect, use, disclose, and protect your personal
            information.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              1. Who we are
            </h2>
            <p>
              {SITE_NAME} is a Sydney-based SEO agency operating at {ADDRESS}.
              We provide search engine optimisation, local SEO, and digital marketing
              services to trade businesses and home service operators in Sydney and
              surrounding areas.
            </p>
            <p className="mt-3">
              For privacy-related enquiries, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                {EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              2. What information we collect
            </h2>
            <p>We collect personal information in the following circumstances:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium text-ink">Contact forms:</span> Name, email
                address, phone number, and business name when you submit an enquiry via
                our website.
              </li>
              <li>
                <span className="font-medium text-ink">Booking data:</span> Name, email
                address, and any pre-booking survey responses when you schedule a
                consultation through our Calendly booking system.
              </li>
              <li>
                <span className="font-medium text-ink">Analytics data:</span> Aggregated
                and anonymised usage data (pages visited, session duration, device type)
                collected through Vercel Analytics, if enabled. This data does not
                identify individual users.
              </li>
              <li>
                <span className="font-medium text-ink">Direct communications:</span> Any
                information you provide when contacting us by email or phone.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect sensitive information (as defined in the Privacy Act) and
              we do not collect payment card details directly — any payment processing is
              handled by third-party processors with their own privacy obligations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              3. How we use your information
            </h2>
            <p>We use your personal information to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Respond to your enquiries and provide the services you&apos;ve requested.</li>
              <li>
                Schedule and conduct consultations and prepare for client engagements.
              </li>
              <li>
                Send service-related communications (scope documents, reports, invoices).
              </li>
              <li>
                Improve the quality of our services based on feedback you provide.
              </li>
              <li>
                Comply with applicable legal obligations.
              </li>
            </ul>
            <p className="mt-3">
              We do not use your personal information for unsolicited marketing without
              your consent. If you opt in to email updates, you can unsubscribe at any
              time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              4. Who we share your information with
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties.
              Your information may be shared with:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium text-ink">Calendly:</span> When you book a
                consultation, your name and email address are processed by Calendly, Inc.
                Calendly&apos;s privacy policy is available at{" "}
                <a
                  href="https://calendly.com/legal/privacy-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  calendly.com/legal/privacy-notice
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-ink">Vercel:</span> Our website is
                hosted on Vercel&apos;s infrastructure. Vercel may process request logs
                as part of hosting operations. Vercel&apos;s privacy policy is available
                at{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              No other third parties have access to your personal information in the
              ordinary course of our business.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              5. Cookies and tracking
            </h2>
            <p>
              Our website uses minimal cookies. Specifically:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium text-ink">Vercel Analytics:</span> If
                enabled, Vercel Analytics uses privacy-friendly, cookie-free analytics.
                No personally identifiable data is stored.
              </li>
              <li>
                <span className="font-medium text-ink">Calendly widget:</span> The
                Calendly booking widget may set cookies to enable the booking
                functionality. These are controlled by Calendly, not by us.
              </li>
            </ul>
            <p className="mt-3">
              We do not use advertising cookies, retargeting pixels, or cross-site
              tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              6. Data security
            </h2>
            <p>
              We take reasonable steps to protect your personal information from
              misuse, interference, loss, and unauthorised access. Our website uses
              HTTPS encryption for all data transmission. Access to client data is
              restricted to authorised personnel only.
            </p>
            <p className="mt-3">
              No method of transmission over the internet is 100% secure. If you
              believe your information has been compromised, please contact us
              immediately at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                {EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              7. Access and correction
            </h2>
            <p>
              Under the Australian Privacy Principles, you have the right to access the
              personal information we hold about you, and to request corrections if it
              is inaccurate, out of date, or incomplete.
            </p>
            <p className="mt-3">
              To make an access or correction request, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                {EMAIL}
              </a>
              . We will respond within 30 days. In some circumstances, we may need to
              verify your identity before processing the request.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              8. Retention
            </h2>
            <p>
              We retain personal information only as long as necessary to fulfil the
              purposes for which it was collected, to provide our services, and to
              comply with legal obligations. Client data is retained for a minimum of
              seven years to satisfy Australian tax and record-keeping requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              9. Complaints
            </h2>
            <p>
              If you believe we have breached the Australian Privacy Principles, please
              contact us first at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                {EMAIL}
              </a>
              . We will investigate and respond within 30 days.
            </p>
            <p className="mt-3">
              If you are not satisfied with our response, you may lodge a complaint with
              the{" "}
              <a
                href="https://www.oaic.gov.au/privacy/privacy-complaints"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Office of the Australian Information Commissioner (OAIC)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              10. Changes to this policy
            </h2>
            <p>
              We may update this privacy policy from time to time. The current version
              will always be published at{" "}
              <a href={`${SITE_URL}/privacy/`} className="text-brand-600 hover:underline">
                {SITE_URL}/privacy/
              </a>
              . Continued use of our website after an update constitutes acceptance of
              the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink mb-3">
              11. Contact us
            </h2>
            <p>For any privacy-related questions or requests:</p>
            <div className="mt-4 bg-gray-50 rounded-xl p-5 space-y-1 text-sm">
              <p className="font-semibold text-ink">{SITE_NAME}</p>
              <p>{ADDRESS}</p>
              <p>ABN {ABN}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
