import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import repair1 from '../assets/repair1.jpg'; 
import repair2 from '../assets/repair2.jpg'; 
import repair3 from '../assets/repair3.jpg';  
import repair4 from '../assets/repair4.jpg';  
import repair5 from '../assets/repair5.jpg'; 
import repair6 from '../assets/repair6.jpg'; 
import violin1 from '../assets/manufactured1.jpg'; 
import manufactured2 from '../assets/violin.jpg'; 
import manufactured3 from '../assets/manufactured3.jpg'; 
import guitarHolder1 from '../assets/GuitarHolder.jpg'; 
import guitarHolder2 from '../assets/GuitarHolders.jpg'; 
import guitarHolder3 from '../assets/GuitarHoldersBunch.jpg'; 
import guitarStand from '../assets/GuitarStand.jpg'; 
import pick from '../assets/pick.jpg'; 
import ssg from '../assets/singlestring.jpg'; 
import ssg2 from '../assets/singlestring2.jpg'; 

const RepairsAndManufactured = () => {
    const repairs = [
        { id: 1, imgSrc: repair6 },
        { id: 2, imgSrc: repair2 },
        { id: 3, imgSrc: repair3 },
        { id: 4, imgSrc: repair4 },
        { id: 5, imgSrc: repair5 },
        { id: 6, imgSrc: repair1 },
    ];
    
    const customization = [
        { id: 7, imgSrc: violin1 },
        { id: 8, imgSrc: manufactured2 },
        { id: 9, imgSrc: manufactured3 },
        { id: 16, imgSrc: ssg2 },
    ];

    const manufactured = [
        { id: 10, imgSrc: guitarHolder1 },
        { id: 11, imgSrc: guitarHolder2 },
        { id: 12, imgSrc: guitarHolder3 },
        { id: 13, imgSrc: guitarStand },
        { id: 14, imgSrc: pick },
        { id: 15, imgSrc: ssg },
    ];
    
    const carouselStyle = {
        marginBottom: '2rem',
    };

    // Font URL for Roboto
    const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    
    // Inline styles
    const containerStyle = {
        marginTop: '5rem',
        marginBottom: '5rem',
        fontFamily: 'Roboto, sans-serif',
    };

    const sectionTitleStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700, // Bold
        fontStyle: 'normal', // Less italic
        textAlign: 'left',
        color: '#333',
        marginBottom: '2rem',
        wordSpacing: '0.5em',
        fontSize: '2rem', // Increased font size
        letterSpacing: '-1px', // Increased letter spacing
    };

    const imgStyle = {
        width: '100%',
        height: '450px', // Adjusted to make the carousel size consistent
        objectFit: 'contain',
    };
    const buttonStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lighter black with more transparency
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
    };
    

    const prevButtonStyle = {
        ...buttonStyle,
        left: '10px',
    };

    const nextButtonStyle = {
        ...buttonStyle,
        right: '10px',
    };

    return (
        <div id="repairs-and-manufactured" className="container" style={containerStyle}>
            <h2 style={sectionTitleStyle}>OUR REPAIRS</h2>
            <div id="repairsCarousel" className="carousel slide" data-ride="carousel" style={carouselStyle}>
                <div className="carousel-inner">
                    {repairs.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.imgSrc} className="d-block w-100" alt={`Repair ${index + 1}`} style={imgStyle} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#repairsCarousel" data-bs-slide="prev" style={prevButtonStyle}>
                    <span className="carousel-control-prev-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#repairsCarousel" data-bs-slide="next" style={nextButtonStyle}>
                    <span className="carousel-control-next-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
            </div>

            <h2 style={sectionTitleStyle}>CUSTOMIZATION</h2>
            <div id="customizationCarousel" className="carousel slide" data-ride="carousel" style={carouselStyle}>
                <div className="carousel-inner">
                    {customization.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.imgSrc} className="d-block w-100" alt={`Customization ${index + 1}`} style={imgStyle} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#customizationCarousel" data-bs-slide="prev" style={prevButtonStyle}>
                    <span className="carousel-control-prev-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#customizationCarousel" data-bs-slide="next" style={nextButtonStyle}>
                    <span className="carousel-control-next-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
            </div>

            <h2 style={sectionTitleStyle}>MANUFACTURED BY US</h2>
            <div id="manufacturedCarousel" className="carousel slide" data-ride="carousel" style={carouselStyle}>
                <div className="carousel-inner">
                    {manufactured.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.imgSrc} className="d-block w-100" alt={`Manufactured ${index + 1}`} style={imgStyle} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#manufacturedCarousel" data-bs-slide="prev" style={prevButtonStyle}>
                    <span className="carousel-control-prev-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#manufacturedCarousel" data-bs-slide="next" style={nextButtonStyle}>
                    <span className="carousel-control-next-icon" style={{ fontSize: '1.5rem' }}></span>
                </button>
            </div>

            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default RepairsAndManufactured;
