import React from "react";
import "./togglenavbar.css";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { VscClose } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";
import { setActiveLink } from "../../helperfunctions/setActieLink";
import { useClickOutside } from "../../Hooks/useClickOutside";

export const ToggleNavbar = ({ setIsOpen }) => {
  const { token } = useAuth();
  const navBarRef = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={navBarRef} className="nav-modal flex-dir-col ">
      <button
        onClick={() => setIsOpen(false)}
        className="close-btn bg-transparent"
      >
        <VscClose className="fs-xlg" />
      </button>
      <div className="modal-item-container flex-center">
        <NavLink
          style={(activeObject) => setActiveLink(activeObject)}
          to="/videolist"
        >
          <div className="nav-modal-item">
            <ImPlay className="clr-white" />
            <p className="nav-fs clr-white ">Watch Now</p>
          </div>
        </NavLink>
        {!token ? (
          <Link to="/login">
            <div className="nav-modal-item pointer">
              <FiLogIn className="user-icon fs-lg clr-white" />
              <p className="fs-md clr-white">Login</p>
            </div>
          </Link>
        ) : (
          <Link to="/profile/">
            <div className="nav-modal-item nav-login-item">
              <FiUser className="user-icon cursor fs-lg clr-white" />
              <small className="fs-md clr-white">Profile</small>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
