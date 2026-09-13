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

var navToggle = document.getElementById('navToggle');
var siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
