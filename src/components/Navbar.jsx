import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is imported

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light" 
      style={{ 
        position: 'relative', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        padding: '15px 30px', 
        fontFamily: 'Roboto, Arial, sans-serif', // Apply Roboto font
        fontSize: '1.2rem' 
      }}
    >
      <div className="container-fluid">
        <a 
          className="navbar-brand" 
          href="#" 
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          Menu
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#home" 
                style={{ color: 'darkgrey', fontWeight: 'bold' }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#products" 
                style={{ color: 'darkgrey', fontWeight: 'bold' }}
              >
                Our Store
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#classes" 
                style={{ color: 'darkgrey', fontWeight: 'bold' }}
              >
                Our Classes
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact-us" 
                style={{ color: 'darkgrey', fontWeight: 'bold' }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
