import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiLogIn, FiLogOut, FiMenu } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  useAuth,
  usePlaylist,
  useDataStore,
  useFilter,
} from "../../contexts/contextExport";
import { logoutHandler } from "../../helperfunctions/authHandlers";
import { setActiveLink } from "../../helperfunctions/setActieLink";
import { ToggleNavbar } from "../ToggleNavigationBar/ToggleNavbar";
import { actionTypes } from "../../reducers/actionTypes";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { playListDispatch } = usePlaylist();
  const { dataStoreDispatch, toastProps, setSearchText } = useDataStore();
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
