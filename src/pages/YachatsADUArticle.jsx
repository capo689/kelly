import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import ButtonLink from '../components/ButtonLink'

export default function YachatsADUArticle() {
  return (
    <PageTransition>
      <div className="adu-article yachats-adu-article">
        <Hero eyebrow="Journal · Coastal possibilities" title="ADU Opportunities in Yachats" copy="A look at proposed changes—and what they could mean for your coastal property." image="/media/24_Horizon_Hill_Rd_lot.webp" position="center 30%" compact />
        <article className="wrap adu-layout">
          <div className="adu-reading">
            <Link className="text-link" to="/blog">← Back to the Journal</Link>
            <p className="adu-byline">By Kelly Miller, REALTOR®/Broker · Oregon License #201246475<br /><time dateTime="2026-09-20">September 20, 2026</time></p>
            <p className="adu-intro">New housing proposals in Yachats could make Accessory Dwelling Units (ADUs) more accessible to property owners. The changes are part of Yachats’ broader effort to expand housing options while allowing additional homes to fit within existing neighborhoods.</p>
            <p className="adu-status-note"><strong>Where things stand:</strong> The city’s published materials still describe these as proposed code updates. Confirm adoption and the effective date with the City of Yachats before relying on them for a purchase or project.</p>

            <section id="yachats-adu-proposals">
              <h2>What is being proposed?</h2>
              <p>Under the proposed updated code, <strong>one ADU would be allowed with a legal detached single-unit dwelling</strong> in locations where detached single-unit homes are permitted. An ADU could be attached to the main home, created within an existing portion of the home, or built as a separate detached structure—including within an accessory building such as a garage or workshop, subject to the ADU height and siting standards.</p>
              <p>The proposed rules would generally allow an ADU of <strong>up to 1,000 square feet</strong>. A detached ADU would be limited to <strong>one story and 15 feet in height</strong>, with specific setback provisions designed to give property owners more flexibility while maintaining neighborhood spacing.</p>
              <p><strong>Parking still needs a property-specific check.</strong> The published draft calls for one space per ADU, with an on-street parking credit where the qualifying conditions are met.</p>
              <p className="adu-source">Sources reviewed September 20, 2026: <a href="https://www.yachatsoregon.org/395/Housing-Needs-Assessment-and-Implementat">City of Yachats housing-code project</a>, <a href="https://www.yachatsoregon.org/DocumentCenter/View/3057/Full-Code-Adoption-Draft-20260518">May 18, 2026 public review draft</a> (Chapters 9.48 and 9.51), and <a href="https://www.yachatsoregon.org/DocumentCenter/View/3021/Yachats-Housing-Related-Code-Update---FAQs-2026-04-08">the city’s housing-code FAQ</a>.</p>
            </section>

            <figure className="adu-property-photo yachats-shore-photo">
              <img src="/media/kelly-updates/kiva-yachats.webp" alt="Kiva standing on Yachats’ rocky shoreline with ocean waves behind her" width="1350" height="1800" loading="lazy" />
              <figcaption>Kiva on the Yachats shoreline, from Kelly’s photo collection.</figcaption>
            </figure>

            <section id="yachats-buyers">
              <h2>What this could mean for Yachats buyers</h2>
              <p>For buyers, an ADU can offer possibilities beyond simply adding another bedroom or living space. Depending on the property and how the ADU is used, it could provide <strong>multigenerational living, a private guest space, a home office, long-term rental potential, or additional flexibility for the future.</strong></p>
              <p>If you’re looking at <Link to="/central-oregon-coast/yachats">Yachats real estate</Link>, don’t just look at the house—<strong>look at the possibilities of the property.</strong></p>
              <p>A home with an existing garage, workshop, additional yard area, or a lot configuration that could accommodate an ADU may offer opportunities that aren’t immediately obvious.</p>
              <p>As a <strong>Certified ADU Specialist</strong>, I can help you look at a property through an ADU lens—considering the potential, the property layout, and the questions you should be asking before making a purchase.</p>
              <p>Whether you’re looking for a coastal home, a second home, multigenerational living space, or an investment opportunity, understanding the ADU potential of a property can be an important part of the buying decision.</p>
              <p className="adu-pullquote">Thinking about buying in Yachats? Let’s look beyond the house and explore what’s possible.</p>
              <ButtonLink to="/contact" variant="dark">Talk With Kelly About Yachats</ButtonLink>
              <p className="adu-related">Also in the Journal: <Link to="/adus-in-bend-oregon">ADUs in Bend, Oregon: More Possibilities for Your Property</Link>.</p>
            </section>

            <section className="adu-disclaimer" id="adu-disclaimer">
              <h2>ADU Disclaimer</h2>
              <p><strong>The Yachats ADU rules described above are based on the City of Yachats’ proposed housing-code updates and information available at the time of publication.</strong> They are subject to final adoption, effective dates, interpretation, and applicable permitting requirements. ADU eligibility and development potential vary by property and may be affected by zoning, setbacks, height, lot configuration, utilities, building codes, CC&amp;Rs, and other regulations. This information is for general educational purposes only and is not legal, zoning, or land-use advice. Buyers should verify current requirements with the City of Yachats and appropriate professionals before relying on this information.</p>
            </section>
          </div>

          <aside className="adu-sidebar" aria-label="About the author and article sections">
            <div className="adu-credential">
              <img src="/brand/adu-specialist-logo.png" alt="ADU Specialist" width="304" height="251" />
              <p><strong>Kelly Miller</strong><br />Oregon REALTOR®/Broker<br />License #201246475</p>
            </div>
            <nav aria-label="In this article">
              <span className="section-kicker">In this article</span>
              <a href="#yachats-adu-proposals">The proposed ADU changes</a>
              <a href="#yachats-buyers">What this means for buyers</a>
              <a href="#adu-disclaimer">ADU disclaimer</a>
            </nav>
          </aside>
        </article>
      </div>
    </PageTransition>
  )
}
