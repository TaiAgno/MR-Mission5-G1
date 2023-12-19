import React, { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import ProductCard from './components/ProductCard.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/space-grotesk"; 
import "@fontsource/dm-sans";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home setCartCount={setCartCount}/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
