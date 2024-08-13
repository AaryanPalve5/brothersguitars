import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Import icons
import guitar1 from '../assets/electricguitar1.jpg';
import drums1 from '../assets/drums1.png';
import flute1 from '../assets/flute1.png';
import keyboard1 from '../assets/keyboard1.png';
import ukulele1 from '../assets/ukulele1.png';
import acousticguitar1 from '../assets/acousticguitar1.png';
import amp from '../assets/amp.jpg';
import accessories from '../assets/accessories.jpg';

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

// Font URL for Roboto
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

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

            <div id="productsCarousel" className="carousel slide">
                <div className="carousel-inner">
                    {products.map((product, index) => (
                        <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="d-flex justify-content-center align-items-center" style={{ 
                                position: 'cover',
                                height: '400px', // Default height for mobile
                                maxWidth: '100%',
                                overflow: 'hidden',
                                '@media (min-width: 768px)': { // Medium devices (tablets)
                                    height: '400px'
                                },
                                '@media (min-width: 992px)': { // Large devices (desktops)
                                    height: '500px'
                                }
                            }}>
                                <img src={product.imgSrc} className="d-block w-100" alt={product.name} style={{ 
                                    objectFit: 'cover',
                                    height: '100%', 
                                    width: 'auto' // Ensures aspect ratio is maintained
                                }} />
                                <div className="carousel-caption d-block" style={{ 
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background for text visibility
                                    color: '#fff',
                                    textAlign: 'center',
                                    padding: '10px',
                                    fontSize: '1rem'
                                }}>
                                    <h5 style={{ margin: 0 }}>{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly visible background
                    border: 'none',
                    borderRadius: '50%',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    opacity: 0.8,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '10px',
                }}>
                    <span style={{ fontSize: '1.5rem' }}>&lt;</span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly visible background
                    border: 'none',
                    borderRadius: '50%',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    opacity: 0.8,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '10px',
                }}>
                    <span style={{ fontSize: '1.5rem' }}>&gt;</span>
                    <span className="visually-hidden"></span>
                </button>
            </div>

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
                <br/>
                <a href="https://www.facebook.com/brothersguitars.india" style={{ color: '#333', textDecoration: 'none' }}>
                    <FaFacebookF style={{ fontSize: '1.75rem', margin: '0 15px' }} />brothersguitars.india
                </a>
            </h4>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
}

export default Products;
