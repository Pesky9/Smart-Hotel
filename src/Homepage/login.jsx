import React from "react";
import "./login.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login form submitted");
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email or Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="primary-btn">
            Login
          </button>
          <p className="signup-link">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
