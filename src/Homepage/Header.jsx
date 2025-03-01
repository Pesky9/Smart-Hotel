import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Cookies from "js-cookie";

const Header = ({ isLoggedIn, username, profileImage }) => {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    location.reload();
  };

  return (
    <header className="header-section other-page">
      <div className="container-fluid">
        <div className="inner-header">
          {/* Mobile menu button - visible only on mobile */}
          <div
            className="d-block d-md-none"
            style={{ position: "absolute", right: "65px", top: "37px" }}
          >
            <button
              onClick={toggleMobileMenu}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" style={{ maxHeight: "60px" }} />
            </Link>
          </div>

          <div className="container">
            {/* Desktop navigation - always visible on desktop */}
            <nav className="main-menu d-none d-md-block">
              <ul className="d-flex flex-row">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
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

            {/* Mobile navigation - slide in from left */}
            {isMobileMenuOpen && (
              <div
                className="mobile-menu-overlay"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 1000,
                }}
              ></div>
            )}

            <div
              className="mobile-menu d-md-none"
              style={{
                position: "fixed",
                top: 0,
                left: isMobileMenuOpen ? 0 : "-280px",
                width: "280px",
                height: "100vh",
                backgroundColor: "#333",
                zIndex: 1001,
                transition: "left 0.3s ease",
                overflowY: "auto",
                paddingTop: "60px",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Link
                    to="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Link
                    to="/aboutus"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Link
                    to="/services"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Link
                    to="/rooms"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Rooms
                  </Link>
                </li>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    onClick={(e) => {
                      const submenu = e.currentTarget.nextElementSibling;
                      if (submenu.style.display === "block") {
                        submenu.style.display = "none";
                      } else {
                        submenu.style.display = "block";
                      }
                    }}
                  >
                    Facilities <span>▼</span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "none",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <li style={{ padding: "10px 20px 10px 30px" }}>
                      <a
                        href="/rooms#single-room"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Single Room
                      </a>
                    </li>
                    <li style={{ padding: "10px 20px 10px 30px" }}>
                      <a
                        href="/rooms#double-room"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Double Room
                      </a>
                    </li>
                    <li style={{ padding: "10px 20px 10px 30px" }}>
                      <a
                        href="/rooms#suite-room"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Suite Room
                      </a>
                    </li>
                    <li style={{ padding: "10px 20px 10px 30px" }}>
                      <a
                        href="/rooms#deluxe-room"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Deluxe Room
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Link
                    to="/contact"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                {isLoggedIn && (
                  <>
                    <li
                      style={{
                        padding: "10px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Link
                        to="/news"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        News
                      </Link>
                    </li>
                    <li
                      style={{
                        padding: "10px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Link
                        to="/orders"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Orders
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
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
                  style={{ width: "40px", height: "40px" }}
                />
                <span
                  className="ml-3 d-none d-sm-inline"
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
                      <li
                        style={{
                          display: "block",
                          padding: "10px 15px",
                          color: "#333",
                          textDecoration: "none",
                        }}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
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
                    <a href="/admin/login">Admin</a>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
