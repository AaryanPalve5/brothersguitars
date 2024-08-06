// src/pages/Home.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Home() {
    return (
        <>
       <img
                        src="public\brothersguitarslogo.jpeg"
                        alt="Brothers Guitars Logo"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
            </>
    );
}

export default Home;
