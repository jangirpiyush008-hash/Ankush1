import React from 'react'
import SEO from '../../components/SEO.jsx'
import PageHeader from '../../components/PageHeader.jsx'

const sections = [
  {
    h: '1. Acceptance of Terms',
    b: 'By accessing or using seniorchessacademy.com (the "Site"), our newsletter, or any other service operated by Senior Chess Academy ("we", "us", "our"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site. Your continued use of the Site after any change to these Terms constitutes acceptance of that change.'
  },
  {
    h: '2. Who May Use the Site',
    b: 'The Site is intended for adult readers of chess writing. By using the Site, you represent that you are at least 16 years of age (or the age of majority in your jurisdiction) and that you have the legal capacity to accept these Terms. If you use the Site on behalf of another adult (such as a parent or spouse), you confirm that you are authorized to do so.'
  },
  {
    h: '3. Editorial Nature of the Site',
    b: 'Senior Chess Academy is an editorial publication. Our articles reflect the professional opinions and craft of our editors and contributors. Nothing on the Site constitutes medical, legal, financial, investment, or professional advice of any kind. Articles concerning chess and cognitive health are educational only and are not a substitute for consultation with a qualified healthcare professional.'
  },
  {
    h: '4. No Guarantees of Outcome',
    b: 'We do not guarantee any specific chess improvement, tournament result, health outcome, or cognitive benefit from reading our articles or following our study plans. Chess is a lifelong intellectual discipline; results depend on your effort, time, and prior experience.'
  },
  {
    h: '5. Intellectual Property',
    b: 'All articles, guides, photographs, illustrations, editorial diagrams, and design elements on the Site are the property of Senior Chess Academy or our licensors, unless otherwise credited. You may read, print, and share individual articles for personal, non-commercial use, with attribution and a link to the source page. You may not reproduce our content in bulk, resell it, republish it on another website, or use it to train machine-learning models, without our prior written permission.'
  },
  {
    h: '6. User Correspondence and Submissions',
    b: 'When you write to us — via the contact form, the newsletter, or a letter to the editor — you grant us a non-exclusive, worldwide, royalty-free license to publish an excerpt of that correspondence in an edited form (usually with your first name and initial only) in our community section. If you do not wish for any part of your letter to be published, please say so clearly and we will honor that request.'
  },
  {
    h: '7. Community and Comment Etiquette',
    b: 'We may, in the future, enable comments or discussion features. When we do, all readers will be expected to conduct themselves with the civility that this publication is known for. We reserve the right to remove content and, in rare cases, to block users, for personal attacks, harassment, spam, or repeated off-topic posting.'
  },
  {
    h: '8. Newsletter Subscription',
    b: 'Our reading letter is opt-in. You may unsubscribe at any time from the footer of any issue. We do not sell or rent our subscriber list. We may occasionally include a brief, clearly labeled sponsor mention at the bottom of the letter; we do not include tracking pixels in the newsletter beyond a standard open-rate pixel used to measure aggregate deliverability.'
  },
  {
    h: '9. Sponsorship and Advertising Disclosure',
    b: 'From time to time, an article on the Site may be sponsored — for example, by a chess bookseller or a chess-set manufacturer whose products we would recommend to our own families. Sponsored articles are labeled clearly at the top and bottom of the piece. We do not accept sponsorships that conflict with our editorial values. We have declined sponsorships from gambling companies and unregulated supplement brands.'
  },
  {
    h: '10. Third-Party Links and Services',
    b: 'The Site contains links to third-party websites (booksellers, chess federations, cognitive research papers, retirement community directories). We are not responsible for the content, terms, or privacy practices of those websites, and their inclusion does not imply our endorsement of every view or product they offer.'
  },
  {
    h: '11. Prohibited Uses',
    b: 'You agree not to use the Site to (i) violate any applicable law; (ii) infringe intellectual property rights; (iii) upload or transmit any virus, malware, or other harmful code; (iv) interfere with the security or normal operation of the Site; (v) engage in automated scraping of our content for commercial or machine-learning purposes; or (vi) impersonate any person or misrepresent your affiliation with any person or entity.'
  },
  {
    h: '12. Disclaimers of Warranty',
    b: 'The Site and its content are provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all express or implied warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free from harmful components.'
  },
  {
    h: '13. Limitation of Liability',
    b: 'To the fullest extent permitted by law, Senior Chess Academy, its editors, and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Site. Our total aggregate liability to you for any claim shall not exceed one hundred United States dollars (USD 100).'
  },
  {
    h: '14. Governing Law and Venue',
    b: 'These Terms are governed by the laws of the State of Ohio, USA, without regard to conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Site shall be resolved exclusively in the state or federal courts located in Franklin County, Ohio, and you consent to the personal jurisdiction of those courts.'
  },
  {
    h: '15. Changes to These Terms',
    b: 'We may update these Terms from time to time to reflect changes to our publication, applicable law, or best practice. The "Last updated" date at the top of this page will reflect any change. Material changes will be summarized in a note at the top of the page and, where appropriate, mentioned in an issue of the reading letter.'
  },
  {
    h: '16. Contact',
    b: 'If you have any questions about these Terms, please contact us at seniorchessacademy@gmail.com or by post at Senior Chess Academy, 390 Maple Grove Ln, Columbus, OH 43215, USA. We will respond within 30 days.'
  }
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use — Senior Chess Academy"
        description="The terms of use governing the Senior Chess Academy website, newsletter, and reader correspondence."
        path="/legal/terms"
      />
      <PageHeader eyebrow="Legal" title="Terms of Use" lead="Last updated: 30 July 2026. These are the plain-English rules that govern your use of the Site." />
      <section className="container-reading py-16 prose-editorial">
        {sections.map(s => (
          <React.Fragment key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.b}</p>
          </React.Fragment>
        ))}
      </section>
    </>
  )
}
