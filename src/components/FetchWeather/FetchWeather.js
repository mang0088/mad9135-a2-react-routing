import axios from 'axios';

export const FetchWeather = async (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'a1df62d7ced8603b9404d5ac723f37a2';

  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
