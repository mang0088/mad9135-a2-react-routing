import React from 'react';
import '../Home/Home.css';

function Home({ weather }) {
  return (
    <div className="box-container">
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="subinfo">
            <div className="box-1">
              <p>Feels Like: {weather.main.feels_like}</p>
            </div>
            <div className="box-2">
              <div className="inbox-1">
                <p>Sunrise: {weather.sys.sunrise}</p>
                <p>Sunset: {weather.sys.sunset}</p>
              </div>
              <div className="inbox-2">
                <p>longitude: {weather.coord.lon}</p>
                <p>latitude: {weather.coord.lat}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
