import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Logo from "../assets/img/logo.png";
import Profile from "../assets/img/profile.jpeg";
import { BaseURL } from "../BaseURL";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get(`${BaseURL}/user/verify`, {
          withCredentials: true,
        })
        .then((response) => {
          const userData = response.data.user;
          setUsername(userData.uname || "User");
          setProfileImage(Profile);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("User verification error:", error);
          Cookies.remove("token");
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
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
              <div className="user-profile d-flex align-items-center gap-3">
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
              </div>
            </div>
          ) : (
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
          )}
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
