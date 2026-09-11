import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, services, areas, guides, reasons, steps, faqs, quoteFacts, priceFactors } from './data.mjs';
import { icons, logoMark, sparkle } from './icons.mjs';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dir, '..');
const SRC  = path.join(ROOT, 'src');
const OUT  = path.join(ROOT, 'dist');

const PREVIEW = process.env.PREVIEW === '1';
// Serving from a GitHub Pages project URL (…github.io/take2cleaning/) rather than
// the custom domain? Set BASE_PATH=/take2cleaning and every internal link is
// rewritten to sit under it. Leave it empty for the live domain.
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const SUBPATH = BASE !== '';
const pages = [];   // { url, title, priority, changefreq }

/* ------------------------------------------------------------- helpers */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tel = `tel:${site.phoneHref}`;
const wa  = (msg = "Hello, I'd like a cleaning quote please.") => `https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(msg)}`;
const svc = slug => services.find(s => s.slug === slug);
const quoteHref = s => '/contact/' + (s ? `?service=${s}` : '');

const rebase = html => SUBPATH
  ? html.replace(/(href|src|content)="\/(?!\/)/g, `$1="${BASE}/`)
  : html;

const write = (url, html) => {
  const rel = url === '/404.html' ? '404.html' : path.join(url.replace(/^\//, ''), 'index.html');
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rebase(html));
};

/* --------------------------------------------------------------- chrome */
const navServices = services.map(s => `<a href="/services/${s.slug}/">${s.navName}</a>`).join('');
const navAreas = areas.slice(0, 8).map(a => `<a href="/areas/${a.slug}/">${a.name}</a>`).join('');

const header = (cur = '') => `
<div class="topbar"><div class="wrap">
  <span>${icons.pin}<span class="dim">Based in ${site.town}, ${site.county}</span></span>
  <span>${icons.phone}<a href="${tel}">${site.phone}</a></span>
  <span>${icons.whatsapp}<a href="${wa()}" rel="noopener">WhatsApp ${site.whatsapp}</a></span>
  <span class="dim">${icons.clock}${site.hours}</span>
</div></div>
<header class="head">
  <div class="wrap head-in">
    <a class="brand" href="/" aria-label="${site.name} home">
      ${logoMark}
      <span class="brand-txt">Take<em>2</em>Cleaning<span class="brand-sub">Bordon &middot; East Hampshire</span></span>
    </a>
    <nav class="nav" aria-label="Main">
      <div class="has-menu"><a href="/services/"${cur === 'services' ? ' aria-current="page"' : ''}>Services</a>
        <div class="menu">${navServices}<a class="menu-all" href="/services/">All services</a></div>
      </div>
      <div class="has-menu"><a href="/areas/"${cur === 'areas' ? ' aria-current="page"' : ''}>Areas</a>
        <div class="menu">${navAreas}<a class="menu-all" href="/areas/">All areas we cover</a></div>
      </div>
      <a href="/how-we-quote/"${cur === 'quote' ? ' aria-current="page"' : ''}>How we quote</a>
      <a href="/guides/"${cur === 'guides' ? ' aria-current="page"' : ''}>Guides</a>
      <a href="/about/"${cur === 'about' ? ' aria-current="page"' : ''}>About</a>
      <a href="/contact/"${cur === 'contact' ? ' aria-current="page"' : ''}>Contact</a>
    </nav>
    <a class="btn btn-primary btn-sm head-cta" href="${quoteHref()}">${icons.quote} Get a free quote</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="drawer" aria-label="Open menu">${icons.burger} Menu</button>
  </div>
</header>
<div class="drawer" id="drawer">
  <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="drawer-head">
      <span class="brand-txt">Take<em>2</em>Cleaning</span>
      <button class="drawer-close" data-close aria-label="Close menu">&times;</button>
    </div>
    <nav aria-label="Mobile">
      <a href="/">Home</a>
      <p class="lbl">Services</p>
      <div class="sub">${services.map(s => `<a href="/services/${s.slug}/">${s.name}</a>`).join('')}</div>
      <p class="lbl">Areas we cover</p>
      <div class="sub">${areas.map(a => `<a href="/areas/${a.slug}/">${a.name}</a>`).join('')}</div>
      <p class="lbl">More</p>
      <div class="sub">
        <a href="/how-we-quote/">How we quote</a>
        <a href="/guides/">Guides and checklists</a>
        <a href="/reviews/">Reviews</a>
        <a href="/faqs/">Questions</a>
        <a href="/about/">About us</a>
        <a href="/contact/">Contact</a>
      </div>
      <p style="margin-top:26px"><a class="btn btn-primary btn-wide" href="${quoteHref()}">Get a free quote</a></p>
    </nav>
  </div>
</div>`;

const footer = () => `
<footer class="foot">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand" href="/" style="margin-bottom:16px">${logoMark}<span class="brand-txt" style="color:#fff">Take<em style="color:var(--brand-2)">2</em>Cleaning</span></a>
        <p>Domestic and commercial cleaning from ${site.town}, covering East Hampshire and the Surrey border. DBS-checked staff, written specifications and a free itemised quote.</p>
        <p style="margin-top:16px"><a class="btn btn-onink btn-sm" href="${quoteHref()}">Get a free quote</a></p>
      </div>
      <div>
        <h2>Services</h2>
        <ul>${services.map(s => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h2>Areas</h2>
        <ul>${areas.map(a => `<li><a href="/areas/${a.slug}/">${a.name}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li><a href="${tel}">${site.phone}</a></li>
          <li><a href="${wa()}" rel="noopener">WhatsApp ${site.whatsapp}</a></li>
          <li><a href="mailto:${site.email}">${site.email}</a></li>
          <li class="muted" style="color:#7fb4c6">${site.hours}</li>
        </ul>
        <h2 style="margin-top:26px">More</h2>
        <ul>
          <li><a href="/how-we-quote/">How we quote</a></li>
          <li><a href="/guides/">Guides and checklists</a></li>
          <li><a href="/reviews/">Reviews</a></li>
          <li><a href="/faqs/">Questions</a></li>
          <li><a href="/about/">About us</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bar">
      <p class="mb0">&copy; <span data-year>2026</span> ${site.legalName}. ${site.base}.</p>
      <ul><li><a href="/privacy/">Privacy</a></li><li><a href="/accessibility/">Accessibility</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul>
    </div>
  </div>
</footer>
<nav class="actionbar" aria-label="Quick contact">
  <a href="${tel}">${icons.phone}Call us</a>
  <a class="is-wa" href="${wa()}" rel="noopener">${icons.whatsapp}WhatsApp</a>
  <a class="is-cta" href="${quoteHref()}">${icons.quote}Free quote</a>
</nav>`;

/* ---------------------------------------------------------------- shell */
function page({ url, title, desc, cur = '', crumbs = [], body, schema = [], priority = 0.6 }) {
  pages.push({ url, priority });
  const canonical = site.origin + url;
  const crumbHtml = crumbs.length ? `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><ol>
    <li><a href="/">Home</a></li>${crumbs.map((c, i) => `<li>${i === crumbs.length - 1 ? `<span aria-current="page">${c.name}</span>` : `<a href="${c.url}">${c.name}</a>`}</li>`).join('')}
  </ol></nav></div>` : '';
  if (crumbs.length) {
    schema = schema.concat([{
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.origin + '/' }].concat(
        crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 2, name: c.name, item: site.origin + c.url })))
    }]);
  }
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
${(PREVIEW || SUBPATH) ? '<meta name="robots" content="noindex, nofollow">' : ''}
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_GB">
<meta name="theme-color" content="#072530">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/icon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/css/styles.css">
${schema.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(cur)}
${crumbHtml}
<main id="main">
${body}
</main>
${footer()}
<script>window.T2C_CONFIG=${JSON.stringify({ supabaseUrl: process.env.SUPABASE_URL || '', supabaseKey: process.env.SUPABASE_ANON_KEY || '', email: site.email, phone: site.phone })};</script>
<script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------------- partials */
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'CleaningService',
  '@id': site.origin + '/#business',
  name: site.name,
  url: site.origin + '/',
  telephone: '+44 ' + site.phoneHref.slice(2),
  email: site.email,
  image: site.origin + '/icon-512.png',
  description: 'Domestic and commercial cleaning company based in Bordon, Hampshire, covering East Hampshire and the Surrey border.',
  address: { '@type': 'PostalAddress', addressLocality: site.town, addressRegion: site.county, postalCode: site.postcodeArea, addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
  areaServed: areas.map(a => ({ '@type': 'City', name: a.name.split(' and ')[0] })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' }
  ],
  priceRange: '££',
  makesOffer: services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${site.origin}/services/${s.slug}/` } }))
};

const faqSchema = list => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: list.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
});

const faqBlock = (list, title = 'Common questions') => `
<section class="band-line"><div class="wrap wrap-narrow">
  <div class="sec-head"><h2>${title}</h2></div>
  <div class="faq">${list.map(f => `<details><summary>${f.q}</summary><div class="a"><p>${f.a}</p></div></details>`).join('')}</div>
</div></section>`;

const quoteForm = (label, opts = {}) => `
<form data-enquiry="${label}" novalidate>
  <div class="form-msg" data-msg></div>
  <div class="form-body">
    <div class="field-2">
      <div class="field"><label for="${label}-n">Your name</label><input id="${label}-n" name="name" type="text" autocomplete="name" required></div>
      <div class="field"><label for="${label}-p">Phone</label><input id="${label}-p" name="phone" type="tel" autocomplete="tel"></div>
    </div>
    <div class="field-2">
      <div class="field"><label for="${label}-e">Email</label><input id="${label}-e" name="email" type="email" autocomplete="email"></div>
      <div class="field"><label for="${label}-pc">Postcode <span class="hint">so we can check we cover you</span></label><input id="${label}-pc" name="postcode" type="text" autocomplete="postal-code" maxlength="9"></div>
    </div>
    <fieldset class="chips">
      <legend>What do you need? <span class="hint">tick as many as apply</span></legend>
      ${services.map((s, i) => `<label class="chip"><input type="checkbox" name="services" value="${s.slug}"${opts.service === s.slug ? ' checked' : ''}><span>${s.navName}</span></label>`).join('')}
    </fieldset>
    <div class="field">
      <label for="${label}-m">Anything else we should know?</label>
      <textarea id="${label}-m" name="message" placeholder="Rough size of the property, how often you'd like us, dates you need to work to, anything awkward about access."></textarea>
    </div>
    <input class="hp" type="text" name="company_website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <label class="consent"><input type="checkbox" name="consent" required><span>I'm happy for ${site.name} to contact me about this enquiry. We never pass details on, and we do not send marketing.</span></label>
    <button class="btn btn-primary btn-wide" type="submit">Send it over</button>
    <p class="form-note">${site.responsePromise} Or ring <a href="${tel}">${site.phone}</a>.</p>
  </div>
</form>`;

const ctaBand = (heading = 'Tell us what needs doing', sub = 'Free quote, itemised in writing, no call-out fee and no obligation. We reply the same working day.') => `
<section class="band-ink"><div class="wrap">
  <div class="cta-strip">
    <div style="max-width:44ch">
      <h2 class="mb0">${heading}</h2>
      <p style="margin-top:.6em;color:#b9dfeb">${sub}</p>
    </div>
    <div class="btn-row">
      <a class="btn btn-primary" href="${quoteHref()}">${icons.quote} Get a free quote</a>
      <a class="btn btn-onink" href="${tel}">${icons.phone} ${site.phone}</a>
    </div>
  </div>
</div></section>`;

const reviewsBlock = () => `
<div class="reviews" id="reviews-slot">
  <div class="review review-empty">
    <p class="mb0 muted">We are asking every customer from this year for a review, and they will appear here as they come in. In the meantime, ask us for references when you get your quote and we will put you in touch with people we clean for.</p>
  </div>
</div>`;

const serviceCard = s => `<a class="card" href="/services/${s.slug}/">
  <div class="card-ico">${icons[s.icon]}</div>
  <h3>${s.name}</h3>
  <p>${s.lead}</p>
  <span class="card-more">See what's included ${icons.arrow}</span>
</a>`;

/* ----------------------------------------------------------------- HOME */
write('/', page({
  url: '/', priority: 1.0, cur: 'home',
  title: `${site.name} | Cleaning in Bordon, Whitehill and East Hampshire`,
  desc: 'Domestic and commercial cleaning from Bordon, Hampshire. DBS-checked cleaners, free itemised quotes, no call-out fee and a reply the same working day.',
  schema: [localBusiness, { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.origin + '/' }],
  body: `
<section class="hero"><div class="wrap">
  <div class="hero-grid">
    <div>
      <span class="eyebrow">${icons.pin} Bordon &middot; Whitehill &middot; East Hampshire</span>
      <h1>Cleaning with care, <span class="hl">powered by trust</span></h1>
      <p class="hero-lead">Homes, offices, rentals and building sites across East Hampshire and the Surrey border. The same cleaners each visit, a written list of what gets done, and a quote you can actually read.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${quoteHref()}">${icons.quote} Get a free quote</a>
        <a class="btn btn-onink" href="${wa()}" rel="noopener">${icons.whatsapp} WhatsApp us</a>
      </div>
      <ul class="hero-points">
        <li>${icons.tick}<span>Every cleaner DBS-checked before their first visit, certificate shown on request</span></li>
        <li>${icons.tick}<span>Free itemised quote, no call-out fee, no deposit on domestic work</span></li>
        <li>${icons.tick}<span>Not happy? Tell us within 48 hours and we come back at no charge</span></li>
      </ul>
    </div>
    <div class="qcard">
      <h2>Get a free quote</h2>
      <p class="qsub">Two minutes. We reply the same working day.</p>
      ${quoteForm('hero')}
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <div class="sec-head centre">
    <span class="eyebrow on-light">Eight things we do</span>
    <h2>One company for the house, the office and the handover</h2>
    <p>Most of our customers started with one job and kept us for the rest. Everything below is done by our own staff, not subcontracted out.</p>
  </div>
  <div class="grid g3">${services.map(serviceCard).join('')}</div>
</div></section>

<section class="band-ice"><div class="wrap">
  <div class="sec-head centre"><h2>Why people stay with us</h2></div>
  <div class="grid g3">${reasons.map(r => `<div class="card"><div class="card-ico">${icons[r.icon]}</div><h3>${r.title}</h3><p>${r.body}</p></div>`).join('')}</div>
</div></section>

<section><div class="wrap">
  <div class="sec-head centre"><h2>How it works</h2><p>Four steps, and you can stop after any of them without owing us anything.</p></div>
  <div class="steps">${steps.map(s => `<div class="step"><h3>${s.title}</h3><p>${s.body}</p></div>`).join('')}</div>
</div></section>

<section class="band-ink"><div class="wrap">
  <div class="sec-head" style="max-width:52ch"><h2>Based in Bordon, and it matters</h2>
  <p style="color:#b9dfeb">Almost everything we do is within twenty minutes of the yard. That is why we can move a visit at short notice, why we can take a next-day end of tenancy in Whitehill, and why the same cleaner covers the same round week after week.</p></div>
  <div class="arealist" style="margin-bottom:28px">${areas.slice(0, 9).map(a => `<a href="/areas/${a.slug}/" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14)"><b style="color:#fff">${a.name}</b><span style="color:#8fc4d6">${a.postcode}</span></a>`).join('')}</div>
  <a class="btn btn-onink" href="/areas/">All ${areas.length} areas we cover ${icons.arrow}</a>
</div></section>

<section><div class="wrap">
  <div class="sec-head centre"><h2>What customers say</h2><p>We would rather show you a short honest list than a wall of invented praise.</p></div>
  ${reviewsBlock()}
  <p class="centre" style="margin-top:26px"><a class="btn btn-ghost" href="/reviews/">More about our reviews ${icons.arrow}</a></p>
</div></section>

${faqBlock(faqs.slice(0, 6), 'Questions we get asked most')}
${ctaBand()}`
}));

/* -------------------------------------------------------- SERVICES HUB */
write('/services/', page({
  url: '/services/', priority: 0.9, cur: 'services',
  crumbs: [{ name: 'Services', url: '/services/' }],
  title: 'Cleaning services in East Hampshire | ' + site.name,
  desc: 'Domestic cleaning, end of tenancy, office and commercial contracts, carpet and upholstery, builders cleans, event cleaning, hard floor care and environmental cleans.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">Services</span>
  <h1>Everything we clean</h1>
  <p class="lead">Eight services, all delivered by our own staff. Whichever you need, the process is the same: a free look at the job, a written itemised quote, then the work done to a list you have a copy of.</p>
</div></section>
<section><div class="wrap">
  <h2 class="sr">For your home</h2>
  <div class="grid g3">${services.filter(s => s.audience !== 'business').map(serviceCard).join('')}</div>
  <h2 style="margin-top:3rem">For businesses, sites and venues</h2>
  <div class="grid g3">${services.filter(s => s.audience === 'business').map(serviceCard).join('')}</div>
</div></section>
${ctaBand('Not sure which one you need?', 'Describe the job and we will tell you honestly what it is, what it takes and whether we are the right people for it.')}`
}));

