import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

const futureTopics = [
  ['Moving to Sisters', 'Mountain lifestyle and nearby recreation', '/media/IMG_1131.webp'],
  ['Newport and Nye Beach', 'Community, coast, and everyday life', '/media/IMG_2514.webp'],
  ['Second Home Thinking', 'What to consider before beginning the search', '/media/24_Horizon_Hill_Rd_lot.webp'],
]

export default function Blog() {
  return (
    <PageTransition>
      <Hero eyebrow="Journal" title="Oregon Living, from the Cascades to the Coast" copy="Explore the communities, landscapes, and lifestyles that make Central Oregon and the Central Oregon Coast extraordinary places to call home." image="/media/IMG_1089.webp" position="center 65%" compact />

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

      <section className="section mist future-journal">
        <div className="wrap">
          <Reveal className="future-journal-title"><div className="section-kicker">Coming to the journal</div><h2>More ways to know Oregon.</h2></Reveal>
          <div className="future-topic-list">
            {futureTopics.map(([title, copy, image], index) => (
              <Reveal key={title} className="future-topic" delay={index * 80}>
                <span>0{index + 1}</span><img src={image} alt="" loading="lazy" /><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
