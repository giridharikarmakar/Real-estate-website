import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="h-container">

        <img src="/logo.png" alt="logo" className="logo" />

        <div
          className="menu-icon"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <BiMenuAltRight size={32} />
        </div>

        <div className={`h-menu ${menuOpened ? "active" : ""}`}>
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Values</a>
          <a href="#contact">Contact Us</a>
          <a href="#getStarted">Get Started</a>

          <button className="button">Contact</button>
        </div>

      </div>
    </section>
  );
};

export default Header;