# Website form delivery

Contact and Book an Appointment share `ContactForm` and submit to the free
FormSubmit service. Recipient: `kellymiller.realestate@gmail.com`.
No paid Resend plan, API key, Vercel environment variable, or DNS change is used.

The subjects distinguish website inquiries and appointment requests. Emails
include the visitor's name, email, phone, interest, region and message. The
visitor's email supplies the reply address. FormSubmit sends the notification
using its own mail service; it does not authenticate Kelly's domain as a sender.

## Activation and verification

FormSubmit requires the recipient to click its activation email after the first
submission. Integration is not verified as delivering until that activation is
complete and a real test reaches Kelly's inbox. Check Spam if the activation
message is not visible. Never report a local or simulated submit as delivery.

## Behavior

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
