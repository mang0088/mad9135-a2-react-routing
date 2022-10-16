import React from 'react';
import '../Home/Home.css';

function Home({ weather }) {
  function formatAMPM(Hourly) {
    let newdate = new Date(Hourly * 1000);
    let hours = newdate.getHours();
    let minutes = newdate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
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
                <p>Sunrise: {formatAMPM(weather.sys.sunrise)}</p>
                <p>Sunset: {formatAMPM(weather.sys.sunset)}</p>
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
