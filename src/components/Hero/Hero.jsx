import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              
              <span>Premium Products</span>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="image-container">
            <img src="/hero-image.png" alt="hero" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;