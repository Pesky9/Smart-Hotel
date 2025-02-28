import React, { useState, useEffect } from "react";
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
import Logo from "../assets/img/logo.png";
import Header from "./Header";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);

  const slides = [
    { image: Room1, alt: "Room 1" },
    { image: Room2, alt: "Room 2" },
    { image: Room3, alt: "Room 3" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection("right");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection("left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setDirection(index > currentSlide ? "right" : "left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    <>
      <Header />
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
                    We hope you'll enjoy <br />
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
                  {/* Enhanced Carousel with Graphics */}
                  <div
                    className="room-pic-slider room-pic-item position-relative"
                    style={{
                      overflow: "hidden",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Slide containers with transition effects */}
                    <div
                      className="room-pic"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "400px", // Fixed height for consistency
                      }}
                    >
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            opacity: currentSlide === index ? 1 : 0,
                            transform:
                              isTransitioning && currentSlide === index
                                ? direction === "right"
                                  ? "translateX(-100%)"
                                  : "translateX(100%)"
                                : isTransitioning &&
                                  ((direction === "right" &&
                                    (index === currentSlide + 1 ||
                                      (currentSlide === slides.length - 1 &&
                                        index === 0))) ||
                                    (direction === "left" &&
                                      (index === currentSlide - 1 ||
                                        (currentSlide === 0 &&
                                          index === slides.length - 1))))
                                ? "translateX(0)"
                                : "translateX(0)",
                            transition:
                              "opacity 0.6s ease, transform 0.6s ease",
                            zIndex: currentSlide === index ? 1 : 0,
                          }}
                        >
                          <img
                            src={slide.image}
                            alt={slide.alt}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          {/* Slide caption overlay */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background:
                                "linear-gradient(transparent, rgba(0,0,0,0.7))",
                              color: "white",
                              padding: "20px",
                              textAlign: "center",
                              transform: isTransitioning
                                ? "translateY(20px)"
                                : "translateY(0)",
                              opacity: isTransitioning ? 0 : 1,
                              transition:
                                "transform 0.6s ease, opacity 0.6s ease",
                            }}
                          >
                            <h3 style={{ margin: 0 }}>{slide.alt}</h3>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="carousel-arrow carousel-prev"
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                        zIndex: 2,
                        fontSize: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        transition: "background 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.7)";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1)";
                      }}
                    >
                      {/* Left arrow icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 4L7 12L15 20"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="carousel-arrow carousel-next"
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                        zIndex: 2,
                        fontSize: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        transition: "background 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.7)";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1)";
                      }}
                    >
                      {/* Right arrow icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4L17 12L9 20"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Enhanced Dots Indicators */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "10px",
                        zIndex: 2,
                      }}
                    >
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          style={{
                            width: currentSlide === index ? "30px" : "10px",
                            height: "10px",
                            borderRadius:
                              currentSlide === index ? "5px" : "50%",
                            background:
                              currentSlide === index
                                ? "white"
                                : "rgba(255,255,255,0.5)",
                            border: "none",
                            cursor: "pointer",
                            transition: "width 0.3s, background 0.3s",
                            position: "relative",
                            overflow: "hidden",
                          }}
                          aria-label={`Go to slide ${index + 1}`}
                        >
                          {currentSlide === index && (
                            <span
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "100%",
                                background: "rgba(255,255,255,0.3)",
                                animation: "pulse 2s infinite",
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Carousel Transition Overlay */}
                    {isTransitioning && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0,0,0,0.1)",
                          zIndex: 1,
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: direction === "right" ? "100%" : "0",
                            transform: "translateY(-50%)",
                            width: "50px",
                            height: "50px",
                            opacity: 0.7,
                            animation:
                              direction === "right"
                                ? "slideLeft 0.6s ease"
                                : "slideRight 0.6s ease",
                          }}
                        />
                      </div>
                    )}
                  </div>

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

          {/* Rest of the page content remains the same */}
          <div className="about-room">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2>
                  "Customers may forget what you said but they will never forget
                  how you made them feel".
                </h2>
              </div>
            </div>
            <div className="about-para">
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    Welcome to our hotel, where luxury meets comfort. We offer a
                    variety of room options, from cozy single rooms to spacious
                    suites, designed to meet the needs of every traveler.
                    Whether you're here for business or leisure, we promise a
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
                    comfort, convenience, and luxury. Don't miss out on our
                    special offers and discounts available exclusively through
                    our online booking system.
                  </p>
                </div>
                <div className="col-lg-6">
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
              Copyright &copy; {new Date().getFullYear()} All rights reserved |{" "}
            </div>
            <div className="privacy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Photo Requests</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add animation keyframes for the carousel transitions */}
      <style>
        {`
          @keyframes slideLeft {
            from { left: 100%; opacity: 0.7; }
            to { left: 0; opacity: 0; }
          }
          
          @keyframes slideRight {
            from { left: 0; opacity: 0.7; }
            to { left: 100%; opacity: 0; }
          }
          
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 0.2; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </>
  );
};

export default Homepage;
