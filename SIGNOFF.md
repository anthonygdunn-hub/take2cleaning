# Take2Cleaning: sign-off before launch

Nothing on this site is invented out of nothing, but a number of values are
**drafted** and a number of claims are **carried over from the Wix site** without
anyone checking them. Both need going through before the site is published.

Two kinds of item:

- **DV — drafted value.** A commercial choice. Sensible defaults are already on the
  site. Change the number, or leave it.
- **UV — unverified.** A statement of fact that only you can confirm. If it is not
  true, it has to come off, not be softened.

Everything lives in `build/data.mjs` unless the row says otherwise.

---

## UV — facts to confirm

| # | Item | On the site as | Where |
| --- | --- | --- | --- |
| 1 | Email address | `hello@take2cleaning.co.uk` (invented, mailbox may not exist) | `site.email` |
| 2 | Domain | `www.take2cleaning.co.uk` — is it registered, and where is DNS? | `site.domain` |
| 3 | Which number is which | 07354 321405 for calls, 07883 715604 for WhatsApp | `site.phone`, `site.whatsapp` |
| 4 | Legal entity | The footer says "Take2Cleaning", no company number. If it is a limited company, the number and registered office have to be shown | `site.legalName` |
| 5 | Insurance | The site says public liability and employers liability are held. No figures are published, deliberately. Confirm both are in force, and decide whether to publish the cover levels | FAQs, about page |
| 6 | DBS checks | "Every member of staff DBS-checked before their first customer visit, certificate shown on request" — said in eight places | throughout |
| 7 | CSCS and IPAF | "Operatives hold CSCS cards and H&S training, IPAF certification among the team" — carried from the Wix site | new build service, about |
| 8 | Local authority work | "We are a trusted provider for local authorities" — carried from the Wix site. If no authority has actually instructed you, this has to go | environmental cleans |
| 9 | "Decades of experience" | Carried from the Wix commercial page. The Wix about page also said 1 year in business. Both cannot stand as written. Decide whether the decades belong to the team rather than the company, and say so | office and commercial |
| 10 | Waste carrier | Environmental cleans says waste goes "through licensed carriers and licensed sites, with transfer notes available on request". Needs an Environment Agency waste carrier registration | environmental cleans |
| 11 | Area coverage | 14 towns are claimed. Confirm you would genuinely travel to all of them, particularly Farnham, Haslemere and Bentley | `areas` |
| 12 | Reviews | The Wix site's only testimonial was Wix's own placeholder text under the name Christopher Davis. It has not been carried over. The reviews section shows an honest empty state until real ones exist | `/reviews/` |
| 13 | Counters | The Wix about page showed 221 clean homes, 4 staff, 26 happy clients, 1 year in business. None are on the new site. Decide whether any are true and worth publishing | not used |
| 14 | Social media | No Facebook or Instagram is linked because none was found. If they exist, add them | `site.socials` |

---

## DV — drafted values to confirm or change

| # | Item | Currently says | Where |
| --- | --- | --- | --- |
| 15 | Opening hours | Monday to Friday 8am to 6pm, Saturday 9am to 2pm | `site.hours` |
| 16 | Reply time | Every enquiry answered the same working day | `site.responsePromise` |
| 17 | Put-it-right window | Domestic: tell us within 48 hours and we return free | FAQs, about |
| 18 | End of tenancy re-clean | Within 72 hours of check-out, if nobody has moved back in | end of tenancy FAQs |
| 19 | Minimum visit | Two hours | domestic FAQs |
| 20 | Cancellation notice | 24 hours, nothing to pay | domestic FAQs |
| 21 | Quote validity | 30 days | `quoteFacts` |
| 22 | Deposits | None on domestic work; contract terms set out in the agreement | `quoteFacts`, FAQs |
| 23 | Payment | Bank transfer on invoice, monthly invoicing for contracts | FAQs |
| 24 | Lead times | Domestic rounds start within a week, one-off sooner, next day possible in Bordon and Whitehill | FAQs, area pages |
| 25 | Weekend working | Saturdays yes, Sundays by arrangement | FAQs |
| 26 | Commercial trial | One month rolling trial offered | office and commercial FAQs |
| 27 | Event notice | Two weeks preferred for a large event | event cleaning FAQs |
| 28 | Vinyl reseal interval | 12 to 18 months on a busy commercial floor | hard floor FAQs |

---

## Four things deliberately not invented

These could not be corrected later, only removed, so no draft was written:

1. **A named insurer or a cover figure.** The site says cover is held and offers to send the certificate. It names no insurer and no amount.
2. **Any trade body or accreditation.** No BICSc, SafeContractor, CHAS, Checkatrade or Which? badge appears, because none was verified. See the note below.
3. **Staff names, numbers or qualifications beyond what the Wix site already claimed.** No team page exists.
4. **Customer reviews.** Not one. The reviews section is an honest empty state until real ones are collected.

## Worth considering, costed

Accreditation is the cheapest credibility you can buy in this trade, and the
research says local competitors mostly have none. Worth pricing up, in this order:

1. **Environment Agency waste carrier registration** — needed anyway if you clear property. Upper tier registration is the usual one for this work.
2. **BICSc corporate membership** — the recognised cleaning industry body, and the one commercial buyers look for.
3. **SafeContractor or CHAS** — effectively required to get on site for main contractors. Only worth it once new build work is a real revenue line.
4. **Checkatrade or Which? Trusted Traders** — domestic lead generation rather than credibility, and expensive. The local research found Checkatrade ranks well for cleaning in Bordon and Alton.

Confirm the figures with each body before publishing anything about them.
