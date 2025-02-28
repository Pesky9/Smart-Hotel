import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import slider1 from "../assets/img/slider-1.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios";
import { BaseURL } from "../BaseURL";

const Registration = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!fullName || !email || !phone || !password) {
      toast.error("Please fill all the fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const payload = {
        uname: fullName,
        email,
        password,
        phone_number: phone,
        urole: "guest",
      };

      const response = await axios.post(`${BaseURL}/user/signup`, payload);

      if (response.status === 201) {
        setIsLoading(false);
        toast.success(
          response.data.message ||
            "User registered successfully. Redirecting..."
        );
        Cookies.set("token", response.data.token, { expires: 1 });
        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
          setIsLoggedIn(true);
        }, 2000);
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Server error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="registration-container"
      style={{ backgroundImage: `url(${slider1})` }}
    >
      <div className="registration-card">
        <div className="registration-header">
          Sign Up
          <div className="registration-header-divider"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="registration-form">
            <div className="registration-input-group">
              <label className="registration-label">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="registration-input"
              />
            </div>

            <div className="registration-input-group">
              <label className="registration-label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="registration-input"
              />
            </div>

            <div className="registration-input-group">
              <label className="registration-label">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="registration-input"
              />
            </div>

            <div className="registration-input-group">
              <label className="registration-label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="registration-input"
              />
            </div>
          </div>

          <button
            type="submit"
            className="registration-button"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{ color: "#9b59b6", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
        </form>

        {isLoading && (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
