import axios from 'axios';

export const FetchWeatherForecast = async (lat, lon) => {
  const URL = ' https://openweathermap.org/data/2.5/onecall';
  const API_KEY = '439d4b804bc8187953eb36d2a8c26a02';

  const { data } = await axios.get(URL, {
    params: {
      lat: lat,
      lon: lon,
      units: 'metric',
      appid: API_KEY,
      dt: 'Unix time',
    },
  });
  return data;
};
