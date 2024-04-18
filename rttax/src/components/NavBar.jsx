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
            <Link to="/add-customer" className="nav-link">
              Add Customer
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/user-dashboard" className="nav-link">
              User Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/invoices" className="nav-link">
              Invoices
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-invoice" className="nav-link">
              Add Invoice
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/expenses" className="nav-link">
              Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-expenses" className="nav-link">
              Add Expenses
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
            <Link to="/adm-add-customer" className="nav-link">
              Admin Add Customer
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/adm-add-vendor" className="nav-link">
              Admin Add Vendor
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/adm-invoices" className="nav-link">
              Admin Invoices
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/adm-add-invoice" className="nav-link">
              Admin Add Invoices
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/adm-expenses" className="nav-link">
              Admin Expenses
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/adm-add-expenses" className="nav-link">
              Admin Add Expenses
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/quotations" className="nav-link">
              Quotation
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add-quotations" className="nav-link">
              Add Quotations
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/vendor-profile" className="nav-link">
              Vendor Profile
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
