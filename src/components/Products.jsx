
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css'; // Import the CSS file

// The rest of the code remains the same

import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Import icons
import guitar1 from '../assets/guitar1.jpg';
import drums1 from '../assets/drums1.png';
import flute1 from '../assets/flute1.png';
import keyboard1 from '../assets/keyboard1.png';
import ukulele1 from '../assets/ukulele1.png';
import acousticguitar1 from '../assets/acousticguitar1.png';
import amp from '../assets/amp.jpg';
import accessories from '../assets/accessories.jpg';
import Carousel from './Carousel'; // Import the Carousel component

// Data for carousel items
const products = [
    { id: 1, name: "Acoustic Guitars", imgSrc: acousticguitar1 },
    { id: 2, name: "Electric Guitars", imgSrc: guitar1 },
    { id: 3, name: "Drums", imgSrc: drums1 },
    { id: 4, name: "Flute", imgSrc: flute1 },
    { id: 5, name: "Ukulele", imgSrc: ukulele1 },
    { id: 6, name: "Keyboard", imgSrc: keyboard1 },
    { id: 7, name: "Amplifier", imgSrc: amp },
    { id: 8, name: "Accessories", imgSrc: accessories }
];

const Products = () => {
    return (
        <div id="products" className="container my-5">
            <h2 style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '2rem',
                color: '#333',
                marginBottom: '2rem'
            }}>
                OUR PRODUCTS
            </h2>

            <Carousel items={products} /> {/* Use the Carousel component */}

            <h4 style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#333',
                marginTop: '2rem'
            }}>
                To see our latest stock, visit us on
                <br />
                <a href="https://www.instagram.com/brothers_guitars" style={{ color: '#333', textDecoration: 'none' }}>
                    <FaInstagram style={{ fontSize: '1.75rem', margin: '0 15px' }} />brothers_guitars
                </a>
                <br />
                <a href="https://www.facebook.com/brothersguitars.india" style={{ color: '#333', textDecoration: 'none' }}>
                    <FaFacebookF style={{ fontSize: '1.75rem', margin: '0 15px' }} />brothersguitars.india
                </a>
            </h4>
        </div>
    );
};

export default Products;
