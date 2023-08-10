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

document.addEventListener("DOMContentLoaded", function() {

const cardData = [
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/PD5ChZivdq4/hqdefault.jpg",
    title: "Womier WK61",
    switches: "KTT Kang Whites.",
    stabilizers: "Krytox 205g0, holee modded",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_1.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/k1O4T5VYwGk/hqdefault.jpg",
    title: "Tiger80",
    switches: "KTT Kang Whites",
    case: "aluminium",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_2.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/9ubd5OoYtOk/hqdefault.jpg",
    title: "Gas67",
    switches: "KTT Kang Whites",
    case: "Smokey (Semi-Translucent) Black",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_3.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/kIp1vQMt2VE/hqdefault.jpg",
    title: "Akko SPR67",
    switches: "KNC Tofu Linears",
    case: "White aluminium",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_4.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/76uJCfQN9rA/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Akko MOD007v2",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_5.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/ZZO1j-R_WJs/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Akko MOD006",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_6.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/gJC67c-2crE/hqdefault.jpg",
    title: "RK61",
    switches: "--",
    case: "--",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_7.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/tTxIY2iTCCY/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Leaf65",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_8.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/if5ghkuhXAs/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Roses",
    case: "Next Time 75",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_9.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/KCBDClhUsjU/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Peaches",
    case: "YMDK Melody 96",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_10.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/GCdFmBZLk3U/hqdefault.jpg",
    title: "Custom Build",
    switches: "Quartz V2",
    case: "Size.L Green",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_11.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/uIL97ELHJEw/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT HaloHalus",
    case: "Savage65",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_12.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/ecaTtRRAlSQ/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_13.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/q56nEOjZlq8/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_14.mp3"
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/EfGFygmGpHo/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/Keyed-In-Peace/audio/audio_keyboard_15.mp3"
  },
  {
    category: "other",
    imgSrc: "https://images.theconversation.com/files/272916/original/file-20190506-103075-yq4lnf.jpg",
    title: "Rain",
    description: "Raindrops",
    emoji: "⛈️🌧️🌧️",
    audioSrc: "/Keyed-In-Peace/audio/audio_Rain.mp3"
  },
  {
    category: "other",
    imgSrc: "https://i.ytimg.com/vi/qsOUv9EzKsg/maxresdefault.jpg",
    title: "Fire",
    description: "Campfire crackling",
    emoji: "🔥🔥🔥",
    audioSrc: "/Keyed-In-Peace/audio/audio_Fire.mp3"
  },
  {
    category: "other",
    imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt07d89d3bb6115752/21336.png",
    title: "Office",
    description: "Fun Office",
    emoji: "🏢🏢🏢",
    audioSrc: "/Keyed-In-Peace/audio/audio_Office.mp3"
  },
  {
    category: "other",
    imgSrc: "https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AirPlane",
    description: "Airplane White Noise",
    emoji: "✈️✈️✈️",
    audioSrc: "/Keyed-In-Peace/audio/audio_Airplane.mp3"
  },
  {
    category: "other",
    imgSrc: "https://plus.unsplash.com/premium_photo-1682145344450-34d8323dec84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Air Conditioner",
    description: "Sweet Sound of Wind",
    emoji: "🍃🍃🍃",
    audioSrc: "/Keyed-In-Peace/audio/audio_Air_conditioner.mp3"
  },
  {
    category: "other",
    imgSrc: "https://images.unsplash.com/photo-1547083723-7c73eaf54cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG9jZWFufGVufDB8fDB8fHww",
    title: "Ocean",
    description: "Sweet Sound of Waves",
    emoji: "🌊🌊🌊",
    audioSrc: "/Keyed-In-Peace/audio/audio_Ocean.mp3"
  }
];


const cardsContainer = document.getElementById("cards-container");

cardData.forEach((data, index) => {
  const card = document.createElement("div");
  card.className = "column";
  card.setAttribute("data-category", data.category);

  card.innerHTML = `
    <div class="Card">
      <img src="${data.imgSrc}" alt="Keyboard ${index + 1}" loading="lazy">
      <h2>${data.title}</h2>
      <p>Switches: ${data.switches}</p>
      <p>Stabilizers: ${data.stabilizers}</p>
      <audio id="keyboard${index + 1}-sound" src="${data.audioSrc}" loop data-type="keyboard"></audio>
      <div id="player">
        <input type="range" min="0" max="1" value="0" step="0.01" oninput="setVolume('keyboard${index + 1}-sound', this.value)" onclick="playSound('keyboard${index + 1}-sound',value)">
      </div>
    </div>
  `;

  cardsContainer.appendChild(card);
});
});