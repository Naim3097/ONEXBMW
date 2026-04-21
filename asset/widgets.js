/* ─────────────────────────────────────────────────────────────────
   One X Transmision BMW — Global Widgets
   Announcement Bar  ·  Privacy / Cookie Consent
   ───────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var BAR_KEY     = 'ox_ann_dismissed';
  var PRIVACY_KEY = 'ox_privacy_v1';
  var PROMO_KEY   = 'ox_bmw_promo_dismissed_v1';
  var PROMO_URL   = 'https://www.onextransmission.com/ms/packages';
  var PROMO_IMG   = 'https://www.onextransmission.com/images/asset%20promotion/PROMO%201%20B.jpg';

  /* ── Rotating announcement messages ── */
  var ANN = [
    {
      text : 'Workshop ATF Service Promo — RM439 full gearbox service with free OBD2 monitoring device. Limited slots.',
      link : PROMO_URL,
      label: 'View Package \u2197'
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
      text : 'Get the BYKI-compatible OBD2 device free with our ATF service — monitor your BMW live from your phone.',
      link : PROMO_URL,
      label: 'See Details \u2197'
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
    schedulePromoModal();
  }

  /* ─────────────────────────────────────────────
     PROMO MODAL (money-page funnel → /ms/packages)
     - 3s delay after load
     - 3-day cooldown via localStorage
     - CTA opens money page in new tab
     - Fires fbq + GTM events if available
     - Responsive: centered card desktop, bottom sheet ≤480px
  ───────────────────────────────────────────── */
  function schedulePromoModal() {
    if (localStorage.getItem(PROMO_KEY)) {
      var ts = parseInt(localStorage.getItem(PROMO_KEY), 10);
      if (!isNaN(ts) && (Date.now() - ts) < 3 * 24 * 60 * 60 * 1000) return;
    }
    setTimeout(buildPromoModal, 3000);
  }

  function buildPromoModal() {
    if (document.getElementById('onexPromoBackdrop')) return;

    var bd = document.createElement('div');
    bd.className = 'onex-modal-backdrop';
    bd.id = 'onexPromoBackdrop';
    bd.setAttribute('role', 'dialog');
    bd.setAttribute('aria-modal', 'true');
    bd.setAttribute('aria-labelledby', 'onexPromoHeadline');

    bd.innerHTML =
      '<div class="onex-modal" role="document">' +
        '<button class="onex-modal-close" id="onexPromoClose" aria-label="Close">\u00D7</button>' +
        '<div class="onex-modal-media">' +
          '<img src="' + PROMO_IMG + '" alt="ATF Gearbox Service Package RM439 with free OBD2 device" loading="lazy" decoding="async">' +
          '<span class="onex-modal-badge">WORKSHOP PROMO</span>' +
        '</div>' +
        '<div class="onex-modal-body">' +
          '<p class="onex-modal-eyebrow">ATF + Filter + Free OBD2</p>' +
          '<h2 class="onex-modal-headline" id="onexPromoHeadline">Complete Gearbox Service <span>RM439</span></h2>' +
          '<p class="onex-modal-sub">Full ATF drain &amp; fill + new gearbox filter + <strong>FREE OBD2 device</strong> (worth RM150+) compatible with the BYKI app. Track your BMW live data, DTCs and health score from your phone.</p>' +
          '<ul class="onex-modal-list">' +
            '<li>ATF fluid change (spec-matched to your vehicle)</li>' +
            '<li>New gearbox filter — metal debris captured</li>' +
            '<li>Free BYKI-compatible OBD2 device (live data, DTC codes, 0–100 health score)</li>' +
          '</ul>' +
          '<div class="onex-modal-price"><span class="onex-price-old">RM 580</span><span class="onex-price-new">RM 439</span><span class="onex-price-save">Save RM 141</span></div>' +
          '<a href="' + PROMO_URL + '" class="onex-modal-cta" id="onexPromoCta" target="_blank" rel="noopener">Claim This Offer</a>' +
          '<p class="onex-modal-fine">Limited to 100 slots. RM 50 deposit to book.</p>' +
        '</div>' +
      '</div>';

    document.body.appendChild(bd);
    requestAnimationFrame(function () { bd.classList.add('visible'); });
    document.documentElement.style.overflow = 'hidden';

    function closeModal(reason) {
      bd.classList.remove('visible');
      document.documentElement.style.overflow = '';
      localStorage.setItem(PROMO_KEY, String(Date.now()));
      setTimeout(function () {
        if (bd.parentNode) bd.parentNode.removeChild(bd);
      }, 320);
      try {
        if (typeof window.dataLayer !== 'undefined') {
          window.dataLayer.push({ event: 'promo_modal_close', reason: reason || 'x' });
        }
      } catch (e) {}
    }

    document.getElementById('onexPromoClose').addEventListener('click', function () { closeModal('close_button'); });
    bd.addEventListener('click', function (e) { if (e.target === bd) closeModal('backdrop'); });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape' && document.body.contains(bd)) { closeModal('esc'); document.removeEventListener('keydown', esc); }
    });

    document.getElementById('onexPromoCta').addEventListener('click', function () {
      try {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'InitiateCheckout', { content_name: 'Pakej Servis Gearbox RM439', value: 439, currency: 'MYR' });
        }
        if (typeof window.dataLayer !== 'undefined') {
          window.dataLayer.push({ event: 'promo_modal_cta_click', money_url: PROMO_URL, value: 439, currency: 'MYR' });
        }
      } catch (e) {}
      localStorage.setItem(PROMO_KEY, String(Date.now()));
    });
  }
}());
