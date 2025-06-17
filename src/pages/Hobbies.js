// src/Hobies.js
import React from 'react';
import { Link } from 'react-router-dom';

const Hobbies = () => {
  return (
    <div>
      <h1>My Hobbies</h1>
      <ul>
        <li><Link to="/Hobbies/1">Project 1: Weather App</Link></li>
        <li><Link to="/Hobbies/2">Project 2: Fitness Tracker</Link></li>
      </ul>
    </div>
  );
};

export default Hobbies;
