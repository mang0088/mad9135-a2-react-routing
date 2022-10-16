import React from 'react';
import '../Header/Header.css';
import weatherlogo from '../Header/weatherlogo.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={weatherlogo} className="App-logo" alt="logo" />
      <h1>Weather Forecast</h1>
    </header>
  );
}

export default Header;
