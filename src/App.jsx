import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import AboutUs from "./Homepage/About-us";
import Rooms from "./Homepage/Rooms";
import Services from "./Homepage/Services";
import News from "./Homepage/News";
import Contact from "./Homepage/contact";
import Header from "./Homepage/Header";
import Footer from "./Homepage/Footer";
import Signin from "./Homepage/Signin";
import Registration from "./Homepage/Registration";
import AdminLogin from "./Homepage/Admin";
import axios from "axios";
import Cookies from "js-cookie";
import Profile from "./assets/img/profile.jpeg";
import { BaseURL } from "./BaseURL";

function App() {
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
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        profileImage={profileImage}
      />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signin"
          element={<Signin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Registration setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
