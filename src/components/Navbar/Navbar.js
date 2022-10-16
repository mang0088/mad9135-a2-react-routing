import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

function Navbar() {
  return (
    <div className="NavDiv">
      <NavLink
        className="App-link"
        to={'/Home'}
        style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
      >
        Home
      </NavLink>
      <NavLink
        className="App-link"
        to={'/Hourly'}
        style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
      >
        Hourly
      </NavLink>
      <NavLink
        className="App-link"
        to={'/Daily'}
        style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
      >
        Daily
      </NavLink>
    </div>
  );
}

export default Navbar;
