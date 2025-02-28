import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = ({ isLoggedIn, username, profileImage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      const profileElement = document.getElementById("user-profile-container");
      if (profileElement && !profileElement.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header-section other-page">
      <div className="container-fluid">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
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
                  <Link to="/contact">Contact</Link>
                </li>
                {isLoggedIn && (
                  <>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/orders">Orders</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>

          {isLoggedIn ? (
            <div className="col-xl-3 d-flex justify-content-end align-items-center">
              <div
                id="user-profile-container"
                className="user-profile d-flex align-items-center gap-3"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={toggleProfileDropdown}
              >
                <img
                  src={profileImage}
                  alt="User Profile"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <span
                  className="ml-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#fff",
                  }}
                >
                  {username}
                </span>

                {isProfileDropdownOpen && (
                  <div
                    className="profile-dropdown"
                    style={{
                      position: "absolute",
                      top: "60px",
                      right: "0",
                      backgroundColor: "#fff",
                      minWidth: "150px",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                      zIndex: "1000",
                      borderRadius: "4px",
                    }}
                  >
                    <ul
                      style={{ listStyle: "none", padding: "0", margin: "0" }}
                    >
                      {/* <li style={{ borderBottom: "1px solid #f1f1f1" }}>
                        <Link
                          to="/profile"
                          style={{
                            display: "block",
                            padding: "10px 15px",
                            color: "#333",
                            textDecoration: "none",
                          }}
                        >
                          Profile
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          to="/logout"
                          style={{
                            display: "block",
                            padding: "10px 15px",
                            color: "#333",
                            textDecoration: "none",
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="col-xl-3 d-flex justify-content-end">
              <div className="dropdown login-dropdown">
                <button className="dropdown-btn">Login</button>
                <ul className="dropdown-content">
                  <li>
                    <a href="/admin/login">Dashboard</a>
                  </li>
                  <li>
                    <a href="/signin">Signin</a>
                  </li>
                  <li>
                    <a href="/signup">Signup</a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
