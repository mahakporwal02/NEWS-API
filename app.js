function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
  
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "d6ff09b8e0ecf0a5a71bba510934ea60";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          temperature.innerHTML = temp + "° F";
          location.innerHTML =
            data.name;
          description.innerHTML = data.weather[0].main;
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
  getWeather()

let article=document.getElementById("article");
let division=document.getElementById("div");
window.addEventListener("DOMContentLoaded",function(){
    console.log("hello")
    fetch("https://newslit-news-search.p.rapidapi.com/news?q=pandemic%20in%20india", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "api_key",
      "x-rapidapi-host": "newslit-news-search.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(data=>{
    console.log(data.results.stories)
    let art=data.results.stories;
    console.log(art);
        displayNews(art);
    
})
.catch(err => {
    console.log(err);
});
})
  
  function displayNews(art) {
    let display = art.map(function (item) {
      console.log(item);
  
      return ` <div class=" card text-center col-5">
              <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h1 class="card-title">${item.title}</h1>
              <p class="card-text"> ${item.excerpt}</p>
              <img src=${item.image_url} style="width:318px;height:159px;" alt="image not visible">
            </div>
            <div class="card-footer text-muted">
            author :
            ${item.source}
            </div>
            </div>`;
    });display = display.join("");
    // console.log(display);
    division.innerHTML = display;
  }
window.addEventListener("DOMContentLoaded",function()
{
  typeWriter();
})
  var i = 0;
  var txt = "The Name You Know. The News You Need."; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}