/* ------------------------------------------------------- SERVICE PAGES */
for (const s of services) {
  const url = `/services/${s.slug}/`;
  const covering = areas.filter(a => a.services.includes(s.slug));
  write(url, page({
    url, priority: 0.8, cur: 'services',
    crumbs: [{ name: 'Services', url: '/services/' }, { name: s.name, url }],
    title: `${s.metaTitle} | ${site.name}`,
    desc: s.metaDesc,
    schema: [faqSchema(s.faqs), {
      '@context': 'https://schema.org', '@type': 'Service',
      name: s.name, serviceType: s.name, description: s.metaDesc,
      provider: { '@id': site.origin + '/#business' },
      areaServed: covering.map(a => ({ '@type': 'City', name: a.name.split(' and ')[0] })),
      url: site.origin + url
    }],
    body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons[s.icon]} ${s.audience === 'business' ? 'For businesses' : s.audience === 'home' ? 'For your home' : 'Homes and businesses'}</span>
  <h1 style="max-width:20ch">${s.name}</h1>
  <p class="lead">${s.hero}</p>
  <div class="btn-row" style="margin-top:1.4rem">
    <a class="btn btn-primary" href="${quoteHref(s.slug)}">${icons.quote} Get a quote for this</a>
    <a class="btn btn-ghost" href="${tel}">${icons.phone} ${site.phone}</a>
  </div>
</div></section>

<section><div class="wrap">
  <div class="split wide-l">
    <div class="prose">
      ${s.intro.map(p => `<p class="lead">${p}</p>`).join('')}
    </div>
    <aside>
      <div class="card card-ice">
        <h2 style="font-size:1.05rem">Where we do this</h2>
        <ul class="pills" style="margin-top:14px">${covering.map(a => `<li><a href="/areas/${a.slug}/">${a.name}</a></li>`).join('')}</ul>
        <p class="small muted" style="margin-top:16px">Just outside? Ring and ask. It often still works.</p>
      </div>
    </aside>
  </div>
</div></section>

<section class="band-ice"><div class="wrap">
  <div class="sec-head"><h2>${s.includes.title}</h2></div>
  <div class="checkgroups">
    ${s.includes.groups.map(g => `<div class="checkgroup"><h3>${icons.tick} ${g.name}</h3><ul class="ticks">${g.items.map(i => `<li><span>${i}</span></li>`).join('')}</ul></div>`).join('')}
  </div>
  <div class="card" style="margin-top:22px">
    <h3>${s.extras.title}</h3>
    <ul class="pills" style="margin-top:14px">${s.extras.items.map(i => `<li><span>${i}</span></li>`).join('')}</ul>
  </div>
</div></section>

<section><div class="wrap">
  <div class="sec-head centre"><h2>How we get you a price</h2><p>No fixed price list, because no two jobs are the same size. Instead you get a free look and an itemised quote you can check line by line.</p></div>
  <div class="steps">${steps.map(x => `<div class="step"><h3>${x.title}</h3><p>${x.body}</p></div>`).join('')}</div>
  <p class="centre" style="margin-top:30px"><a class="btn btn-ghost" href="/how-we-quote/">What changes the price on a ${s.name.toLowerCase()} job ${icons.arrow}</a></p>
</div></section>

${faqBlock(s.faqs, `${s.name}: your questions`)}

<section class="band-ice"><div class="wrap">
  <div class="sec-head"><h2>Often booked alongside</h2></div>
  <div class="grid g3">${s.related.map(r => serviceCard(svc(r))).join('')}</div>
</div></section>

${ctaBand(`Get a quote for ${s.name.toLowerCase()}`)}`
  }));
}

/* ----------------------------------------------------------- AREAS HUB */
write('/areas/', page({
  url: '/areas/', priority: 0.8, cur: 'areas',
  crumbs: [{ name: 'Areas we cover', url: '/areas/' }],
  title: 'Areas we cover in East Hampshire and Surrey | ' + site.name,
  desc: 'Cleaning across Bordon, Whitehill, Lindford, Headley, Liphook, Liss, Petersfield, Alton, Four Marks, Grayshott, Hindhead, Haslemere, Farnham and Bentley.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.pin} Coverage</span>
  <h1>Where we work</h1>
  <p class="lead">We are based in Bordon and most of our work sits within a twenty minute drive. That is deliberate. A tight patch is what lets us keep the same cleaner on the same round and move a visit when you need it moved.</p>
</div></section>
<section><div class="wrap">
  <div class="arealist">${areas.map(a => `<a href="/areas/${a.slug}/"><b>${a.name}</b><span>${a.postcode}</span></a>`).join('')}</div>
  <div class="callout" style="margin-top:32px">
    <h2 style="font-size:1.05rem">Not on the list?</h2>
    <p>We regularly take work in the villages between these towns, and we will travel further for larger commercial and site work. Ring ${site.phone} and ask rather than assuming the answer is no.</p>
  </div>
</div></section>
${ctaBand()}`
}));

