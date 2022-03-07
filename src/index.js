let now = new Date();
let h3 = document.querySelector("h3");
let hour = now.getHours();
let min = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${hour}:${min}`;

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  city.innerHTML = cityName.value;

  searchCity(cityName.value);
}

function searchCity(city) {
  let apiKey = "021be1bf6bbbf0a54cf5f03d5e6f32ee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(celsiusTemp);
  let h1 = document.querySelector("#degrees");
  let iconElement = document.querySelector("#icon");
  let descriptionElement = document.querySelector("#description");
  let city = document.querySelector("#city");

  celsiusTemp = response.data.main.temp;

  h1.innerHTML = `${temperature}ºC`;
  city.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let celsiusTemp = null;

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", search);

function displayFahrenheitTemp(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let tempElement = document.querySelector("#degrees");
  tempElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let tempElement = document.querySelector("#degrees");
  tempElement.innerHTML = Math.round(celsiusTemp);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

searchCity("Santa Monica");
