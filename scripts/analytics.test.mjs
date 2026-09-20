import assert from 'node:assert/strict'
import test from 'node:test'

let serial = 0
async function fixture(hostname = 'www.kellymillerrealestate.com') {
  const scripts = []
  globalThis.window = { location: { hostname } }
  globalThis.document = {
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
  }
  const analytics = await import(`../src/data/analytics.js?test=${serial++}`)
  return { ...analytics, scripts, events: () => (globalThis.window.dataLayer || []).map(entry => [...entry]) }
}

test('loads once on the live domain and keeps advertising features off', async () => {
  const a = await fixture()
  a.initializeAnalytics()
  a.initializeAnalytics()
  assert.equal(a.scripts.length, 1)
  assert.equal(a.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-83HQFEMRXX')
  const config = a.events().find(([command]) => command === 'config')
  assert.equal(config[2].allow_google_signals, false)
  assert.equal(config[2].allow_ad_personalization_signals, false)
  assert.equal(a.events().filter(([command]) => command === 'config').length, 1)
})

test('never loads Google or queues events on preview and local hosts', async () => {
  for (const host of ['localhost', '127.0.0.1', 'kelly-preview.vercel.app']) {
    const a = await fixture(host)
    a.initializeAnalytics()
    a.trackAcceptedInquiry()
    assert.equal(a.scripts.length, 0)
    assert.deepEqual(a.events(), [])
  }
})

test('honors the Google Analytics disable flag', async () => {
  const a = await fixture()
  globalThis.window[`ga-disable-${a.MEASUREMENT_ID}`] = true
  a.initializeAnalytics()
  a.trackAcceptedInquiry()
  assert.equal(a.scripts.length, 0)
  assert.deepEqual(a.events(), [])
})

test('records form type and contact method without copying personal data', async () => {
  const a = await fixture()
  a.initializeAnalytics()
  a.trackAcceptedInquiry(false)
  a.trackAcceptedInquiry(true)
  const click = href => ({ target: { closest: () => ({ getAttribute: () => href }) } })
  a.trackContactClick(click('mailto:private@example.com?body=private-message'))
  a.trackContactClick(click('tel:+15555555555'))
  a.trackContactClick(click('/about-me'))
  assert.deepEqual(a.events().filter(([command]) => command === 'event'), [
    ['event', 'generate_lead', { send_to: a.MEASUREMENT_ID, form_type: 'contact' }],
    ['event', 'generate_lead', { send_to: a.MEASUREMENT_ID, form_type: 'appointment' }],
    ['event', 'contact_click', { send_to: a.MEASUREMENT_ID, contact_method: 'email' }],
    ['event', 'contact_click', { send_to: a.MEASUREMENT_ID, contact_method: 'phone' }],
  ])
})

test('analytics failure never propagates into form delivery or navigation', async () => {
  const a = await fixture()
  a.initializeAnalytics()
  globalThis.window.gtag = () => { throw new Error('Blocked analytics') }
  assert.doesNotThrow(() => a.trackAcceptedInquiry())
  assert.doesNotThrow(() => a.trackContactClick({ target: null }))
})
