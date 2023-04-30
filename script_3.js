const apiKey = '012e183596f84952a0f182543231504';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`;
let tempInF = false;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const apiUrlWithCoords = `${apiUrl}&q=${latitude},${longitude}`;
    fetch(apiUrlWithCoords)
      .then(response => response.json())
      .then(data => {
        const { location, current } = data;
        const iconUrl = `https:${current.condition.icon}`;
        const city = location.name;
        const country = location.country;
        const tempF = current.temp_f;
        const tempC = current.temp_c;
        const condition = current.condition.text;
        const humidity = `Humidity: ${current.humidity}%`;

        document.querySelector('.city').textContent = city;
        document.querySelector('.country').textContent = country;
        document.querySelector('.icon').setAttribute('src', iconUrl);
        document.querySelector('.temp').textContent = tempC;
        document.querySelector('.unit').textContent = '°c';
        document.querySelector('.condition').textContent = condition;
        document.querySelector('.humidity').textContent = humidity;

        setInterval(() => {
          if (tempInF) {
            document.querySelector('.temp').textContent = tempC;
            document.querySelector('.unit').textContent = '°C';
            tempInF = false;
          } else {
            document.querySelector('.temp').textContent = tempF;
            document.querySelector('.unit').textContent = '°F';
            tempInF = true;
          }
        }, 30000);
      });
  });
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds(); // Fixed typo here
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const clockElement = document.getElementById('clock');
  clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  const dateElement = document.getElementById('date');
  dateElement.innerHTML = `${day}, ${date}`;
}
setInterval(updateTime, 1000);

window.addEventListener('load', () => {
  new Timer(document.querySelector('.timer'));
});

function showVideos() {
  var videos = document.querySelectorAll('.column video');
  var checkbox = document.getElementById('show-videos');

  if (checkbox.checked) {
    for (var i = 0; i < videos.length; i++) {
      videos[i].style.display = 'block';
    }
  } else {
    for (var i = 0; i < videos.length; i++) {
      videos[i].style.display = 'none';
    }
  }
}