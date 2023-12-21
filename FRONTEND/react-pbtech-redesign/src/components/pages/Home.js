import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";
import { Button } from "../../components/Button";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VBanner from "../../components/VBanner";
import HBanner from "../../components/HBanner";
import iphoneImage from "../../media/iphone.jpg";
import heroImage from "../../media/homepage-hero.jpg";
import PromoCard from "../../components/PromoCard";
import ProductCard from "../components/../ProductCard";
import Promo1 from "../../media/promo1.png";
import Promo2 from "../../media/promo2.png";
import Promo3 from "../../media/promo3.png";
import PromoM1 from "../../media/promo-mobile.jpg";
import PromoM2 from "../../media/promo-mobile2.png";
import PromoM3 from "../../media/promo-mobile3.png";

function Home({ setCartCount }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/laptops`)
      .then((response) => response.json())
      .then((data) => {
        // Shuffle the array
        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }
        // Take the first 4 items
        setProducts(data.slice(0, 4));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="parent">
        <div className="hero">
          <div className="banner-container">
            <div className="banner-overlay">
              <div className="banner-text">
                <p className="banner-title">Experience the new MacBook</p>
                <p className="banner-subtitle desktop">
                  Turbo-charge your productivity, with Apple’s new M2, M2 Pro &
                  M2 Max chips
                </p>
                <p className="banner-subtitle mobile">
                  Turbo-charge your productivity
                </p>{" "}
              </div>
              <Button className="btn btn-cta banner-button">
                <span className="cta-text">Shop Macbooks</span>
              </Button>
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
                <h2 className="promotions-title">Latest Promotions</h2>
                <hr className="section-hline" />
                <div className="promo-cards">
                  {windowWidth > 1000 ? (
                    <>
                      <PromoCard image={Promo1} />
                      <PromoCard image={Promo2} />
                      <PromoCard image={Promo3} />
                    </>
                  ) : (
                    <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay interval={4000} infiniteLoop>
                      <div>
                        <PromoCard image={PromoM1} />
                      </div>
                      <div>
                        <PromoCard image={PromoM2} />
                      </div>
                      <div>
                        <PromoCard image={PromoM3} />
                      </div>
                    </Carousel>
                  )}
                </div>
              <div className="home-button-container">
                <Button className="btn btn-blue btn-medium">
                  <span className="button-text">See all Promotions</span>
                </Button>
              </div>
            </div>
            <div className="products">
                <h2 className="products-title">Popular Products</h2>
                <hr className="section-hline" />

              <div className="product-cards">
                <div className="product-cards">
                  {products.slice(0, 4).map((product) => (
                    <ProductCard
                      setCartCount={setCartCount}
                      brand={product.brand}
                      model={product.model}
                      card_image={product.card_image}
                      specs={product}
                      price={product.price}
                    />
                  ))}                     
                </div>
              </div>
              <div className="home-button-container">
                <Button className="btn btn-blue btn-medium">
                  <span className="button-text">See all Popular Products</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
