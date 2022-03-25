import React from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import { ImHome3, ImPlay } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navigation pd-md">
      <span className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </span>
      <div className="nav-left-section">
        <Link to="/">
          <p className="logo-text fs-xlg">vFrame</p>
        </Link>
        <div className="quick-link">
          <Link to="/">
            <div className="nav-item mg-hztl-md">
              <ImHome3 />
              <small className="nav-fs">Home</small>
            </div>
          </Link>
          <Link to="/videolist">
            <div className="nav-item">
              <ImPlay />
              <small className="nav-fs">Watch Now</small>
            </div>
          </Link>
        </div>
      </div>
      <div className="search-icon">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
      </div>
      <div className="search-bar">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Search book..."
        />
      </div>
      <div className="nav-right-section">
        <Link to="/login">
          <div className="nav-item">
            <FiUser className="user-icon fs-lg" />
            <small className="fs-md">Login</small>
          </div>
        </Link>
      </div>
    </nav>
  );
};
