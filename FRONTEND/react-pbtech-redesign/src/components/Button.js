import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-blue', 'btn-orange', 'btn-gray', 'btn-cart-added', 'btn-card', 'btn-search', 'btn-cta', 'btn-action-chip', 'btn-footer'];

const SIZES = ['btn-short', 'btn-x-small', 'btn-small', 'btn-medium', 'btn-large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    ...rest
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
      <Link>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          {...rest}
        >
          {children}
        </button>
      </Link>
    );
  };