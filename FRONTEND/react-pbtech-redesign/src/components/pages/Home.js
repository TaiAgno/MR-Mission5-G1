import React, { useState, useEffect } from 'react';
import '../../App.css';
import './Home.css';
import { Button } from '../../components/Button';
import VBanner from '../../components/VBanner';
import HBanner from '../../components/HBanner';
import iphoneImage from '../../media/iphone.jpg';
import heroImage from '../../media/homepage-hero.jpg';
import PromoCard from '../../components/PromoCard';
import ProductCard from '../components/../ProductCard';
import laptopImage from '../../media/NBKLEN150353__1.jpg'
import Promo1 from '../../media/promo1.png';
import Promo2 from '../../media/promo2.png';
import Promo3 from '../../media/promo3.png';
import PromoM from '../../media/promo-mobile.jpg';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="parent">
      <div className="hero">
      <div className="banner-container">
        <div className="banner-overlay">
      <div className="banner-text">
    <p className="banner-title">Experience the new MacBook</p>
    <p className="banner-subtitle desktop">Turbo-charge your productivity, with Apple’s new M2, M2 Pro & M2 Max chips</p>
<p className="banner-subtitle mobile">Turbo-charge your productivity</p>  </div>
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
    <PromoCard image={windowWidth > 850 ? Promo1 : PromoM} />
      {windowWidth > 850 && <PromoCard image={Promo2} />}
      {windowWidth > 850 && <PromoCard image={Promo3} />}
    </div>
  <div className="home-button-container">
  <Button className='btn btn-blue btn-medium hide'><span className="button-text">See all Promotions</span></Button>
  </div>
</div>
<div className="products">
  <div style={{width: '100%'}}>
    <h2 className="products-title">Popular Products</h2>
    <hr className="section-hline"/>
  </div>
  <div className="product-cards">
  <ProductCard 
        brand="Lenovo" 
        model="V15 G3" 
        image={laptopImage}
        specs={{screenSize: '15.6"', processor: "Intel Core i7", ram: "16GB DDR4", storage: "512GB SSD"}} 
        price="NZD$999"
      />
        <ProductCard 
        brand="Lenovo" 
        model="V15 G3" 
        image={laptopImage}
        specs={{screenSize: '15.6"', processor: "Intel Core i7", ram: "16GB DDR4", storage: "512GB SSD"}} 
        price="NZD$999"
      />
        <ProductCard 
        brand="Lenovo" 
        model="V15 G3" 
        image={laptopImage}
        specs={{screenSize: '15.6"', processor: "Intel Core i7", ram: "16GB DDR4", storage: "512GB SSD"}} 
        price="NZD$999"
      />
        <ProductCard 
        brand="Lenovo" 
        model="V15 G3" 
        image={laptopImage}
        specs={{screenSize: '15.6"', processor: "Intel Core i7", ram: "16GB DDR4", storage: "512GB SSD"}} 
        price="NZD$999"
      />
  </div>
  <div className="home-button-container">
  <Button className='btn btn-blue btn-medium hide'><span className="button-text">See all Popular Products</span></Button>
</div>
</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;