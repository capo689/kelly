import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { contact } from '../data/siteData'

const sections = {
  privacy: {
    title: 'Privacy Notice',
    intro: 'A simple explanation of what happens when you contact Kelly through this website.',
    content: <>
      <h2>Who you are contacting</h2>
      <p>This is Kelly Miller’s real-estate website. Kelly is an Oregon REALTOR®/Broker with Fathom Realty Oregon, LLC, Oregon license #201246475.</p>
      <h2>Information you choose to send</h2>
      <p>The contact and appointment forms collect your name, email address, message, and any optional phone number, property interests or preferred community you provide. Your inquiry is emailed to Kelly so she can respond to your request. The website does not maintain a separate customer database or automatically enroll you in a mailing list.</p>
      <p>Please do not include identification documents, financial records, account numbers or other sensitive information in these forms.</p>
      <h2>Form delivery and service providers</h2>
      <p>FormSubmit processes form submissions and delivers them to Kelly’s Gmail inbox. FormSubmit’s documentation describes a 30-day submission archive. Emails received by Kelly remain separate from that archive; the provider’s archive period does not mean copies in email are automatically deleted.</p>
      <p>Vercel hosts this website. Hosting, form and email providers may process technical information, such as IP addresses and request details, to deliver and protect their services. Read <a href="https://formsubmit.co/privacy.pdf">FormSubmit’s privacy policy</a>, <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a> and <a href="https://policies.google.com/privacy">Google’s privacy policy</a> for their practices.</p>
      <h2>Cookies, analytics and external links</h2>
      <p>This website does not use advertising pixels or analytics tools, and its fonts, photographs and videos are served from the website. Following a social-media or other external link takes you to a service with its own privacy practices. Form processing providers may use their own security technologies when you use their services.</p>
      <h2>Questions about your information</h2>
      <p>Contact Kelly to ask about information you have sent or request its correction or deletion. Any applicable legal or brokerage recordkeeping requirements may affect what can be deleted. Do not submit a new inquiry containing sensitive documents to make a privacy request.</p>
      <p>This notice describes the website’s current inquiry process. It may be updated if the services or information practices change.</p>
    </>,
  },
  terms: {
    title: 'Website Terms',
    intro: 'Information about using this website and starting a conversation with Kelly.',
    content: <>
      <h2>Real-estate information and services</h2>
      <p>Kelly Miller is an Oregon REALTOR®/Broker with Fathom Realty Oregon, LLC, Oregon license #201246475. This website provides general information about her services, Oregon communities and property considerations.</p>
      <p>Website information is a starting point for discussion. Property availability, pricing, permits, taxes, insurance and rental restrictions can change and should be verified for the specific property and transaction. General content is not legal, tax, lending or investment advice.</p>
      <h2>Inquiries and appointments</h2>
      <p>Viewing this website or sending a message does not by itself establish an agency relationship or confirm an appointment. Representation arrangements and meeting times are addressed separately with Kelly and her brokerage. An appointment-form submission is a request for follow-up.</p>
      <h2>Photographs and property examples</h2>
      <p>Photographs and property examples illustrate the places and services discussed unless expressly identified as a current listing. They do not establish that a property is available for purchase or rent.</p>
      <h2>Content and external websites</h2>
      <p>Text, photography, films and design are owned or licensed by their respective rights holders. Third-party materials remain subject to their credited license terms. Other materials may not be republished without permission or another lawful basis.</p>
      <p>External websites operate independently and have their own terms and privacy practices. Contact Kelly if you notice an error or need help with information on this website.</p>
    </>,
  },
  accessibility: {
    title: 'Accessibility',
    intro: 'Help accessing this website and information about Kelly’s real-estate services.',
    content: <>
      <h2>Our approach</h2>
      <p>We are working to make this website accessible and usable for people with disabilities, using WCAG 2.2 Level AA as an improvement target. The website includes keyboard navigation, visible focus indicators, labeled form fields, reduced-motion support and controls for background video.</p>
      <p>We have reviewed common accessibility barriers and continue to address issues. Full conformance has not been certified, and automated checks do not cover every accessibility need.</p>
      <h2>Get assistance</h2>
      <p>If you have difficulty using any part of the website, email or call Kelly using the details below. Include the page address and a brief description of the difficulty so she can help you obtain the information you need.</p>
      <p>You can contact Kelly directly without using the website forms.</p>
    </>,
  },
}

export default function Policy({ kind }) {
  const page = sections[kind]
  return <PageTransition>
    <section className="policy-heading"><div className="wrap"><p className="section-kicker">Kelly Miller · Fathom Realty Oregon, LLC</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
    <article className="wrap policy-content">
      <p className="policy-date">Updated September 17, 2026</p>
      {page.content}
      <h2>Contact Kelly</h2>
      <p><a href={contact.emailHref}>{contact.email}</a><br /><a href={contact.phoneHref}>{contact.phone}</a></p>
      <nav aria-label="Related policies"><Link to="/privacy">Privacy Notice</Link><Link to="/terms">Website Terms</Link><Link to="/accessibility">Accessibility</Link></nav>
    </article>
  </PageTransition>
}
