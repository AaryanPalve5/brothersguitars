// src/App.jsx
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import Reviews from './components/Reviews'; 
// Adjust the path based on your structure

import ContactUs from './components/ContactUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    return (
        <div>
            <Navbar />
            <Home />

            <Reviews />
            <ContactUs />
        </div>
    );
}

export default App;
