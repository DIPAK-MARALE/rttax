/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const CustomerRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    mobileOtp: "",
    email: "",
    emailOtp: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords don't match");
      return;
    }

    try {
      // await axios.post(
      //   "http://localhost:3001/api/customers/register",
      //   formData
      // );
      // Reset form fields after successful registration
      setFormData({
        username: "",
        phoneNumber: "",
        mobileOtp: "",
        email: "",
        emailOtp: "",
        password: "",
        confirmPassword: "",
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering customer:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <img
            className="img-fluid logo-dark mb-2"
            src="assets/img/logo2.png"
            alt="Logo"
          />
          <img
            className="img-fluid logo-light mb-2"
            src="assets/img/logo2-white.png"
            alt="Logo"
          />
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Customer Registration</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <form onSubmit={handleSubmit}>
                  <div className="input-block mb-3">
                    <label className="form-control-label">UserName</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                    {/* OTP field for mobile number */}
                    {formData.phoneNumber && (
                      <input
                        className="form-control mt-3"
                        type="text"
                        name="mobileOtp"
                        placeholder="Enter Mobile OTP"
                        value={formData.mobileOtp}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {/* OTP field for email address */}
                    {formData.email && (
                      <input
                        className="form-control mt-3"
                        type="text"
                        name="emailOtp"
                        placeholder="Enter Email OTP"
                        value={formData.emailOtp}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                  {formData.phoneNumber &&
                    formData.email &&
                    formData.otp && ( // Check if phoneNumber, email, and otp are filled
                      <div className="input-block mb-0">
                        <Link to="/vendor-profile" />
                        <button
                          className="btn btn-lg btn-primary w-100"
                          type="button"
                        >
                          Register
                        </button>
                      </div>
                    )}
                  <div className="input-block mb-3">
                    <label className="form-control-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    {passwordMatchError && (
                      <div className="text-danger">{passwordMatchError}</div>
                    )}
                  </div>
                  <div className="input-block mb-0">
                    <button
                      className="btn btn-lg btn-primary w-100"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login">
                  <span>Register with</span>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="google">
                    <i className="fab fa-google"></i>
                  </a>
                </div>

                <div className="text-center dont-have">
                  Already have an account? <a href="login.html">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="settings-icon d-none">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#theme-settings-offcanvas"
            aria-controls="theme-settings-offcanvas"
          >
            <img
              src="assets/img/icons/siderbar-icon2.svg"
              className="feather-five"
              alt="layout"
            />
          </span>
        </div>
        <div
          className="offcanvas offcanvas-end border-0"
          tabIndex="-1"
          id="theme-settings-offcanvas"
        >
          <div className="sidebar-headerset">
            <div className="sidebar-headersets">
              <h2>Customizer</h2>
              <h3>Customize your overview Page layout</h3>
            </div>
            <div className="sidebar-headerclose">
              <a data-bs-dismiss="offcanvas" aria-label="Close">
                <img src="assets/img/close.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
              <div className="settings-mains">
                <div className="layout-head">
                  <h5>Layout</h5>
                  <h6>Choose your layout</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout01"
                        name="data-layout"
                        type="radio"
                        value="vertical"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="customizer-layout01"
                      >
                        <img src="assets/img/vertical.png" alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Vertical</h5>
                  </div>
                  {/* Add the rest of the layout options here */}
                </div>
                {/* Add the rest of the customization options here */}
              </div>
            </div>
          </div>
          <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-light w-100 bor-rad-50"
                  id="reset-layout"
                >
                  Reset
                </button>
              </div>
              <div className="col-6">
                <a
                  href="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                  target="_blank"
                  className="btn btn-primary w-100 bor-rad-50"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CustomerRegistration;
