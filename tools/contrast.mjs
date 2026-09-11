const list = await (await fetch('http://127.0.0.1:9333/json/list')).json();
const ws = new WebSocket(list[0].webSocketDebuggerUrl);
let id = 0; const w8 = new Map();
const send = (m, p = {}) => new Promise(r => { const i = ++id; w8.set(i, r); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && w8.has(m.id)) { w8.get(m.id)(m.result); w8.delete(m.id); } };
await new Promise(r => ws.onopen = r);
await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
const expr = `(() => {
  const lum = c => { const [r,g,b] = c.map(v => { v/=255; return v<=.03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); }); return .2126*r + .7152*g + .0722*b; };
  const parse = s => { const m = s.match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const p = m[1].split(',').map(x => parseFloat(x)); return { rgb: p.slice(0,3), a: p.length > 3 ? p[3] : 1 }; };
  const bgOf = el => { let n = el; while (n && n !== document.documentElement) { const c = parse(getComputedStyle(n).backgroundColor); if (c && c.a > .5) return c.rgb; n = n.parentElement; } return [255,255,255]; };
  const out = [];
  document.querySelectorAll('p,li,a,span,h1,h2,h3,h4,label,summary,button,cite,td,th,legend,figcaption').forEach(el => {
    if (!el.textContent.trim() || el.children.length && !Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim())) return;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity < .5) return;
    if (r.left < -1000) return;
    const fg = parse(cs.color); if (!fg) return;
    const bg = bgOf(el);
    const L1 = lum(fg.rgb), L2 = lum(bg);
    const ratio = (Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
    const size = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const need = large ? 3 : 4.5;
    if (ratio < need) out.push({ tag: el.tagName.toLowerCase(), cls: ((el.className && el.className.baseVal !== undefined) ? el.className.baseVal : (el.className || '')).toString().split(' ')[0], txt: el.textContent.trim().slice(0,38), ratio: +ratio.toFixed(2), need, size: Math.round(size), fg: cs.color, bg: 'rgb('+bg.join(',')+')' });
  });
  const seen = new Set();
  return JSON.stringify(out.filter(o => { const k = o.cls + o.tag + o.ratio; if (seen.has(k)) return false; seen.add(k); return true; }));
})()`;
const urls = ['/', '/services/end-of-tenancy-cleaning/', '/areas/bordon/', '/contact/', '/how-we-quote/', '/guides/', '/reviews/', '/about/', '/faqs/'];
for (const u of urls) {
  await send('Page.navigate', { url: 'http://127.0.0.1:8099' + u });
  await new Promise(r => setTimeout(r, 1400));
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
  if (r.exceptionDetails) { console.log(u + ': EXCEPTION ' + JSON.stringify(r.exceptionDetails).slice(0, 400)); continue; }
  const bad = JSON.parse(r.result.value);
  console.log(u + ': ' + (bad.length ? '\n  ' + bad.map(b => `${b.tag}.${b.cls} ${b.ratio}:1 need ${b.need} ${b.size}px fg=${b.fg} bg=${b.bg} "${b.txt}"`).join('\n  ') : 'all pass'));
}
ws.close();
