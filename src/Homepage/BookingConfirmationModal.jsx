import React, { useState, useEffect } from "react";

const BookingConfirmationModal = ({ isOpen, onClose, roomType, roomPrice }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);

  // Update number of nights when dates change
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      // Calculate difference in days
      const diffTime = checkOut.getTime() - checkIn.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Only set positive values
      setNumberOfNights(diffDays > 0 ? diffDays : 0);
    } else {
      setNumberOfNights(0);
    }
  }, [checkInDate, checkOutDate]);

  if (!isOpen) return null;

  const handleQuantityChange = (setter, value, min = 0) => {
    if (value >= min) setter(value);
  };

  const applyCoupon = () => {
    if (couponCode === "HOTEL20" && !couponApplied) {
      setDiscount(20);
      setCouponApplied(true);
    } else if (couponCode === "HOTEL10" && !couponApplied) {
      setDiscount(10);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code or coupon already applied.");
    }
  };

  // Validate check-in/check-out date
  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
    if (checkInDate && date < checkInDate) {
      alert("Check-out date cannot be before check-in date");
      setCheckOutDate("");
    }
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate && date > checkOutDate) {
      setCheckOutDate("");
    }
  };

  const calculateTotal = () => {
    // Base calculation: price per night * number of rooms * number of nights
    const nightlyRate = roomPrice * rooms;
    const subtotal = numberOfNights > 0 ? nightlyRate * numberOfNights : 0;
    const discountAmount = subtotal * (discount / 100);

    return {
      nightlyRate,
      subtotal,
      discountAmount,
      total: subtotal - discountAmount,
      nights: numberOfNights,
    };
  };

  const { nightlyRate, subtotal, discountAmount, total, nights } =
    calculateTotal();

  // Set minimum dates (today for check-in, tomorrow for check-out)
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDateForInput = (date) => {
    return date.toISOString().split("T")[0];
  };

  const minCheckInDate = formatDateForInput(today);
  const minCheckOutDate = checkInDate
    ? formatDateForInput(new Date(new Date(checkInDate).getTime() + 86400000))
    : formatDateForInput(tomorrow);

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-container"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="modal-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0, color: "#ae9548" }}>Confirm Your Booking</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#ae9548",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#333", marginBottom: "5px" }}>{roomType}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>
              ₹{roomPrice} per night
            </p>
          </div>

          <div
            className="datepicker"
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="date-select">
              <p style={{ color: "#333", marginBottom: "5px" }}>
                Check-in Date
              </p>
              <input
                type="date"
                value={checkInDate}
                min={minCheckInDate}
                onChange={(e) => handleCheckInDateChange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  color: "#333",
                }}
              />
            </div>
            <div className="date-select">
              <p style={{ color: "#333", marginBottom: "5px" }}>
                Check-out Date
              </p>
              <input
                type="date"
                value={checkOutDate}
                min={minCheckOutDate}
                onChange={(e) => handleCheckOutDateChange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  color: "#333",
                }}
                disabled={!checkInDate}
              />
            </div>
          </div>

          <div
            className="room-quantity"
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="single-quantity">
              <p style={{ color: "#333", marginBottom: "5px" }}>Adults</p>
              <div
                className="pro-qty"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => handleQuantityChange(setAdults, adults - 1, 1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  value={adults}
                  readOnly
                  style={{
                    width: "40px",
                    height: "30px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderLeft: "none",
                    borderRight: "none",
                    color: "#333",
                  }}
                />
                <button
                  onClick={() => handleQuantityChange(setAdults, adults + 1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="single-quantity">
              <p style={{ color: "#333", marginBottom: "5px" }}>Children</p>
              <div
                className="pro-qty"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() =>
                    handleQuantityChange(setChildren, children - 1)
                  }
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  value={children}
                  readOnly
                  style={{
                    width: "40px",
                    height: "30px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderLeft: "none",
                    borderRight: "none",
                    color: "#333",
                  }}
                />
                <button
                  onClick={() =>
                    handleQuantityChange(setChildren, children + 1)
                  }
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="single-quantity">
              <p style={{ color: "#333", marginBottom: "5px" }}>Rooms</p>
              <div
                className="pro-qty"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => handleQuantityChange(setRooms, rooms - 1, 1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  value={rooms}
                  readOnly
                  style={{
                    width: "40px",
                    height: "30px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderLeft: "none",
                    borderRight: "none",
                    color: "#333",
                  }}
                />
                <button
                  onClick={() => handleQuantityChange(setRooms, rooms + 1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ddd",
                    background: "none",
                    color: "#ae9548",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Coupon Code Section */}
          <div
            className="coupon-section"
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          >
            <p style={{ color: "#333", marginBottom: "10px" }}>
              Have a coupon?
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={couponApplied}
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  color: "#333",
                }}
              />
              <button
                onClick={applyCoupon}
                disabled={couponApplied}
                style={{
                  padding: "8px 15px",
                  backgroundColor: couponApplied ? "#ccc" : "#ae9548",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: couponApplied ? "default" : "pointer",
                }}
              >
                {couponApplied ? "Applied" : "Apply"}
              </button>
            </div>
            {couponApplied && (
              <p style={{ color: "green", marginTop: "5px" }}>
                {discount}% discount applied!
              </p>
            )}
          </div>

          {/* Price Summary */}
          <div
            className="price-summary"
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
            }}
          >
            {nights > 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    color: "#333",
                  }}
                >
                  <span>
                    ₹{roomPrice} x {rooms} room(s) x {nights} night(s):
                  </span>
                  <span>₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      color: "green",
                    }}
                  >
                    <span>Discount ({discount}%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                    marginTop: "10px",
                    paddingTop: "10px",
                    borderTop: "1px dashed #ddd",
                    color: "#333",
                  }}
                >
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </>
            ) : (
              <p style={{ color: "#666", textAlign: "center" }}>
                Please select check-in and check-out dates to see pricing
              </p>
            )}
          </div>
        </div>

        <div
          className="modal-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e0e0e0",
            paddingTop: "15px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              color: "#333",
            }}
          >
            Cancel
          </button>
          <button
            disabled={!checkInDate || !checkOutDate || numberOfNights <= 0}
            style={{
              padding: "10px 20px",
              backgroundColor: numberOfNights > 0 ? "#ae9548" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: numberOfNights > 0 ? "pointer" : "default",
            }}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;
