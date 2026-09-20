# Google Analytics

Connected September 20, 2026 with the user-provided GA4 measurement ID `G-83HQFEMRXX`.

- Google tag loads only on `kellymillerrealestate.com` and `www.kellymillerrealestate.com`. Localhost and Vercel preview traffic is excluded.
- Standard Google tag configuration sends the initial page view. The stream’s public tag configuration was checked and has Enhanced Measurement history page views enabled. It handles React Router navigation; do not add manual route page views without first disabling that stream setting.
- `contact_click`: `contact_method` is `phone` or `email`.
- `generate_lead`: emitted only after FormSubmit explicitly accepts a contact or appointment inquiry. `form_type` distinguishes `contact` from `appointment`. This indicates provider acceptance, not inbox delivery. Google’s automatically measured `form_submit` event can represent an attempt; use `generate_lead` to evaluate accepted requests.
- Custom events never receive form contents, visitor contact details, or submission references.
- Google Signals and advertising personalization are disabled in tag configuration. The standard Google Analytics disable flag is honored.
- Analytics exceptions do not interrupt forms or navigation.
- Privacy Notice updated to disclose Google Analytics, cookies, and the Google opt-out add-on.

Validation: `npm run lint`, `node --test scripts/analytics.test.mjs scripts/form-delivery.test.mjs`, and `npm run build`.
