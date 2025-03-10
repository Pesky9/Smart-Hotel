import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

import BookingConfirmationModal from "./BookingConfirmationModal";

// Import images
import Roomsbg from "../assets/img/rooms-bg.jpg";
import Rooms1 from "../assets/img/room/rooms-1.jpg";
import Rooms2 from "../assets/img/room/rooms-2.jpg";
import Rooms3 from "../assets/img/room/rooms-3.jpg";
import Rooms4 from "../assets/img/room/rooms-4.jpg";
import Rooms5 from "../assets/img/room/rooms-5.jpg";

// Thumbnail Carousel Component
const ThumbnailCarousel = ({ images }) => {
  // Existing carousel code remains the same
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, images.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="thumbnail-carousel" style={{ position: "relative" }}>
      {/* Main Image */}
      <div
        style={{
          position: "relative",
          height: "300px",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          >
            <img
              src={image}
              alt={`Room view ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
            fontSize: "20px",
            opacity: 0.7,
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "15px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
            fontSize: "20px",
            opacity: 0.7,
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
        >
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          overflow: "auto",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => selectImage(index)}
            style={{
              width: "70px",
              height: "50px",
              borderRadius: "4px",
              overflow: "hidden",
              cursor: "pointer",
              border:
                index === currentImageIndex
                  ? "2px solid #ff5a5f"
                  : "2px solid transparent",
              opacity: index === currentImageIndex ? 1 : 0.7,
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Success = () => {
  toast.success("Booking Successful!");
};

const Rooms = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({ type: "", price: 0 });

  // Function to open modal with room details
  const openBookingModal = (roomType, roomPrice) => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login to Book!");
      return;
    }
    setSelectedRoom({ type: roomType, price: roomPrice });
    setIsModalOpen(true);
  };

  // Add scroll functionality for hash links
  useEffect(() => {
    // Check if there's a hash in the URL when page loads
    if (window.location.hash) {
      // Get element by ID (remove the # from the hash)
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);

      // If element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500); // Give time for page to fully load
      }
    }
  }, []);

  return (
    <div>
      <ToastContainer />
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
          {/* Single Room */}
          <div id="single-room" className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6">
                <ThumbnailCarousel images={[Rooms1, Rooms2]} />
              </div>
              <div className="col-lg-6">
                <div className="room-text">
                  <div className="room-title">
                    <h2>Single Room</h2>
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
                  <button
                    onClick={() => openBookingModal("Single Room", 1000)}
                    className="primary-btn"
                  >
                    Book Now <i className="lnr lnr-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Double Room */}
          <div id="double-room" className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6">
                <ThumbnailCarousel images={[Rooms3, Rooms2]} />
              </div>
              <div className="col-lg-6">
                <div className="room-text">
                  <div className="room-title">
                    <h2>Double Room</h2>
                    <div className="room-price">
                      <span>From</span>
                      <h2>₹1500</h2>
                      <sub>/night</sub>
                    </div>
                  </div>
                  <div className="room-desc">
                    <p>
                      Our double rooms are perfect for couples or friends
                      traveling together. Featuring a spacious layout with
                      comfortable bedding, these rooms offer modern amenities
                      and stylish decor to enhance your stay. Whether you're
                      here for a short visit or an extended stay, enjoy a cozy
                      and relaxing atmosphere designed for your comfort.
                    </p>
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
                    <div className="room-info last">
                      <i className="flaticon-007-swimming-pool"></i>
                      <span>Pool</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openBookingModal("Double Room", 1500)}
                    className="primary-btn"
                  >
                    Book Now <i className="lnr lnr-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suite Room */}
          <div id="suite-room" className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6">
                <ThumbnailCarousel images={[Rooms4, Rooms2]} />
              </div>
              <div className="col-lg-6">
                <div className="room-text">
                  <div className="room-title">
                    <h2>Suite Room</h2>
                    <div className="room-price">
                      <span>From</span>
                      <h2>₹2000</h2>
                      <sub>/night</sub>
                    </div>
                  </div>
                  <div className="room-desc">
                    <p>
                      Experience luxury and space in our elegantly designed
                      suites. With a separate living area and a well-appointed
                      bedroom, our suites offer the perfect balance of comfort
                      and sophistication. Ideal for business travelers or those
                      seeking a premium stay, each suite is thoughtfully
                      designed to provide privacy, convenience, and relaxation.
                    </p>
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
                    <div className="room-info last">
                      <i className="flaticon-007-swimming-pool"></i>
                      <span>Pool</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openBookingModal("Suite Room", 2000)}
                    className="primary-btn"
                  >
                    Book Now <i className="lnr lnr-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Deluxe Room */}
          <div id="deluxe-room" className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6">
                <ThumbnailCarousel images={[Rooms5, Rooms2]} />
              </div>
              <div className="col-lg-6">
                <div className="room-text">
                  <div className="room-title">
                    <h2>Deluxe Room</h2>
                    <div className="room-price">
                      <span>From</span>
                      <h2>₹3000</h2>
                      <sub>/night</sub>
                    </div>
                  </div>
                  <div className="room-desc">
                    <p>
                      Our deluxe rooms offer an upgraded experience with extra
                      space and enhanced amenities. Designed with stylish
                      interiors and premium comforts, these rooms provide a
                      refined ambiance for a truly relaxing stay. Whether you're
                      here for work or leisure, enjoy an elevated level of
                      luxury and convenience
                    </p>
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
                    <div className="room-info last">
                      <i className="flaticon-007-swimming-pool"></i>
                      <span>Pool</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openBookingModal("Deluxe Room", 3000)}
                    className="primary-btn"
                  >
                    Book Now <i className="lnr lnr-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        Success={Success}
        roomType={selectedRoom.type}
        roomPrice={selectedRoom.price}
      />
    </div>
  );
};

export default Rooms;
