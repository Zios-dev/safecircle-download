const APP_STORE_URL = 'https://apps.apple.com/ng/app/safecircleng/id6794713813';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.safecircle.nigeria';

const userAgent = navigator.userAgent || navigator.vendor || '';
const isAndroid = /android/i.test(userAgent);
const isAppleMobile = /iPad|iPhone|iPod/i.test(userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

let destination;

if (isAppleMobile) {
  destination = APP_STORE_URL;
} else if (isAndroid) {
  destination = PLAY_STORE_URL;
}

if (destination) {
  window.location.replace(destination);
} else {
  const title = document.querySelector('#download-title');
  const status = document.querySelector('#redirect-status');

  if (title) title.textContent = 'Choose your app store';
  if (status) status.textContent = 'Select the download that matches your phone.';
}
