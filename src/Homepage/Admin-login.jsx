import React from "react";
import Logo from "../assets/img/logo.png";

const AdminLogin = () => {
  return (
    <>
      <div className="login-container">
        <div className="form-box">
          <h1>Admin Login</h1>
          <form>
            <input type="text" placeholder="Admin ID or Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="primary-btn">
              Login
            </button>
            <p className="signup-link">
              Need an account? <a href="#">Request Access</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
