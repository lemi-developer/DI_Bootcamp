$("#myForm").submit(function (e) {
  e.preventDefault();
});

function getWeatherData() {
  const input = document.getElementById("enterCity");
  const cityName = input.value;
  const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
  //console.log(cityName);

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
  );

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}, ${xhr.statusText}`);
    } else {
      const arrayOfResponse = xhr.response;

      console.log(arrayOfResponse);

      gatherWeatherCardData(arrayOfResponse);
      createCityList(arrayOfResponse);
    }
  };
}

function createCityList(arrayOfResponse) {
  arrayOfResponse.forEach((x) => console.log(x.name));
}

function gatherWeatherCardData(arrayOfResponse) {
  let cardInfoArray = [];

  const city = arrayOfResponse[0].name;
  const state = arrayOfResponse[0].state;
  const country = arrayOfResponse[0].country;

  cardInfoArray.push(city, state, country);

  console.log(cardInfoArray);

  const latitude = arrayOfResponse[0].lat;
  const longitude = arrayOfResponse[0].lon;

  console.log(latitude);
  console.log(longitude);

  getWeatherDetails(latitude, longitude, cardInfoArray);
}

function getWeatherDetails(latitude, longitude, cardInfoArray) {
  const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

  let xhr2 = new XMLHttpRequest();

  xhr2.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );

  xhr2.responseType = "json";

  xhr2.send();

  let jsonOfResponse = {};

  xhr2.onload = () => {
    if (xhr2.status != 200) {
      alert(`Error ${xhr2.status}, ${xhr2.statusText}`);
    } else {
      jsonOfResponse = xhr2.response;

      console.log(jsonOfResponse.main);

      const weatherType = jsonOfResponse.weather[0].main;
      const weatherTypeDescription = jsonOfResponse.weather[0].description;
      const weatherIcon = jsonOfResponse.weather[0].icon;
      const temperature = Math.round(jsonOfResponse.main.temp - 273.15);
      const humidity = jsonOfResponse.main.humidity;

      cardInfoArray.push(
        weatherType,
        weatherTypeDescription,
        weatherIcon,
        temperature,
        humidity
      );

      console.log(cardInfoArray);

      createWeatherCard(cardInfoArray);
    }
  };
}

function createWeatherCard(cardInfoArray) {
  //cardInfoArray = [city, state, country, weatherType, weatherTypeDescription, weatherIcon, temperature, humidity]

  const divCard = document.createElement("div");
  divCard.setAttribute("id", "weatherCard");
  document.body.appendChild(divCard);

  const city = document.createElement("p");
  const state = document.createElement("p");
  const country = document.createElement("p");
  const weatherType = document.createElement("p");
  const weatherTypeDescription = document.createElement("p");
  const weatherIcon = document.createElement("p");
  const temperature = document.createElement("p");
  const humidity = document.createElement("p");

  city.innerHTML = cardInfoArray[0];
  state.innerHTML = cardInfoArray[1];
  country.innerHTML = cardInfoArray[2];
  weatherType.innerHTML = cardInfoArray[3];
  weatherTypeDescription.innerHTML = cardInfoArray[4];
  weatherIcon.innerHTML = cardInfoArray[5];
  temperature.innerHTML = cardInfoArray[6];
  humidity.innerHTML = cardInfoArray[7];

  divCard.appendChild(city);
  divCard.appendChild(state);
  divCard.appendChild(country);
  divCard.appendChild(weatherType);
  divCard.appendChild(weatherTypeDescription);
  divCard.appendChild(weatherIcon);
  divCard.appendChild(temperature);
  divCard.appendChild(humidity);
}
