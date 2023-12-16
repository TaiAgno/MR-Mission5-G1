import React from 'react';
import './HBanner.css';

function HBanner({ image }) {
    return (
      <div className="horizontal-banner" style={{ backgroundImage: `url(${image})` }}>
      </div>
    );
  }
export default HBanner;