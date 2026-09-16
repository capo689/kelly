import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/siteData'

export default function Contact() {
  return (
    <PageTransition>
      <Hero eyebrow="Contact" title="Let’s Talk About Your Oregon Real Estate Goals" copy="Whether you are considering Central Oregon, the Central Oregon Coast, or both, I am here when you are ready." image="/media/IMG_1089.webp" position="center 66%" compact />
      <section className="section contact-page">
        <div className="wrap contact-layout">
          <Reveal className="contact-details">
            <div className="section-kicker">Start the conversation</div>
            <h2>Call, email, or send a message.</h2>
            <p>Tell me what you are considering and where you would like to begin.</p>
            <div className="contact-methods">
              <a href={contact.phoneHref}><Phone /><span><small>Phone</small>{contact.phone}</span><ArrowUpRight /></a>
              <a href={contact.emailHref}><Mail /><span><small>Email</small>{contact.email}</span><ArrowUpRight /></a>
              <div><MapPin /><span><small>Serving</small>Central Oregon and the Central Oregon Coast</span></div>
            </div>
          </Reveal>
          <Reveal className="contact-form-panel" direction="right"><ContactForm /></Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
