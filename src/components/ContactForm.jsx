import { ArrowUpRight } from 'lucide-react'

export default function ContactForm({ appointment = false }) {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="field-grid">
        <label><span>Name</span><input type="text" name="name" placeholder="Your name" /></label>
        <label><span>Email</span><input type="email" name="email" placeholder="you@example.com" /></label>
        <label><span>Phone</span><input type="tel" name="phone" placeholder="(000) 000-0000" /></label>
        <label><span>I’m interested in</span><select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Buying</option><option>Selling</option><option>Both</option></select></label>
        <label className="full"><span>Preferred community or region</span><input type="text" name="region" placeholder="Central Oregon, the Coast, or a specific community" /></label>
        <label className="full"><span>{appointment ? 'What would you like to discuss?' : 'Message'}</span><textarea name="message" rows="6" placeholder="Tell Kelly what you have in mind" /></label>
      </div>
      <button type="button" className="form-button">{appointment ? 'Send Request' : 'Send Message'}<ArrowUpRight /></button>
    </form>
  )
}
