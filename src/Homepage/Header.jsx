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

          <div className="container">
            <nav className="main-menu mobile-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
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
          <div className="col-xl-3 d-flex justify-content-end">
            <div className="dropdown login-dropdown">
              <button className="dropdown-btn">Login</button>
              <ul className="dropdown-content">
                <li>
                  <a href="adminlogin.html">Admin</a>
                </li>
                <li>
                  <a href="login.html">User</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
