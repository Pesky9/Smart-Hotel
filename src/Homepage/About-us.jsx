import React from "react";
import Logo from "../assets/img/logo.png";

const HotelTemplate = () => {
  return (
    <div>
      {/* Preloader */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Header Section */}
      <header className="header-section other-page">
        <div className="container-fluid">
          <div className="inner-header flex justify-between items-center p-4">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="top-widget flex gap-4">
              <div className="top-info flex items-center">
                <img src="img/placeholder.png" alt="Address" className="mr-2" />
                <span>1525 Boring Lane, Los Angeles, CA</span>
              </div>
              <div className="top-info flex items-center">
                <img src="img/phone.png" alt="Phone" className="mr-2" />
                <span>+1 (603) 535-4592</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center"
        style={{ backgroundImage: "url(img/about-us-bg.jpg)" }}
      >
        <div className="hero-text text-center py-20">
          <h1 className="text-white text-4xl">About</h1>
        </div>
      </section>

      {/* About Section */}
      <div className="about-us-room py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-xl italic">
            “At our hotel, it's not just about the stay; it's about the
            unforgettable moments we create together. You’ll always remember how
            we made you feel.”
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              At our hotel, we pride ourselves on delivering luxury, comfort,
              and convenience. Our elegantly designed rooms come with modern
              amenities, ensuring a comfortable stay. Whether you're here for
              business or leisure, we cater to every need, from high-speed
              internet to our fitness center and pool area.
            </p>
            <p>
              We offer a personalized experience to each guest. Our team ensures
              your stay is enjoyable. Enjoy fine dining, a relaxing spa, or
              explore the city’s attractions with ease. At our hotel, we make
              every moment memorable.
            </p>
          </div>
        </div>
      </div>

      {/* Video Tour Section */}
      <section
        className="video-tour bg-cover bg-center py-20"
        style={{ backgroundImage: "url(img/video-bg.jpg)" }}
      >
        <div className="text-center">
          <h2 className="text-white text-3xl">Video Hotel Tour</h2>
          <div className="mt-4">
            <a
              href="https://www.youtube.com/watch?v=hGsVLXnFgbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-play text-white text-5xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <img src="img/logo.png" alt="Footer Logo" className="mx-auto" />
          </div>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HotelTemplate;
