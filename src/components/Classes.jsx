import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import guitar1 from '../assets/guitarc.jpg';
import drums1 from '../assets/drums.jpg';
import flute1 from '../assets/flute2.jpg';
import keyboard1 from '../assets/keyboard2.png';
import acousticguitar1 from '../assets/acousticguitar1.png';
import ukulele1 from '../assets/ukulele1.png'; 
import tabla from '../assets/tabla.jpg'; 
import mic from '../assets/mic1.jpg'; 

const Classes = () => {
    const classList = [
        { id: 1, name: "Guitar & Ukulele", imgSrc: guitar1, online: true },
        { id: 2, name: "Drums", imgSrc: drums1, online: false },
        { id: 3, name: "Vocals", imgSrc: mic, online: false },
        { id: 4, name: "Keyboard", imgSrc: keyboard1, online: false }, 
        { id: 5, name: "Flute", imgSrc: flute1, online: false },
        { id: 6, name: "Tabla", imgSrc: tabla, online: false }
    ];

    const sectionStyle = {
        padding: '40px 0',
        backgroundColor: '#f8f9fa',
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '350px',
        margin: '15px auto',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    };

    const cardBodyStyle = {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
    };

    const btnGroupStyle = {
        marginTop: '10px'
    };

    return (
        <div id="classes" className="container" style={sectionStyle}>
            <h2 className="text-center mb-4">Our Classes</h2>
            <div className="row">
                {classList.map(item => (
                    <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <img src={item.imgSrc} className="card-img-top" alt={item.name} style={imgStyle} />
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title">{item.name}</h5>
                                <div className="btn-group w-100" role="group" style={btnGroupStyle}>
                                    {item.online ? (
                                        <>
                                            <button type="button" className="btn btn-primary">Offline</button>
                                            <button type="button" className="btn btn-secondary">Online</button>
                                        </>
                                    ) : (
                                        <button type="button" className="btn btn-primary w-100">Offline</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
