import { apiKey } from './config.js';

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('forecast').textContent = `Forecast: ${data.weather[0].main}`;
            const time = new Date(data.dt * 1000).toLocaleTimeString(); // Convert timestamp to local time
            document.getElementById('time').textContent = `Time: ${time}`; // Display the time
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
