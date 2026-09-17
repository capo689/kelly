import test from 'node:test'
import assert from 'node:assert/strict'
import { formDeliveryFields, assertSubmissionAccepted } from '../src/data/formDelivery.js'

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
