/* Packs dist/ into one self-contained HTML file with a click router,
   so the whole site opens by double-click with no web server.
   Run after build.mjs:  node tools/bundle.mjs  */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT  = path.join(ROOT, 'take2cleaning-preview.html');

const pages = {};
const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
  const f = path.join(d, e.name);
  if (e.isDirectory()) walk(f);
  else if (e.name === 'index.html') {
    const url = '/' + path.relative(DIST, d).replace(/\\/g, '/') + (path.relative(DIST, d) ? '/' : '');
    pages[url] = fs.readFileSync(f, 'utf8');
  }
});
walk(DIST);

const css = fs.readFileSync(path.join(DIST, 'assets/css/styles.css'), 'utf8');
const js  = fs.readFileSync(path.join(DIST, 'assets/js/site.js'), 'utf8');
const favicon = fs.readFileSync(path.join(DIST, 'favicon.svg'), 'utf8');
const faviconData = 'data:image/svg+xml;base64,' + Buffer.from(favicon).toString('base64');

const grab = (html, tag) => {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? m[1] : '';
};

const docs = {};
for (const [url, html] of Object.entries(pages)) {
  docs[url] = {
    title: (html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1],
    body: grab(html, 'body')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<a class="skip"[\s\S]*?<\/a>/i, '')
  };
}

const shell = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Take2Cleaning — site preview</title>
<link rel="icon" href="${faviconData}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>${css}
.previewbar{position:sticky;top:0;z-index:500;background:#7000ff;color:#fff;font:500 .8rem/1.3 'IBM Plex Mono',monospace;padding:9px 16px;text-align:center;letter-spacing:.02em}
.previewbar b{font-weight:600}
</style>
</head>
<body>
<div class="previewbar">Proposal preview &middot; <b>Take2Cleaning</b> &middot; every page is live, click anything</div>
<div id="app"></div>
<script>
window.T2C_CONFIG = { email: 'hello@take2cleaning.co.uk', phone: '07354 321405' };
var DOCS = ${JSON.stringify(docs)};
var app = document.getElementById('app');
function norm(h){
  if(!h) return '/';
  h = h.split('#')[0].split('?')[0];
  if(h.charAt(0) !== '/') return null;
  if(h.slice(-1) !== '/') h += '/';
  return DOCS[h] ? h : null;
}
function render(url){
  var d = DOCS[url] || DOCS['/'];
  app.innerHTML = d.body;
  document.title = d.title;
  window.scrollTo(0,0);
  boot();
}
document.addEventListener('click', function(e){
  var a = e.target.closest && e.target.closest('a');
  if(!a) return;
  var raw = a.getAttribute('href') || '';
  if(raw.charAt(0) === '#') return;
  if(/^(https?:|tel:|mailto:)/i.test(raw)) return;
  var u = norm(raw);
  e.preventDefault();
  if(u) { history.pushState({u:u}, '', '#' + u); render(u); }
});
window.addEventListener('popstate', function(){ render(norm(location.hash.slice(1)) || '/'); });
render(norm(location.hash.slice(1)) || '/');
function boot(){ ${js.replace(/<\/script>/gi, '<\\/script>')} }
</script>
</body>
</html>`;

fs.writeFileSync(OUT, shell);
console.log(`Bundled ${Object.keys(docs).length} pages into ${path.basename(OUT)} (${(shell.length/1024).toFixed(0)} KB)`);
