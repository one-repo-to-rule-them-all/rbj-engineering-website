// src/App.js
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

import './App.css';


const App = () => {
  return (
    <Router basename="/rbj-engineering-website">
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
