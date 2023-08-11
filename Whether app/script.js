const input = document.getElementById("input");
const search = document.getElementById("search");
const weatherTempDisplay = document.getElementById("weatherTempDisplay");
const weatherIconDisplay = document.getElementById("weatherIconDisplay");
const msg = document.getElementById("msg");
const humidityAndWind = document.getElementById("humidityAndWind");
const mode = document.querySelector(".mode");
const setMode = document.querySelector(".setMode");

let set = 1;
mode.addEventListener("click" , function(event){
  event.preventDefault();
   
    if(set === 1){
        set = 0;
        darkMode()
    } 
    else
    {
        console.log("waheed");
        set = 1;
        lightMode()
    }
});

function darkMode()
{
    setMode.classList.remove("text-bg-light");
    setMode.classList.add("text-bg-dark");
}

function lightMode()
{
    setMode.classList.remove("text-bg-dark");
    setMode.classList.add("text-bg-light");
}

search.addEventListener("click" , function(event){
    event.preventDefault();
    getData(input.value)
    
});


async function getData(cityName){
    try {
       
       
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4e68151a238f641cae8c6e40176bd39f&units=metric`); 
        const weatherData = await response.json();
        console.log(weatherData);
      
        const longitude = weatherData.coord.lon;
        const latitude = weatherData.coord.lat;
        console.log(longitude , latitude);
        displayWeatherDetail(weatherData.main.temp , weatherData.timezone , weatherData.name ,weatherData.sys.country ,  weatherData.main.humidity, weatherData.wind.speed,weatherData.weather[0].main)
       
      
       
    } catch (error) {
        weatherTempDisplay.innerHTML = ``;
        weatherIconDisplay.innerHTML = ``;
        humidityAndWind.innerHTML = ``;
        displayFailur();
    }

   
 }

function displayFailur()
{
  msg.innerText = "Something went wrong";
  msg.classList.remove("d-none");
  msg.classList.add("text-bg-dang");
  setTimeout(() => {
    msg.innerText = "";
    msg.classList.add("d-none");
  }, 2000);
}
 
function displayWeatherDetail(temp ,timezone , name , country ,  humidity,   windSpeed , weather )
{
 
    const dateTime = dayDateTime(timezone)
    weatherTempDisplay.innerHTML = ` 
    <p class ="fw-bold display-6">${temp}&degC</p>
    `;

    weatherIcon(weather)
    
    

    humidityAndWind.innerHTML = `
    <p class ="fw-bold h6 text-center">${dateTime}</p>
    <p class ="h6 fw-bold">Wind Speed :${windSpeed}</p>
    <p class ="h6 fw-bold">Humidity: ${humidity}</p>
    <p class ="fw-bold h6">${name} ${country}</p>
 
   
   
    `;
   
}

function weatherIcon(weather)
{
    if(weather === "Clouds")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/cloud.png" class = "iconDisplay">
        `;
    }

    if(weather === "Clear")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/clear.png" class = "iconDisplay">
        `;
    }

    if(weather === "Drizzle")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/drizzle.png" class = "iconDisplay">
        `;
    }


    if(weather === "Foggy")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/foggy.png" class = "iconDisplay">
        `;
    }


    if(weather === "Haze")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/haze.png" class = "iconDisplay">
        `;
    }

    if(weather === "Mist")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/mist.png" class = "iconDisplay">
        `;
    }

    if(weather === "Rain")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/raining.png" class = "iconDisplay">
        `;
    }

    if(weather === "Smoke")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/smoke.png" class = "iconDisplay">
        `;
    }

    if(weather === "Sun")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/sun.png" class = "iconDisplay">
        `;
    }

    if(weather === "Sunny")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/sunny.png" class = "iconDisplay">
        `;
    }

    if(weather === "Wind")
    {
        weatherIconDisplay.innerHTML = `
        <img src="./images/wind.png" class = "iconDisplay">
        `;
    }


}



function dayDateTime(timeZoneInSeconds)
{
   
// Calculate the time zone  in milliseconds (Date objects use milliseconds)
const timeZoneInMilliseconds = timeZoneInSeconds * 1000;

// Create a Date object representing the current day date and time in local timezone of user divice
const utcDate = new Date();
console.log(utcDate.getTime());
// Calculate the day date and time in the specified time zone
const timeZoneDate = new Date(utcDate.getTime() + timeZoneInMilliseconds);
                              //utcDate.getTime() = 1692 etc total 14 digits almost
// Format the date and time using the specified time zone
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
 
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  weekday: 'long'
 
});
console.log(formatter);
const formattedDate = formatter.format(timeZoneDate);

return formattedDate;



}
   