/* ---------------------------------------------------------- AREA PAGES */
for (const a of areas) {
  const url = `/areas/${a.slug}/`;
  const list = a.services.map(svc).filter(Boolean);
  const others = areas.filter(x => x.slug !== a.slug).slice(0, 8);
  const areaFaqs = [
    { q: `Do you actually cover ${a.name.split(' and ')[0]}?`, a: `Yes. ${a.blurb} We quote for ${a.name.split(' and ')[0]} jobs the same way as anywhere else: free look at the job, itemised written quote, no call-out fee.` },
    { q: `How quickly can you start in ${a.name.split(' and ')[0]}?`, a: `Regular domestic rounds usually start within a week. One-off and end of tenancy work often goes in sooner. Commercial contracts need a survey first, which we can normally do within a couple of days.` },
    { q: 'Are your cleaners DBS-checked?', a: 'Yes, every one of them, before their first customer visit, and we will show you the certificate if you ask.' },
    { q: 'Do you charge extra for the travel?', a: `No. ${a.name.split(' and ')[0]} is inside our normal working area, so the quote is the quote.` }
  ];
  write(url, page({
    url, priority: 0.7, cur: 'areas',
    crumbs: [{ name: 'Areas we cover', url: '/areas/' }, { name: a.name, url }],
    title: `Cleaners in ${a.name.split(' and ')[0]}, ${a.postcode} | ${site.name}`,
    desc: `Domestic and commercial cleaning in ${a.name} (${a.postcode}). DBS-checked staff, free itemised quote, no call-out fee, same working day reply.`,
    schema: [faqSchema(areaFaqs), {
      '@context': 'https://schema.org', '@type': 'CleaningService',
      name: `${site.name} — ${a.name.split(' and ')[0]}`,
      parentOrganization: { '@id': site.origin + '/#business' },
      url: site.origin + url,
      telephone: '+44 ' + site.phoneHref.slice(2),
      areaServed: { '@type': 'City', name: a.name.split(' and ')[0], address: { '@type': 'PostalAddress', addressRegion: site.county, postalCode: a.postcode, addressCountry: 'GB' } }
    }],
    body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.pin} ${a.postcode}</span>
  <h1>Cleaners in ${a.name}</h1>
  <p class="lead">${a.blurb}</p>
  <div class="btn-row" style="margin-top:1.4rem">
    <a class="btn btn-primary" href="${quoteHref()}">${icons.quote} Get a free quote</a>
    <a class="btn btn-ghost" href="${tel}">${icons.phone} ${site.phone}</a>
  </div>
</div></section>

<section><div class="wrap">
  <div class="split wide-l">
    <div class="prose">
      <h2>What we do in ${a.name.split(' and ')[0]}</h2>
      <p class="lead">${a.local}</p>
      <p>Everything is quoted the same way wherever you are on our patch: we come and look at the job or work from photographs, you get an itemised written quote with the hours in it, and there is no call-out fee whether you go ahead or not.</p>
    </div>
    <aside>
      <div class="card card-ice">
        <h3 style="font-size:1.05rem">${a.name.split(' and ')[0]} at a glance</h3>
        <ul class="ticks plain" style="margin-top:14px">
          <li><span>Postcode ${a.postcode}</span></li>
          <li><span>${a.home ? 'Our home town' : 'Within our normal working area, no travel charge'}</span></li>
          <li><span>${list.length} of our eight services run here</span></li>
          <li><span>Same working day reply to every enquiry</span></li>
        </ul>
      </div>
    </aside>
  </div>
</div></section>

<section class="band-ice"><div class="wrap">
  <div class="sec-head"><h2>Services we run in ${a.name.split(' and ')[0]}</h2></div>
  <div class="grid g3">${list.map(serviceCard).join('')}</div>
</div></section>

${faqBlock(areaFaqs, `Cleaning in ${a.name.split(' and ')[0]}: common questions`)}

<section class="band-line"><div class="wrap">
  <div class="sec-head"><h2>Nearby</h2></div>
  <div class="arealist">${others.map(x => `<a href="/areas/${x.slug}/"><b>${x.name}</b><span>${x.postcode}</span></a>`).join('')}</div>
</div></section>

${ctaBand(`Need a cleaner in ${a.name.split(' and ')[0]}?`)}`
  }));
}

/* --------------------------------------------------------- HOW WE QUOTE */
write('/how-we-quote/', page({
  url: '/how-we-quote/', priority: 0.8, cur: 'quote',
  crumbs: [{ name: 'How we quote', url: '/how-we-quote/' }],
  title: 'How we quote | ' + site.name,
  desc: 'Free itemised quotes, no call-out fee, no deposit on domestic work, and a plain explanation of what actually changes the price on a cleaning job.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.doc} Pricing</span>
  <h1>How we quote</h1>
  <p class="lead">We do not publish a price list, because a three-bed house with two dogs and a three-bed house with nobody in it are not the same job and pretending otherwise just produces a quote that changes on the day. What we do instead is show you exactly how the number is built.</p>
</div></section>

<section><div class="wrap">
  <h2 class="sr">What you get with every quote</h2>
  <div class="grid g2">${quoteFacts.map(f => `<div class="card"><div class="card-ico">${icons.tick}</div><h3>${f.h}</h3><p>${f.p}</p></div>`).join('')}</div>
</div></section>

<section class="band-ice"><div class="wrap">
  <div class="sec-head"><h2>What actually changes the price</h2><p>Job by job, these are the things we look at. Nothing here is a surprise on the day, because it is all in the quote before you agree to anything.</p></div>
  <div class="checkgroups">
    ${priceFactors.map(p => `<div class="checkgroup"><h3>${p.service}</h3><ul class="ticks">${p.factors.map(f => `<li><span>${f}</span></li>`).join('')}</ul></div>`).join('')}
  </div>
</div></section>

<section><div class="wrap">
  <div class="sec-head centre"><h2>From enquiry to quote</h2></div>
  <div class="steps">${steps.map(s => `<div class="step"><h3>${s.title}</h3><p>${s.body}</p></div>`).join('')}</div>
</div></section>

${faqBlock([
  { q: 'Why will you not just publish an hourly rate?', a: 'Because an hourly rate on its own tells you nothing about how many hours the job takes, and the cheapest rate usually comes with the fewest hours. We would rather show you the tasks and the hours together, which is what an itemised quote does.' },
  { q: 'Is the quote fixed?', a: 'Yes, for the scope in it, and it holds for 30 days. If the scope changes we tell you before we do the extra work, never after.' },
  { q: 'Do you charge for coming to look?', a: 'No. No call-out fee, no minimum charge for a survey, and nothing to pay if you decide not to go ahead.' },
  { q: 'Do you want a deposit?', a: 'Not on domestic work. Larger clearances and commercial contracts have payment terms set out in the agreement, which you see before anything is signed.' },
  { q: 'How do I pay?', a: 'Bank transfer on invoice for domestic work, monthly invoicing for contracts.' },
  { q: 'Can I get a quote without a visit?', a: 'For smaller jobs, yes. Send a few photographs on WhatsApp with a rough idea of the rooms and we will quote from that. Anything large enough to get wrong, we would rather come and see.' }
], 'Questions about pricing')}
${ctaBand('Get your free itemised quote')}`
}));

