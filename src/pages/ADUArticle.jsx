import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import ButtonLink from '../components/ButtonLink'

export default function ADUArticle() {
  return (
    <PageTransition>
      <div className="adu-article">
        <Hero eyebrow="Journal · Property possibilities" title="ADUs in Bend, Oregon" copy="More Possibilities for Your Property" image="/media/Kobe3.webp" position="center 55%" compact />
        <article className="wrap adu-layout">
          <div className="adu-reading">
            <Link className="text-link" to="/blog">← Back to the Journal</Link>
            <p className="adu-byline">By Kelly Miller, REALTOR®/Broker · Oregon License #201246475<br /><time dateTime="2026-09-19">September 19, 2026</time></p>
            <p className="adu-intro">Thinking about adding an Accessory Dwelling Unit (ADU) to your Bend property? An ADU can create additional living space, provide housing for family members, offer flexibility for guests or a caregiver, or create an opportunity for additional rental income.</p>
            <p>Bend has made ADU development more accessible, with streamlined permitting options and pre-approved ADU plans designed to help reduce costs and simplify the process.</p>

            <section id="bend-adu-rules">
              <h2>What are the current ADU rules in Bend?</h2>
              <p>The City of Bend currently allows <strong>up to two ADUs on a residential lot</strong> with a single-unit home, townhome, or manufactured home, subject to applicable requirements. Under the general ADU standards, <strong>the first ADU is limited to 800 square feet and a second ADU to 500 square feet</strong>. ADUs must comply with the zoning requirements for the property, including setbacks, lot coverage, height and floor-area requirements. <a href="https://bend.municipal.codes/BDC/3.6.200">Review Bend’s ADU development standards.</a></p>
              <p>Bend also <strong>does not require minimum on-site parking for an ADU</strong>, which can make ADU development more feasible on properties where adding another parking space would otherwise be difficult.</p>
              <p>Other considerations can include:</p>
              <ul>
                <li>Property zoning and development standards</li>
                <li>Building setbacks and lot coverage</li>
                <li>Water and sewer requirements</li>
                <li>Fire and life-safety requirements</li>
                <li>Utility and System Development Charges</li>
                <li>Septic requirements for properties not connected to the city sewer system</li>
                <li>HOA or CC&amp;R restrictions</li>
                <li>Special requirements for properties in areas such as Northwest Crossing or historic districts</li>
              </ul>
              <p>The City of Bend also offers <a href="https://bendoregon.gov/services/permits-licenses/adu-resources-hub/pre-approved-plans/"><strong>pre-approved ADU plans</strong></a>, which can help streamline the building permit process and potentially reduce design and plan-review costs.</p>
              <p className="adu-source">City resources: <a href="https://bendoregon.gov/services/permits-licenses/adu-resources-hub/code-requirements/">ADU code requirements and property considerations</a>. Reviewed September 19, 2026.</p>
            </section>

            <figure className="adu-property-photo">
              <img src="/media/Kobe2.webp" alt="Dark-sided home with white window trim, a wooden entry stair, and leafy trees" width="1920" height="1278" loading="lazy" />
              <figcaption>Property inspiration from Kelly’s photography collection.</figcaption>
            </figure>

            <section id="adu-specialist">
              <h2>How I can help as an ADU Specialist</h2>
              <p>As an <strong>ADU Specialist</strong>, I have completed specialized training focused on ADU planning, regulations, property eligibility, development processes, costs and investment considerations.</p>
              <p>My role isn’t to replace an architect, contractor, planner or other licensed professional. Instead, I can help you look at the <strong>real estate side of the ADU opportunity</strong> and ask the right questions early in the process.</p>
              <p>Whether you’re buying a home and wondering <em>“Could I add an ADU here?”</em>, selling a property with existing ADU potential, or considering an ADU as part of an investment strategy, I can help you evaluate the possibilities and connect you with the appropriate professionals for the next steps.</p>
              <p className="adu-pullquote">An ADU can be more than an extra structure—it can be an opportunity to make your property work harder for the way you live, invest and plan for the future.</p>
              <ButtonLink to="/contact" variant="dark">Talk With Kelly About ADUs</ButtonLink>
            </section>

            <section className="adu-disclaimer" id="adu-disclaimer">
              <h2>ADU Disclaimer</h2>
              <p><strong>ADU regulations, zoning requirements, permitting requirements, fees and development standards can change and vary by property.</strong> The information provided here is for general educational purposes only and is not legal, architectural, engineering, construction or land-use advice. Property owners and prospective buyers should verify current requirements with the City of Bend and consult appropriate licensed professionals before making decisions or beginning an ADU project. HOA, CC&amp;R, utility, septic and other property-specific restrictions may also apply.</p>
            </section>
          </div>

          <aside className="adu-sidebar" aria-label="About the author and article sections">
            <div className="adu-credential">
              <img src="/brand/adu-specialist-logo.png" alt="ADU Specialist" width="304" height="251" />
              <p><strong>Kelly Miller</strong><br />Oregon REALTOR®/Broker<br />License #201246475</p>
            </div>
            <nav aria-label="In this article">
              <span className="section-kicker">In this article</span>
              <a href="#bend-adu-rules">Bend’s ADU rules</a>
              <a href="#adu-specialist">How Kelly can help</a>
              <a href="#adu-disclaimer">ADU disclaimer</a>
            </nav>
          </aside>
        </article>
      </div>
    </PageTransition>
  )
}
