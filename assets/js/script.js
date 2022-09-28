
var searchBtn = document.querySelector('#button-addon1');

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



// Code supplied by instructor
const weatherDays = []  
let currDay = null

/*
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


function getCurrentWeather() {
  // fetch request to retrieve data
  var requestCurrWeath = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={64fff1a969c76e6a48c1adb0a5ffeb4e}';

  // Initiate the request
  fetch(requestCurrWeath)

    .then(function (response) {
      return response.json();
  })

    .then(function (data) {
      console.log(data)

    })



}

function getFutureWeather() {

  var requestFutureWeath = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={64fff1a969c76e6a48c1adb0a5ffeb4e}';

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
