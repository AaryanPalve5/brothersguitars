// src/pages/Home.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Home() {
    return (
        
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-8 d-flex justify-content-center">
                    <img
                        src="/src/assets/brothersguitarslogo.jpeg"
                        alt="Brothers Guitars Logo"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Home;
