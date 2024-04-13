import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "./NavBar.css"; // Import the CSS file for NavBar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            {/* Replace 'Your Logo' with your actual logo */}
          </Link>
        </div>
        <ul className="navbar-nav">
          {/* Navbar Links */}
          <li className="nav-item">
            <Link to="/customer-registration" className="nav-link">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Admin Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin-dashboard" className="nav-link">
              Admin Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/companies" className="nav-link">
              Companies
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/subscription" className="nav-link">
              Subscription
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/packages" className="nav-link">
              Packages
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/domain" className="nav-link">
              Domain
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/purchase-transaction" className="nav-link">
              Purchase Transaction
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/vendor-profile" className="nav-link">
              Vendor Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add-customer" className="nav-link">
              Add Customer
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add-invoice" className="nav-link">
              Add Invoice
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add-vendor" className="nav-link">
              Add Vendor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
