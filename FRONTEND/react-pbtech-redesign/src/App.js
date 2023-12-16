import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/space-grotesk"; 
import "@fontsource/dm-sans";
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Router>
    <p></p>
    <Button className='btn btn-card btn-x-small'><span className="button-text">Add to Cart</span></Button>
    <p></p>
    <Button className='btn btn-cta'><span className="cta-text">Shop Macbooks</span></Button>
    <p></p>
    <Button className='btn btn-orange btn-small btn-no-hover'><FontAwesomeIcon className="white-icon"icon={faShoppingCart}/> <span className="button-text">Your Cart</span></Button>    
    <p></p>
    <Button className='btn btn-blue btn-small btn-no-hover'><FontAwesomeIcon icon={faUser} style={{color: "#ffffff"}} /> <span className="button-text">Log In</span></Button>
    <p></p>
    <Button className='btn btn-gray btn-short'><FontAwesomeIcon className="black-icon" icon={faArrowLeftRotate} /> <span className="button-text">Go Back</span></Button>    
    <p></p>
    <Button className='btn btn-blue btn-medium'><span className="button-text">See all Promotions</span></Button>
    <p></p>
    <Button className='btn btn-blue btn-large'><span className="button-text">See all Popular Products</span></Button>
    <p></p>
    
    <p></p>
      <Routes>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
