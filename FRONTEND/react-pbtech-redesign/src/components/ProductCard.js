import React, { useState } from 'react';
import { Button } from './Button';
import './ProductCard.css';
import DropdownCard from './DropdownCard';

function ProductCard({ brand, model, image, specs, price, onCardClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="product-card-container" onClick={onCardClick}>
    <div className="product-card">
      
      <h2 className="product-title">{brand} {model}</h2>
      <img src={image} alt={model} className="product-image"/>
      <span className="hide-specs">
      <div className="product-specs">
        <p className="spec-property">Screen size:</p>
        <p className="spec-value">{specs.screenSize}</p>
        <p className="spec-property">Processor:</p>
        <p className="spec-value">{specs.processor}</p>
        <p className="spec-property">RAM:</p>
        <p className="spec-value">{specs.ram}</p>
        <p className="spec-property">Storage:</p>
        <p className="spec-value">{specs.storage}</p>
      </div>
      </span>
      <div className="dropdown-container" onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}>
        <button className="more-specs-button">
          More Specifications
        </button>
        <span style={{ fontSize: isOpen ? '20px' : '16px'}}>  {isOpen ? String.fromCharCode(60) : String.fromCharCode(8744)}
        </span>
      </div>
      <hr className="horizontal-line"/>
      {isOpen && 
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <DropdownCard 
            specs={{
              screenType: 'LED',
              screenRes: '1920x1080',
              gpuModel: 'Nvidia GTX 1660',
              os: 'Windows 10',
              wifi: '802.11ac',
              bluetooth: '5.0'
            }}
          />
        </div>
        
      }
          {isOpen && 
    <div className="mobile-dropdown-card">
      <div>
        <p className="mobile-card-property">Screen size:</p>
        <p className="mobile-card-value">{specs.screenSize}</p>
        <p className="mobile-card-property">Processor:</p>
        <p className="mobile-card-value">{specs.processor}</p>
        <p className="mobile-card-property">RAM:</p>
        <p className="mobile-card-value">{specs.ram}</p>
        <p className="mobile-card-property">Storage:</p>
        <p className="mobile-card-value">{specs.storage}</p>
      </div>  
      <div className="arrow-flex-end" onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}>
      <span className="arrow-align-right" style={{ fontSize: '16px', color: isOpen ? 'black' : 'initial' }}>
  {isOpen ? String.fromCharCode(8743) : String.fromCharCode(8744)}
</span>
    </div>
      </div>
    }
      <div style={{flexGrow: 1}}></div>
      <div className="product-footer">
        <Button className='btn btn-card btn-x-small'><span className="card-button-text">Add to Cart</span></Button>
        <p className="product-price">{price}</p>
      </div>
      <div className="responsive-product-price">
        <p className="product-price">{price}</p>
        <Button className='btn btn-card btn-x-small'><span className="card-button-text">Add to Cart</span></Button>
        </div>
        <div className={`responsive-product-footer ${isOpen ? 'open' : ''}`}>
  <p className="">{brand} {model}</p>
  <div onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}>
    <span style={{ fontSize: isOpen ? '20px' : '16px'}}>  {isOpen ? String.fromCharCode(60) : String.fromCharCode(8744)}
    </span>
  </div>

  
</div>
      </div>
    </div>
  );
}

export default ProductCard;