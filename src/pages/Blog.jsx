import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { communityRoutes } from '../data/communityData'

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
          <Reveal className="future-journal-title"><div className="section-kicker">Community guides</div><h2>Know the place before you choose the property.</h2><p>Clear, local starting points for comparing communities, understanding property considerations, and asking better questions.</p></Reveal>
          <div className="future-topic-list">
            {communityRoutes.map((community, index) => (
              <Reveal key={community.path} delay={(index % 5) * 45}>
                <Link to={community.path} className="future-topic">
                  <span>{String(index + 1).padStart(2, '0')}</span><img src={community.hero} alt={`${community.name}, Oregon`} loading="lazy" /><div><h3>{community.name} Real Estate Guide</h3><p>{community.answer}</p></div><ArrowUpRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
