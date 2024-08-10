import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import guitar1 from '../assets/electricguitar1.png';
import drums1 from '../assets/drums1.png';
import flute1 from '../assets/flute1.png';
import keyboard1 from '../assets/keyboard1.png';
import acousticguitar1 from '../assets/acousticguitar1.png';

const Products = () => {
    const productList = [
        { id: 1, name: "Electric Guitars", imgSrc: guitar1 },
        { id: 2, name: "Acoustic Guitars", imgSrc: acousticguitar1 },
        { id: 3, name: "Drums", imgSrc: drums1 },
        { id: 4, name: "Flute", imgSrc: flute1 },
        { id: 5, name: "Keyboard", imgSrc: keyboard1 }
    ];

    const cardStyle = {
        width: '100%',
        maxWidth: '350px',
        margin: '10px auto',
        textAlign: 'center',
        backgroundColor: '#f8f9fa', // Grey background color
        borderRadius: '10px', // Optional: rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: subtle shadow
        transition: 'transform 0.3s, box-shadow 0.3s', // Optional: smooth hover effects
    };

    const imgStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'contain',
    };

    return (
        <div id="products" className="container my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {productList.map(product => (
                    <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card" style={cardStyle}>
                            <img src={product.imgSrc} className="card-img-top" alt={product.name} style={imgStyle} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
