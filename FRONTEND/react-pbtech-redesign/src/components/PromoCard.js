import React from 'react';
import './PromoCard.css';

function PromoCard({ image }) {
    return (
      <div className="promo-card" style={{ backgroundImage: `url(${image})` }}>
      </div>
    );
  }
export default PromoCard;