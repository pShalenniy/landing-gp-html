import "./scss/main.scss";

import { get, set } from 'tiny-cookie';

(function header() {
  const $header = document.querySelector('.header');
  const $headerToggleBtn = document.querySelector('.btn-toggle');

  $headerToggleBtn.addEventListener('click', () => {
    $header.classList.toggle('menu-open');
  });

  if (!$header.classList.contains('header-blue')) {
    window.addEventListener('scroll', () => {
      if (window.top.scrollY > 50) {
        $header.classList.add('header-blue');
      } else {
        $header.classList.remove('header-blue');
      }
    });
  }
})();

(function cookies() {
  const cookiesNames = {
    isCookiesPopup: 'COOKIES_POPUP',
    amplitudeAnalytics: 'AMPLITUDE_ANALYTICS',
    googleAnalytics: 'GOOGLE_ANALYTICS'
  };

  const $cookies = document.getElementById('cookies');
  const $cookiesDialog = document.getElementById('cookies-dialog');

  const $cookiesAdjustBtn = document.getElementById('cookies-adjust-btn');
  const $cookiesAcceptBtn = document.getElementById('cookies-accept-btn');
  const $cookiesCloseBtn = document.getElementById('cookies-close-btn');
  const $cookiesSaveBtn = document.getElementById('cookies-save-btn');

  const $googleAnalyticsCheckbox = document.getElementById('google-analytics');
  // const $amplitudeAnalyticsCheckbox = document.getElementById('amplitude-analytics');

  let isCookiesPopup = get(cookiesNames.isCookiesPopup, JSON.parse);
  // let amplitudeAnalytics = get(cookiesNames.amplitudeAnalytics, JSON.parse);
  let googleAnalytics = get(cookiesNames.googleAnalytics, JSON.parse);

  const isCookieExist = (cookie) => {
    return cookie === null || cookie
  }

  if (isCookieExist(isCookiesPopup)) {
    $cookies.style.display = 'flex';
  }

  $cookiesAdjustBtn.addEventListener('click', () => {
    $cookies.style.display = 'none';
    $cookiesDialog.style.display = 'flex';
  });

  $cookiesAcceptBtn.addEventListener('click', () => {
    // amplitudeAnalytics = true;
    // set(cookiesNames.amplitudeAnalytics, true, JSON.parse);
    googleAnalytics = true;
    set(cookiesNames.googleAnalytics, true, JSON.parse);
    isCookiesPopup = false;
    set(cookiesNames.isCookiesPopup, false, JSON.parse);
    $cookies.style.display = 'none';
  });

  $cookiesCloseBtn.addEventListener('click', () => {
    $cookies.style.display = 'flex';
    $cookiesDialog.style.display = 'none';
  });

  $cookiesSaveBtn.addEventListener('click', () => {
    // set($amplitudeAnalyticsCheckbox.checked, true, JSON.parse);
    // amplitudeAnalytics = $amplitudeAnalyticsCheckbox.checked;
    set($googleAnalyticsCheckbox.checked, true, JSON.parse);
    googleAnalytics = $googleAnalyticsCheckbox.checked;
    set(cookiesNames.isCookiesPopup, false, JSON.parse);
    $cookiesDialog.style.display = 'none';
  });
})();


(function initVideo() {
  const $iframe = document.getElementById('video');
  const $openVideoBtn = document.getElementById('play-video');
  const $videoPopup = document.getElementById('video-popup');
  let player;

  if ($iframe) {
    player = new Vimeo.Player($iframe);

    $openVideoBtn.addEventListener('click', () => {
      $videoPopup.classList.add('show');
      player.play();
    });

    $videoPopup.addEventListener('click', (e) => {
      e.stopPropagation();
      player.pause();
      $videoPopup.classList.remove('show');
    });

    document.querySelector('#video-popup .popup__close').addEventListener('click', () => {
      player.pause();
      $videoPopup.classList.remove('show');
    });
  }
})();
