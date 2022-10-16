import React from 'react';
import '../Hourly/Hourly.css';

function Daily({ dailyweather }) {
  function formatDate(Hourly) {
    let newdate = new Date(Hourly * 1000);
    let strDate = newdate.toLocaleDateString();
    return strDate;
  }
  return (
    <>
      <div className="Weather-container">
        {dailyweather?.map((item, index) => {
          return (
            <div key={index} className="hourly-card">
              <p className="date">{formatDate(item?.dt)}</p>

              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <div>
                <p className="feels">
                  Day: {item?.feels_like.day}
                  <sup>&deg;C</sup>{' '}
                </p>
                <p className="feels">
                  Night: {item?.feels_like.night}
                  <sup>&deg;C</sup>{' '}
                </p>
              </div>
              <p className="description">{item.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Daily;
