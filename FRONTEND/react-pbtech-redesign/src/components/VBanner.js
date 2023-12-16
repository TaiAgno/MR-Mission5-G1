import React from 'react';
import './VBanner.css';

function VBanner({ image }) {
  return (
    <div className="vertical-banner" style={{ backgroundImage: `url(${image})` }}>
    </div>
  );
}
export default VBanner;