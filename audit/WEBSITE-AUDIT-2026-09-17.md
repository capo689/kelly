# Kelly Miller website audit — September 17, 2026

**Status: technical corrections and policy pages verified; both live forms now return provider-confirmed success after correcting their form address. Kelly’s inbox receipt is not independently verified. This is not an ADA/WCAG conformance certification or a legal opinion.**

Site: https://www.kellymillerrealestate.com

## Priority findings

| Priority | Finding | Action / owner |
|---|---|---|
| Resolved; inbox check outstanding | Kelly had correctly activated the root URL. The code incorrectly sent page-specific `_url` values, which the provider treated as different forms. | Both forms now reuse the activated root URL. Live Contact and Appointment tests returned success. Kelly can verify receipt of KELLY-CONTACT-FIX-0917 and KELLY-APPOINTMENT-FIX-0917 in her inbox. |
| Resolved / review | User confirmed Fathom is the brokerage; Kelly’s public professional profile identifies Fathom Realty Oregon, LLC. | Added the full name to the header and policy pages. Principal broker should review the final advertising/policy wording as part of normal oversight. |
| Resolved | Privacy, website terms and accessibility pages were missing. | Added all three, footer links and form privacy links. Notice reflects the confirmed email-only inquiry process and names the delivery/hosting/email providers. |
| High | Full accessibility conformance remains unverified, especially contrast over imagery and assistive-technology use. | Complete screen-reader, Safari/iOS, zoom/text-spacing and image-overlay contrast review. Automated results below are a useful gate, not certification. |
| Medium | Testimonials is unfinished. | Kept honest, removed from sitemap, and marked noindex. Add only approved, attributable client testimonials; remove noindex after substantive content is available. |
| Medium | Services says “buyer agents and seller agents,” while the rest of the website addresses buyers and sellers. | Kept the user's explicitly requested wording. Kelly should confirm whether this is a referral-agent service or a consumer service. Align the headline and metadata after that decision. |
| Medium | Search visibility and field performance are unverified. | Verify Google Search Console/Bing Webmaster Tools and business-profile ownership, submit sitemap, inspect key URLs, and collect real mobile Core Web Vitals. No ranking or AI-citation guarantee. |

## Checks completed and corrections

### Functional and code

- Crawled all 24 published routes: HTTP 200. An invented URL correctly returns 404. Robots, sitemap, and llms.txt respond.
- Production build and ESLint pass. npm audit reports **0 known vulnerabilities** at the time of this audit; this is not a penetration test.
- Built-site check covers **27 routes and 1,232 local references**, including links, image sources, posters, and fragments: no missing targets. Each route has one H1, one canonical and description, unique title/description, and parseable JSON-LD. Rerun with `python3 scripts/check-site.py` after `npm run build`.
- Hero headings and scroll-reveal content remain visible in prerendered HTML without JavaScript. Removed an opacity-zero hero initialization that hid primary content when scripts failed.
- Added clickjacking protection, MIME sniffing protection, a referrer policy, restricted device permissions, and limited CSP directives. The CSP is hardening, not a complete script allowlist.
- No analytics, advertising pixels, application cookies or browser-storage writes were found in the reviewed application source. This does not establish that the hosting/form providers retain no logs or data.

### Forms — corrected after the initial audit

**Update:** Kelly supplied a screenshot confirming activation for `https://www.kellymillerrealestate.com/`. Her activation was correct. The code’s per-page `_url` values caused the rejection. Commit `10c79ab` gives both forms the same activated root URL, with a separate `source_page`. Both real production-browser submissions then returned success and cleared the submitted fields. Three regression tests pass, including preserving that shared activation address and rejecting unsuccessful responses. No new activation, paid service or DNS change was necessary. Inbox receipt remains for Kelly to confirm.

The following records the earlier failed tests before that correction:

Live tests covered Contact and Book Appointment with clearly marked test submissions. Empty required fields and invalid email were rejected by native browser validation. Sending disables the fields/button; provider failure preserves the entered message and offers direct email/phone contact. Both actual submissions ended in an error, not a success confirmation.

