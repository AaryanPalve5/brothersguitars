import React from 'react';
import reviewsData from './reviews.json'; // Adjust the path based on where you saved the JSON file
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    
const Reviews = () => {
    const hasReviews = reviewsData.length > 3;
    const sectionStyle = {
        minHeight: '400px', // Ensure consistent minimum height
    };

    return (
        <section id="reviews" className="container my-4" style={sectionStyle}>
            <h2 className="text-start mb-4" style={{ 
            fontFamily: 'Roboto,Playfair Display, serif',
            fontWeight: 700, // Bold
            textAlign: 'left',
            color: '#333',
            marginBottom: '2rem',
        
            wordSpacing: '0.5em',
            fontSize: '2rem', // Increased font size
            letterSpacing: '-1.5px',
            }}>
                TESTIMONIALS AND REVIEWS
            </h2>
            {hasReviews ? (
                <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {reviewsData.map((review, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="d-flex justify-content-center">
                                    <div className="card p-4 border-0 shadow" style={{ backgroundColor: '#f5f5f5', width: '80%', textAlign: 'left' }}>
                                        <p className="card-text" style={{ 
                                            fontStyle: 'normal', 
                                            fontSize: '1.1rem',
                                            fontFamily: 'Roboto,Playfair Display, serif'
                                        }}>
                                            "{review.review}"
                                        </p>
                                        <footer className="mt-2" style={{ 
                                            fontSize: '1rem', 
                                            color: '#555', 
                                            fontFamily: 'Roboto,Playfair Display, serif'
                                        }}>
                                            - {review.name}
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev" style={{ 
                        backgroundColor: '#333', // Dark background
                        color: '#fff', // White text
                        border: 'none',
                        borderRadius: '5px', // Rectangular shape with rounded corners
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8, // Slightly visible
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        left: '10px', // Adjust as needed
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>&lt;</span>
                        <span className="visually-hidden"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next" style={{ 
                        backgroundColor: '#333', // Dark background
                        color: '#fff', // White text
                        border: 'none',
                        borderRadius: '5px', // Rectangular shape with rounded corners
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8, // Slightly visible
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        right: '10px', // Adjust as needed
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>&gt;</span>
                        <span className="visually-hidden"></span>
                    </button>
                </div>
            ) : (
                <div className="row">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
                            <div className="card p-4 border-0 shadow" style={{ 
                                backgroundColor: '#f5f5f5', 
                                textAlign: 'left' 
                            }}>
                                <p className="card-text" style={{ 
                                    fontStyle: 'normal', 
                                    fontSize: '1.1rem',
                                    fontFamily: 'Roboto,Playfair Display, serif'
                                }}>
                                    "{review.review}"
                                </p>
                                <footer className="mt-2" style={{ 
                                    fontSize: '1rem', 
                                    color: '#555', 
                                    fontFamily: 'Roboto,Playfair Display, serif'
                                }}>
                                    - {review.name}
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Reviews;
