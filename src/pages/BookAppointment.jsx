import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'

export default function BookAppointment() {
  return (
    <PageTransition>
      <Hero eyebrow="Book an Appointment" title="Let’s Chat" copy="Tell me a little about what you are considering, and I will follow up to continue the conversation." image="/media/KellyM-PhotosxKristin-2.webp" position="center 35%" compact />
      <section className="section appointment-page">
        <div className="wrap appointment-grid">
          <Reveal className="appointment-aside">
            <div className="section-kicker">A simple place to begin</div>
            <h2>What would you like your next move to make possible?</h2>
            <p>Share what you know, even if it is only a place, a feeling, or a property you keep thinking about.</p>
            <div className="appointment-quote">“Your search can start with a conversation.”</div>
          </Reveal>
          <Reveal className="contact-form-panel" direction="right"><ContactForm appointment /></Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
