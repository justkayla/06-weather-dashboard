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
const currentWeatherResults = document.querySelector('#current-weather-content')
const cityInput = document.getElementById('city_name');


/*  
  OoO- 

  1. User types in a city name
    a. What if the city doesn't exist? (return or alert?)
    b. What if there is a typo in the city name? (return or alert?)
  
  2. User clicks search button

  3. Several actions are attached to the search button:
    a. fetch request to the api to retrieve city-specific current and future forecasts
    b. display of fetched data in current and future forecast <divs>
    c. save searched city information to localStorage
    d. create and append designated buttons to saved searches
    e. user can access old searches with new buttons

  4. Repeat
*/


// Every time search, create button, set button's text to search, append button to div, eventListener that when clicked will 
// when page loads, attempts to retrieve previous city searches, creates buttons


// Retrieve current city weather data / fetch command
function getCurrentWeather() {
 
  var city = cityInput.value

  var requestCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  console.log(cityInput.value);

  // Fetch request to retrieve data
  fetch(requestCurrentUrl)

  // Parse the data
  .then(function (response) {
      return response.json();  
    })

  // With the returned data....
    .then(function (data) {    
           

    displayCurrentWeather(data);
    getFutureWeather(data);   
  }).catch (function (error) {
    alert("City not found.");    
  })
}

// Referenced mini-project-06 solution code
// This function creates and displays the elements for the currentWeather section
function displayCurrentWeather(data) {
  console.log(data);  
   
  // This empties out results, allows for new data
  // innerHTML removes any content inside of a targeted container
  currentWeatherResults.innerHTML=""

  // set up <div> to hold result content
  let resultCard = document.createElement('div');
  // classList returns CSS names of an element; used alon it's read-only, but methods can be used
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  // create and append resultBody body <div> inside resultCard container <div>
  let resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  // Append resultBody to resultCard
  resultCard.append(resultBody);

  // create <h3> to hold searched city name
  let locationEl = document.createElement('h3');
  locationEl.textContent = data.name;

  // create <h4> to hold date
  let dateEl = document.createElement('h4');
  dateEl.textContent = moment().format("MMM Do YYYY");

  // create <p> to hold weather information
  let temperatureEl = document.createElement('p');
  temperatureEl.textContent = "Temp: " + data.main.temp + " degrees";

  let humidityEl = document.createElement('p');
  humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

  let windEl = document.createElement('p');
  windEl.textContent = "Wind speed: " + data.wind.speed + " mph";

  // append weather information to resultBody
  resultBody.append(locationEl, dateEl, temperatureEl, humidityEl, windEl);
  
  // append entire contents of resultBody to currentWeatherResults
  currentWeatherResults.append(resultCard);
}


// Retrieve future city weather data / fetch command
function getFutureWeather() {

  var city = cityInput.value
  
  var requestFutureUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
  console.log(cityInput.value);

  fetch(requestFutureUrl)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      // console.log(data)

      for (var i = 0; i < 40; i += 8) {
        console.log(data.list[i]);
      } 
    })
}



  

searchBtn.addEventListener('click', getCurrentWeather);









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



// localStorage for search history
    // setItem, getItem
    // tricky = types of data
    // key = "string", value = stored as a string
    // stringify/parse
    // array

// eventListener for search button, fetch request to grab api data and append things to screen (dynamically styled)

// gitHub api users for dynamically build query string/query url into the fetch request, from fetch request you get your data that you can do whatever you want it
