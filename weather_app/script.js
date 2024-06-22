const apiKey = "7c50cff36ac3c84813e539a89ece98ed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBod = document.querySelector(".inputbox");
const searchBtn = document.querySelector(".form button");
const weatherIcon = document.querySelector(".status img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (response.status == 404) {
    document.querySelector(".invalid").style.display = "flex";
  } else {
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + "&deg;C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/weather_app/image/cloudy_164806.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/weather_app/image/storm_249143.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/weather_app/image/icons8-partly-cloudy-day-96.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/weather_app/image/icons8-rain-cloud-96.png";
    } else {
      document.querySelector(".weath").style.display = "none";
    }

    document.querySelector(".weath").style.display = "flex";
    document.querySelector(".invalid").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBod.value);
  searchBod.value = "";
});
