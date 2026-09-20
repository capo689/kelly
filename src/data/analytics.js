export const MEASUREMENT_ID = 'G-83HQFEMRXX'
const LIVE_HOSTS = new Set(['www.kellymillerrealestate.com', 'kellymillerrealestate.com'])
let initialized = false

function enabled() {
  return typeof window !== 'undefined' && LIVE_HOSTS.has(window.location.hostname)
    && window[`ga-disable-${MEASUREMENT_ID}`] !== true
}

export function initializeAnalytics() {
  if (initialized || !enabled()) return
  try {
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    // This stream has Enhanced Measurement history page views enabled. Let it
    // handle SPA navigation; adding a second route listener would double-count.
    window.gtag('config', MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)
    initialized = true
  } catch {
    // Analytics must never prevent navigation or form delivery.
  }
}

function track(name, parameters) {
  if (!enabled() || !initialized) return
  try {
    window.gtag('event', name, { send_to: MEASUREMENT_ID, ...parameters })
  } catch {
    // A blocked analytics tag must not turn an accepted form into an error.
  }
}

export function trackContactClick(event) {
  const href = event.target?.closest?.('a[href]')?.getAttribute('href') || ''
  const method = href.startsWith('tel:') ? 'phone' : href.startsWith('mailto:') ? 'email' : null
  if (method) track('contact_click', { contact_method: method })
}

export function trackAcceptedInquiry(appointment = false) {
  // No form fields, customer identifiers, or submission references go to GA.
  // Provider acceptance is not a claim that email reached Kelly's inbox.
  track('generate_lead', { form_type: appointment ? 'appointment' : 'contact' })
}
