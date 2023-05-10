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

async function getNews(){
  var no_news=0;
  await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=zszMFqTqVAxgrhKzOb9MfOKHeczZmGxV')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < response.results.length; i++){
            const output = document.getElementById('output');
          if (response.results[i].section === "Food") {
              const output = document.getElementById('output');
            try{             
                output.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <a href="${response.results[i].url}" target="_blank" class="card-link">
                    <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}">
                    </a><br>
                    <h2 class="card-title">${response.results[i].title}</h2>
                    <div class="card-text">
                        <p>${response.results[i].abstract}</p>
                    </div>
                    </div>
                    </div>
                    <br>
                    `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            console.log(response.results[i].title);
            console.log(i);
          }
          else{
           no_news=1;
         }
        }
        if(no_news=1){
          try{
            output.innerHTML += `
                <div class="card">
                <div class="card-body">
                <a href="index.html" target="_blank" class="card-link">
                <img src="https://www.professionalcallminders.co.uk/wp-content/uploads/2017/05/no-news.png" class="card-img-top" alt="No News">
                </a><br>
                <h2 class="card-title">No More News for Now.</h2>
                <div class="card-text">
                    <p>📰🗞️📰🗞️📰</p>
                </div>
                </div>
                </div>
                <br>
                `
            console.log("No News");
        }
        catch(err){
            console.log(err);
        }
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
  }
  getNews();

  $(document).ready(function() {
    function getQuote() {
      $.ajax({
        url: "https://api.quotable.io/random?tags=inspirational",
        success: function(data) {
          $("#quote").text(data.content + " \n\n\n- " + data.author);
        }
      });
    }
    getQuote();
  });

  class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };
      this.interval = null;
      this.remainingSeconds = 0;
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
    start() {
      if (this.remainingSeconds === 0) return;
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
      this.updateInterfaceControls();
    }
    stop() {
      clearInterval(this.interval);
      this.interval = null;
      this.updateInterfaceControls();
    }
    static getHTML() {
      return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--start">
          <span class="material-icons">play_arrow</span>
        </button>
        <button type="button" class="timer__btn timer__btn--reset">
          <span class="material-icons">timer</span>
        </button>
      `;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
  new Timer(
    document.querySelector(".timer")
  );
});