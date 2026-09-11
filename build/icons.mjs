const s = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}${extra}</svg>`;

export const icons = {
  home:    s('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.6V21h14V9.6"/><path d="M9.5 21v-6h5v6"/>'),
  key:     s('<circle cx="8" cy="12" r="4"/><path d="M12 12h9"/><path d="M17.5 12v3.5"/><path d="M20.5 12v2.5"/>'),
  building:s('<path d="M3 21h18"/><path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V21"/><path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5V21"/><path d="M8.5 7h3M8.5 11h3M8.5 15h3"/>'),
  sofa:    s('<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 11h18a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1Z"/><path d="M5 17v2M19 17v2"/><path d="M7 11V9M17 11V9"/>'),
  hardhat: s('<path d="M3.5 17h17"/><path d="M5 17v-3a7 7 0 0 1 14 0v3"/><path d="M10 4.6A7 7 0 0 1 14 4.6"/><path d="M10 4.6V8M14 4.6V8"/><path d="M2.5 17h19a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>'),
  flag:    s('<path d="M5 21V4"/><path d="M5 4.5h11l-2 3.5 2 3.5H5"/>'),
  floor:   s('<path d="M3 7h18M3 12h18M3 17h18"/><path d="M8 7v5M16 12v5M12 17v4M12 3v4"/>'),
  shield:  s('<path d="M12 3 5 6v5.5c0 4 2.9 7.7 7 9.5 4.1-1.8 7-5.5 7-9.5V6l-7-3Z"/><path d="m9.2 12.2 2 2 3.6-3.8"/>'),
  people:  s('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.6"/><path d="M17.5 14.4A6.5 6.5 0 0 1 21.5 20"/>'),
  list:    s('<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),
  clock:   s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/>'),
  pin:     s('<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>'),
  badge:   s('<circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.8-1 7.2 4.5-2.4 4.5 2.4-1-7.2"/>'),
  phone:   s('<path d="M6.2 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6.3 6.3l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z"/>'),
  mail:    s('<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7 0a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6a2 2 0 0 0 .3-.5.6.6 0 0 0 0-.6L9.2 6.6c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4A3.5 3.5 0 0 0 5.9 9c0 1.6 1.1 3 1.3 3.3a12 12 0 0 0 4.6 4 15 15 0 0 0 1.5.6 3.7 3.7 0 0 0 1.7.1 2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3ZM12 2a10 10 0 0 0-8.5 15.2L2 22.5l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>',
  tick:    s('<path d="m4.5 12.5 5 5 10-11"/>'),
  arrow:   s('<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>'),
  burger:  s('<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>'),
  quote:   s('<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9.5h8M8 12.5h5"/>'),
  doc:     s('<path d="M6 2.5h7.5L19 8v13.5H6Z"/><path d="M13.5 2.5V8H19"/><path d="M9 13h7M9 17h7"/>'),
  star:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>',
  print:   s('<path d="M7 8V3h10v5"/><rect x="3.5" y="8" width="17" height="8" rx="2"/><path d="M7 14h10v7H7z"/>')
};

export const sparkle = (size = 24, o = 1) =>
  `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:${size}px;height:${size}px;opacity:${o}"><path d="M12 0c.6 5.6 2.2 8.4 6.6 9.5C14.2 10.6 12.6 13.4 12 19c-.6-5.6-2.2-8.4-6.6-9.5C9.8 8.4 11.4 5.6 12 0Z" transform="translate(0 2.5)"/></svg>`;

// The logo mark, redrawn as vector so it scales and needs no image file.
export const logoMark = `
<svg viewBox="0 0 48 48" role="img" aria-label="Take2Cleaning" class="brand-mark">
  <defs><linearGradient id="t2g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5ad9f0"/><stop offset="1" stop-color="#0a7c99"/>
  </linearGradient></defs>
  <rect width="48" height="48" rx="13" fill="url(#t2g)"/>
  <path d="M24 9.5c.75 7 2.75 10.5 8.25 11.9C26.75 22.8 24.75 26.3 24 33.3c-.75-7-2.75-10.5-8.25-11.9C21.25 20 23.25 16.5 24 9.5Z" fill="#fff"/>
  <path d="M34.5 28c.4 3.7 1.45 5.55 4.35 6.3-2.9.74-3.95 2.6-4.35 6.3-.4-3.7-1.45-5.56-4.35-6.3 2.9-.75 3.95-2.6 4.35-6.3Z" fill="#fff" opacity=".85"/>
  <circle cx="13" cy="33" r="3" fill="#fff" opacity=".7"/>
  <circle cx="19" cy="39.5" r="1.8" fill="#fff" opacity=".5"/>
</svg>`;
