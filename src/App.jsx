import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
