import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/siteData'
import { FORM_ENDPOINT, FORM_AJAX_ENDPOINT, formDeliveryFields, submissionPayload, assertSubmissionAccepted } from '../data/formDelivery'

export default function ContactForm({ appointment = false }) {
  const noteId = useId()
  const pending = useRef(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [reference, setReference] = useState('')

  async function submit(event) {
    event.preventDefault()
    if (pending.current) return
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    pending.current = true
    setStatus('sending')
    setError('')
    try {
      const submissionReference = `KM-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
      const payload = submissionPayload(fields, appointment, submissionReference)
      const response = await fetch(FORM_AJAX_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.json()
      assertSubmissionAccepted(response.ok, result)
      form.reset()
      setReference(submissionReference)
      setStatus('success')
    } catch (err) {
      if (err.message === 'Spam field filled') {
        form.elements.namedItem('_honey').value = ''
      }
      setError(err.message === 'Spam field filled' ? 'An automatic field-fill prevented sending. Your message is still here; please press Send again.' : err.message === 'Activation required' ? 'Online message delivery is temporarily unavailable. Please contact Kelly directly.' : err.name === 'TimeoutError' || err instanceof TypeError ? 'We couldn’t confirm your message was sent. Please check your connection and try again, or email Kelly directly.' : 'Your message could not be sent. Please try again or email Kelly directly.')
      setStatus('error')
    } finally {
      pending.current = false
    }
  }

  return (
    <form className="contact-form" method="post" action={FORM_ENDPOINT} onSubmit={submit} aria-busy={status === 'sending'} onChange={() => { if (status === 'success') setStatus('idle') }}>
      {Object.entries(formDeliveryFields(appointment)).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)}
      <fieldset className="contact-fields" disabled={status === 'sending'}>
        <legend className="sr-only">{appointment ? 'Appointment request' : 'Contact Kelly'}</legend>
        <div className="field-grid">
          <label><span>Name *</span><input type="text" name="name" autoComplete="name" placeholder="Your name" maxLength={120} required /></label>
          <label><span>Email *</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
          <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" placeholder="(000) 000-0000" maxLength={40} /></label>
          <label><span>I’m interested in</span><select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Buying</option><option>Selling</option><option>Both</option></select></label>
          <label className="full"><span>Preferred community or region</span><input type="text" name="region" placeholder="Central Oregon, the Coast, or a specific community" maxLength={200} /></label>
          <label className="full"><span>{appointment ? 'What would you like to discuss? *' : 'Message *'}</span><textarea name="message" rows="6" placeholder="Tell Kelly what you have in mind" maxLength={5000} required /></label>
        </div>
        <div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="_honey" type="text" tabIndex={-1} autoComplete="off" /></label></div>
        <button type="submit" className="form-button" aria-describedby={noteId}>{status === 'sending' ? 'Sending…' : appointment ? 'Send Request' : 'Send Message'}<ArrowUpRight aria-hidden="true" /></button>
      </fieldset>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {status === 'success' && <p className="form-success" role="status">{appointment ? 'Thank you—your appointment request has been submitted.' : 'Thank you—your message has been submitted.'} Reference: {reference}. If you don’t hear back, please <a href={contact.emailHref}>email Kelly directly</a>.</p>}
        {status === 'error' && <p className="form-error" role="alert">{error} <a href={contact.emailHref}>Email Kelly</a> or <a href={contact.phoneHref}>call {contact.phone}</a>.</p>}
      </div>
      <p className="form-note" id={noteId}>* Required fields. FormSubmit processes your inquiry and emails it to Kelly. Please don’t include financial documents or sensitive personal information. <Link to="/privacy">Privacy Notice</Link>.</p>
    </form>
  )
}
