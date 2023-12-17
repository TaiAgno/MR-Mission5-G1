import React, { useState } from 'react';
import './Navbar.css';
import { Button } from './Button';
import logo from '../media/logo.jpg';
import departmentPlus from '../media/departmentsplus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [inputValue, setInputValue] = useState('');
  return (
    <div className="navbar">
      <div className="navbar-top">
      <button className="navbar-top-item">PB Tech</button>
      <button className="navbar-top-item">Harwired</button>
      <button className="navbar-top-item">PB Business</button>
      <button className="navbar-top-item">PB Education</button>
      <button className="navbar-top-item">PB Wholesale</button>
      <button className="navbar-top-item">PB Government</button>
      <button className="navbar-top-item">PB Health</button>
      <button className="navbar-top-item">PB IoT</button> 
     
      <div className="navbar-top-left-item">
      <button className="navbar-top-item"><FontAwesomeIcon icon={faMobileAlt} style={{color: "#ffffff"}} /> Get the PB Tech App</button>
      </div>
      </div>
      <div className="navbar-middle-hiden">
        <div className="menu-search">
  <FontAwesomeIcon icon={faBars} size="1x" style={{color: "#ffffff"}}/>
  <FontAwesomeIcon icon={faSearch} size="1x" style={{color: "#ffffff"}} />
  <div className="hidden-logo"><img src={logo} alt="Logo" /></div>
  <div className="client-buttons">
        <Button className='btn btn-blue btn-small-navbar btn-no-hover'><FontAwesomeIcon icon={faUser} size="1x" style={{color: "#ffffff"}} /> <span className="button-text-navbar">Log In</span></Button>
        <Button className='btn btn-orange btn-small-navbar btn-no-hover'><FontAwesomeIcon className="white-icon"icon={faShoppingCart} size="1x"/> <span className="button-text-navbar">Your Cart</span></Button>    
    </div>
    </div>
</div>
      <div className="navbar-middle">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <div className="search">
  <div className="search-options">
    <button className="search-by-department">
      Search by Department<img src={departmentPlus} alt="Department Plus" />
    </button>
    <span className="selected-departments"> • 0 Departments Selected</span>
  </div>
  <div className="search-bar">
    <div className="input-button-wrapper">
      <input type="text" placeholder="Type your search" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <Button className={`btn btn-blue${inputValue ? '' : ':invalid'} btn-small`}><span className="button-text">Search Store</span></Button>
    </div>
  </div>
</div>
        <div className="client-buttons">
        <Button className='btn btn-blue btn-small-navbar btn-no-hover'><FontAwesomeIcon icon={faUser}  style={{color: "#ffffff"}} /> <span className="button-text-navbar">Log In</span></Button>
        <Button className='btn btn-orange btn-small-navbar btn-no-hover'><FontAwesomeIcon className="white-icon"icon={faShoppingCart} /> <span className="button-text-navbar">Your Cart</span></Button>    
    </div>
      </div>

      <div className="navbar-bottom">
        <button className="navbar-bottom-item">Departments &#8744;</button>
        <button className="navbar-bottom-item">Brands &#8744;</button>
        <button className="navbar-bottom-item">Services &#8744;</button>
        <button className="navbar-bottom-item">Promotions &#8744;</button>
      </div>
    </div>
  );
}

export default Navbar;