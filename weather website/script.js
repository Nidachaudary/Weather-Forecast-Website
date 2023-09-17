
// selection of tags using id and class
const input = document.getElementById("input");
const search = document.getElementById("search");
const display = document.querySelector(".display");
const weatherIconDisplay = document.getElementById("weatherIconDisplay");
const msg = document.getElementById("msg");
const weatherDetailDisplay = document.getElementById("weatherDetailDisplay");
// it is for dark and light mode box
const modeBox = document.querySelector(".modeBox");
// It is for full box of weather information with icon of weather
const setMode = document.querySelector(".setMode");
const sunIcon = document.querySelector(".sunIcon");
const moonIcon = document.querySelector(".moonIcon");

// for dark and light mode
let set = 1;
modeBox.addEventListener("click", function (event) {
  event.preventDefault();

  if (set === 1) {
    set = 0;
    darkMode();
  } else {
    set = 1;
    lightMode();
  }
});
// function for dark mode
function darkMode() {
  setMode.classList.remove("text-bg-light");
  setMode.classList.add("darkMode");
  modeBox.classList.remove("text-bg-light");
  modeBox.classList.add("text-bg-dark");
  sunIcon.classList.add("d-none");
  moonIcon.classList.remove("d-none");
  mode.classList.remove("border-dark");
  mode.classList.add("border-white");
}
// function for light mode
function lightMode() {
  setMode.classList.remove("darkMode");
  setMode.classList.add("text-bg-light");
  modeBox.classList.add("text-bg-light");
  modeBox.classList.remove("text-bg-dark");
  sunIcon.classList.remove("d-none");
  moonIcon.classList.add("d-none");
  mode.classList.add("border-dark");
  mode.classList.remove("border-white");
}
// when click on search event fire
search.addEventListener("click", function (event) {
  event.preventDefault();
  getData(input.value);
  input.value = "";
});
// gettind data from API and put in DOM
async function getData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4e68151a238f641cae8c6e40176bd39f&units=metric`
    );
    const weatherData = await response.json();
    console.log(weatherData);
    display.classList.remove("d-none");

    displayWeatherDetail(
      weatherData.weather[0].main,
      weatherData.timezone,
      weatherData.main.temp,
      weatherData.main.feels_like,
      weatherData.main.temp_min,
      weatherData.main.temp_max,
      weatherData.name,
      weatherData.sys.country,
      weatherData.main.humidity,
      weatherData.wind.speed
    );
  } catch (error) {
    display.classList.add("d-none");
    weatherIconDisplay.innerHTML = ``;
    weatherDetailDisplay.innerHTML = ``;
    displayFailure();
  }
}

function displayFailure() {
  console.log("nida");
  msg.innerText = "Something went wrong";
  msg.classList.remove("d-none");
  msg.classList.add("text-bg-dang");
  setTimeout(() => {
    msg.innerText = "";
    msg.classList.add("d-none");
  }, 2000);
}

// function displayWeatherdetail
function displayWeatherDetail(
  weather,
  timezone,
  temp,
  tempFeelsLike,
  tempMin,
  tempMax,
  name,
  country,
  humidity,
  windSpeed
) {
  weatherIcon(weather);
  const dateTime = dayDateTime(timezone);

  weatherDetailDisplay.innerHTML = `
  <h2 class="fw-bold text-center my-4">Info About Weather<h2>
  <p class =" h6">${dateTime}</p>
  <p class =" h6">Weather : ${weather}</p>
  <p class =" h6">City : ${name} ${country}</p>
    <p class =" h6">Temperature : ${temp}&degC</p>
    <p class =" h6">Feels_like : ${tempFeelsLike}&degC</p>
    <p class =" h6">Temp_Min : ${tempMin}&degC</p>
    <p class =" h6">Temp_Max : ${tempMax}&degC</p>

    
    <p class ="h6 ">Wind Speed :${windSpeed}</p>
    <p class ="h6 ">Humidity: ${humidity}</p>
   
 
   
   
    `;
}
// function weather icon 
function weatherIcon(weather) {
  if (weather === "Clouds") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/cloud.png" class = "iconDisplay">
        `;
  }

  if (weather === "Clear") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/clear.png" class = "iconDisplay">
        `;
  }

  if (weather === "Drizzle") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/drizzle.png" class = "iconDisplay">
        `;
  }

  if (weather === "Foggy") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/foggy.png" class = "iconDisplay">
        `;
  }

  if (weather === "Haze") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/haze.png" class = "iconDisplay">
        `;
  }

  if (weather === "Mist") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/mist.png" class = "iconDisplay">
        `;
  }

  if (weather === "Rain") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/raining.png" class = "iconDisplay">
        `;
  }

  if (weather === "Smoke") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/smoke.png" class = "iconDisplay">
        `;
  }

  if (weather === "Sun") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/sun.png" class = "iconDisplay">
        `;
  }

  if (weather === "Sunny") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/sunny.png" class = "iconDisplay">
        `;
  }

  if (weather === "Wind") {
    weatherIconDisplay.innerHTML = `
        <img src="./images/wind.png" class = "iconDisplay">
        `;
  }
}
// function dayDateTime


//GMT stands for "Greenwich Mean Time." It is a time standard originally referring to mean solar time at the Prime Meridian (0 degrees longitude), which passes through Greenwich, London, United Kingdom.
function dayDateTime(timeZoneInSeconds) {
  // Calculate the time zone  in milliseconds (Date objects use milliseconds)
  const timeZoneInMilliseconds = timeZoneInSeconds * 1000;

  // Create a Date object representing the current day date and time in local timezone of user device
  const utcDate = new Date(); //UTC date in GMT

  // Calculate the day date and time in the specified time zone which is in GMT
  const timeZoneDate = new Date(utcDate.getTime() + timeZoneInMilliseconds); //utcDate.getTime() = 1692 etc total 14 digits almost

  // Format the date and time using the specified time zone which is in GMT

  const formatter = new Intl.DateTimeFormat("en-US", {
    // Coordinated Universal Time (UTC) as the international time standard
    timeZone: "UTC",

    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
  });

  const formattedDate = formatter.format(timeZoneDate);

  return formattedDate;
}