A diagnostic request using the website's Origin/Referer received HTTP 200 with `success: "false"` and an activation-required message. **HTTP 200 does not mean the inquiry was delivered.** The provider said it sent another activation email. No inbox access or delivery receipt was available. The subsequent address correction and successful live tests are recorded above; inbox delivery still requires recipient confirmation.

Corrected appointment source-page identification and added a visitor-friendly activation error. The destination is **kellymiller.realestate@gmail.com** for both forms. This free FormSubmit connection does not send through Kelly's domain or Resend. Do not add domain SPF/DKIM records for a service the site does not use. The site has no local lead database; do not assume failed submissions are recoverable.

### Accessibility and design

- Ran axe-core 4.13.0 WCAG A/AA (2.0, 2.1, 2.2) and best-practice checks on **27 routes at 1440px and 390px: 54 completed checks, zero detected violations, zero horizontal overflow, zero scan errors** after corrections.
- Baseline desktop scan found 25 rule occurrences across pages, affecting 686 nodes (repeated shared footer issues count repeatedly). Corrected gold-on-light and blue text, footer contrast, placeholders, and breadcrumb target spacing.
- Added a keyboard skip link, visible focus treatment, mobile-menu focus containment, Escape dismissal/return, inert background content, and route-content focus handling.
- Manually checked skip-link activation, menu Tab/Shift-Tab wrap, Escape, page navigation, hero video pause, mobile poster behavior, and an actual mobile video playing with native controls. Tab navigation proceeds into the new page's content.
- Removed perpetual photo drift and the moving text marquee. Reduced-motion styles and Framer Motion preference handling are present; hero autoplay already requires no reduced-motion preference and desktop/fine-pointer eligibility.
- Additional manual checks at 320px and 740×390 landscape caught and corrected horizontal reveal offsets, form focus obscured by the fixed header, and a filtered-header bug that clipped the mobile menu. Final measurements place the required name field below the header and the last menu link inside the viewport. No runtime errors were observed in the local test session.
- Replaced fake video cards with the existing real, user-initiated films. Descriptive text identifies both films as silent. Background footage has pause/play controls.
- Changed the sample property's “Coming Soon” label to “Your home next” and alt text to “Example home exterior,” avoiding an implication of an active listing.

**Accessibility limits:** axe marks contrast over background photos, gradients and overlapping decorative elements as incomplete/manual-review items. Those entries remain in the report; zero detected violations does not mean all contrast passed. The harness exposes already-rendered scroll-reveal content and disables reveal transitions to inspect below-fold sections. It tests the stable rendered state, not every animation frame. Full screen-reader journeys, every operating system/browser, 200% text resizing, 400% zoom, WCAG text-spacing overrides, and every dynamic state were not certified. Header identity text has been enlarged on mobile, with the brokerage added; review it with the principal broker on real devices.

### SEO / AEO and copy

- Corrected duplicate/stale structured data: prerendered and client schemas now share cleanup markers. Browser navigation showed 3 home schemas and 4 on Find a Home, with the canonical changing to the correct route.
- Added article-specific social metadata and author/headline schema; removed unsupported price-range data and the homepage's one-item breadcrumb schema.
- Testimonials stays renderable but is excluded from the 26-URL indexable sitemap and is noindex. The other 26 pages remain indexable.
- Community pages have useful place-specific introductions, FAQs, related links, and descriptive imagery. Preserve the direct-answer structure; add dated, sourced detail where discussing changing matters such as rentals, insurance, zoning, and market conditions.
- Avoid invented review ratings, sales statistics, listing availability, investment returns or legal conclusions. Confirm photo/headshot permissions and REALTOR®/brokerage branding with Kelly. Existing third-party photo credits and license links were retained.
- The current website is a community/lead-generation site, not a live MLS search portal. “Find a Home” leads to community guidance and contact; make that expectation clear in future search functionality.
- llms.txt is present but does not establish AI visibility. Google's AI search features use the same core SEO requirements; there is no special required AI schema or AI text file. [Google guidance](https://developers.google.com/search/docs/appearance/ai-features)

### Performance and privacy by design

