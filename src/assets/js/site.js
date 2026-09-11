/* Take2Cleaning — site behaviour. No dependencies. */
(function () {
  'use strict';

  /* ---- mobile drawer ---- */
  var drawer = document.getElementById('drawer');
  var burger = document.getElementById('burger');
  if (drawer && burger) {
    var open = function () {
      drawer.setAttribute('open', '');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      var f = drawer.querySelector('a, button');
      if (f) f.focus();
    };
    var close = function () {
      drawer.removeAttribute('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      burger.focus();
    };
    burger.addEventListener('click', open);
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer || e.target.closest('[data-close]')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.hasAttribute('open')) close();
    });
  }

  /* ---- keep content clear of the sticky action bar ---- */
  var bar = document.querySelector('.actionbar');
  var setBar = function () {
    var h = (bar && getComputedStyle(bar).display !== 'none') ? bar.offsetHeight : 0;
    document.documentElement.style.setProperty('--bar-h', h + 'px');
  };
  if (bar) { setBar(); window.addEventListener('resize', setBar); }

  /* ---- current year ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- enquiry form -> Supabase ---- */
  var cfg = window.T2C_CONFIG || {};
  var forms = document.querySelectorAll('form[data-enquiry]');

  Array.prototype.forEach.call(forms, function (form) {
    var msg = form.querySelector('[data-msg]');
    var btn = form.querySelector('[type=submit]');

    var say = function (kind, text) {
      if (!msg) return;
      msg.className = 'form-msg ' + kind;
      msg.textContent = text;
      msg.setAttribute('role', kind === 'err' ? 'alert' : 'status');
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name=company_website]') && form.querySelector('[name=company_website]').value) return;

      var fd = new FormData(form);
      var servicesWanted = fd.getAll('services');
      var payload = {
        name: (fd.get('name') || '').toString().trim(),
        email: (fd.get('email') || '').toString().trim(),
        phone: (fd.get('phone') || '').toString().trim(),
        postcode: (fd.get('postcode') || '').toString().trim().toUpperCase(),
        property: (fd.get('property') || '').toString(),
        frequency: (fd.get('frequency') || '').toString(),
        services: servicesWanted.length ? servicesWanted : (fd.get('service') ? [fd.get('service')] : []),
        message: (fd.get('message') || '').toString().trim(),
        source_page: location.pathname,
        source_label: form.getAttribute('data-enquiry') || 'site'
      };

      if (!payload.name || (!payload.email && !payload.phone)) {
        say('err', 'Please give us your name and either a phone number or an email address.');
        return;
      }

      var done = function () {
        form.classList.add('sent');
        say('ok', 'Thanks ' + payload.name.split(' ')[0] + '. That has reached us and we will come back to you the same working day.');
        if (window.dataLayer) window.dataLayer.push({ event: 'enquiry_submitted' });
      };

      if (!cfg.supabaseUrl || !cfg.supabaseKey) {
        // No backend wired up yet: fall back to an email so nothing is lost.
        var body = Object.keys(payload).map(function (k) { return k + ': ' + payload[k]; }).join('\n');
        window.location.href = 'mailto:' + (cfg.email || 'hello@take2cleaning.co.uk') +
          '?subject=' + encodeURIComponent('Website enquiry from ' + payload.name) +
          '&body=' + encodeURIComponent(body);
        done();
        return;
      }

      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'Sending…'; }

      fetch(cfg.supabaseUrl + '/rest/v1/take2_enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabaseKey,
          'Authorization': 'Bearer ' + cfg.supabaseKey,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        done();
      }).catch(function () {
        say('err', 'Something went wrong sending that. Please ring us on ' + (cfg.phone || '') + ' or email ' + (cfg.email || '') + ' and we will pick it up straight away.');
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || 'Send'; }
      });
    });
  });

  /* ---- published reviews ---- */
  var slot = document.getElementById('reviews-slot');
  if (slot && cfg.supabaseUrl && cfg.supabaseKey) {
    fetch(cfg.supabaseUrl + '/rest/v1/take2_testimonials?select=author,town,body,rating&published=eq.true&order=sort_order.asc&limit=6', {
      headers: { 'apikey': cfg.supabaseKey, 'Authorization': 'Bearer ' + cfg.supabaseKey }
    }).then(function (r) { return r.json(); }).then(function (rows) {
      if (!rows || !rows.length) return;
      var star = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>';
      var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
      slot.innerHTML = rows.map(function (r) {
        var n = Math.max(0, Math.min(5, parseInt(r.rating, 10) || 5));
        return '<figure class="review">' +
          '<div class="stars" aria-label="' + n + ' out of 5">' + new Array(n + 1).join(star) + '</div>' +
          '<blockquote>' + esc(r.body) + '</blockquote>' +
          '<figcaption><cite>' + esc(r.author) + '</cite>' +
          (r.town ? '<span class="where">' + esc(r.town) + '</span>' : '') +
          '</figcaption></figure>';
      }).join('');
    }).catch(function () { /* leave the placeholder in place */ });
  }

  /* ---- prefill the service chip from ?service= ---- */
  var want = new URLSearchParams(location.search).get('service');
  if (want) {
    var input = document.querySelector('input[name=services][value="' + want.replace(/"/g, '') + '"]');
    if (input) input.checked = true;
    var sel = document.querySelector('select[name=service]');
    if (sel) { for (var i = 0; i < sel.options.length; i++) { if (sel.options[i].value === want) sel.selectedIndex = i; } }
  }
})();
