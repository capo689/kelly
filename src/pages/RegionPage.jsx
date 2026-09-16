import { Check } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import ButtonLink from '../components/ButtonLink'

export default function RegionPage({ data }) {
  return (
    <PageTransition>
      <Hero eyebrow={data.eyebrow} title={data.title} copy={data.intro} image={data.hero} position={data.alignment} primary={{ label: data.cta, to: '/contact' }} compact />

      <section className="section region-narrative">
        <div className="wrap">
          <SectionHeading kicker="Three ways to begin" title="Start with the life you can picture." copy="The best search is not only about bedrooms, square footage, or a price range. It begins with the way you want an ordinary Tuesday to feel." />
          <div className="region-story-grid">
            {data.cards.map((card, index) => (
              <Reveal key={card.title} className={`region-story-card ${index === 1 ? 'offset' : ''}`} delay={index * 100}>
                <ImageFrame src={card.image} alt="" preserveSubject={card.preserveSubject} />
                <div className="region-story-copy">
                  <div className="section-kicker">{card.tag}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist priorities-section">
        <div className="wrap asym-grid">
          <Reveal>
            <div className="section-kicker">What matters to you?</div>
            <h2>Make the search as personal as the destination.</h2>
            <p>{data.statement}</p>
            <ButtonLink to="/contact" variant="dark">Send Me the Homes You Like</ButtonLink>
          </Reveal>
          <div className="priority-list">
            {data.priorities.map((item, index) => (
              <Reveal key={item} className="priority-item" delay={index * 45}>
                <Check /><span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section region-conversation">
        <div className="wrap grid-2">
          <ImageFrame src={data.cards[1].image} alt="Oregon landscape and lifestyle" preserveSubject={data.cards[1].preserveSubject} />
          <Reveal direction="right">
            <div className="section-kicker">Your search can start with a conversation</div>
            <h2>{data.closeTitle}</h2>
            <p>{data.closeCopy}</p>
            <p>Send me what catches your eye, what inspires you, and what is making you think it may be time to buy.</p>
          </Reveal>
        </div>
      </section>

      <CTASection title={data.closeTitle} copy={data.closeCopy} button={data.cta} />
    </PageTransition>
  )
}
