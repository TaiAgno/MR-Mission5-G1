import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/space-grotesk"; 
import "@fontsource/dm-sans";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
    <Routes>
  <Route path="/" element={<Home />} />
  </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
