import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import guitar1 from '../assets/guitarc.jpg';
import drums1 from '../assets/drums.jpg';
import flute1 from '../assets/flute2.jpg';
import keyboard1 from '../assets/keyboard2.png';
import tabla from '../assets/tabla.jpg';
import mic from '../assets/mic1.jpg';
import certificationImg from '../assets/rsl.jpg'; // Add your image here

// Font URL
const fontUrl = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap";

const Classes = () => {
    const classList = [
        { id: 1, name: "Guitar & Ukulele", imgSrc: guitar1, online: true },
        { id: 2, name: "Drums", imgSrc: drums1, online: false },
        { id: 3, name: "Vocals", imgSrc: mic, online: false },
        { id: 4, name: "Keyboard", imgSrc: keyboard1, online: false }, 
        { id: 5, name: "Flute", imgSrc: flute1, online: false },
        { id: 6, name: "Tabla", imgSrc: tabla, online: false }
    ];

    // Inline styles
    const sectionStyle = {
        padding: '40px 0',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Playfair Display, serif',
    };

    const titleStyle = {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700, // Bold
        textAlign: 'left',
        color: '#333',
        marginBottom: '2rem',
        wordSpacing: '0.5em',
        fontSize: '2rem', // Increased font size
        letterSpacing: '-1.5px', // Adjusted letter spacing
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '350px',
        margin: '10px auto',
        textAlign: 'left',
        backgroundColor: '#ffffff', // Consistent background color
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    };

    const cardBodyStyle = {
        padding: '1rem',
    };

    const btnGroupStyle = {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'flex-start', // Align buttons to the start
    };

    const buttonStyle = {
        textAlign: 'left',
        width: 'auto', // Allow buttons to adjust width as needed
    };

    const infoStyle = {
        padding: '40px 0',
        backgroundColor: '#ffffff',
    };

    const infoTextStyle = {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 500,
        color: 'black',
        fontSize: '1.35rem',
        margin:'20px',
        maxWidth: '60%',
    };

    const infoImgStyle = {
        padding:'10px',
        width: '100%',
        maxWidth: '500px', // Slightly larger than class cards
        height: 'auto',
        borderRadius: '10px',
    };

    return (
        <div id="classes" className="container" style={sectionStyle}>
            <h2 style={titleStyle} className="mb-4">OUR CLASSES</h2>
            <div className="row">
                {classList.map(item => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <img 
                                src={item.imgSrc} 
                                className="card-img-top" 
                                alt={`${item.name} class`} 
                                style={imgStyle} 
                                loading="lazy" 
                            />
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>{item.name}</h5>
                                <div className="btn-group w-100" role="group" style={btnGroupStyle}>
                                    {item.online ? (
                                        <>
                                            <button type="button" className="btn btn-primary" style={buttonStyle}>Offline</button>
                                            <button type="button" className="btn btn-secondary" style={buttonStyle}>Online</button>
                                        </>
                                    ) : (
                                        <button type="button" className="btn btn-primary w-100" style={buttonStyle}>Offline</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row" style={infoStyle}>
                <div className="col-lg-8 col-md-7">
                    <p style={infoTextStyle}>
                        We conduct regular certification exams and are also affiliated with the Rock School of London.
                    </p>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                    <img src={certificationImg} alt="Certification" style={infoImgStyle} loading="lazy" />
                </div>
            </div>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default Classes;
