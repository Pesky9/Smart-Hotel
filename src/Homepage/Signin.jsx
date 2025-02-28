import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/img/slider-1.jpg";

const Signin = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins, sans-serif",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "25px 30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "600",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Sign In
          <div
            style={{
              height: "3px",
              width: "100px",
              margin: "5px auto",
              borderRadius: "5px",
              background: "linear-gradient(135deg, #000000, #9b59b6)",
            }}
          ></div>
        </div>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                borderRadius: "5px",
                paddingLeft: "15px",
                border: "1px solid #ccc",
                borderBottomWidth: "2px",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                borderRadius: "5px",
                paddingLeft: "15px",
                border: "1px solid #ccc",
                borderBottomWidth: "2px",
                transition: "all 0.3s ease",
              }}
            />
          </div>
          <div style={{ height: "45px", marginTop: "20px" }}>
            <input
              type="submit"
              value="Sign In"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "5px",
                border: "none",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "0.3s ease",
                background: "linear-gradient(135deg, #e4cc51, #86591a)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "15px",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#9b59b6", textDecoration: "none" }}
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
