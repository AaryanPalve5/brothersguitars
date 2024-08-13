import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gutiarclass from '../assets/gutiarclass.jpg';
import drums1 from '../assets/drums.jpg';
import flute1 from '../assets/flute2.jpg';
import keyboard1 from '../assets/keyboard3.jpg';
import tabla from '../assets/tabla.jpg';
import mic from '../assets/mic1.jpg';
import certificationImg from '../assets/rsl.jpg'; // Add your image here

// Font URL for Roboto
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

// Data for carousel items
const classList = [
    { id: 1, name: "Guitar & Ukulele", imgSrc: gutiarclass },
    { id: 2, name: "Drums", imgSrc: drums1 },
    { id: 3, name: "Vocals", imgSrc: mic },
    { id: 4, name: "Keyboard", imgSrc: keyboard1 }, 
    { id: 5, name: "Flute", imgSrc: flute1 },
    { id: 6, name: "Tabla", imgSrc: tabla }
];

const Classes = () => {
    // Inline styles
    const sectionStyle = {
        padding: '40px 0',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Roboto, sans-serif',
    };

    const titleStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700, // Bold
        textAlign: 'left',
        color: '#333',
        marginBottom: '2rem',
        wordSpacing: '0.5em',
        fontSize: '2rem', // Increased font size
        letterSpacing: '-1.5px', // Adjusted letter spacing
    };

    const imgStyle = {
        width: '100%',
        height: '300px', // Adjust height as needed
        objectFit: 'cover',
    };

    return (
        <div id="classes" className="container" style={sectionStyle}>
            <h2 style={titleStyle} className="mb-4">OUR CLASSES</h2>

            <div id="classesCarousel" className="carousel slide">
                <div className="carousel-inner">
                    {classList.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                                <img src={item.imgSrc} className="d-block w-100" alt={`${item.name} class`} style={imgStyle} />
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
                <button className="carousel-control-prev" type="button" data-bs-target="#classesCarousel" data-bs-slide="prev" style={{
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
                <button className="carousel-control-next" type="button" data-bs-target="#classesCarousel" data-bs-slide="next" style={{
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

            <div className="row" style={{ padding: '40px 0', backgroundColor: '#ffffff' }}>
                <div className="col-lg-8 col-md-7">
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, color: 'black', fontSize: '1.35rem', margin: '20px', maxWidth: '60%' }}>
                        We conduct regular certification exams and are also affiliated with the Rock School of London.
                    </p>

                    <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, color: 'black', fontSize: '1.35rem', margin: '20px', maxWidth: '60%' }}>
                        We have supplied musical instruments to 
                        <ul>
                            <li>The Academy School</li>
                            <li>Kendriya Vidyalaya</li>
                            <li>GG Internation</li>
                        </ul>
                    </p>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                    <img src={certificationImg} alt="Certification" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px' }} loading="lazy" />
                </div>
            </div>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default Classes;
