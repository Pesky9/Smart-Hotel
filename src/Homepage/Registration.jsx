import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/img/slider-1.jpg";

const Registration = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundImage: `url(${slider1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "25px 30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "600",
            position: "relative",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Registration
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginBottom: "15px",
              gap: "20px",
            }}
          >
            <div
              style={{
                flex: "1 1 calc(50% - 20px)",
                minWidth: "240px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: "500",
                  marginBottom: "5px",
                }}
              >
                Full Name
              </span>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                style={{
                  height: "45px",
                  width: "100%",
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                  border: "1px solid #ccc",
                  borderBottomWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              />
            </div>

            <div
              style={{
                flex: "1 1 calc(50% - 20px)",
                minWidth: "240px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: "500",
                  marginBottom: "5px",
                }}
              >
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  height: "45px",
                  width: "100%",
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                  border: "1px solid #ccc",
                  borderBottomWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              />
            </div>

            <div
              style={{
                flex: "1 1 calc(50% - 20px)",
                minWidth: "240px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: "500",
                  marginBottom: "5px",
                }}
              >
                Phone Number
              </span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                style={{
                  height: "45px",
                  width: "100%",
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                  border: "1px solid #ccc",
                  borderBottomWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              />
            </div>

            <div
              style={{
                flex: "1 1 calc(50% - 20px)",
                minWidth: "240px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: "500",
                  marginBottom: "5px",
                }}
              >
                Password
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                required
                style={{
                  height: "45px",
                  width: "100%",
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "5px",
                  paddingLeft: "15px",
                  border: "1px solid #ccc",
                  borderBottomWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              height: "45px",
              margin: "35px 0 10px",
            }}
          >
            <input
              type="submit"
              value="Register"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "5px",
                border: "none",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "500",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
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
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{ color: "#9b59b6", textDecoration: "none" }}
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
