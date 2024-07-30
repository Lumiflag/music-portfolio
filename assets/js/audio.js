document.addEventListener(
  "play",
  function (e) {
    var audio = document.getElementsByTagName("audio");
    for (var i = 0; i < audio.length; i++) {
      if (audio[i] != e.target) {
        audio[i].currentTime = 0;
        audio[i].pause();
      }
    }
  },
  true
);
