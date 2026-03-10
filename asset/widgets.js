/* ─────────────────────────────────────────────────────────────────
   One X Transmision BMW — Global Widgets
   Announcement Bar  ·  Privacy / Cookie Consent
   ───────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var BAR_KEY     = 'ox_ann_dismissed';
  var PRIVACY_KEY = 'ox_privacy_v1';

  /* ── Rotating announcement messages ── */
  var ANN = [
    {
      text : 'BMW N47 Diesel Timing Chain Advisory — fleet owners, check your eligibility.',
      link : 'https://www.bmw.com',
      label: 'bmw.com \u2197'
    },
    {
      text : 'ZF 8HP ATF Service Interval updated to 60,000 km per official ZF Technical Bulletin.',
      link : 'https://www.zf.com',
      label: 'zf.com \u2197'
    },
    {
      text : 'Free BMW 7-System Diagnostic Health Check — limited workshop slots this week.',
      link : 'https://wa.me/601131051677?text=Hi%20One%20X%2C%20I%20want%20the%20free%20diagnostic',
      label: 'Book via WhatsApp \u2197'
    },
    {
      text : 'BMW N63 B44 Oil Consumption Extended Campaign — verify your vehicle status.',
      link : 'https://www.bmw.com',
      label: 'bmw.com \u2197'
    }
  ];

  var annIdx   = Math.floor(Math.random() * ANN.length); // start random
  var annTimer = null;

  /* ─────────────────────────────────────────────
     ANNOUNCEMENT BAR
  ───────────────────────────────────────────── */
  function buildAnnounceBar() {
    if (sessionStorage.getItem(BAR_KEY)) return;

    var bar = document.createElement('div');
    bar.className = 'announce-bar';
    bar.id = 'announceBar';
    bar.setAttribute('role', 'status');
    bar.setAttribute('aria-live', 'polite');
    bar.innerHTML =
      '<div class="announce-inner">' +
        '<span class="announce-dot" aria-hidden="true"></span>' +
        '<span class="announce-msg" id="announceMsg"></span>' +
        '<button class="announce-close" id="announceClose" aria-label="Dismiss announcement">\u00D7</button>' +
      '</div>';

    var header = document.querySelector('.site-header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(bar, header);
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }

    renderAnn(annIdx);

    document.getElementById('announceClose').addEventListener('click', function () {
      bar.classList.add('hidden');
      sessionStorage.setItem(BAR_KEY, '1');
      if (annTimer) clearInterval(annTimer);
    });

    annTimer = setInterval(function () {
      annIdx = (annIdx + 1) % ANN.length;
      renderAnn(annIdx);
    }, 8000);
  }

  function renderAnn(i) {
    var el = document.getElementById('announceMsg');
    if (!el) return;
    var a = ANN[i];
    el.innerHTML =
      a.text +
      ' <a href="' + a.link + '" target="_blank" rel="noopener noreferrer">' + a.label + '</a>';
  }

  /* ─────────────────────────────────────────────
     PRIVACY / COOKIE CONSENT POPUP
  ───────────────────────────────────────────── */
  function buildPrivacyPopup() {
    if (localStorage.getItem(PRIVACY_KEY)) return;

    var popup = document.createElement('div');
    popup.className = 'privacy-popup';
    popup.id = 'privacyPopup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'false');
    popup.setAttribute('aria-label', 'Cookie consent notice');

    popup.innerHTML =
      '<div class="privacy-inner">' +
        '<div class="privacy-text">' +
          '<strong>We use cookies</strong> to improve your browsing experience and analyse site ' +
          'traffic in line with our privacy policy. By continuing to use this site you agree to ' +
          'our use of cookies.' +
        '</div>' +
        '<div class="privacy-actions">' +
          '<a href="/privacy-policy.html" class="privacy-policy-link">Privacy Policy</a>' +
          '<button class="btn-privacy-accept" id="privacyAccept">Accept &amp; Continue</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(popup);

    // Slide in after short delay so CSS transition fires
    setTimeout(function () { popup.classList.add('visible'); }, 700);

    document.getElementById('privacyAccept').addEventListener('click', function () {
      popup.classList.remove('visible');
      setTimeout(function () { popup.classList.add('hidden'); }, 380);
      localStorage.setItem(PRIVACY_KEY, '1');
    });
  }

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    buildAnnounceBar();
    buildPrivacyPopup();
  }
}());
