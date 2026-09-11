import fs from 'node:fs';
import path from 'node:path';
const base = 'http://127.0.0.1:8099';
const list = await (await fetch('http://127.0.0.1:9333/json/list')).json();
const ws = new WebSocket(list[0].webSocketDebuggerUrl);
let id = 0; const waiting = new Map();
const send = (m, p = {}) => new Promise(res => { const i = ++id; waiting.set(i, res); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { waiting.get(m.id)(m.result); waiting.delete(m.id); } };
await new Promise(r => ws.onopen = r);

const urls = [];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
  const f = path.join(d, e.name);
  if (e.isDirectory()) walk(f);
  else if (e.name === 'index.html') urls.push('/' + path.relative('dist', d).replace(/\\/g, '/') + (path.relative('dist', d) ? '/' : ''));
});
walk('dist');

const width = +(process.argv[2] || 390);
await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 900 });
const probe = `(() => {
  const w = document.documentElement.clientWidth;
  const over = [];
  document.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); if (r.width > 0 && r.right > w + 1 && r.left > -500) over.push(el.tagName.toLowerCase() + '.' + ((el.className.baseVal ?? el.className) || '').toString().split(' ')[0]); });
  const hs = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => +h.tagName[1]);
  let jump = null, prev = 0;
  hs.forEach(l => { if (prev && l > prev + 1) jump = jump || (prev + '->' + l); prev = l; });
  const imgs = [...document.images].filter(i => !i.alt);
  const links = [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href'));
  return JSON.stringify({
    title: document.title, titleLen: document.title.length,
    desc: (document.querySelector('meta[name=description]')||{}).content || '',
    h1: document.querySelectorAll('h1').length,
    jump, over: [...new Set(over)].slice(0,8),
    ld: document.querySelectorAll('script[type="application/ld+json"]').length,
    canonical: !!document.querySelector('link[rel=canonical]'),
    links: [...new Set(links)]
  });
})()`;

const allLinks = new Set();
const problems = [];
for (const u of urls) {
  await send('Page.navigate', { url: base + u });
  await new Promise(r => setTimeout(r, 420));
  const r = await send('Runtime.evaluate', { expression: probe, returnByValue: true });
  const d = JSON.parse(r.result.value);
  d.links.forEach(l => allLinks.add(l));
  const bad = [];
  if (d.h1 !== 1) bad.push(`h1 count ${d.h1}`);
  if (d.over.length) bad.push('overflow: ' + d.over.join(','));
  if (d.jump) bad.push('heading jump ' + d.jump);
  if (!d.desc) bad.push('no description');
  if (d.titleLen > 65) bad.push(`title ${d.titleLen} chars`);
  if (d.desc.length > 165) bad.push(`desc ${d.desc.length} chars`);
  if (!d.ld) bad.push('no json-ld');
  if (!d.canonical) bad.push('no canonical');
  if (bad.length) problems.push(u + '  ->  ' + bad.join(' | '));
}
// internal link check
const missing = [];
for (const l of allLinks) {
  const clean = l.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) continue;
  const f = clean.endsWith('/') ? path.join('dist', clean, 'index.html') : path.join('dist', clean);
  if (!fs.existsSync(f)) missing.push(l);
}
console.log(`Checked ${urls.length} pages at ${width}px`);
console.log(problems.length ? problems.join('\n') : 'No page problems found.');
console.log('\nBroken internal links: ' + (missing.length ? missing.join(', ') : 'none'));
ws.close();
