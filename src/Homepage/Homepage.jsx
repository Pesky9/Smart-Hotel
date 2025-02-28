import React from "react";
import InnerHeader from "../assets/img/logo.png";
import Room1 from "../assets/img/room-slider/room-1.jpg";
import Room2 from "../assets/img/room-slider/room-2.jpg";
import Room3 from "../assets/img/room-slider/room-3.jpg";
import calendar from "../assets/img/calendar.png";
import RoomFooter1 from "../assets/img/room-footer-pic/room-1.jpg";
import RoomFooter2 from "../assets/img/room-footer-pic/room-2.jpg";
import RoomFooter3 from "../assets/img/room-footer-pic/room-3.jpg";
import RoomFooter4 from "../assets/img/room-footer-pic/room-4.jpg";
import Slider from "../assets/img/slider-1.jpg";
// import OwlCarousel from "react-owl-carousel";

import Logo from "../assets/img/logo.png";

const Homepage = () => {
  return (
    <>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="logo">
              <a href="./index.html">
                <img src={InnerHeader} alt="" />
              </a>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-9">
                  <nav className="main-menu mobile-menu">
                    <ul>
                      <li>
                        <a href="./index.html">Home</a>
                      </li>
                      <li>
                        <a href="./about-us.html">About</a>
                      </li>
                      <li>
                        <a href="./rooms.html">Rooms</a>
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
                        <a href="./news.html">News</a>
                      </li>
                      <li>
                        <a href="./contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-3 d-flex justify-content-end">
                  {/* Login Dropdown */}
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
              </div>
            </div>
            <div id="mobile-menu-wrap"></div>
          </div>
        </div>
      </header>

      <div className="hero-slider">
        <div className="slider-item">
          <div
            className="single-slider-item set-bg"
            style={{ backgroundImage: `url(${Slider})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>
                    We hope you’ll enjoy <br />
                    your stay.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Slider End */}

      {/* Room Availability Section Begin */}
      <section className="room-availability spad">
        <div className="container">
          <div className="room-check">
            <div className="row">
              <div className="col-lg-6">
                <div className="room-item">
                  <OwlCarousel
                    className="room-pic-slider room-pic-item"
                    items={1}
                    loop
                    autoplay
                    autoplayTimeout={3000}
                    dots={true}
                    nav={true}
                  >
                    <div className="room-pic">
                      <img src={Room1} alt="Room 1" />
                    </div>
                    <div className="room-pic">
                      <img src={Room2} alt="Room 2" />
                    </div>
                    <div className="room-pic">
                      <img src={Room3} alt="Room 3" />
                    </div>
                  </OwlCarousel>

                  <div className="room-text">
                    <div className="room-title">
                      <h2>Junior Suite</h2>
                      <div className="room-price">
                        <span>From</span>
                        <h2>₹1500</h2>
                      </div>
                    </div>
                    <div className="room-features">
                      <div className="room-info">
                        <i className="flaticon-019-television"></i>
                        <span>Smart TV</span>
                      </div>
                      <div className="room-info">
                        <i className="flaticon-029-wifi"></i>
                        <span>High Wi-fii</span>
                      </div>
                      <div className="room-info">
                        <i className="flaticon-003-air-conditioner"></i>
                        <span>AC</span>
                      </div>
                      <div className="room-info">
                        <i className="flaticon-036-parking"></i>
                        <span>Parking</span>
                      </div>
                      {/*
                      <div className="room-info last">
                        <i className="flaticon-007-swimming-pool"></i>
                        <span>Pool</span>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="check-form">
                  <h2>Check Availability</h2>
                  <form action="#">
                    <div className="datepicker">
                      <div className="date-select">
                        <p>From</p>
                        <input
                          type="text"
                          className="datepicker-1"
                          defaultValue="dd / mm / yyyy"
                        />
                        <img src={calendar} alt="" />
                      </div>
                      <div className="date-select to">
                        <p>To</p>
                        <input
                          type="text"
                          className="datepicker-2"
                          defaultValue="dd / mm / yyyy"
                        />
                        <img src={calendar} alt="" />
                      </div>
                    </div>
                    <div className="room-quantity">
                      <div className="single-quantity">
                        <p>Adults</p>
                        <div className="pro-qty">
                          <input type="text" defaultValue="0" />
                        </div>
                      </div>
                      <div className="single-quantity">
                        <p>Children</p>
                        <div className="pro-qty">
                          <input type="text" defaultValue="0" />
                        </div>
                      </div>
                      <div className="single-quantity last">
                        <p>Rooms</p>
                        <div className="pro-qty">
                          <input type="text" defaultValue="0" />
                        </div>
                      </div>
                    </div>
                    <div className="room-selector">
                      <p>Room</p>
                      <select className="suit-select">
                        <option>Eg. Master suite</option>
                        <option value="">Double Room</option>
                        <option value="">Single Room</option>
                        <option value="">Special Room</option>
                      </select>
                    </div>
                    <button type="button">
                      CHECK Availability <i className="lnr lnr-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="about-room">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2>
                  “Customers may forget what you said but they will never forget
                  how you made them feel”.
                </h2>
              </div>
            </div>
            <div className="about-para">
              <div className="row">
                <div className="col-lg-6">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> */}
                  <p>
                    Welcome to our hotel, where luxury meets comfort. We offer a
                    variety of room options, from cozy single rooms to spacious
                    suites, designed to meet the needs of every traveler.
                    Whether you’re here for business or leisure, we promise a
                    memorable stay.
                  </p>
                  <p>
                    Our rooms are equipped with modern amenities including
                    high-speed Wi-Fi, air conditioning, smart TVs, and more to
                    ensure that your stay is as comfortable and convenient as
                    possible. Enjoy a relaxing stay with room service,
                    housekeeping, and access to our exclusive hotel facilities
                    such as the wellness center, pool, and on-site restaurant.
                  </p>
                  <p>
                    Book your stay today and experience the perfect blend of
                    comfort, convenience, and luxury. Don’t miss out on our
                    special offers and discounts available exclusively through
                    our online booking system.
                  </p>
                </div>
                <div className="col-lg-6">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> */}
                  <p>
                    Need assistance with your booking or have special requests?
                    Our dedicated customer service team is available 24/7 to
                    ensure your experience with us is seamless and stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="follow-instagram">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Follow us on Instagram @</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Follow Instagram Section End */}

      <div className="footer-room-pic">
        <div className="container-fluid">
          <div className="row">
            <img src={RoomFooter1} alt="" />
            <img src={RoomFooter2} alt="" />
            <img src={RoomFooter3} alt="" />
            <img src={RoomFooter4} alt="" />
          </div>
        </div>
      </div>
      {/* Footer Room Pic Section End */}

      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo">
                <a href="#">
                  <img src={Logo} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="row pb-50">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Location</h5>
                <div className="widget-text">
                  <i className="lnr lnr-map-marker"></i>
                  <p>
                    Bull temple road
                    <br />
                    Banglore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Reception</h5>
                <div className="widget-text">
                  <i className="lnr lnr-phone-handset"></i>
                  <p>+91 603-535-4592</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Shuttle Service</h5>
                <div className="widget-text">
                  <i className="lnr lnr-phone-handset"></i>
                  <p>+91 603-535-4592</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Restaurant</h5>
                <div className="widget-text">
                  <i className="lnr lnr-phone-handset"></i>
                  <p>+91 603-535-4592</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-text">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright &copy; {new Date().getFullYear()} All rights reserved |{" "}
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
            <div className="privacy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Photo Requests</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
