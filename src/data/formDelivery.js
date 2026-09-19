// FormSubmit keys activation to this URL. Kelly activated this exact root URL.
// Keep the individual page in source_page rather than changing _url per form.
export const ACTIVATED_FORM_URL = 'https://www.kellymillerrealestate.com/'
export const FORM_ENDPOINT = 'https://formsubmit.co/kellymiller.realestate@gmail.com'
export const FORM_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/kellymiller.realestate@gmail.com'

export function formDeliveryFields(appointment = false) {
  return {
    _url: ACTIVATED_FORM_URL,
    _subject: appointment ? 'Kelly Miller — Appointment request' : 'Kelly Miller — Website inquiry',
    _template: 'table',
    form: appointment ? 'Book an Appointment' : 'Contact',
    source_page: `${ACTIVATED_FORM_URL}${appointment ? 'book-appointment' : 'contact'}`,
  }
}

export function submissionPayload(fields, appointment, reference) {
  // Never let the provider silently discard an autofilled honeypot as a success.
  if (String(fields._honey || '').trim()) throw new Error('Spam field filled')
  const delivery = formDeliveryFields(appointment)
  const name = String(fields.name || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 120)
  return {
    ...fields,
    ...delivery,
    _subject: `${delivery._subject} — ${name} [${reference}]`,
    _replyto: String(fields.email || '').trim(),
    submission_reference: reference,
  }
}

export function assertSubmissionAccepted(responseOk, result) {
  if (responseOk && [true, 'true'].includes(result?.success)) return
  if (/needs? activation|activation required|activate (?:your|this|the) form/i.test(result?.message || '')) {
    throw new Error('Activation required')
  }
  throw new Error('Send not confirmed')
}
