import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Import icons
import guitar1 from '../assets/electricguitar1.png';
import drums1 from '../assets/drums1.png';
import flute1 from '../assets/flute1.png';
import keyboard1 from '../assets/keyboard1.png';
import ukulele1 from '../assets/ukulele1.png';
import acousticguitar1 from '../assets/acousticguitar1.png';
import amp from '../assets/amp.jpg';

const Products = () => {
    const productList = [
        { id: 1, name: "Acoustic Guitars", imgSrc: acousticguitar1 },
        { id: 2, name: "Electric Guitars", imgSrc: guitar1 },
        { id: 3, name: "Drums", imgSrc: drums1 },
        { id: 4, name: "Flute", imgSrc: flute1 },
        { id: 5, name: "Ukulele", imgSrc: ukulele1 },
        { id: 6, name: "Keyboard", imgSrc: keyboard1 },
        { id: 7, name: "Amplifier", imgSrc: amp }
    ];

    // Font URL for Roboto
    const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    
    // Inline styles
    const containerStyle = {
        marginTop: '5rem',
        marginBottom: '5rem',
        fontFamily: 'Roboto, sans-serif',
    };

    const titleStyle = {
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

    const imgStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'contain',
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
        <div id="products" className="container" style={containerStyle}>
            <h2 style={titleStyle}>OUR PRODUCTS</h2>
            <div className="row justify-content-start">
                {productList.map(product => (
                    <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <img src={product.imgSrc} className="card-img-top" alt={product.name} style={imgStyle} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>{product.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h4 style={textStyle}>
                To see our latest stock, visit us on
                <br />
                <a href="https://www.instagram.com/brothers_guitars" style={{ color: '#333', textDecoration: 'none' }}>
                    <FaInstagram style={iconStyle} />brothers_guitars
                </a>
                <br/>
                <a href="https://www.facebook.com/brothersguitars.india" style={{ color: '#333', textDecoration: 'none' }}>
                    <FaFacebookF style={iconStyle} />brothersguitars.india
                </a>
            </h4>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
}

export default Products;
