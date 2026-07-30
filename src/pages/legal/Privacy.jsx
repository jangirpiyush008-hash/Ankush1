import React from 'react'
import SEO from '../../components/SEO.jsx'
import PageHeader from '../../components/PageHeader.jsx'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Senior Chess Academy"
        description="How Senior Chess Academy collects, uses, and protects reader information. Written in plain, honest language."
        path="/legal/privacy"
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" lead="Last updated: 30 July 2026. We treat your privacy the way we hope our own is treated." />
      <section className="container-reading py-16 prose-editorial">
        <h2>1. Who we are</h2>
        <p>
          Senior Chess Academy is an editorial chess publication for adults 50+, operated from Columbus, Ohio, USA. In this
          policy, "we", "us", and "our" refer to Senior Chess Academy. You can contact us at
          <a className="link-underline" href="mailto:seniorchessacademy@gmail.com"> seniorchessacademy@gmail.com</a> or by post
          at 390 Maple Grove Ln, Columbus, OH 43215.
        </p>

        <h2>2. Scope of this policy</h2>
        <p>
          This Privacy Policy applies to information collected through the Senior Chess Academy website, our weekly reading
          letter, our contact and newsletter forms, and any correspondence you send to us. It does not apply to third-party
          websites we link to from our articles.
        </p>

        <h2>3. Information we collect</h2>
        <p>We collect only what we need to run this publication:</p>
        <ul>
          <li><strong>Information you give us.</strong> Your email address if you subscribe to the reading letter; your name, email, and message if you write to us via the contact form or by direct email.</li>
          <li><strong>Analytics data.</strong> If you consent, we use Google Analytics 4 with IP anonymization to understand which articles are read. Analytics is disabled by default under Google Consent Mode v2 until you explicitly accept.</li>
          <li><strong>Technical logs.</strong> Our web server temporarily logs standard request data (IP address, timestamp, page requested, user agent) for security and troubleshooting. These logs are retained for no more than 30 days.</li>
        </ul>
        <p>We do not collect payment information on this site. We do not sell products through this site.</p>

        <h2>4. How we use your information</h2>
        <ul>
          <li>To send you the Sunday reading letter, if you have subscribed.</li>
          <li>To reply to letters you send to the editor.</li>
          <li>To understand aggregate reader interest in articles (analytics), if you have consented.</li>
          <li>To protect the site against abuse or attack (server logs).</li>
        </ul>
        <p>We do not use your information for behavioral advertising, and we do not build advertising profiles.</p>

        <h2>5. Cookies and similar technologies</h2>
        <p>
          We use two categories of cookies. <strong>Essential cookies</strong> support core site functions such as your
          consent choice and site preferences; these do not require your permission. <strong>Analytics cookies</strong> are
          set by Google Analytics 4 <em>only</em> after you accept the cookie banner. Under Google Consent Mode v2, our
          site defaults every advertising and analytics category to "denied" until you accept.
        </p>
        <p>You can withdraw analytics consent at any time by clearing your browser storage for our site.</p>

        <h2>6. Legal bases (GDPR readers)</h2>
        <p>If you are in the EEA or UK, we rely on the following legal bases:</p>
        <ul>
          <li><strong>Consent</strong> — for optional analytics and the reading letter.</li>
          <li><strong>Legitimate interests</strong> — for reader correspondence, server security, and running the publication.</li>
          <li><strong>Legal obligation</strong> — where the law requires us to retain certain records.</li>
        </ul>

        <h2>7. Sharing your information</h2>
        <p>
          We do not sell your data. We share only where necessary to operate the site:
        </p>
        <ul>
          <li>Our email service provider, to deliver the reading letter.</li>
          <li>Google Analytics 4, if you have consented, to understand aggregate readership.</li>
          <li>Our hosting provider, which processes standard web requests.</li>
        </ul>
        <p>All processors are bound by contractual obligations that meet applicable privacy law.</p>

        <h2>8. Retention</h2>
        <p>
          Newsletter subscribers: for as long as you remain subscribed, plus 30 days after unsubscribe for deliverability
          reasons. Contact correspondence: two years, then archived or deleted. Server logs: no more than 30 days. Analytics
          data: default GA4 retention (currently 14 months) if consented.
        </p>

        <h2>9. Your rights</h2>
        <p>
          You have the right to access, correct, delete, and export your personal data, and to withdraw consent. To exercise
          any of these rights, please email <a className="link-underline" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a>{' '}
          with the subject line "Privacy Request". We reply within 30 days.
        </p>

        <h2>10. Children</h2>
        <p>
          Senior Chess Academy is written for adults. We do not knowingly collect personal information from anyone under 16.
          If you believe a child has provided us with personal information, please contact us and we will delete it.
        </p>

        <h2>11. Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect your data — encryption in transit (HTTPS),
          access controls on our systems, and vendor review for our processors. No system is perfectly secure; we cannot
          guarantee absolute security.
        </p>

        <h2>12. International transfers</h2>
        <p>
          Our servers and email service providers are located in the United States. If you access the site from outside the
          United States, your data may be transferred to and processed in the United States under standard contractual
          protections.
        </p>

        <h2>13. Do-not-track signals</h2>
        <p>
          Because Do Not Track is inconsistently implemented across browsers, we rely on the cookie banner and Google Consent
          Mode v2 rather than DNT. You can control analytics through the banner at any time.
        </p>

        <h2>14. Third-party links</h2>
        <p>
          Our articles occasionally link to third-party websites (booksellers, chess federations, cognitive-research papers).
          Those websites have their own privacy practices, over which we have no control.
        </p>

        <h2>15. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. If we make material changes, we will note the update at the top of
          this page and, for significant changes, in an issue of the reading letter.
        </p>

        <h2>16. Contact for privacy questions</h2>
        <p>
          Please write to <a className="link-underline" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a> with the
          subject line "Privacy" or by post to Senior Chess Academy, 390 Maple Grove Ln, Columbus, OH 43215, USA.
        </p>
      </section>
    </>
  )
}
