# Website form delivery

Contact and Book an Appointment share `ContactForm` and submit to the free
FormSubmit service. Recipient: `kellymiller.realestate@gmail.com`.
No paid Resend plan, API key, Vercel environment variable, or DNS change is used.

The subjects distinguish website inquiries and appointment requests. Emails
include the visitor's name, email, phone, interest, region and message. The
visitor's email supplies the reply address. FormSubmit sends the notification
using its own mail service; it does not authenticate Kelly's domain as a sender.

## Activated address — keep this stable

Kelly’s September 17 confirmation shows this exact activated form address:
`https://www.kellymillerrealestate.com/`.

Both AJAX and native HTML submissions must send that value as `_url`.
FormSubmit treated `/contact` and `/book-appointment` as different form addresses
and rejected those submissions even though the root address was activated.
Keep the individual page in `source_page`, and distinguish the forms by subject
and `form`. `src/data/formDelivery.js` is the shared configuration.

Regression checks: `node --test scripts/form-delivery.test.mjs`.

## Activation and verification

FormSubmit requires the recipient to click its activation email after the first
submission. Integration is not verified as delivering until that activation is
complete and a real test reaches Kelly's inbox. Check Spam if the activation
message is not visible. Never report a local or simulated submit as delivery.

## Behavior

September 19 delivery follow-up: Adam confirmed Kelly received the September 17
test, so activation and at least one inbox delivery are confirmed. Kelly later
reported missing newer submissions despite a success message. Do not repeat
activation or interpret provider acceptance as proof of inbox placement.

Each JavaScript submission now has a unique reference in its email subject,
message body and visitor confirmation, plus the visitor name in the subject.
This avoids reusing an identical subject for every inquiry and makes missing
messages searchable. A populated honeypot is caught before transmission with a
visible retry message instead of allowing the provider's documented silent
discard. These are defensive corrections, not proof of the cause of Kelly's
missing messages. Check Gmail Spam/All Mail and provider records when necessary.

Required name, valid email and message; field length limits; hidden spam field;
disabled fields while submitting; retained input on error; visible success or
error; direct email and telephone fallback; no automatic retries on uncertain
responses. A native form action supports submission without JavaScript.

The browser posts directly to FormSubmit's AJAX endpoint. No visitor data is
stored by the site itself. No custom server rate limit or provider idempotency
is claimed. Provider filtering and the hidden field offer basic spam protection.

Run `npm run lint` and `npm run build`. Check Contact and Book an Appointment
in the browser and verify one real submission from each after activation.

References: https://formsubmit.co/ and https://formsubmit.co/ajax-documentation.
