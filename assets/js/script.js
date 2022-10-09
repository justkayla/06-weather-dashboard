// DOM selectors
const apiKey = '64fff1a969c76e6a48c1adb0a5ffeb4e';
const searchBtn = document.querySelector('#search-button');
let cityInput = document.getElementById('city_name');
const currentWeatherResults = document.getElementById('current-weather-content');
const futureWeatherResults = document.getElementById('future-weather-content');

let savedWeather = [];

// Retrieve current city weather data / fetch command
function getCurrentWeather(event) {
 
  let city = cityInput.value;

  let requestCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

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

  // create buttons in here
  const button = document.createElement("button");
  button.setAttribute("class", "city-button");
  button.innerHTML = city;
  document.querySelector(".search-box").appendChild(button);

  //event listener that sends city name to pre-existing function
  // if city-button is clicked, button's html as city, input field as city
  // button.addEventListener('click', function() {
  //   event.target = button;
  // })
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
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  // create and append resultBody body <div> inside resultCard container <div>
  let resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  // Append resultBody to resultCard
  resultCard.append(resultBody);

  // create <h3> to hold searched city name
  let locationEl = document.createElement('h3');
  locationEl.classList.add('h3');
  locationEl.textContent = data.name;

  // create <h4> to hold date
  let dateEl = document.createElement('h4');
  dateEl.classList.add('h4');
  dateEl.textContent = moment().format("MMM Do YYYY");

  // create <p> to hold weather information
  let temperatureEl = document.createElement('p');
  temperatureEl.classList.add('p');
  temperatureEl.textContent = "Temp: " + data.main.temp + "°F";

 // No more UV index

  let humidityEl = document.createElement('p');
  humidityEl.classList.add('p');
  humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

  let windEl = document.createElement('p');
  windEl.classList.add('p');
  windEl.textContent = "Wind speed: " + data.wind.speed + "mph";

  // Fix display
  let iconEl = document.createElement('img');
  iconEl.classList.add('icon');
  iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let descriptionEl = document.createElement('p');
  descriptionEl.classList.add('p');
  descriptionEl.textContent = data.weather[0].main;

  // append weather information to resultBody
  resultBody.append(locationEl, dateEl, temperatureEl, humidityEl, windEl, iconEl, descriptionEl);
  
  // append entire contents of resultBody to currentWeatherResults
  currentWeatherResults.append(resultCard);  
}


// Retrieve future city weather data / fetch command
function getFutureWeather() {

  let city = cityInput.value
  
  let requestFutureUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
  console.log(cityInput.value);

  fetch(requestFutureUrl)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data)

      // This empties out results, allows for new data
      // innerHTML removes any content inside of a targeted container
      futureWeatherResults.innerHTML=""

      for (let i = 7; i < 40; i += 7) {
        console.log(data.list[i]);

        displayFutureWeather(data.list[i]);        
      }    
         
    })
}

// Referenced mini-project-06 solution code
// This function creates and displays the elements for the futureWeather section
function displayFutureWeather(data) {
  
  console.log(data); 
      
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
  locationEl.classList.add('h3');
  locationEl.textContent = data.name;

  // create <h4> to hold date
  let dateEl = document.createElement('h4');
  dateEl.classList.add('h4');
  dateEl.textContent = moment.unix(data.dt).format("MMM Do YYYY");

  // create <p> to hold weather information
  let temperatureEl = document.createElement('p');
  temperatureEl.classList.add('p');
  temperatureEl.textContent = "Temp: " + data.main.temp + "°F";

  let humidityEl = document.createElement('p');
  humidityEl.classList.add('p');
  humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

  let windEl = document.createElement('p');
  windEl.classList.add('p');
  windEl.textContent = "Wind speed: " + data.wind.speed + "mph";

  // Fix display
  let iconEl = document.createElement('img');
  iconEl.classList.add('icon');
  iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let descriptionEl = document.createElement('p');
  descriptionEl.classList.add('p');
  descriptionEl.textContent = data.weather[0].main;

  // append weather information to resultBody
  resultBody.append(locationEl, dateEl, temperatureEl, humidityEl, windEl, iconEl, descriptionEl);
  
  // append entire contents of resultBody to futureWeatherResults
  futureWeatherResults.append(resultCard);
}

savedWeather = JSON.parse(localStorage.getItem("saved-weather"));

searchBtn.addEventListener('click', function() {

  // Click search button, results are saved to local storage
  // Save city to local storage
  // Assign to city button
   
    console.log(cityInput.value);
    console.log(savedWeather);
    savedWeather.push(cityInput.value);   // Why isn't this working?
    cityInput.value = "";
    localStorage.setItem("saved-weather", JSON.stringify(savedWeather));  
  
  getCurrentWeather();
});
