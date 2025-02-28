import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <nav
              className={`main-menu mobile-menu ${
                isMobileMenuOpen ? "active" : ""
              }`}
            >
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
                      <a href="/rooms#single-room">Single Room</a>
                    </li>
                    <li>
                      <a href="/rooms#double-room">Double Room</a>
                    </li>
                    <li>
                      <a href="/rooms#suite-room">Suite Room</a>
                    </li>
                    <li>
                      <a href="/rooms#deluxe-room">Deluxe Room</a>
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
                  <a href="/signin">User</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="mobile-menu-wrap">
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i
                className={isMobileMenuOpen ? "fa fa-times" : "fa fa-bars"}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
