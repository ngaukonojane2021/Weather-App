// Feature 1

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

// Bonus 2
function displayWeather(response) {
  document.querySelector("#cities").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "1f6495a4cf85fa63425487a4f8369389";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "1f6495a4cf85fa63425487a4f8369389";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("Nairobi");

// function searchButton(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-text-input");

//   let cities = document.querySelector("#cities");
//   cities.innerHTML = `${searchInput.value}`;
// }
// let buttonSubmit = document.querySelector("#search-form");
// buttonSubmit.addEventListener("click", searchButton);

// Bonus Feature

// function showTemperature(event) {
//   event.preventDefault();
//   let celciusElement = document.querySelector("#degrees");
//   celciusElement.innerHTML = 20;
// }
// let degreesLink = document.querySelector("#degeesCelcius");
// degreesLink.addEventListener("click", showTemperature);

// function showFah(event) {
//   event.preventDefault();
//   let celciusElement = document.querySelector("#degrees");
//   celciusElement.innerHTML = 68;
// }
// let fahLink = document.querySelector("#fah");
// fahLink.addEventListener("click", showFah);
