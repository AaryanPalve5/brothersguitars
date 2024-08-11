import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Import icons
import repair1 from '../assets/repair1.jpg'; 
import repair2 from '../assets/repair2.jpg'; 
import manufactured1 from '../assets/manufactured1.jpg'; 
import manufactured2 from '../assets/violin.jpg'; 
import manufactured3 from '../assets/manufactured3.jpg'; 
import guitarHolder1 from '../assets/GuitarHolder.jpg'; 
import guitarHolder2 from '../assets/GuitarHolders.jpg'; 
import guitarHolder3 from '../assets/GuitarHoldersBunch.jpg'; 
import guitarStand from '../assets/GuitarStand.jpg'; 

const RepairsAndManufactured = () => {
    const repairs = [
        { id: 1, imgSrc: repair1 },
        { id: 2, imgSrc: repair2 },
    ];

    const manufactured = [
        { id: 3, imgSrc: manufactured1 },
        { id: 4, imgSrc: manufactured2 },
        { id: 5, imgSrc: manufactured3 },
        { id: 6, imgSrc: guitarHolder1 },
        { id: 7, imgSrc: guitarHolder2 },
        { id: 8, imgSrc: guitarHolder3 },
        { id: 9, imgSrc: guitarStand }
    ];

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

    const cardStyle = {
        width: '100%',
        maxWidth: '350px',
        margin: '10px 0',
        textAlign: 'left',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const imgWrapperStyle = {
        backgroundColor: '#f1f1f1', // Lighter grey background color
        padding: '10px', // Padding around the image
    };

    const imgStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'contain',
        borderRadius: '5px',
    };

    const cardBodyStyle = {
        padding: '1rem', // Adjust padding if needed
        backgroundColor: '#f1f1f1', // Lighter grey background color for description
    };

    const textStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.25rem', // Larger font size
        fontWeight: 700, // Bold
        color: '#333',
        textAlign: 'left',
        marginTop: '2rem',
        letterSpacing: '1px',
        lineHeight: '1.6', // Increased line height for better readability
        padding: '0 1rem', // Added padding for spacing
    };

    const iconStyle = {
        margin: '0 15px', // Increased margin for better spacing
        fontSize: '1.75rem', // Larger icons
        color: '#333',
    };

    return (
        <div id="repairs-and-manufactured" className="container" style={containerStyle}>
            <h2 style={sectionTitleStyle}>OUR REPAIRS</h2>
            <div className="row justify-content-start">
                {repairs.map(item => (
                    <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <div style={imgWrapperStyle}>
                                <img 
                                    src={item.imgSrc} 
                                    alt="Repair item" 
                                    style={imgStyle} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="card-body" style={cardBodyStyle}>
                                {/* Title left blank as per requirement */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={sectionTitleStyle}>MANUFACTURED BY US</h2>
            <div className="row justify-content-start">
                {manufactured.map(item => (
                    <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <div style={imgWrapperStyle}>
                                <img 
                                    src={item.imgSrc} 
                                    alt="Manufactured item" 
                                    style={imgStyle} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="card-body" style={cardBodyStyle}>
                                {/* Title left blank as per requirement */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            

            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default RepairsAndManufactured;
