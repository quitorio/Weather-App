import React from 'react';
import './App.css';

function WeatherInfo({ city, temperature, description }) {
    return (
        <div className="weather-info">
            <h2 id="city">{city}</h2>
            <p id="temperature">Temperature: {temperature}°C</p>
            <p id="description">Description: {description}</p>
        </div>
    );
}

function App() {
    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <WeatherInfo city="City Name" temperature="25" description="Clear sky" />
        </div>
    );
}

export default App;
