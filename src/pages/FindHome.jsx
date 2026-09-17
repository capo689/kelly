import Hero from '../components/Hero'
import ImageFrame from '../components/ImageFrame'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import RegionCard from '../components/RegionCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ButtonLink from '../components/ButtonLink'
import { regionCards } from '../data/siteData'

export default function FindHome() {
  return (
    <PageTransition>
      <Hero
        eyebrow="Find a Home"
        title="Explore Homes from the Cascades to the Coast"
        copy="Mountain-view property, ocean-view home, vacation getaway, second home, investment, or a place to call home. Let’s explore the possibilities."
        image="/media/Broken_Top1.webp"
        imageRight="/media/IMG_2514.webp"
        primary={{ label: 'Explore the Regions', to: '/find-a-home#regions' }}
        secondary={{ label: 'Tell Me What You Want', to: '/contact' }}
        compact
      />

      <section className="section find-intro">
        <div className="wrap asym-grid">
          <SectionHeading kicker="Where would you like to begin?" title="One Oregon. Two extraordinary ways to live." copy="Start with the landscape that draws you in, then let the search become as specific and personal as your life." />
          <ImageFrame
            className="find-intro-photo"
            src="/media/video/alpine-lake-snowy-peaks-water-level.webp"
            alt="Snow-covered Cascade peaks above an evergreen-lined Oregon lake"
          />
        </div>
      </section>

      <section className="section mist" id="regions">
        <div className="wrap">
          <div className="grid-3 region-grid expanded">
            {regionCards.map((card, index) => <RegionCard key={card.to} card={card} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section search-dialogue">
        <div className="wrap grid-2">
          <Reveal>
            <div className="section-kicker">Your search, your way</div>
            <h2>Send me the homes you keep coming back to.</h2>
          </Reveal>
          <Reveal direction="right">
            <p>You do not have to have it all figured out. Share the listings that catch your eye, the places that inspire you, and the details that matter most. Your search can start with a conversation.</p>
            <ButtonLink to="/contact" variant="dark">Tell Me What You’re Looking For</ButtonLink>
          </Reveal>
        </div>
      </section>

      <CTASection title="Ready to Find Your Oregon Property?" copy="Tell me what fits your life and your vision, and let’s start exploring." button="Get in Touch" />
    </PageTransition>
  )
}