/* ---------------------------------------------------------- GUIDES HUB */
write('/guides/', page({
  url: '/guides/', priority: 0.7, cur: 'guides',
  crumbs: [{ name: 'Guides', url: '/guides/' }],
  title: 'Cleaning guides and checklists | ' + site.name,
  desc: 'Practical guides from our own teams: the end of tenancy checklist we work to, how to get your deposit back and how to choose a cleaner you can trust.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.doc} Guides</span>
  <h1>Guides and checklists</h1>
  <p class="lead">Written by the people who do the work, not by a marketing agency. Use them whether you hire us or not.</p>
</div></section>
<section><div class="wrap">
  <h2 class="sr">All guides and checklists</h2>
  <div class="grid g3">${guides.map(g => `<a class="card" href="/guides/${g.slug}/">
    <div class="card-ico">${g.checklist ? icons.list : icons.doc}</div>
    <h3>${g.title}</h3><p>${g.lead}</p>
    <span class="card-more">Read it ${icons.arrow}</span></a>`).join('')}</div>
</div></section>
${ctaBand()}`
}));

/* --------------------------------------------------------- GUIDE PAGES */
for (const g of guides) {
  const url = `/guides/${g.slug}/`;
  const cl = g.checklist ? svc(g.checklist) : null;
  write(url, page({
    url, priority: 0.6, cur: 'guides',
    crumbs: [{ name: 'Guides', url: '/guides/' }, { name: g.title, url }],
    title: `${g.metaTitle} | ${site.name}`,
    desc: g.metaDesc,
    schema: [{
      '@context': 'https://schema.org', '@type': 'Article',
      headline: g.title, description: g.metaDesc, url: site.origin + url,
      author: { '@type': 'Organization', name: site.name }, publisher: { '@id': site.origin + '/#business' }
    }],
    body: `
<section class="phead"><div class="wrap wrap-narrow">
  <span class="eyebrow on-light">Guide</span>
  <h1>${g.title}</h1>
  <p class="lead">${g.lead}</p>
</div></section>
<section><div class="wrap wrap-narrow">
  <div class="prose">
    ${g.body.map(b => `<h2>${b.h}</h2>${b.p.map(p => `<p>${p}</p>`).join('')}`).join('')}
  </div>
</div></section>
${cl ? `
<section class="band-ice"><div class="wrap">
  <div class="sec-head"><h2>${cl.includes.title}</h2><p class="no-print">This is the sheet our teams tick off. Print it and work through it yourself, or <a href="${quoteHref(cl.slug)}">ask us to do it</a>.</p></div>
  <div class="checkgroups">
    ${cl.includes.groups.map(x => `<div class="checkgroup"><h3>${icons.tick} ${x.name}</h3><ul class="ticks">${x.items.map(i => `<li><span>${i}</span></li>`).join('')}</ul></div>`).join('')}
  </div>
  <p style="margin-top:24px" class="no-print"><button class="btn btn-ghost" onclick="window.print()">${icons.print} Print this checklist</button></p>
</div></section>` : ''}
<section class="band-line"><div class="wrap">
  <div class="sec-head"><h2>More guides</h2></div>
  <div class="grid g3">${guides.filter(x => x.slug !== g.slug).slice(0, 3).map(x => `<a class="card" href="/guides/${x.slug}/"><h3>${x.title}</h3><p>${x.lead}</p><span class="card-more">Read it ${icons.arrow}</span></a>`).join('')}</div>
</div></section>
${ctaBand()}`
  }));
}

/* ---------------------------------------------------------------- ABOUT */
write('/about/', page({
  url: '/about/', priority: 0.7, cur: 'about',
  crumbs: [{ name: 'About us', url: '/about/' }],
  title: 'About ' + site.name + ' | Bordon, Hampshire',
  desc: 'Take2Cleaning is a cleaning company based in Bordon, Hampshire, working across East Hampshire and the Surrey border for homes, businesses and sites.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">About us</span>
  <h1>A local company, run like one</h1>
  <p class="lead">We are based in Bordon and we clean across East Hampshire and the Surrey border. Homes, offices, rentals, building sites and venues, all done by our own staff.</p>
</div></section>

<section><div class="wrap">
  <div class="split wide-l">
    <div class="prose">
      <h2>Who we are</h2>
      <p class="lead">Take2Cleaning is a locally rooted cleaning company built on the personal touch. We are not just about spotless homes and pristine offices, we are about the relationships behind them: turning up when we said we would, doing what we said we would, and being the same faces each time.</p>
      <h2>What we are trying to do</h2>
      <p>To be the cleaning company people in this part of Hampshire recommend without being asked. Not by being the cheapest, but by being consistent, which is far rarer in this trade than it should be.</p>
      <h2>How we work</h2>
      <p>Integrity, professionalism and responsibility at every level, from whoever answers the phone to whoever is in your kitchen. Every space gets treated as if it were our own, and our hands-on approach means nothing is quietly skipped because nobody would notice.</p>
      <h2>The people</h2>
      <p>Great service starts with great people, so we select and train carefully and we try hard to keep the people we train. Our cleaners become trusted faces in the homes and businesses they look after, which is exactly the point.</p>
      <p>Every member of staff is DBS-checked before their first customer visit. Our site operatives hold CSCS cards and health and safety training, and we have IPAF certification among the team for powered access work.</p>
      <h2>What makes us different</h2>
      <ul>
        <li><strong>Reliability.</strong> We show up when we say we will and we do the job right.</li>
        <li><strong>Respect.</strong> We treat your space, and your time, with care.</li>
        <li><strong>Trust.</strong> Our customers know they can count on us, every time.</li>
      </ul>
      <p>Whether you are a homeowner, a business, a landlord or an event organiser, that is what you are buying.</p>
    </div>
    <aside>
      <div class="card card-ice">
        <h3 style="font-size:1.05rem">The short version</h3>
        <ul class="ticks plain" style="margin-top:14px">
          <li><span>Based in ${site.town}, ${site.county}</span></li>
          <li><span>${areas.length} towns and villages covered</span></li>
          <li><span>${services.length} services, all done in house</span></li>
          <li><span>Every cleaner DBS-checked</span></li>
          <li><span>Public and employers liability insured</span></li>
          <li><span>Same working day reply, every time</span></li>
        </ul>
        <p style="margin-top:18px"><a class="btn btn-primary btn-wide btn-sm" href="${quoteHref()}">Get a free quote</a></p>
      </div>
    </aside>
  </div>
</div></section>

<section class="band-ink"><div class="wrap">
  <div class="sec-head" style="max-width:50ch"><h2>The promise, in one line</h2>
  <p style="color:#b9dfeb">If you are not happy with a clean, tell us within 48 hours and we come back and put it right at no charge. That is the whole policy. There is nothing else in the small print.</p></div>
</div></section>

${ctaBand()}`
}));

