document.getElementById('getWeather').addEventListener('click', function() {
  let city = document.getElementById('city').value;
  let apiKey = '6bd1a36adbf2ee6e3e407545273eaede'; 
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.cod === "404") {
              document.getElementById('weatherData').innerHTML = "City not found.";
          } else {
              document.getElementById('weatherData').innerHTML = `
                  <h2>${data.name}</h2>
                  <p>Temperature: ${data.main.temp} °C</p>
                  <p>Weather: ${data.weather[0].description}</p>
              `;
          }
      })
      .catch(error => console.error('Error fetching data:', error));
});