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

bindButton('video1Play', video1Play);
bindButton('video1pause', video1pause);