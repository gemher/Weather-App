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
  let h2 = document.querySelector("h2");
  h2.innerHTML = cityName.value;
  let apiKey = "021be1bf6bbbf0a54cf5f03d5e6f32ee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#degrees");

  h1.innerHTML = `${temperature}ºC`;
}
let form = document.querySelector("#city-search-form");
form.addEventListener("submit", search);
