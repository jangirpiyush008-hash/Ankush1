import React from 'react'
import SEO from '../../components/SEO.jsx'
import PageHeader from '../../components/PageHeader.jsx'

export default function Refund() {
  return (
    <>
      <SEO
        title="Refund Policy — Senior Chess Academy"
        description="Refund policy for reader contributions to Senior Chess Academy. Simple, plain-English terms and how to request a refund."
        path="/legal/refund"
      />
      <PageHeader eyebrow="Legal" title="Refund Policy" lead="Last updated: 30 July 2026. Every article on this site is free to read. This policy applies only to voluntary reader contributions and to any future paid item we may offer." />
      <section className="container-reading py-16 prose-editorial">
        <h2>1. What is free</h2>
        <p>
          Every article, guide, and legal page on Senior Chess Academy is free to read, indefinitely, without registration.
          If a reader ever asks us for a refund of an article they read, we thank them for the kind gesture and reassure them
          there is nothing to refund. We mention this only because it does happen.
        </p>

        <h2>2. Voluntary reader contributions</h2>
        <p>
          A small number of readers have written to ask if they may support the publication financially. If you have made a
          voluntary contribution and change your mind, you may request a full refund within 30 days of the contribution by
          emailing <a className="link-underline" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a> with the subject
          line "Refund". We will refund the full amount to the original payment method, usually within 5 business days. We
          do not ask for a reason.
        </p>

        <h2>3. If we introduce paid items in the future</h2>
        <p>
          Should we ever introduce a paid item — for example, a printed anthology of collected articles, a downloadable
          study PDF, or a workshop registration — this section will describe the refund policy for that item in advance.
          As a default, our policy for paid items will be:
        </p>
        <ul>
          <li><strong>Physical goods.</strong> Refund available for 30 days after delivery, provided the item is returned in the condition it was received. Return shipping is the reader's responsibility unless the item was damaged or incorrect.</li>
          <li><strong>Digital goods.</strong> Refund available for 14 days after purchase, unless the digital good has been fully downloaded and consumed.</li>
          <li><strong>Workshops and events.</strong> Full refund for cancellations 14 days before the event; 50% refund for cancellations between 14 and 7 days before; no refund within 7 days, though we will happily assign the seat to another reader if you nominate one.</li>
        </ul>

        <h2>4. How to request a refund</h2>
        <p>
          Please email <a className="link-underline" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a> with the subject
          line "Refund" and the following information:
        </p>
        <ul>
          <li>The name on the payment (if different from the sender);</li>
          <li>The approximate date and amount of the payment;</li>
          <li>The last four digits of the card used, or the PayPal email address used, so we can locate the transaction;</li>
          <li>Any additional detail you would like to share (optional).</li>
        </ul>
        <p>We will acknowledge your request within 2 business days and confirm the refund within 5 business days.</p>

        <h2>5. Chargebacks</h2>
        <p>
          If you initiate a chargeback with your card issuer instead of writing to us, we honor the outcome your card issuer
          reaches. We would, however, gently prefer that you write to us first — refunds are simple, fast, and no reason is
          required. Chargebacks cost small publications a fee we would rather spend on articles.
        </p>

        <h2>6. Exceptions</h2>
        <p>
          We reserve the right to decline refund requests that are clearly abusive or fraudulent — for example, repeated
          patterns of contribution and refund by the same account, or requests made after materially benefiting from a
          time-limited event (such as a workshop). In practice we have not encountered this and we expect never to.
        </p>

        <h2>7. Contact</h2>
        <p>
          For any question about this refund policy, please write to us at
          <a className="link-underline" href="mailto:seniorchessacademy@gmail.com"> seniorchessacademy@gmail.com</a> or by post at Senior
          Chess Academy, 390 Maple Grove Ln, Columbus, OH 43215, USA.
        </p>
      </section>
    </>
  )
}
