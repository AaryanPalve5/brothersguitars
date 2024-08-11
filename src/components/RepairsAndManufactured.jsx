import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const items = [
        { id: 1, title: "", imgSrc: repair1 },
        { id: 2, title: "", imgSrc: repair2 },
        { id: 3, title: "", imgSrc: manufactured1 },
        { id: 4, title: "", imgSrc: manufactured2 },
        { id: 5, title: "", imgSrc: manufactured3 },
        { id: 6, title: "", imgSrc: guitarHolder1 },
        { id: 7, title: "", imgSrc: guitarHolder2 },
        { id: 8, title: "", imgSrc: guitarHolder3 },
        { id: 9, title: "", imgSrc: guitarStand }
    ];

    // Font URL
    const fontUrl = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap";

    // Inline styles
    const containerStyle = {
        marginTop: '5rem',
        marginBottom: '5rem',
        fontFamily: 'Playfair Display, serif',
    };

    const titleStyle = {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700, // Bold
        fontStyle: 'normal', // Less italic
        textAlign: 'left',
        color: '#333',
        marginBottom: '2rem',
        wordSpacing: '0.5em',
        fontSize: '2rem',// Increased font size
        letterSpacing: '-1.5px', // Adjusted letter spacing
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '350px',
        margin: '10px auto',
        textAlign: 'left',
        backgroundColor: '#f8f9fa', // Consistent background color
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const imgStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'contain',
    };

    const cardBodyStyle = {
        padding: '1rem', // Adjust padding if needed
    };

    return (
        <div className="container" style={containerStyle}>
            <h2 style={titleStyle}>OUR REPAIRS AND MANUFACTURED BY US</h2>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <img 
                                src={item.imgSrc} 
                                alt={item.title} 
                                style={imgStyle} 
                                loading="lazy" 
                            />
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>{item.title}</h5>
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
