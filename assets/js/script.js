/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/

var searchBtn = document.querySelector('#button-addon1');
const apiKey = '64fff1a969c76e6a48c1adb0a5ffeb4e';
const currentWeatherEl = document.querySelectorAll('.current-weather');
const cityInput = document.getElementById('city_name');





/* Code supplied by instructor
const weatherDays = []  
let currDay = null

sampleData.list.forEach( function(timestampObj){

  // Makes a moment date object for each record
  const dateObj = moment.unix(timestampObj.dt)

  // Generate the day # for the day in the date object
  const dateNum = dateObj.format("DDD")

  // If the current date in timestampObj hasn't had a record put into weatherDays, do that now 
  // Then skip over all other records for this day
  if( dateNum !== currDay && weatherDays.length < 5 ){
    weatherDays.push( timestampObj )
    currDay = dateNum
  }

})
*/

// when the seach button is clicked, it will look into this form field, call that api call and pass in city name
// objects for each one of the items needed
// parse json to get to it

// each city is a button to retrieve data from local storage
// currentweather can have city pass into it

function getCurrentWeather() {
 
  var city = cityInput.innerText
  var requestCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  console.log(cityInput.innerHTML);

  // fetch request to retrieve data
  fetch(requestCurrentUrl)

  .then(function (response) {
      return response.json();  
    })

  .then(function (data) {
      console.log(data);   
    })
}




function displayCurrentWeather(data) {

}





  // create dom objects for data information
        // card container
        // location/date (h2)
        // temp (p)
        // wind (p)
        // humidity (p)

function getFutureWeather() {

  var requestFutureWeath = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid=${apiKey}`;

  fetch(requestFutureWeath)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data)
    })
}

searchBtn.addEventListener('click', getCurrentWeather);






// localStorage for search history
    // setItem, getItem
    // tricky = types of data
    // key = "string", value = stored as a string
    // stringify/parse
    // array

// eventListener for search button, fetch request to grab api data and append things to screen (dynamically styled)

// gitHub api users for dynamically build query string/query url into the fetch request, from fetch request you get your data that you can do whatever you want it
