import React from "react";

// Import React Components
import Header from "./Header";
import Footer from "./Footer";
import Roomsbg from "../assets/img/rooms-bg.jpg";
import Rooms1 from "../assets/img/room/rooms-1.jpg";
import Rooms2 from "../assets/img/room/rooms-2.jpg";

const Rooms = () => {
  return (
    <div>
      <Header /> {/* Header Section */}
      {/* Hero Section */}
      <section
        className="hero-section set-bg"
        style={{ backgroundImage: `url(${Roomsbg})` }}
      >
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Rooms</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rooms Section */}
      <section className="room-section spad">
        <div className="container">
          <div className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="room-pic-slider owl-carousel">
                  <div className="single-room-pic">
                    <img src={Rooms1} alt="" />
                  </div>
                  <div className="single-room-pic">
                    <img src={Rooms2} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="room-text">
                  <div className="room-title">
                    <h2>Standard Room</h2>
                    <div className="room-price">
                      <span>From</span>
                      <h2>₹1000</h2>
                      <sub>/night</sub>
                    </div>
                  </div>
                  <div className="room-desc">
                    <p>
                      Our standard rooms are designed for maximum comfort and
                      relaxation. Each room offers a perfect blend of modern
                      amenities and elegant decor, ensuring that your stay is
                      both enjoyable and restful. Whether you're here for
                      business or leisure, our rooms provide a welcoming
                      atmosphere with everything you need to unwind after a busy
                      day.
                    </p>
                  </div>
                  <div className="room-features">
                    <div className="room-info">
                      <i className="flaticon-019-television"></i>
                      <span>Smart TV with Streaming</span>
                    </div>
                    <div className="room-info">
                      <i className="flaticon-029-wifi"></i>
                      <span>High-Speed Wi-Fi</span>
                    </div>
                    <div className="room-info">
                      <i className="flaticon-003-air-conditioner"></i>
                      <span>Air Conditioning</span>
                    </div>
                    <div className="room-info">
                      <i className="flaticon-036-parking"></i>
                      <span>Free Parking</span>
                    </div>
                  </div>
                  <a href="#" className="primary-btn">
                    Book Now <i className="lnr lnr-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional room items... */}
          {/* Rest of your room components... */}
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Rooms;
