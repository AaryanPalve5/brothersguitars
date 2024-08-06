// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ position: 'relative', top: 0, width: '100%', zIndex: 1000, padding: '10px 20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', fontFamily: "Times New Roman, sans-serif" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Menu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: '20px' }}>
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-store">Our Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-classes">Our Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
