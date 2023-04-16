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
