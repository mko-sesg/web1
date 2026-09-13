function goToPage(pageUrl) {
  window.location.href = pageUrl;
}

function goHome() {
  goToPage('index.html');
}

function goAbout() {
  goToPage('about.html');
}

function goGallery() {
  goToPage('gallery.html');
}

function goContact() {
  goToPage('contact.html');
}

function video1Play() {
  var video = document.getElementById('video1');
  if (video) {
    video.play();
  }
}

function video1pause() {
  var video = document.getElementById('video1');
  if (video) {
    video.pause();
  }
}

function bindButton(buttonId, handler) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', handler);
  }
}

bindButton('btnHome', goHome);
bindButton('btnAbout', goAbout);
bindButton('btnGallery', goGallery);
bindButton('btnContact', goContact);

bindButton('navHome', goHome);
bindButton('navAbout', goAbout);
bindButton('navGallery', goGallery);
bindButton('navContact', goContact);

bindButton('video1Play', video1Play);
bindButton('video1pause', video1pause);

var navToggle = document.getElementById('navToggle');
var siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
