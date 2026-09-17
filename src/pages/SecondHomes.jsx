import { Building2, Landmark, MountainSnow, Waves } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import VideoFrame from '../components/VideoFrame'
import { heroVideos, featureVideos } from '../data/videoData'

const opportunities = [
  { icon: Building2, title: 'Riverfront Rhythm', copy: 'A Central Oregon condo close to the Deschutes River and the energy of Bend.', image: '/media/Kobe4.webp' },
  { icon: MountainSnow, title: 'Mountain Basecamp', copy: 'A second home that puts trails, snow, and the Cascades within easy reach.', video: featureVideos.mountain },
  { icon: Landmark, title: 'Resort Lifestyle', copy: 'A Black Butte Ranch or recreation-focused property built around time outside.', image: '/media/Broken_Top2.webp' },
  { icon: Waves, title: 'Coastal Gathering Place', copy: 'A spacious Oregon Coast home made for long weekends, family, and ocean air.', image: '/media/24_Horizon_Hill_Rd_lot.webp' },
]

export default function SecondHomes() {
  return (
    <PageTransition>
      <Hero eyebrow="Second Homes and Investment Properties" title="Explore What Your Next Property Could Make Possible" copy="You bring the vision. Let’s talk through the opportunity, the market, and what makes sense for your goals." image="/media/LP4.webp" video={heroVideos.secondHomes} position="center 52%" primary={{ label: 'Send Me a Property', to: '/contact' }} secondary={{ label: 'Start a Conversation', to: '/contact' }} compact />

      <section className="section investment-intro">
        <div className="wrap grid-2">
          <Reveal>
            <div className="section-kicker">Start with what has your attention</div>
            <h2>Already watching the market?</h2>
          </Reveal>
          <Reveal direction="right">
            <p>Send me what you are looking at. Whether it is an investment property, second home, vacation rental, land, or a property with potential, I want to know what caught your eye and what you are looking to accomplish.</p>
            <p>Let’s look at the possibilities with a clear view of your goals and the kind of property that could move them forward.</p>
          </Reveal>
        </div>
      </section>

      <section className="section mist opportunity-section">
        <div className="wrap">
          <SectionHeading kicker="Four ways to imagine what is next" title="A property can be both a place and a possibility." />
          <div className="opportunity-grid">
            {opportunities.map(({ icon: Icon, ...item }, index) => (
              <Reveal key={item.title} className="opportunity-card" delay={index * 70}>
                {item.video ? <VideoFrame video={item.video} /> : <ImageFrame src={item.image} alt={item.title} />}
                <div className="opportunity-copy"><Icon /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="investment-band">
        <div className="investment-marquee"><span>MOUNTAINS · RIVER · COAST · POSSIBILITY · </span><span>MOUNTAINS · RIVER · COAST · POSSIBILITY · </span></div>
      </section>

      <CTASection title="What Has Your Attention?" copy="Share the property, the idea, or the possibility. We can take it from there." button="Send Me a Property" />
    </PageTransition>
  )
}
