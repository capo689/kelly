import { Check, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ButtonLink from '../components/ButtonLink'
import CTASection from '../components/CTASection'
import FAQSection from '../components/FAQSection'
import Hero from '../components/Hero'
import ImageFrame from '../components/ImageFrame'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { communitiesByRegion } from '../data/communityData'
import { featureVideos, heroVideos } from '../data/videoData'
import VideoFrame from '../components/VideoFrame'

export default function CommunityPage({ data }) {
  const hub = data.region === 'central'
    ? { label: 'Central Oregon', to: '/central-oregon' }
    : { label: 'Central Oregon Coast', to: '/central-oregon-coast' }
  const related = communitiesByRegion[data.region].filter((community) => community.slug !== data.slug).slice(0, 3)

  return (
    <PageTransition>
      <Hero eyebrow={data.eyebrow} title={data.title} copy={data.answer} image={data.hero} video={data.slug === 'bend' ? heroVideos.bend : undefined} position={data.position} primary={{ label: `Talk About ${data.name}`, to: '/contact' }} credit={data.heroCredit} compact />

      <div className="wrap community-breadcrumb-wrap">
        <Breadcrumbs items={[hub, { label: data.name }]} />
      </div>

      <section className="section community-answer-section">
        <div className="wrap community-answer-grid">
          <Reveal>
            <div className="section-kicker">The short answer</div>
            <h2>Is {data.name} the right place for you?</h2>
            <p className="community-answer">{data.answer}</p>
            {data.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ButtonLink to="/contact" variant="dark">Plan a Local Tour</ButtonLink>
          </Reveal>
          {data.slug === 'bend' ? <VideoFrame video={featureVideos.bend} /> : <ImageFrame src={data.featureImage || data.hero} alt={data.imageAlt || `${data.name}, Oregon landscape and real estate lifestyle`} position={data.featurePosition || data.position} preserveSubject={data.preserveSubject} />}
        </div>
      </section>

      <section className="section deep community-highlights">
        <div className="wrap">
          <div className="community-highlight-grid">
            {data.highlights.map(([label, title], index) => (
              <Reveal className="community-highlight" key={label} delay={index * 70}>
                <span>0{index + 1}</span><div className="section-kicker">{label}</div><p>{title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream community-considerations">
        <div className="wrap asym-grid">
          <Reveal>
            <div className="section-kicker">A smarter search</div>
            <h2>What to compare before you choose a {data.name} home.</h2>
            <p>Beautiful photos open the door. A sound decision comes from understanding the site, the systems, the location, and the way the property will work in everyday life.</p>
          </Reveal>
          <div className="priority-list">
            {data.considerations.map((item, index) => (
              <Reveal className="priority-item" key={item} delay={index * 45}>
                <Check aria-hidden="true" /><span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title={`${data.name} real estate questions`} intro="These are useful starting points. Property-specific answers should always come from current documents, inspections, official sources, and qualified local professionals." items={data.faqs} />

      <section className="section related-communities">
        <div className="wrap">
          <Reveal className="related-heading"><MapPin aria-hidden="true" /><div><div className="section-kicker">Keep exploring</div><h2>Compare nearby communities.</h2></div></Reveal>
          <div className="related-community-grid">
            {related.map((community) => (
              <Reveal key={community.path}>
                <Link to={community.path}><span>{community.eyebrow}</span><h3>{community.name}</h3><p>{community.answer}</p></Link>
              </Reveal>
            ))}
          </div>
          <Link className="text-link" to={hub.to}>Explore all {hub.label} communities</Link>
        </div>
      </section>

      <CTASection title={`Ready to explore ${data.name}?`} copy={`Tell Kelly what you are looking for, how you want to live, and what questions you have about buying in ${data.name}.`} button="Start the Conversation" />
    </PageTransition>
  )
}
