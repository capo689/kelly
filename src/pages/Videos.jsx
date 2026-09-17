import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { featureVideos } from '../data/videoData'
import VideoFrame from '../components/VideoFrame'

export default function Videos() {
  return (
    <PageTransition>
      <Hero eyebrow="Videos" title="See Oregon from the Cascades to the Coast" copy="A visual guide to the communities, landscapes, properties, and lifestyles Kelly serves." image="/media/IMG_2524.webp" position="center 58%" compact />
      <section className="section video-library">
        <div className="wrap">
          <SectionHeading kicker="Field notes in motion" title="A closer look at Oregon." copy="Explore a Cascade lake and summer along the river in Bend. Choose a film to play; both are silent, with a description beneath the player." />
          <div className="video-grid">
            {Object.values(featureVideos).map((video) => (
              <Reveal key={video.title}>
                <VideoFrame video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Have a Place You Want to See?" copy="Tell Kelly what community, property, or Oregon lifestyle you would like to explore." />
    </PageTransition>
  )
}
