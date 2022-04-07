import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiMenu, FiUser } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useDataStore, useFilter } from "../../contexts/contextExport";
import { setActiveLink } from "../../helperfunctions/setActieLink";
import { ToggleNavbar } from "../ToggleNavigationBar/ToggleNavbar";
import { actionTypes } from "../../reducers/actionTypes";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, currentUser } = useAuth();
  const { setSearchText } = useDataStore();
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();

  return (
    <nav className="navigation pd-md">
      {isOpen && <ToggleNavbar setIsOpen={setIsOpen} />}
      <div className="nav-left-section">
        <button onClick={() => setIsOpen(true)} className="bg-transparent">
          <span className="hamburger-icon">
            <FiMenu />
          </span>
        </button>
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
              <p className="nav-fs">Watch Now</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="search-bar flex-center">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
        <input
          className="search-input"
          type="text"
          onChange={(e) => {
            navigate("/videolist");
            filterDispatch({
              type: actionTypes.SET_DEFAULT_CATEGORY,
              payload: { category: "All" },
            });
            setSearchText(e.target.value);
          }}
          placeholder="Search video..."
        />
      </div>
      <div className="nav-right-section">
        {!token ? (
          <Link to="/login">
            <div className="nav-item nav-login-item">
              <FiUser className="user-icon fs-lg" />
              <small className="fs-md">Login</small>
            </div>
          </Link>
        ) : (
          <Link to="/profile/">
            <div className="nav-item nav-login-item">
              <FiUser className="user-icon cursor fs-lg" />
              <small className="fs-md">Hi {currentUser.firstName}</small>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
