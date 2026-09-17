import Hero from '../components/Hero'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ButtonLink from '../components/ButtonLink'
import { communitiesByRegion } from '../data/communityData'

export default function FindHome() {
  return (
    <PageTransition>
      <Hero
        eyebrow="Find a Home"
        title="Explore Homes from the Cascades to the Coast"
        copy="Mountain-view property, ocean-view home, vacation getaway, second home, investment, or a place to call home. Let’s explore the possibilities."
        image="/media/Broken_Top1.webp"
        imageRight="/media/IMG_2514.webp"
        primary={{ label: 'Explore the Communities', to: '/find-a-home#regions' }}
        secondary={{ label: 'Tell Me What You Want', to: '/contact' }}
        compact
      />

      <section className="section mist community-directory" id="regions">
        <div className="wrap">
          <SectionHeading kicker="Community guides" title="Know the place before you choose the property." copy="Explore the communities, get a feel for everyday life, and learn what to consider as you narrow your home search." />
          {[
            ['central', 'Central Oregon', 'Mountain towns, riverfront neighborhoods, and room to roam.'],
            ['coast', 'Central Oregon Coast', 'Working waterfronts, small villages, and life beside the Pacific.'],
          ].map(([region, title, copy]) => (
            <div className="community-directory-group" key={region}>
              <Reveal><h3 className="community-directory-heading">{title}</h3><p>{copy}</p></Reveal>
              <div className="future-topic-list">
                {communitiesByRegion[region].map((community, index) => (
                  <Reveal key={community.path}>
                    <Link to={community.path} className="future-topic">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <img src={community.thumbnail || community.hero} alt={community.heroAlt || `${community.name}, Oregon`} style={{ objectPosition: community.position }} loading="lazy" width="600" height="400" />
                      <div><h3>{community.name} Real Estate Guide</h3><p>{community.answer}</p></div><ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <p className="directory-photo-credit">Redmond photo: <a href="https://commons.wikimedia.org/wiki/File:Redmond_-_DPLA_-_a4af9df0ef80067ab7f8c4fce840f91a.jpg">Gary Halvorson, Oregon State Archives</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Seal Rock photo: <a href="https://commons.wikimedia.org/wiki/File:Seal_Rock_and_beach_-_Seal_Rock_SRS_Oregon.jpg">Ian Poellet</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Images resized and cropped.</p>
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
