import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css'; // Import the CSS file for styling

const Carousel = ({ items }) => {
    useEffect(() => {
        const carouselElement = document.getElementById('productsCarousel');
        if (carouselElement) {
            const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
                interval: 2000,
                ride: 'carousel',
                pause: false,
                wrap: true,
            });
            return () => {
                bootstrapCarousel.dispose();
            };
        }
    }, [items]);

    return (
        <div id="productsCarousel" className="carousel slide" style={{ marginBottom: '2rem' }}>
            <div className="carousel-inner">
                {items.map((item, index) => (
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
            <button className="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', opacity: 0.8, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
                <span className="carousel-control-prev-icon" style={{ fontSize: '1.5rem' }}></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', opacity: 0.8, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}>
                <span className="carousel-control-next-icon" style={{ fontSize: '1.5rem' }}></span>
            </button>
        </div>
    );
};

export default Carousel;
