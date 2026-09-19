import test from 'node:test'
import assert from 'node:assert/strict'
import { formDeliveryFields, submissionPayload, assertSubmissionAccepted } from '../src/data/formDelivery.js'

test('both forms reuse the URL in Kelly’s activation confirmation', () => {
  for (const appointment of [false, true]) {
    assert.equal(formDeliveryFields(appointment)._url, 'https://www.kellymillerrealestate.com/')
  }
  assert.equal(formDeliveryFields(false).source_page, 'https://www.kellymillerrealestate.com/contact')
  assert.equal(formDeliveryFields(true).source_page, 'https://www.kellymillerrealestate.com/book-appointment')
  assert.notEqual(formDeliveryFields(false)._subject, formDeliveryFields(true)._subject)
})

test('only explicit successful provider responses count as accepted', () => {
  for (const success of [true, 'true']) assert.doesNotThrow(() => assertSubmissionAccepted(true, { success }))
  for (const result of [null, {}, { success: false }, { success: 'false' }]) {
    assert.throws(() => assertSubmissionAccepted(true, result), /Send not confirmed/)
  }
  assert.throws(() => assertSubmissionAccepted(false, { success: true }), /Send not confirmed/)
})

test('an activation rejection remains an error, but success text cannot cause a false rejection', () => {
  assert.throws(() => assertSubmissionAccepted(true, { success: 'false', message: 'This form needs Activation.' }), /Activation required/)
  assert.doesNotThrow(() => assertSubmissionAccepted(true, { success: 'true', message: 'Your activated form has been submitted.' }))
})

test('inquiries are individually identifiable without changing activation or recipient', () => {
  const fields = { name: 'Test\r\nVisitor', email: 'visitor@example.com', message: 'Looking for a home', _honey: '' }
  for (const appointment of [false, true]) {
    const payload = submissionPayload(fields, appointment, 'KM-12345678')
    assert.equal(payload._url, 'https://www.kellymillerrealestate.com/')
    assert.equal(payload._replyto, fields.email)
    assert.equal(payload.message, fields.message)
    assert.equal(payload.submission_reference, 'KM-12345678')
    assert.match(payload._subject, /Test Visitor \[KM-12345678\]$/)
    assert.equal(payload._subject.includes('\n'), false)
    assert.notEqual(payload._subject, submissionPayload(fields, appointment, 'KM-87654321')._subject)
    assert.equal(payload._cc, undefined)
  }
})

test('a populated honeypot cannot reach the provider and produce a false success', () => {
  assert.throws(() => submissionPayload({ _honey: 'autofilled value' }, false, 'KM-12345678'), /Spam field filled/)
  assert.doesNotThrow(() => submissionPayload({ _honey: '' }, false, 'KM-12345678'))
})
