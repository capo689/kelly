import { Play } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { videoTopics } from '../data/siteData'

export default function Videos() {
  return (
    <PageTransition>
      <Hero eyebrow="Videos" title="See Oregon from the Cascades to the Coast" copy="A visual guide to the communities, landscapes, properties, and lifestyles Kelly serves." image="/media/IMG_2524.webp" position="center 58%" compact />
      <section className="section video-library">
        <div className="wrap">
          <SectionHeading kicker="Field notes in motion" title="Stories from across Kelly’s Oregon." copy="The library is designed and ready for Kelly’s approved footage, titles, and captions. The current frames are drawn from her own photography." />
          <div className="video-grid">
            {videoTopics.map((video, index) => (
              <Reveal className={`video-card ${index === 0 ? 'feature' : ''}`} key={video.title} delay={(index % 3) * 80}>
                <img src={video.image} alt="" loading="lazy" />
                <div className="video-card-wash" />
                <span className="video-play"><Play fill="currentColor" /></span>
                <div className="video-card-copy"><span>{video.subtitle}</span><h3>{video.title}</h3><p>Film coming soon</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Have a Place You Want to See?" copy="Tell Kelly what community, property, or Oregon lifestyle you would like to explore." />
    </PageTransition>
  )
}
