import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, HeartHandshake, Mountain, ShieldCheck } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import SectionHeading from '../components/SectionHeading'
import RegionCard from '../components/RegionCard'
import CTASection from '../components/CTASection'
import ButtonLink from '../components/ButtonLink'
import { regionCards } from '../data/siteData'
import { heroVideos } from '../data/videoData'

const values = [
  { icon: Mountain, title: 'Oregon roots', copy: 'A native Oregonian with a lifelong connection to the mountains, forests, and coast.' },
  { icon: Compass, title: 'Two-region perspective', copy: 'A genuine understanding of the distinct communities and lifestyles in both regions.' },
  { icon: ShieldCheck, title: 'Service-driven values', copy: 'A firefighter and EMT background shaped by integrity, accountability, and preparedness.' },
  { icon: HeartHandshake, title: 'Dependable guidance', copy: 'Personal attention and a commitment to protecting your interests at every step.' },
]

export default function Home() {
  return (
    <PageTransition>
      <Hero
        eyebrow="Cascades to Coast. Coast to Cascades."
        title="Find Your Place in Oregon"
        copy="Central Oregon and Central Oregon Coast real estate, from mountain communities to the rugged Pacific shoreline."
        image="/media/IMG_1895.webp"
        video={heroVideos.home}
        imageRight="/media/IMG_2514.webp"
        primary={{ label: 'Find a Home', to: '/find-a-home' }}
        secondary={{ label: 'Meet Kelly', to: '/about-me' }}
      />

      <section className="section intro-section">
        <div className="wrap grid-2 intro-grid">
          <div className="portrait-composition">
            <div className="portrait-accent" />
            <ImageFrame src="/media/KellyM-PhotosxKristin-1.webp" alt="Kelly Miller with her dog in a Central Oregon field" position="center 32%" />
            <div className="portrait-note">Native Oregonian</div>
          </div>
          <Reveal direction="right" className="intro-copy">
            <div className="section-kicker">A personal connection to place</div>
            <h2>Hi, I’m Kelly.</h2>
            <p>I help buyers and sellers navigate Central Oregon and the Central Oregon Coast. From the mountain communities of Sisters, Bend, and Black Butte Ranch to the rugged coastline around Newport, Waldport, and Yachats, I bring local insight and a genuine love for the Oregon lifestyle to every transaction.</p>
            <p>Whether you are ready to put down roots, find a weekend getaway, or make a move to the place you have always dreamed of, I can help you find the Oregon property that fits your life and your vision.</p>
            <ButtonLink to="/about-me" variant="dark">More About Me</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section mist region-section">
        <div className="wrap">
          <SectionHeading kicker="Two regions, one trusted connection" title="Real estate guidance shaped around your life." copy="Explore the places, properties, and possibilities that make Oregon feel like home." />
          <div className="grid-3 region-grid">
            {regionCards.map((card, index) => <RegionCard key={card.to} card={card} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="wrap asym-grid">
          <div>
            <SectionHeading kicker="Why work with me" title="A grounded approach to an important decision." copy="Local knowledge matters. So do preparation, clear communication, and a trusted relationship." />
            <div className="values-list">
              {values.map(({ icon: Icon, title, copy }, index) => (
                <Reveal key={title} className="value-item" delay={index * 75}>
                  <span><Icon /></span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" className="values-statement">
            <div className="statement-number">44°</div>
            <p>From the Cascades to the Pacific, Kelly helps you explore the version of Oregon that fits your life.</p>
          </Reveal>
        </div>
      </section>

      <section className="section cream gallery-section">
        <div className="wrap">
          <SectionHeading kicker="Oregon, as Kelly knows it" title="Mountains. Ocean. Open sky." />
          <div className="home-gallery">
            <ImageFrame src="/media/IMG_1131.webp" alt="Mountain lake in Central Oregon" className="gallery-main" caption="The Cascades" />
            <ImageFrame src="/media/IMG_1025.webp" alt="Lighthouse along the Oregon Coast" className="gallery-top" caption="The Coast" preserveSubject />
            <ImageFrame src="/media/IMG_0417.webp" alt="Kelly's dogs on a mountain trail" className="gallery-bottom" caption="The good life" preserveSubject />
          </div>
        </div>
      </section>

      <section className="journal-tease">
        <div className="journal-tease-media"><img src="/media/IMG_2514.webp" alt="Oregon coastline" loading="lazy" /></div>
        <div className="journal-tease-copy">
          <Reveal>
            <div className="section-kicker">From the journal</div>
            <h2>Life With Two Homes</h2>
            <p>What if the perfect Oregon lifestyle is not about choosing between mountains and ocean? It may be about having both.</p>
            <Link to="/life-with-two-homes-mountain-beach-living-oregon" className="text-link">Read the story <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
