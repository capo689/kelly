import { Quote } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

const principles = [
  ['Listen first', 'The relationship begins with your goals, questions, and definition of a successful move.'],
  ['Stay accountable', 'Clear communication and dependable follow-through matter through every stage.'],
  ['Protect the relationship', 'The goal is not a transaction that merely closes. It is guidance you are glad you trusted.'],
]

export default function Testimonials() {
  return (
    <PageTransition>
      <Hero eyebrow="Testimonials" title="What My Clients Say" copy="Client stories are personal. Verified testimonials will appear here with each client’s permission." image="/media/IMG_1089.webp" position="center 62%" compact />
      <section className="section testimonials-hold">
        <div className="wrap">
          <Reveal className="testimonial-intro">
            <Quote />
            <div className="section-kicker">Stories worth sharing correctly</div>
            <h2>This page is being prepared with care.</h2>
            <p>Rather than fill this space with generic claims, Kelly’s verified client experiences will be added once the wording and attribution are approved.</p>
          </Reveal>
          <div className="grid-3 principles-grid">
            {principles.map(([title, copy], index) => (
              <Reveal className="testimonial-principle" key={title} delay={index * 90}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Your Oregon Story Starts Here" copy="Let’s talk about what you are considering and where you would like to begin." />
    </PageTransition>
  )
}
