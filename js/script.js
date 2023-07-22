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

function filterCards() {
  const category = document.getElementById('category-select').value;
  const cards = document.querySelectorAll('.column');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else if (card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}