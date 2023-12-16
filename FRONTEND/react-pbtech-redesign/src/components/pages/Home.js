import React from 'react';
import '../../App.css';
import './Home.css';
import { Button } from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import VBanner from '../../components/VBanner';
import HBanner from '../../components/HBanner';
import iphoneImage from '../../media/iphone.jpg';
import heroImage from '../../media/homepage-hero.jpg';

function Home() {
  return (
    <>
    <div className="parent">
      <div className="hero">
      <div className="banner-container">
        <div className="banner-overlay">
      <div className="banner-text">
    <p className="banner-title">Experience the new MacBook</p>
    <p className="banner-subtitle">Turbo-charge your productivity, with Apple’s new M2, M2 Pro & M2 Max chips</p>
  </div>
    <Button className='btn btn-cta banner-button'><span className="cta-text">Shop Macbooks</span></Button>
    <HBanner image={heroImage} />
    </div>
  </div>
      </div>
      <div className="columns">
        <div className="side-banner">
          <VBanner image={iphoneImage} />
        </div>
        <div className="right-column">
        <div className="promotions">
  <div style={{width: '100%'}}>
    <h2 className="promotions-title">Latest Promotions</h2>
    <hr className="section-hline"/>
  </div>
  <div className="promo-cards">
    {/* Promo cards go here */}
  </div>
  <div className="home-button-container">
  <Button className='btn btn-blue btn-medium'><span className="button-text">See all Promotions</span></Button>
  </div>
</div>
<div className="products">
  <div style={{width: '100%'}}>
    <h2 className="products-title">Popular Products</h2>
    <hr className="section-hline"/>
  </div>
  <div className="product-cards">
    {/* Product cards go here */}
  </div>
  <div className="home-button-container">
  <Button className='btn btn-blue btn-large'><span className="button-text">See all Popular Products</span></Button>
</div>
</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;