- Self-hosted fonts replace external Google Fonts calls; included SIL license notices.
- Build output: approximately 157 KB gzip JavaScript across the application/React/motion chunks and 9.7 KB gzip CSS, before fonts/media. This is an asset-size measurement, not a Lighthouse or field speed score.
- Media inspection verified all eight MP4 files parse correctly and contain no audio streams.
- Hero video uses posters on mobile/reduced-motion/data-saver paths; feature films load after a user chooses to play and use a 720p source on mobile. Assets and fonts resolve locally.
- Real-device slow-network performance, field LCP/INP/CLS, and a complete external-provider tracking inventory remain to be measured. Do not advertise a performance score that was not measured.

## ADA, WCAG, GDPR and Oregon requirements

**ADA and WCAG:** A real-estate business cannot assume its website is outside accessibility obligations. DOJ identifies web accessibility as relevant to businesses open to the public. WCAG 2.2 AA is an appropriate engineering target; it is not itself a certificate of ADA compliance. The government's Title II technical-rule deadlines are not a blanket deadline for private businesses. [DOJ web guidance](https://www.ada.gov/resources/web-guidance/) · [WCAG 2.2](https://www.w3.org/TR/wcag/)

**GDPR:** Selling Oregon homes does not by itself determine territorial scope. A non-EU business may be covered if it targets people in the EU with goods/services or monitors their behavior there; mere worldwide website accessibility is not generally sufficient. No EU-targeting evidence was identified in the reviewed website, but advertising, CRM and tracking practices outside this repository remain unknown. Confirm those facts before claiming an exemption. [EDPB territorial-scope guidance](https://www.edpb.europa.eu/documents/guideline/guidelines-32018-on-the-territorial-scope-of-the-gdpr-article-3-version-adopted_en)

**Oregon privacy:** OCPA generally applies at 100,000 consumers annually, or 25,000 consumers plus more than 25% of annual gross revenue from personal-data sales, subject to statutory definitions/exceptions. The relevant operating business and combined practices matter; a small site alone does not settle coverage. Even if below those thresholds, an accurate privacy notice and sensible handling of inquiries are appropriate. [Oregon DOJ business FAQs](https://www.doj.state.or.us/consumer-protection/for-businesses/privacy-law-faqs-for-businesses/)

**Real-estate advertising:** The registered business name must be immediately noticeable, and the home page must identify the licensee and registered business. Footer branding needs review against the actual affiliation, with Fathom now confirmed by the user. [Oregon adopted advertising rule, OAR 863-015-0125](https://www.oregon.gov/rea/Documents/2025-10-09-Permanent-Administrative-Rules-HB-3137.pdf)

**Privacy / terms:** Privacy disclosures must match actual processing and retention. FormSubmit documents a 30-day submission archive, so “we never store your information” would be misleading. Website terms should distinguish general information from representation, appointments from confirmed bookings, and examples from current listings. Do not publish invented retention periods, response guarantees, arbitration terms, liability waivers or an unverified legal entity. [FormSubmit documentation](https://formsubmit.co/documentation) · [Provider privacy policy](https://formsubmit.co/privacy.pdf)

## Evidence files

- `baseline-accessibility.json` — desktop before corrections.
- `after-accessibility.json` — desktop/mobile after corrections; retains incomplete/manual checks.
- `live-http.json` — production route and header checks before this deployment.
- `video-checks.json` — video codecs, dimensions, durations and audio-stream inspection.
- `build-checks.json` — built-site links/assets/metadata verification.
- `POLICY-DRAFTS.md` — policy implementation notes and the remaining broker-review considerations.

## User clarification and policy implementation

The user confirmed Fathom as the brokerage and that form inquiries go only to Kelly by email, with no separate customer-data workflow. The privacy notice reflects that scope, explains the FormSubmit archive and Gmail copies, and avoids inventing a retention deadline or marketing consent. Website terms are informational; they do not introduce arbitration, fees or liability waivers. The accessibility statement describes the improvement target without claiming certified conformance. Kelly’s [public professional profile](https://www.realtor.com/realestateagents/623857a3beae04ba78c6e1ca) corroborates the full brokerage name and license.
