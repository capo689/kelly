import { ArrowUpRight, Home as HomeIcon, KeyRound, Map, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImageFrame from '../components/ImageFrame'
import CTASection from '../components/CTASection'

const services = [
  { icon: KeyRound, label: 'Buying', title: 'Find the right fit', copy: 'Explore communities and properties that match your goals, your timing, and the life you want to build.', image: '/media/LP2.webp', to: '/find-a-home' },
  { icon: HomeIcon, label: 'Selling', title: 'Move with confidence', copy: 'Dependable guidance grounded in service, integrity, accountability, and your best interests.', image: '/media/Front_De_Haviland.webp', to: '/list-with-me' },
]

export default function Services() {
  return (
    <PageTransition>
      <Hero eyebrow="Services" title="Guidance Across Two Remarkable Regions" copy="Local insight, a genuine love for the Oregon lifestyle, and dependable guidance for buyer agents and seller agents." image="/media/IMG_8358.webp" position="center 44%" primary={{ label: 'Start a Conversation', to: '/contact' }} compact />

      <section className="section services-intro">
        <div className="wrap">
          <SectionHeading kicker="Real estate, made personal" title="A clear process. A trusted connection." copy="Your goals lead the conversation. Kelly brings regional perspective and service-driven values to help you move forward with clarity." />
          <div className="service-feature-grid">
            {services.map(({ icon: Icon, ...service }, index) => (
              <Reveal key={service.label} className="service-feature" delay={index * 100}>
                <ImageFrame src={service.image} alt={`${service.label}: ${service.title}`} />
                <div className="service-feature-copy">
                  <span className="service-icon"><Icon /></span>
                  <div className="section-kicker">{service.label}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Link className="text-link" to={service.to}>Explore <ArrowUpRight size={16} /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section deep service-principles">
        <div className="wrap grid-4">
          {[
            ['01', Map, 'Regional Perspective', 'A working understanding of the communities, landscapes, and lifestyles across both regions.'],
            ['02', ShieldCheck, 'Protected Interests', 'A steady commitment to your priorities from the first conversation through the transaction.'],
            ['03', KeyRound, 'Personal Guidance', 'Advice shaped around your property, your questions, and the way you want to move.'],
            ['04', HomeIcon, 'Oregon Connection', 'A genuine relationship to the places you are considering and the life they can offer.'],
          ].map(([number, Icon, title, copy], index) => (
            <Reveal key={title} className="principle" delay={index * 80}>
              <span>{number}</span><Icon /><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Your Oregon Real Estate Goals Matter" copy="Whether your next move leads toward the mountains or the ocean, let’s talk about what you have in mind." />
    </PageTransition>
  )
}
