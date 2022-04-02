import React from "react";
import { FiSearch, FiLogIn, FiLogOut } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  useAuth,
  usePlaylist,
  useDataStore,
} from "../../contexts/contextExport";
import { logoutHandler } from "../../helperfunctions/authHandlers";
import { setActiveLink } from "../../helperfunctions/setActieLink";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { playListDispatch } = usePlaylist();
  const { dataStoreDispatch, toastProps } = useDataStore();
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
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to="/videolist"
          >
            <div className="nav-item">
              <ImPlay />
              <small className="nav-fs">Watch Now</small>
            </div>
          </NavLink>
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
            onClick={() =>
              logoutHandler(
                setIsLoggedIn,
                navigate,
                playListDispatch,
                dataStoreDispatch,
                toastProps
              )
            }
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
