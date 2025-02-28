import React, { useState, useEffect } from "react";

const BookingForm = ({ isOpen, onClose, roomType, roomPrice }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(1);

  // Handle quantity change for adults and children
  const handleQuantityChange = (type, action) => {
    if (type === "adults") {
      if (action === "increase" && adults < 4) {
        setAdults(adults + 1);
      } else if (action === "decrease" && adults > 1) {
        setAdults(adults - 1);
      }
    } else if (type === "children") {
      if (action === "increase" && children < 4) {
        setChildren(children + 1);
      } else if (action === "decrease" && children > 0) {
        setChildren(children - 1);
      }
    }
  };

  // Calculate total price based on nights, room price, and discount
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const nightCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      if (nightCount > 0) {
        setNights(nightCount);
        const basePrice = roomPrice * nightCount;
        const discountAmount = basePrice * (discount / 100);
        setTotalPrice(basePrice - discountAmount);
      }
    } else {
      // Default to 1 night if dates aren't selected
      setTotalPrice(roomPrice * (1 - discount / 100));
    }
  }, [roomPrice, checkInDate, checkOutDate, discount]);

  // Apply coupon logic
  const applyCoupon = () => {
    // Simple coupon logic - in a real app, you would validate with backend
    if (couponCode.toLowerCase() === "smart10") {
      setDiscount(10);
    } else if (couponCode.toLowerCase() === "welcome15") {
      setDiscount(15);
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="booking-popup">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="popup-header">
          <h2>Book {roomType}</h2>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>
        <div className="popup-body">
          <div className="form-row">
            <div className="form-group">
              <label>Check-in Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="form-group">
              <label>Check-out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Adults</label>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("adults", "decrease")}
                >
                  -
                </button>
                <span className="quantity-value">{adults}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("adults", "increase")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Children</label>
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("children", "decrease")}
                >
                  -
                </button>
                <span className="quantity-value">{children}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("children", "increase")}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="form-row coupon-row">
            <div className="form-group">
              <label>Coupon Code</label>
              <div className="coupon-input">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button onClick={applyCoupon}>Apply</button>
              </div>
              {discount > 0 && (
                <div className="discount-applied">
                  <span>{discount}% discount applied!</span>
                </div>
              )}
            </div>
          </div>

          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-row">
              <span>Room Type:</span>
              <span>{roomType}</span>
            </div>
            <div className="summary-row">
              <span>Price Per Night:</span>
              <span>₹{roomPrice}</span>
            </div>
            <div className="summary-row">
              <span>Number of Nights:</span>
              <span>{nights}</span>
            </div>
            {discount > 0 && (
              <div className="summary-row discount">
                <span>Discount:</span>
                <span>{discount}%</span>
              </div>
            )}
            <div className="summary-row total">
              <span>Total Price:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="form-actions">
            <button className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="primary-btn">Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
