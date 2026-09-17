import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ImageFrame from '../components/ImageFrame'

export default function Blog() {
  return (
    <PageTransition>
      <Hero eyebrow="Journal" title="Oregon Living, from the Cascades to the Coast" copy="Explore the communities, landscapes, and lifestyles that make Central Oregon and the Central Oregon Coast extraordinary places to call home." image="/media/IMG_1089.webp" position="center 65%" compact />

      <section className="section journal-intro">
        <div className="wrap">
          <Reveal className="journal-intro-heading"><div className="section-kicker">A life between two landscapes</div><h2>One Oregon. Two extraordinary ways to live.</h2><p>Start with the landscape that draws you in. Then imagine the everyday moments that would make it home.</p></Reveal>
          <div className="journal-landscapes">
            <Reveal className="journal-landscape">
              <ImageFrame src="/media/kelly-updates/kiva-three-sisters.webp" alt="Kiva with the snow-covered Three Sisters in the background" position="center 55%" />
              <div className="journal-landscape-copy"><div className="section-kicker">The Cascades</div><h3>Room for adventure.</h3><p>In Central Oregon, the mountains are part of the daily backdrop. A walk with the dogs can lead to a forest trail, a river bend, or a view of snow-covered peaks. Between those bigger adventures are the routines that matter just as much: a favorite coffee stop, a neighborhood you enjoy, and a place to settle in after a day outside.</p></div>
            </Reveal>
            <Reveal className="journal-landscape">
              <ImageFrame src="/media/kelly-updates/kiva-yachats.webp" alt="Kiva exploring the rocky shoreline in Yachats, Oregon" position="center 60%" />
              <div className="journal-landscape-copy"><div className="section-kicker">The Coast</div><h3>A different kind of rhythm.</h3><p>On the Central Oregon Coast, the ocean sets the scene. Beach walks, rocky shoreline, and forest trails make familiar places feel different with each visit. Life here leaves room for a slower morning, a stop in town, and time outside with the dogs, even when the weather calls for an extra layer.</p></div>
            </Reveal>
          </div>
          <Reveal className="journal-intro-close"><p>I divide my time between these two regions with Kiva and Xoco. For me, the connection is personal: both offer a way to feel at home outdoors. Whether you are drawn to one landscape or imagining a life with both, this Journal is a place to explore what that could look like.</p><Link className="text-link" to="/find-a-home#regions">Get to know the communities <ArrowUpRight size={17} /></Link></Reveal>
        </div>
      </section>

      <section className="section featured-article">
        <div className="wrap featured-article-grid">
          <Reveal className="featured-article-image image-reveal" direction="scale"><img src="/media/IMG_1895.webp" alt="Cascade Mountains in Oregon" /></Reveal>
          <Reveal direction="right" className="featured-article-copy">
            <div className="section-kicker">Featured story</div>
            <h2>Life With Two Homes</h2>
            <p className="article-subtitle">Mountain and Beach Living in Oregon</p>
            <p>What if you could have the best of both worlds, a home in the mountains and a home at the beach? Sometimes the perfect Oregon lifestyle is one that lets you enjoy both.</p>
            <Link to="/life-with-two-homes-mountain-beach-living-oregon" className="button-link dark">Read the Story <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
