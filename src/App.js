import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import Home from './pages/Home';
import MealDetails from './pages/MealDetails';
import About from './pages/About'; // Add About page route
import Contact from './pages/Contact'; // Add Contact page route

const App = () => {
    return (
        <Router>
            <Navbar />  {/* Navbar added above Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meal/:id" element={<MealDetails />} />
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/contact" element={<Contact />} /> {/* Contact page */}
            </Routes>
        </Router>
    );
};

export default App;
