import { Heart, Shield, Trees } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

export default function About() {
  return (
    <PageTransition>
      <Hero eyebrow="Meet Kelly Miller" title="Oregon Is Home" copy="Native Oregonian. Central Oregon and Central Oregon Coast real estate professional. Former firefighter and EMT." image="/media/KellyM-PhotosxKristin-1.webp" position="center 34%" primary={{ label: 'Start a Conversation', to: '/contact' }} referenceSpacing compact />

      <section className="section about-story">
        <div className="wrap grid-2 about-lead">
          <Reveal>
            <div className="section-kicker">Rooted here</div>
            <h2>A life shaped by Oregon.</h2>
            <p>A native Oregonian, I grew up in Ashland with a family home in Sisters. Today, I divide my time between Central Oregon and the Central Oregon Coast with my two dogs, Kiva and Xoco.</p>
            <p>I am drawn to the unique lifestyle Oregon offers, from the mountains and forests of the Cascades to the rugged beauty of the coast. It is a place I am proud to call home and a region I am passionate about helping others discover and enjoy.</p>
          </Reveal>
          <div className="about-portrait-stack">
            <ImageFrame src="/media/EXIT-54_2-f34639a3.webp" alt="Portrait of Kelly Miller" className="about-headshot" position="center top" />
          </div>
        </div>
      </section>

      <section className="section mist about-values">
        <div className="wrap">
          <SectionHeading kicker="The values behind the work" title="Service is more than a promise." />
          <div className="about-value-grid">
            <Reveal className="about-value-card"><Shield /><h3>Prepared</h3><p>My background as a firefighter and EMT taught me to listen, prepare, communicate, and show up when it matters.</p></Reveal>
            <Reveal className="about-value-card" delay={90}><Heart /><h3>Accountable</h3><p>Integrity and accountability guide the relationship, the advice, and every decision made together.</p></Reveal>
            <Reveal className="about-value-card" delay={180}><Trees /><h3>Connected</h3><p>I know the appeal of these regions because I live it, from the trails of the Cascades to beachcombing along the coast.</p></Reveal>
          </div>
          <ImageFrame src="/media/fire_training_group_pic.webp" alt="Kelly with a firefighter training group" className="firefighter-photo" position="center 35%" caption="Service first" />
        </div>
      </section>

      <section className="section about-regions">
        <div className="wrap grid-2">
          <ImageFrame src="/media/IMG_1895.webp" alt="Cascade mountains in Oregon" />
          <Reveal direction="right">
            <div className="section-kicker">Cascades to Coast</div>
            <h2>Two regions. One deeply personal connection.</h2>
            <p>I specialize in real estate throughout Bend, Tumalo, Sisters, Black Butte Ranch, and Camp Sherman, as well as Newport, Yachats, Waldport, and Seal Rock. From mountain retreats and high-desert homes to coastal getaways and investment properties, I understand the unique appeal of these communities.</p>
          </Reveal>
        </div>
      </section>

      <section className="about-dogs">
        <div className="about-dogs-grid">
          <ImageFrame src="/media/IMG_0417.webp" alt="Kiva and Xoco on an Oregon trail" preserveSubject />
          <ImageFrame src="/media/IMG_2524.webp" alt="Rocky beach on the Oregon Coast" />
          <ImageFrame src="/media/KellyM-PhotosxKristin-3.webp" alt="Kelly holding her dog Kiva" position="center 25%" />
        </div>
        <Reveal className="about-dogs-copy">
          <div className="section-kicker">Off the clock</div>
          <h2>Find me outside.</h2>
          <p>When I am not working, you will likely find me exploring Oregon with Kiva and Xoco, hiking the Cascades, wandering the trails, or beachcombing along the coast.</p>
        </Reveal>
      </section>

      <CTASection title="Mountains. Ocean. Oregon." copy="Let’s find the Oregon property that fits your life and your vision." />
    </PageTransition>
  )
}
