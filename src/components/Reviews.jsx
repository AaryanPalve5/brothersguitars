import React from 'react';
import reviewsData from './reviews.json'; // Adjust the path based on where you saved the JSON file
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Reviews = () => {
    const hasReviews = reviewsData.length > 3;

    return (
        <section id="reviews" className="container my-4">
            <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#333' }}>
                Testimonials &  Reviews
            </h2>
            {hasReviews ? (
                <div id="reviewsCarousel" className="carousel slide">
                    <div className="carousel-inner">
                        {reviewsData.map((review, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="d-flex justify-content-center">
                                    <div className="card p-3 border-0 shadow-sm" style={{ backgroundColor: '#f9f9f9', width: '80%' }}>
                                        <p className="card-text text-center" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                            "{review.review}"
                                        </p>
                                        <footer className="text-center mt-2" style={{ fontSize: '1rem', color: '#555' }}>
                                            - {review.name}
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev" style={{ filter: 'invert(1)' }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next" style={{ filter: 'invert(1)' }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            ) : (
                <div className="row">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
                            <div className="card p-3 border-0 shadow-sm" style={{ backgroundColor: '#f9f9f9' }}>
                                <p className="card-text text-center" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                    "{review.review}"
                                </p>
                                <footer className="text-center mt-2" style={{ fontSize: '1rem', color: '#555' }}>
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
