import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Daily from './components/Daily/Daily';
import Hourly from './components/Hourly/Hourly';

import { useState } from 'react';
import { FetchWeather } from './components/FetchWeather/FetchWeather';

import { FetchWeatherForecast } from './components/FetchWeatherForecast/FetchWeatherForecast';
import Notfound from './components/Notfound/Notfound';
import Instruction from './components/Instruction/Instruction';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [hourlyweather, setHourlyWeather] = useState([]);
  const [dailyweather, setDailyWeather] = useState([]);

  const search = async (e) => {
    if (e.key === 'Enter') {
      await FetchWeather(city)
        .then((res) => {
          setWeather(res);
          FetchWeatherForecast(res?.coord?.lat, res?.coord?.lon).then((res) => {
            const getHourly = [...res?.hourly.splice(0, 6)];
            const getDaily = [...res?.daily.splice(0, 6)];
            setHourlyWeather(getHourly);
            setDailyWeather(getDaily);
            console.log(getHourly);
            console.log(getDaily);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <input
        type="text"
        className="search"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={search}
      />
      <Routes>
        <Route path="/" element={<Instruction />}></Route>
        <Route path="/Home" element={<Home weather={weather} />}></Route>
        <Route
          path="/Hourly"
          element={<Hourly hourlyweather={hourlyweather} />}
        ></Route>
        <Route
          path="/Daily"
          element={<Daily dailyweather={dailyweather} />}
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
