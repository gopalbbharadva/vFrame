import React from "react";
import { FiSearch, FiLogIn, FiLogOut } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDataStore } from "../../contexts/DataStoreContext";
import { logoutHandler } from "../../helperfunctions/authHandlers";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

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
        {isLoggedIn ? (
          <div
            onClick={() => logoutHandler(setIsLoggedIn, navigate)}
            className="nav-item pointer"
          >
            <FiLogOut className="user-icon fs-lg" />
            <small className="fs-md">Logout</small>
          </div>
        ) : (
          <Link to="/login">
            <div className="nav-item pointer">
              <FiLogIn className="user-icon fs-lg" />
              <small className="fs-md">Login</small>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
