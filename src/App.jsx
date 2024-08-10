import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Lazy load the components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Products = lazy(() => import('./components/Products'));
const Classes = lazy(() => import('./components/Classes'));
const Reviews = lazy(() => import('./components/Reviews'));
const ContactUs = lazy(() => import('./components/ContactUs'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Home />
            <Products />
            <Classes />
            <Reviews />
            <ContactUs />
        </Suspense>
    );
}

export default App;
