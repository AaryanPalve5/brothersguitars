// src/pages/Home.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Home() {
    return (
        <div  className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-4">
            <div className="text-center">
                <img
                    src="public\brothersguitarslogo.jpeg"
                    alt="Brothers Guitars Logo"
                    className="img-fluid"
                    style={{ maxWidth: '90%', height: 'auto' }}
                />
                <h4 className="mt-3" style={{ fontStyle: 'italic' }}>
                    Start your musical journey with us
                </h4>
            </div>
        </div>
    );
}

export default Home;
