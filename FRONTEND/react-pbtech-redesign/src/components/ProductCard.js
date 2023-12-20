import React, { useState } from "react";
import { Button } from "./Button";
import "./ProductCard.css";
import DropdownCard from "./DropdownCard";
import buttonTick from "../media/button-white-tick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductCard({
  setCartCount,
  brand,
  model,
  card_image,
  specs,
  price,
  onCardClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inCart, setInCart] = useState(false);

  //cart counter
  const handleClick = () => {
    setInCart((prevInCart) => {
      if (!prevInCart) {
        setCartCount((prevCount) => prevCount + 1);
      } else {
        setCartCount((prevCount) => prevCount - 1);
      }
      return !prevInCart;
    });
  };

  return (
    <div className="product-card-container" onClick={onCardClick}>
      <div className="product-card">
        <h2 className="product-title">
          {brand} {model}
        </h2>
        <img src={card_image} alt={model} className="product-image" />
        <span className="hide-specs">
          <div className="product-specs">
            <p className="spec-property">Screen size:</p>
            <p className="spec-value">{specs.screen_size}</p>
            <p className="spec-property">Processor:</p>
            <p className="spec-value">{specs.cpu}</p>
            <p className="spec-property">RAM:</p>
            <p className="spec-value">{specs.ram}</p>
            <p className="spec-property">Storage:</p>
            <p className="spec-value">{specs.storage}</p>
          </div>
        </span>
        <div
          className="dropdown-container"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <button className="more-specs-button">More Specifications</button>
          <span style={{ fontSize: isOpen ? "20px" : "16px" }}>
            {" "}
            {isOpen ? String.fromCharCode(60) : String.fromCharCode(8744)}
          </span>
        </div>
        <hr className="horizontal-line" />
        {isOpen && (
          <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <DropdownCard specs={specs} />
          </div>
        )}
        {isOpen && (
          <div className="mobile-dropdown-card">
            <div>
              <p className="mobile-card-property">Screen size:</p>
              <p className="mobile-card-value">{specs.screen_size}</p>
              <p className="mobile-card-property">Processor:</p>
              <p className="mobile-card-value">{specs.cpu}</p>
              <p className="mobile-card-property">RAM:</p>
              <p className="mobile-card-value">{specs.ram}</p>
              <p className="mobile-card-property">Storage:</p>
              <p className="mobile-card-value">{specs.storage}</p>
            </div>

          </div>
        )}
        <div style={{ flexGrow: 1 }}></div>
        <div className="product-footer">
          <Button
            className={
              inCart
                ? "btn btn-cart-added btn-x-small"
                : "btn btn-card btn-x-small"
            }
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <span className="card-button-text">
              {inCart ? (
                <>
                  <img src={buttonTick} alt="Remove Item" /> Remove Item
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </>
              )}
            </span>
          </Button>{" "}
          <p className="product-price">{price}</p>
        </div>
        <div className="responsive-product-price">
          <p className="product-price">{price}</p>
          <Button
            className={
              inCart
                ? "btn btn-cart-added btn-x-small"
                : "btn btn-card btn-x-small"
            }
            onClick={handleClick}
          ></Button>{" "}
        </div>
        <div className={`responsive-product-footer ${isOpen ? "open" : ""}`}>
          <p className="">
            {brand} {model}
          </p>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <span style={{ fontSize: isOpen ? "20px" : "16px", cursor: "pointer" }}>
              {" "}
              {isOpen ? String.fromCharCode(94) : String.fromCharCode(8744)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
