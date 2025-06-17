// src/Resume.js
import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <ul>
        <li><Link to="/Resume/1">Project 1: Weather App</Link></li>
        <li><Link to="/Resume/2">Project 2: Fitness Tracker</Link></li>
      </ul>
    </div>
  );
};

export default Resume;
