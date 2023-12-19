import React, { useState, useEffect } from 'react';
import './Footer.css';
import './Button.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import "@fontsource/dm-sans";
import nzFlagSvg from '../media/nzflag.svg';

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 820);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='shop-department'>
            <h3>Shop By Department</h3>
            <Link to='/'>Computers & Tablets</Link>
            <Link to='/'>PC Parts</Link>
            <Link to='/'>Printing, Scanning & Office</Link>
            <Link to='/'>Gaming & VR</Link>
          </div>
          <div className='phones-accessories'>
            <Link to='/'>Phones & Accessories</Link>
            <Link to='/'>PC Peripherals</Link>
            <Link to='/'>Cameras & Drones</Link>
            <Link to='/' className='no-bullet'>+ More Departments</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>Company Info</h3>
            <Link to='/'>About Us</Link>
            <Link to='/'>Business</Link>
            <Link to='/'>Education</Link>
            <Link to='/'>Wholesale</Link>
          </div>
          <div className='health'>
            <Link to='/'>Health</Link>
            <Link to='/'>Stores</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div className='footer-link-items'>
          <h3>Services & Support</h3>
            <Link to='/'>Help</Link>
            <Link to='/'>Returns & Warranties</Link>
            <Link to='/'>Finance</Link>
            <Link to='/'>Complaints & Feedbacks</Link>
          </div>
        </div>
      </div>
      <hr className="footer-hline" />

      <section className='social-media'>
  <div className='social-media-wrap'>
  <div className='button-container'>
            <button className='btn btn-footer'>
                Country{isMobile ? <img src={nzFlagSvg} style={{width: '30px', marginLeft: '10px'}} />: ': New Zealand'}
              </button></div>
    <div className='social-icons'>
      <Link
        className='social-icon-link facebook'
        to='/'
        target='_blank'
        aria-label='Facebook'
      >
        <i className='fab fa-facebook-f' />
      </Link>
      <Link
        className='social-icon-link twitter'
        to='/'
        target='_blank'
        aria-label='Twitter'
      >
        <i className='fab fa-twitter' />
      </Link>
      <Link
        className='social-icon-link instagram'
        to='/'
        target='_blank'
        aria-label='Instagram'
      >
        <i className='fab fa-instagram' />
      </Link>
      <Link
        className='social-icon-link youtube'
        to='/'
        target='_blank'
        aria-label='Youtube'
      >
        <i className='fab fa-youtube' />
      </Link>
    </div>
  </div>
</section>
    </div>
    <div className="bottom-footer-container">
        <small className='website-rights'>Copyright PB Technologies Ltd All rights reserved.</small>
    </div>
    </>
  );

  
}

export default Footer;