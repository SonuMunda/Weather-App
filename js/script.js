// default city declaration
let cityName = "Rupnagar";

// Event listener for the search form submission
document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let searchInput = document.querySelector('input[name="search-input"]');
  cityName = searchInput.value;
  console.log(cityName);
  getWeather();
  searchInput.value = "";
});

// Function to fetch weather data
function getWeather() {
  const apiKey = "1aaabebf5ceb4bbd92a123455231307";
  const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    cityName
  )}`;

  // Fetch weather data from API
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process the weather data and update the HTML elements
      document.getElementById(
        "city"
      ).innerHTML = `<h1>${data.location.name} ${data.location.region}, ${data.location.country}</h1>`;
      document.getElementById(
        "date-time"
      ).innerHTML = `<p>${data.location.localtime}</p>`;
      document.getElementById(
        "weather-type"
      ).innerHTML = `<span>${data.current.condition.text}</span>`;
      document.getElementById(
        "weather-icon"
      ).innerHTML = `<img src="${data.current.condition.icon}">`;
      document.getElementById(
        "temperature"
      ).innerHTML = `<p>${data.current.temp_c} &deg;C</p>`;
      document.getElementById(
        "visibility"
      ).innerHTML = `<p>Visibility ${data.current.vis_km} km</p>`;
      document.getElementById(
        "feelslike"
      ).innerHTML = `${data.current.feelslike_c} &deg;C`;
      document.getElementById(
        "humidity"
      ).innerHTML = `${data.current.humidity}%`;
      document.getElementById(
        "wind-speed"
      ).innerHTML = `${data.current.wind_kph} km/h`;
      document.getElementById(
        "pressure"
      ).innerHTML = `${data.current.pressure_in} inHg`;
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
