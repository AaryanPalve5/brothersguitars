import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import logo from '../assets/logo.jpeg'; 

function Home() {
    return (
        <div 
            className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-4"
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {/* Blurred Background */}
            <div 
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    filter: 'blur(8px)', // Apply blur to background only
                    zIndex: 1,
                }}
            ></div>

            {/* Content Layer */}
            <div 
                className="text-center" 
                style={{
                    position: 'relative',
                    zIndex: 2, // Ensure content is above the blurred background
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    // Adjust this value to move the logo higher
                }}
            >
                <img 
                    src={logo} 
                    alt="Brothers Guitars Logo"
                    className="img-fluid"
                    style={{ maxWidth: '200%', height: 'auto' }} // Adjust size as needed
                />
                <h4 className="mt-3" style={{fontFamily: "Playfair Display", fontStyle: 'italic', color: 'black', textShadow: '1px 1px 5px white' }}>
                    Start your musical journey with us
                
                </h4>
            </div>
        </div>
    );
}

export default Home;
