import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

// Lazy load the components
const Home = lazy(() => import('./components/Home'));
const Classes = lazy(() => import('./components/Classes'));
const Products = lazy(() => import('./components/Products'));
const Reviews = lazy(() => import('./components/Reviews'));
const RepairsAndManufactured = lazy(() => import('./components/RepairsAndManufactured'));
const ContactUs = lazy(() => import('./components/ContactUs'));

function App() {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
                <Products />
                <RepairsAndManufactured />
                <Classes />
                <Reviews />
                <ContactUs />
            </Suspense>
        </div>
    );
}

export default App;
