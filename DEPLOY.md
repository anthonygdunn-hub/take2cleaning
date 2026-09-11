# Deploying take2cleaning

## 1. Supabase

1. Create the project, or pick the project you are using.
2. SQL editor, paste `supabase/schema.sql`, run it.
3. Settings, API: copy the project URL and the anon public key.
4. Storage: create a public bucket called `gallery` for photographs later.

## 2. Repository secrets

Settings, Secrets and variables, Actions, New repository secret:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## 3. Where the site is served from

While the domain is not pointed at GitHub, the site runs at
`https://anthonygdunn-hub.github.io/take2cleaning/`. That works because the
repository variable `BASE_PATH` is set to `/take2cleaning`, which makes the build
rewrite every internal link under that prefix, mark every page noindex, and skip
the CNAME and the sitemap.

**To go live on the real domain, delete the `BASE_PATH` repository variable**
(Settings, Secrets and variables, Actions, Variables) and push. The build then
writes the CNAME and the sitemap and drops the noindex.

## 4. GitHub Pages

Settings, Pages, Source: **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every
push to `main`.

Custom domain: `www.take2cleaning.co.uk`. The build writes the CNAME file itself,
so do not add one by hand.

## 5. DNS

At whoever holds the domain:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | anthonygdunn-hub.github.io |

Leave any MX and TXT records alone. Watch the host and value columns: getting the
www record the wrong way round takes the site down and it is not obvious why.

Then wait for GitHub to issue the certificate, and only then tick **Enforce HTTPS**.
Until it is issued, the desktop will show `ERR_CERT_COMMON_NAME_INVALID` while a
phone on mobile data may look fine.

## 6. Enquiry notifications

Same pattern as tcooperinteriors: an edge function `notify-enquiry`, fired by a
database webhook on insert to `take2_enquiries`, sending through Resend.

## Sharing a preview before launch

```bash
npm run preview
```

That writes `take2cleaning-preview.html`, one self-contained file with every page
inside it and a click router. It opens by double-click with no web server, and it
is marked noindex. To put it behind a passphrase on dunnworks.io, run it through
`tools/lock.mjs` in the dunnworks repo:

```bash
node tools/lock.mjs --in take2cleaning-preview.html \
  --out preview/take2/index.html --client "Take2Cleaning" --pass "<passphrase>"
```

## Before you go live

Work through `SIGNOFF.md`. Nothing on the site is invented, but a dozen values are
drafted and need confirming or correcting.
