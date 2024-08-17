import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gutiarclass from '../assets/gutiarclass.jpg';
import drums1 from '../assets/drums.jpg';
import flute1 from '../assets/flute2.jpg';
import keyboard1 from '../assets/keyboard3.jpg';
import tabla from '../assets/tabla.jpg';
import mic from '../assets/mic1.jpg';
import certificationImg from '../assets/rsl.jpg'; 
import techno from '../assets/techno.jpg'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

const classList = [
    { id: 1, name: "Guitar & Ukulele", imgSrc: gutiarclass },
    { id: 2, name: "Drums", imgSrc: drums1 },
    { id: 3, name: "Vocals", imgSrc: mic },
    { id: 4, name: "Keyboard", imgSrc: keyboard1 }, 
    { id: 5, name: "Flute", imgSrc: flute1 },
    { id: 6, name: "Tabla", imgSrc: tabla }
];

const Classes = () => {
    useEffect(() => {
        const carouselElement = document.querySelector('#classCarousel');
        const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 2000, // Set the interval to 2 seconds
            ride: 'carousel' // Ensure the carousel starts automatically
        });
    }, []);

    return (
        <div id="classes" className="container my-5">
            <h2 style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '2rem',
                color: '#333',
                marginBottom: '2rem',
                marginLeft: '0.75rem'
            }}>
                OUR CLASSES
            </h2>
            <div id="classCarousel" className="carousel slide my-5">
                <div className="carousel-inner">
                    {classList.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="card">
                                <img src={item.imgSrc} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev darken-btn" type="button" data-bs-target="#classCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
</button>
<button className="carousel-control-next darken-btn" type="button" data-bs-target="#classCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
</button>

            </div>
            <div className="row" style={{ padding: '40px 0', backgroundColor: '#ffffff' }}>
                <div className="col-lg-8 col-md-7">
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, color: 'black', fontSize: '1.35rem', margin: '20px', maxWidth: '60%' }}>
                        We conduct regular certification exams and are also affiliated with the Rock School of London.
                    </p>

                    
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                    <img src={certificationImg} alt="Certification" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px', padding: '10px', }} loading="lazy" />
                </div>
                
                <div className="col-lg-8 col-md-7">
                    
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, color: 'black', fontSize: '1.35rem', margin: '20px', maxWidth: '60%',padding: '10px', }}>
                        We have supplied musical instruments to 
                        
                    </p><ul>
                            <li>The Academy School</li>
                            <li>Kendriya Vidyalaya</li>
                            <li>GG International</li>
                        </ul>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                    <img src={techno} alt="Certification" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px' }} loading="lazy" />
                </div>
            </div>

            {/* Carousel */}
            

            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
};

export default Classes;
