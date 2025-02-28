import React, { useState } from "react";

const Order = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [hasCurrentBooking, setHasCurrentBooking] = useState(true);

  // Sample data for previous bookings
  const previousBookingsData = [
    {
      id: "previous1",
      bookingId: "#67890",
      roomType: "Deluxe Room",
      checkIn: "January 10, 2025",
      checkOut: "January 15, 2025",
      totalPrice: "₹800",
      status: "Completed",
      details: {
        roomPrice: "₹150 per night",
        totalNights: 5,
        taxes: "₹50",
        totalAmount: "₹800",
        services: ["Free WiFi", "Breakfast Included", "Swimming Pool Access"],
      },
    },
    {
      id: "previous2",
      bookingId: "#54321",
      roomType: "Standard Room",
      checkIn: "December 1, 2024",
      checkOut: "December 5, 2024",
      totalPrice: "₹600",
      status: "Completed",
      details: {
        roomPrice: "₹100 per night",
        totalNights: 4,
        taxes: "₹40",
        totalAmount: "₹600",
        services: ["Free WiFi", "Breakfast Included"],
      },
    },
    {
      id: "previous3",
      bookingId: "#98765",
      roomType: "Executive Suite",
      checkIn: "November 10, 2024",
      checkOut: "November 15, 2024",
      totalPrice: "₹1200",
      status: "Completed",
      details: {
        roomPrice: "₹200 per night",
        totalNights: 5,
        taxes: "₹100",
        totalAmount: "₹1200",
        services: ["Free WiFi", "Breakfast Included", "Airport Transfer"],
      },
    },
  ];

  // Current booking data
  const currentBookingData = {
    id: "current1",
    bookingId: "#12345",
    roomType: "Junior Suite",
    checkIn: "March 5, 2025",
    checkOut: "March 10, 2025",
    totalPrice: "₹1050",
    status: "Confirmed",
    details: {
      roomPrice: "₹200 per night",
      totalNights: 5,
      taxes: "₹50",
      totalAmount: "₹1050",
      services: ["Free WiFi", "Breakfast Included", "Swimming Pool Access"],
    },
  };

  // Handle showing popup with booking details
  const handleShowPopup = (bookingId) => {
    let booking;

    if (bookingId === "current1") {
      booking = currentBookingData;
    } else {
      booking = previousBookingsData.find((b) => b.id === bookingId);
    }

    setSelectedBooking(booking);
    setShowPopup(true);
  };

  // Handle closing popup
  const handleHidePopup = () => {
    setShowPopup(false);
    setSelectedBooking(null);
  };

  // Handle cancel booking
  const handleCancelBooking = () => {
    setHasCurrentBooking(false);
    handleHidePopup();
  };

  // Card style for booking items
  const cardStyle = {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "left",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  // Hover effect handlers
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  };

  // Handle Escape key press
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleHidePopup();
      }
    };

    if (showPopup) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showPopup]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #86591a, #e4cc51)",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
      }}
    >
      {/* Current Bookings Section */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          Current Bookings
        </h2>

        {hasCurrentBooking ? (
          <div
            style={cardStyle}
            onClick={() => handleShowPopup("current1")}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
              <strong>Booking ID:</strong> {currentBookingData.bookingId}
            </p>
            <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
              <strong>Room Type:</strong> {currentBookingData.roomType}
            </p>
            <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
              <strong>Check-in Date:</strong> {currentBookingData.checkIn}
            </p>
            <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
              <strong>Check-out Date:</strong> {currentBookingData.checkOut}
            </p>
            <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
              <strong>Total Price:</strong> {currentBookingData.totalPrice}
            </p>
          </div>
        ) : (
          <p style={{ fontSize: "16px", color: "#444" }}>No current bookings</p>
        )}
      </div>

      {/* Previous Bookings Section */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "1200px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          Previous Bookings
        </h2>

        {/* Previous Bookings Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {previousBookingsData.map((booking) => (
            <div
              key={booking.id}
              style={cardStyle}
              onClick={() => handleShowPopup(booking.id)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Booking ID:</strong> {booking.bookingId}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Room Type:</strong> {booking.roomType}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Check-in Date:</strong> {booking.checkIn}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Check-out Date:</strong> {booking.checkOut}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Total Price:</strong> {booking.totalPrice}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Box */}
      {showPopup && selectedBooking && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "90%",
              maxWidth: "400px",
              textAlign: "left",
              zIndex: 1000,
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#333" }}>
              Booking Details
            </h2>

            <div
              style={{
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "left",
                marginBottom: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#444", marginBottom: "8px" }}>
                Room Information
              </h3>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Booking ID:</strong> {selectedBooking.bookingId}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Room Type:</strong> {selectedBooking.roomType}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Check-in Date:</strong> {selectedBooking.checkIn}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Check-out Date:</strong> {selectedBooking.checkOut}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Booking Status:</strong>{" "}
                <span
                  style={{
                    color:
                      selectedBooking.status === "Confirmed" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {selectedBooking.status}
                </span>
              </p>
            </div>

            <div
              style={{
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "left",
                marginBottom: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#444", marginBottom: "8px" }}>
                Pricing Details
              </h3>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Room Price:</strong> {selectedBooking.details.roomPrice}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Total Nights:</strong>{" "}
                {selectedBooking.details.totalNights}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Taxes & Fees:</strong> {selectedBooking.details.taxes}
              </p>
              <p style={{ fontSize: "16px", color: "#444", margin: "6px 0" }}>
                <strong>Total Amount:</strong>{" "}
                {selectedBooking.details.totalAmount}
              </p>
            </div>

            <div
              style={{
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "left",
                marginBottom: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ color: "#444", marginBottom: "8px" }}>
                Extra Services
              </h3>
              <ul>
                {selectedBooking.details.services.map((service, index) => (
                  <li key={index}>✅ {service}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <button
                onClick={handleHidePopup}
                style={{
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  cursor: "pointer",
                  background: "#3498db",
                  color: "white",
                }}
              >
                Close
              </button>

              {selectedBooking.id === "current1" && (
                <button
                  onClick={handleCancelBooking}
                  style={{
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    cursor: "pointer",
                    background: "#e74c3c",
                    color: "white",
                  }}
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={handleHidePopup}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Order;
