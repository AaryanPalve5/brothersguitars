import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript

// Font URL for Roboto
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

const Carousel = ({ items }) => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="d-flex justify-content-center align-items-center" style={{ 
                            position: 'relative',
                            height: '400px', // Default height for mobile
                            maxWidth: '100%',
                            overflow: 'hidden',
                        }}>
                            <img src={item.imgSrc} className="d-block w-100" alt={item.name} style={{ 
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
                                <h5 style={{ margin: 0 }}>{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{
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
                <span className="carousel-control-prev-icon" style={{ fontSize: '1.5rem' }}></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{
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
                <span className="carousel-control-next-icon" style={{ fontSize: '1.5rem' }}></span>
            </button>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default Carousel;
