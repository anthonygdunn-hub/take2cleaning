# take2cleaning

The Take2Cleaning website. 38 pages of static HTML, CSS and JS, generated from one
content file and served by GitHub Pages at https://www.take2cleaning.co.uk.

## How it works

Everything the site says lives in `build/data.mjs`. `build/build.mjs` reads that file
and writes `dist/`. Nothing generated is committed, so editing the site means editing
one file and pushing.

```
build/data.mjs      all content: services, areas, guides, FAQs, contact details
build/build.mjs     the generator, one function per page type
build/icons.mjs     the inline SVG icon set and the logo mark
src/assets/css      one stylesheet
src/assets/js       one script: drawer, enquiry form, published reviews
supabase/schema.sql the database, run once in the SQL editor
tools/bundle.mjs    packs dist/ into one self-contained HTML file for previews
```

## Commands

```bash
npm run build     # writes dist/
npm run serve     # builds, then serves dist/ on :8099
npm run preview   # builds a noindex copy and bundles it to one HTML file
```

## Pages

- home, services hub, 8 service pages
- areas hub, 14 area pages
- how we quote, guides hub, 5 guides, reviews, FAQs, about, contact
- privacy, accessibility, 404

## Environment

The build reads two variables and writes them into the page as `window.T2C_CONFIG`.
They are set as repository secrets and passed in by the GitHub Actions workflow.

| Variable | What it is |
| --- | --- |
| `SUPABASE_URL` | `https://<ref>.supabase.co` |
| `SUPABASE_ANON_KEY` | the project's anon public key |

The anon key is meant to be public. Row level security is what protects the data:
the website may insert an enquiry and read published testimonials, and nothing else.

With neither variable set, the enquiry form falls back to opening a pre-filled email,
so a build without the backend still works.

## Editing content

| To change | Edit |
| --- | --- |
| phone, email, hours, domain | `site` at the top of `build/data.mjs` |
| a service page | that service's object in `services` |
| an area page | that area's object in `areas` |
| a guide | that guide's object in `guides` |
| the FAQ page | `faqs` |
| what changes a price | `priceFactors` |

Add an object to `services` or `areas` and a new page appears, complete with its
navigation entries, footer links, schema and sitemap row. Nothing else needs touching.
