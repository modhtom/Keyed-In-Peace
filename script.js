function playSound(id,value) {
  var sound = document.getElementById(id);
  if(value!=0)
  sound.play();
  else
  sound.stop();
}

function setVolume(id, volume) {
  var sound = document.getElementById(id);
  sound.volume = volume;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector(".float-button").style.display = "block";
  } else {
    document.querySelector(".float-button").style.display = "none";
  }
}










