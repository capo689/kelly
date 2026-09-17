# Policy implementation notes — September 17, 2026

The initial drafts were replaced by concise website pages after the user confirmed **Fathom** as the brokerage and an **email-only inquiry process**. Kelly’s public professional profile identifies **Fathom Realty Oregon, LLC**, matching her supplied license number and phone.

Pages: `/privacy`, `/terms`, `/accessibility` (source: `src/pages/Policy.jsx`). All footer menus link to these pages; both forms link to privacy.

The privacy notice covers the fields people choose to submit, delivery through FormSubmit to Kelly’s Gmail, Vercel hosting, FormSubmit's documented 30-day archive, and the separate email copies. It does not invent a deadline for deleting email. It states there is no separate website customer database or automatic mailing-list enrollment. No advertising/analytics integrations were found in the application.

Website terms explain that inquiries do not create representation or confirm appointments, images are illustrative unless expressly presented as listings, changing property facts need verification, and intellectual-property licenses still apply. No arbitration, payment, marketing-consent or liability-waiver provisions were introduced.

The accessibility statement identifies WCAG 2.2 AA as an improvement target, acknowledges that full conformance is not certified, and offers email/telephone assistance.

## Ongoing business review

- Principal broker should review the final brokerage branding and informational policy wording.
- If a CRM, assistant, newsletter, advertising pixel, analytics tool or referral workflow is added, update the notice before relying on it.
- Determine any business-specific retention obligations and applicable statutory privacy rights with the brokerage; no blanket legal exemption is claimed.
- Respond to privacy and accessibility requests received through the contact channels. Do not promise a response deadline that the business has not adopted.

This file records implementation decisions. It is not a legal-compliance certification.
