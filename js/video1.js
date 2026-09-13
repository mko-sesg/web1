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

bindButton('video1Play', video1Play);
bindButton('video1pause', video1pause);