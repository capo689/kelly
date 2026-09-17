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

export function assertSubmissionAccepted(responseOk, result) {
  if (responseOk && [true, 'true'].includes(result?.success)) return
  if (/needs? activation|activation required|activate (?:your|this|the) form/i.test(result?.message || '')) {
    throw new Error('Activation required')
  }
  throw new Error('Send not confirmed')
}
