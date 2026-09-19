import { Check, MessageCircle, Sparkles } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

const questions = [
  'How should I prepare my home for the market?',
  'How will we determine an appropriate listing strategy?',
  'How will my property be presented to potential buyers?',
  'What should I expect from listing through closing?',
  'How will we communicate throughout the process?',
]

export default function ListWithMe() {
  return (
    <PageTransition>
      <Hero
        eyebrow="List With Me"
        title="Sell with Dependable Guidance"
        copy="Selling a home is personal. I bring service, integrity, accountability, and a steady focus on protecting your interests throughout the process."
        image="/media/Front_De_Haviland.webp"
        position="center 44%"
        primary={{ label: 'Discuss Your Property', to: '/contact' }}
        compact
      />

      <section className="section seller-story">
        <div className="wrap">
          <SectionHeading kicker="A sale grounded in clear guidance" title="Your home deserves a thoughtful story." copy="From the first conversation to the way your property is introduced, every detail should feel intentional and unmistakably yours." />
          <div className="seller-sequence">
            <Reveal className="seller-step sign-step">
              <div className="seller-step-number">01</div>
              <div className="sign-stage"><img src="/brand/for-sale-horizontal.png" alt="Kelly Miller Cascades to Coast For Sale sign" /></div>
              <h3>Positioned</h3>
              <p>Begin with your goals, your property, and a clear path forward.</p>
            </Reveal>
            <Reveal className="seller-step" delay={100}>
              <div className="seller-step-number">02</div>
              <ImageFrame src="/media/kelly-updates/presented-vanity.webp" alt="Bathroom vanity with blue tile, warm wood cabinetry, and a green plant" position="center 60%" />
              <h3>Presented</h3>
              <p>Show the home with care, context, and a strong sense of place.</p>
            </Reveal>
            <Reveal className="seller-step coming-soon" delay={200}>
              <div className="seller-step-number">03</div>
              <div className="coming-soon-image"><img src="/media/kelly-updates/next-home-exterior.webp" alt="Home exterior framed by leafy trees" loading="lazy" /><span>Your home next</span></div>
              <h3>Next</h3>
              <p>This could be your home going on the market next.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="wrap grid-2 seller-region-grid">
          <ImageFrame src="/media/BTGooseCreek2.webp" alt="Central Oregon home" position="center" />
          <Reveal direction="right">
            <div className="section-kicker">Two regions, local perspective</div>
            <h2>Selling in Central Oregon and on the Central Oregon Coast</h2>
            <p>I work with sellers across Bend, Tumalo, Sisters, Black Butte Ranch, and Camp Sherman, as well as Newport, Yachats, Waldport, and Seal Rock. These communities offer different property types, landscapes, and lifestyles, and I understand the unique appeal of each region.</p>
            <div className="seller-values">
              <span><Sparkles />Service</span>
              <span><Check />Integrity</span>
              <span><MessageCircle />Communication</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section questions-section">
        <div className="wrap asym-grid">
          <Reveal>
            <div className="section-kicker">Questions we will answer together</div>
            <h2>A process that starts by listening.</h2>
            <p>The strongest plan is the one built around your property, your timing, and your definition of a successful move.</p>
          </Reveal>
          <div className="question-list">
            {questions.map((question, index) => (
              <Reveal key={question} className="question-item" delay={index * 60}>
                <span>0{index + 1}</span><p>{question}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="seller-manifesto">
        <div className="wrap">
          <Reveal>
            <div className="section-kicker">The value I bring</div>
            <blockquote>“Service, integrity, and accountability are not marketing words. They are the standard I bring to every client relationship.”</blockquote>
          </Reveal>
        </div>
      </section>

      <CTASection title="Ready to Talk About Your Property?" copy="Let’s start with a conversation about the home, your goals, and what comes next." button="Start the Conversation" />
    </PageTransition>
  )
}