/* -------------------------------------------------------------- REVIEWS */
write('/reviews/', page({
  url: '/reviews/', priority: 0.6,
  crumbs: [{ name: 'Reviews', url: '/reviews/' }],
  title: 'Reviews | ' + site.name,
  desc: 'What customers say about Take2Cleaning, and how to check us out before you book.',
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.star} Reviews</span>
  <h1>What customers say</h1>
  <p class="lead">We publish reviews as they come in, with the town and the date, and we do not edit them. If there are not many here yet it is because we would rather have a short honest list than a long invented one.</p>
</div></section>
<section><div class="wrap">${reviewsBlock()}</div></section>
<section class="band-ice"><div class="wrap">
  <div class="split">
    <div class="prose">
      <h2>How to check us out properly</h2>
      <p>Ask for references when you get your quote and we will put you in touch with people we clean for, in your area, who agreed to be asked. That is worth more than any number of five star cards on a website.</p>
      <p>Ask to see a DBS certificate and our insurance schedule too. Any company that hesitates over either is telling you something useful.</p>
    </div>
    <div class="card">
      <h3>Cleaned for us recently?</h3>
      <p>If we have worked for you and you would be willing to say so publicly, it genuinely helps. A sentence is plenty.</p>
      <p class="btn-row" style="margin-top:18px">
        <a class="btn btn-primary btn-sm" href="${wa('Hello, I would like to leave a review for Take2Cleaning.')}" rel="noopener">${icons.whatsapp} Send it on WhatsApp</a>
        <a class="btn btn-ghost btn-sm" href="mailto:${site.email}?subject=Review">${icons.mail} Email it</a>
      </p>
    </div>
  </div>
</div></section>
${ctaBand()}`
}));

/* ----------------------------------------------------------------- FAQS */
write('/faqs/', page({
  url: '/faqs/', priority: 0.6,
  crumbs: [{ name: 'Questions', url: '/faqs/' }],
  title: 'Questions and answers | ' + site.name,
  desc: 'Insurance, DBS checks, keys, notice periods, payment, guarantees and coverage. The things people ask us before they book.',
  schema: [faqSchema(faqs)],
  body: `
<section class="phead"><div class="wrap wrap-narrow">
  <span class="eyebrow on-light">Q &amp; A</span>
  <h1>Questions we get asked</h1>
  <p class="lead">If yours is not here, ring ${site.phone} and ask. We will give you a straight answer even when it is not the one that wins us the job.</p>
</div></section>
<section><div class="wrap wrap-narrow">
  <div class="faq" style="border-top:0">${faqs.map(f => `<details><summary>${f.q}</summary><div class="a"><p>${f.a}</p></div></details>`).join('')}</div>
</div></section>
${ctaBand()}`
}));

/* -------------------------------------------------------------- CONTACT */
write('/contact/', page({
  url: '/contact/', priority: 0.9, cur: 'contact',
  crumbs: [{ name: 'Contact', url: '/contact/' }],
  title: 'Get a free cleaning quote | ' + site.name,
  desc: `Tell us what needs doing and we will come back the same working day with a free itemised quote. Call ${site.phone}, WhatsApp ${site.whatsapp} or use the form.`,
  schema: [{ '@context': 'https://schema.org', '@type': 'ContactPage', url: site.origin + '/contact/', about: { '@id': site.origin + '/#business' } }],
  body: `
<section class="phead"><div class="wrap">
  <span class="eyebrow on-light">${icons.quote} Free quote</span>
  <h1>Tell us what needs doing</h1>
  <p class="lead">Free, itemised, in writing, with no call-out fee and nothing to pay if you decide against it. ${site.responsePromise}</p>
</div></section>

<section><div class="wrap">
  <div class="split wide-r">
    <aside>
      <div class="card">
        <h2 style="font-size:1.1rem">Quicker ways to reach us</h2>
        <p class="small muted">If it is urgent, ring. Someone answers.</p>
        <p class="btn-row" style="margin-top:18px;flex-direction:column;align-items:stretch">
          <a class="btn btn-deep btn-wide" href="${tel}">${icons.phone} ${site.phone}</a>
          <a class="btn btn-ghost btn-wide" href="${wa()}" rel="noopener">${icons.whatsapp} WhatsApp ${site.whatsapp}</a>
          <a class="btn btn-ghost btn-wide" href="mailto:${site.email}">${icons.mail} ${site.email}</a>
        </p>
        <hr>
        <h3 style="font-size:1rem">When we are about</h3>
        <p class="small">${site.hours}. Site and commercial work runs outside those hours as a matter of course.</p>
        <h3 style="font-size:1rem;margin-top:20px">Where we are</h3>
        <p class="small">${site.base} ${site.postcodeArea}. We cover ${areas.length} towns and villages across East Hampshire and the Surrey border. <a href="/areas/">See the list</a>.</p>
      </div>
    </aside>
    <div>
      <div class="qcard" style="box-shadow:var(--shadow-2);border:1px solid var(--line)">
        <h2>Request a quote</h2>
        <p class="qsub">The more you tell us, the closer the first number will be.</p>
        ${quoteForm('contact')}
      </div>
    </div>
  </div>
</div></section>

${faqBlock([
  { q: 'What happens after I send this?', a: 'You get a reply the same working day. For most jobs that reply is either a quote or a short list of questions we need answered to give you one. For anything large we will ask to come and look.' },
  { q: 'Will I get sales calls?', a: 'No. We contact you about the job you asked about and nothing else, we do not send marketing, and we never pass your details to anyone.' },
  { q: 'How quickly can you start?', a: 'Regular domestic rounds usually start within a week, one-off jobs often sooner, and around Bordon and Whitehill we can sometimes do next day. Commercial contracts need a survey first.' }
], 'What happens next')}`
}));

/* ------------------------------------------------------ PRIVACY / A11Y */
write('/privacy/', page({
  url: '/privacy/', priority: 0.2,
  crumbs: [{ name: 'Privacy', url: '/privacy/' }],
  title: 'Privacy notice | ' + site.name,
  desc: 'What Take2Cleaning does with the information you send through this website.',
  body: `
<section class="phead"><div class="wrap wrap-narrow"><h1>Privacy notice</h1><p class="lead">Short, because we do very little with your data.</p></div></section>
<section><div class="wrap wrap-narrow"><div class="prose">
  <h2>What we collect</h2>
  <p>Only what you type into an enquiry form: your name, your phone number or email address, your postcode, which services you are interested in and anything you write in the message box. We also record which page you sent it from, so we know what you were looking at.</p>
  <h2>Why we hold it</h2>
  <p>To answer your enquiry and, if you become a customer, to run the work and invoice for it. The lawful basis is legitimate interests for an enquiry and contract for work we go on to do.</p>
  <h2>Who sees it</h2>
  <p>Us. Enquiries are stored in a database hosted by Supabase within the EU, and email reaches us through our normal mail provider. We do not sell, share or rent your details to anyone, and we do not send marketing.</p>
  <h2>How long we keep it</h2>
  <p>Enquiries that do not become work are deleted after 12 months. Customer records are kept for six years after the last invoice, because HMRC requires it.</p>
  <h2>Cookies</h2>
  <p>This site sets no cookies of its own and carries no advertising or analytics trackers. Fonts are loaded from Google Fonts, which means your browser makes a request to Google to fetch them.</p>
  <h2>Your rights</h2>
  <p>You can ask us what we hold, ask for it to be corrected, or ask for it to be deleted. Email <a href="mailto:${site.email}">${site.email}</a> and we will deal with it within a month. If you are unhappy with how we handle it you can complain to the Information Commissioner's Office at ico.org.uk.</p>
  <p class="small muted">Last updated <span data-year>2026</span>.</p>
</div></div></section>`
}));

write('/accessibility/', page({
  url: '/accessibility/', priority: 0.2,
  crumbs: [{ name: 'Accessibility', url: '/accessibility/' }],
  title: 'Accessibility | ' + site.name,
  desc: 'How accessible this website is, and what to do if something on it does not work for you.',
  body: `
<section class="phead"><div class="wrap wrap-narrow"><h1>Accessibility</h1><p class="lead">This site is built to be usable with a keyboard, a screen reader, or a phone held in one hand while you do something else.</p></div></section>
<section><div class="wrap wrap-narrow"><div class="prose">
  <h2>What we have done</h2>
  <ul>
    <li>Text and interface colours meet WCAG 2.2 AA contrast against their backgrounds</li>
    <li>Every page works from the keyboard alone, with a visible focus outline and a skip link</li>
    <li>Headings run in order, and the page structure uses real landmarks</li>
    <li>Forms have proper labels, and errors are announced rather than only shown in colour</li>
    <li>Nothing moves or animates for anyone whose system asks for reduced motion</li>
    <li>Text reflows to a single column at 320px and at 400% zoom without horizontal scrolling</li>
  </ul>
  <h2>If something does not work</h2>
  <p>Tell us and we will fix it. Email <a href="mailto:${site.email}">${site.email}</a> or ring <a href="${tel}">${site.phone}</a>, and say what you were trying to do and what got in the way.</p>
  <h2>Other ways to reach us</h2>
  <p>You never have to use this website to get a quote. Ring, send a WhatsApp message, or email us and we will do the whole thing by phone or by message.</p>
</div></div></section>`
}));

/* ------------------------------------------------------------------ 404 */
write('/404.html', page({
  url: '/404.html', priority: 0.1,
  title: 'Page not found | ' + site.name,
  desc: 'That page does not exist.',
  body: `
<section class="phead"><div class="wrap wrap-narrow">
  <span class="eyebrow on-light">404</span>
  <h1>That page has been cleaned away</h1>
  <p class="lead">It either moved or it never existed. Either way, here is where everything lives.</p>
  <p class="btn-row" style="margin-top:1.4rem"><a class="btn btn-primary" href="/">Back to the home page</a><a class="btn btn-ghost" href="${quoteHref()}">Get a quote</a></p>
</div></section>
<section><div class="wrap">
  <div class="grid g3">${services.slice(0, 6).map(serviceCard).join('')}</div>
</div></section>`
}));
pages.pop();

/* ------------------------------------------------------- static assets */
fs.cpSync(path.join(SRC, 'assets'), path.join(OUT, 'assets'), { recursive: true });

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5ad9f0"/><stop offset="1" stop-color="#0a7c99"/></linearGradient></defs>
<rect width="48" height="48" rx="13" fill="url(#g)"/>
<path d="M24 9.5c.75 7 2.75 10.5 8.25 11.9C26.75 22.8 24.75 26.3 24 33.3c-.75-7-2.75-10.5-8.25-11.9C21.25 20 23.25 16.5 24 9.5Z" fill="#fff"/>
<path d="M34.5 28c.4 3.7 1.45 5.55 4.35 6.3-2.9.74-3.95 2.6-4.35 6.3-.4-3.7-1.45-5.56-4.35-6.3 2.9-.75 3.95-2.6 4.35-6.3Z" fill="#fff" opacity=".85"/>
<circle cx="13" cy="33" r="3" fill="#fff" opacity=".7"/></svg>`;
fs.writeFileSync(path.join(OUT, 'favicon.svg'), favicon);

fs.writeFileSync(path.join(OUT, 'robots.txt'),
  (PREVIEW || SUBPATH) ? `User-agent: *\nDisallow:\n` : `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);

if (!PREVIEW && !SUBPATH) {
  fs.writeFileSync(path.join(OUT, 'CNAME'), site.domain + '\n');
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${site.origin}${p.url}</loc><lastmod>${today}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`).join('\n')}
</urlset>
`);
}

console.log(`Built ${pages.length} pages into dist/${PREVIEW ? '  (PREVIEW: noindex)' : ''}${SUBPATH ? `  (served under ${BASE}, noindex, no CNAME)` : ''}`);
