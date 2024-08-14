import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

// Font URL for Roboto
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap";

function ContactUs() {
    const styles = {
        container: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '0',
            margin: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden', // Prevent horizontal overflow
            fontFamily: 'Roboto, sans-serif',
        },
        contentContainer: {
            padding: '0 15px',
            margin: '0', // Ensure no extra margin is added
        },
        heading: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700, // Bold
            textAlign: 'left',
            color: 'white',
            marginBottom: '2rem',
            wordSpacing: '0.5em',
            fontSize: '2rem', // Consistent font size
            letterSpacing: '-1px',
            paddingTop: '2rem',
        },
        subHeading: {
            fontFamily: 'Roboto, sans-serif',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700, // Bold
            marginBottom: '1rem',
        },
        text: {
            fontFamily: 'Roboto, sans-serif',
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
        },
        icon: {
            marginRight: '10px',
            fontSize: '1.7rem',
        },
        map: {
            position: 'relative',
            paddingTop: '56.25%',
            height: '0',
            overflow: 'hidden',
            marginBottom: '2rem',
        },
        mapIframe: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0',
        },
        footerText: {
            fontFamily: 'Roboto, sans-serif',
            color: '#fff',
            fontSize: '1rem',
            margin: '0', 
            padding: '0.5rem 0', 
            textAlign: 'center',
            backgroundColor: '#000',
        },
    };

    return (
        <div id="contact-us" style={styles.container}>
            <div className="container">
                <h1 style={styles.heading}>CONTACT US</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <h4 className="mb-4" style={styles.subHeading}>Get in Touch</h4>
                            <p style={styles.text}>
                                <a href="tel:09823274939" style={{ color: '#fff', textDecoration: 'none' }}>
                                    <FaPhoneAlt style={styles.icon} />
                                    098232 74939
                                </a>
                            </p>
                            <p style={styles.text}>
                                <a href="mailto:brothersguitars.india@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                                    <FaEnvelope style={styles.icon} />
                                    brothersguitars.india@gmail.com
                                </a>
                            </p>
                            <p style={styles.text}>
                                <a href="https://www.instagram.com/brothers_guitars?igsh=emVtb3V0ZTg1MjZq" style={{ color: '#fff', textDecoration: 'none' }}>
                                    <FaInstagram style={styles.icon} />
                                    brothers_guitars
                                </a>
                            </p>
                            <p style={styles.text}>
                                <a href="https://www.facebook.com/brothersguitars.india" style={{ color: '#fff', textDecoration: 'none' }}>
                                    <FaFacebookF style={styles.icon} />
                                    brothersguitars.india
                                </a>
                            </p>
                            <p style={styles.text}>
                                <FaMapMarkerAlt style={styles.icon} />
                                Shop No.1, Sector 32A, La Casita, near Prathamesh Wines, Ravet, Pune, Maharashtra 412101
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4" style={styles.subHeading}>Location</h4>
                        <div className="embed-responsive" style={styles.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4787399878633!2d73.75111807953586!3d18.6425010372874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba03ffffff95%3A0xbdade9c2873a14c8!2sBrothers%20Guitars!5e0!3m2!1sen!2sin!4v1722924240219!5m2!1sen!2sin"
                                style={styles.mapIframe}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={styles.footerText}>
                <p>&copy; BrothersGuitars 2024. All rights reserved.</p>
            </footer>
            <link href={fontUrl} rel="stylesheet" /> {/* Include the font */}
        </div>
    );
}

export default ContactUs;
