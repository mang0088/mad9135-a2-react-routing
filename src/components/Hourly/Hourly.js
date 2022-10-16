import React from 'react';
import '../Hourly/Hourly.css';

function Hourly({ hourlyweather }) {
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
  function formatDate(Hourly) {
    let newdate = new Date(Hourly * 1000);
    let strDate = newdate.toLocaleDateString();
    return strDate;
  }
  return (
    <>
      <div className="Weather-container">
        {hourlyweather?.map((item, index) => {
          return (
            <div key={index} className="hourly-card">
              <p className="date">{formatDate(item?.dt)}</p>
              <p className="time">{formatAMPM(item?.dt)}</p>

              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <p className="feels">
                {item?.feels_like}
                <sup>&deg;C</sup>{' '}
              </p>
              <p className="description">{item.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Hourly;
