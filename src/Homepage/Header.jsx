import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Placeholder from "../assets/img/placeholder.png";
import Phone from "../assets/img/phone.png";

const Header = () => {
  return (
    <header className="header-section other-page">
      <div className="container-fluid">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="top-widget">
            <div className="top-info address">
              <img src={Placeholder} alt="" />
              <span>
                1525 Boring Lane, Los <br />
                Angeles, CA
              </span>
            </div>
            <div className="top-info phone-num">
              <img src={Phone} alt="" />
              <span>+1 (603)535-4592</span>
            </div>
          </div>
          <div className="container">
            <nav className="main-menu mobile-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <a href="#">Facilities</a>
                  <ul className="drop-menu">
                    <li>
                      <a href="#">Junior Suit</a>
                    </li>
                    <li>
                      <a href="#">Double Room</a>
                    </li>
                    <li>
                      <a href="#">Senior Suit</a>
                    </li>
                    <li>
                      <a href="#">Single Room</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
