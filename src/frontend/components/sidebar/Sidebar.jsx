import React from "react";
import {
  MdOutlineExplore,
  MdPlaylistPlay,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";
import { setActiveLink } from "../../helperfunctions/setActieLink";

export const Sidebar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <div className="sidebar pd-sm">
        <ul className="sidebar-list pd-md">
          <NavLink to="/">
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <IoHomeOutline className="fs-lg" />
              <small>Home</small>
            </li>
          </NavLink>
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to="/videolist"
          >
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <MdOutlineExplore className="fs-lg" />
              <small>Explore</small>
            </li>
          </NavLink>
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to="/playlist"
          >
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <MdPlaylistPlay className="fs-lg" />
              <small>Playlist</small>
            </li>
          </NavLink>
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to={isLoggedIn ? "/likes" : "/login"}
          >
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <AiOutlineLike className="fs-lg" />
              <small>Likes</small>
            </li>
          </NavLink>
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to="/history"
          >
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <MdHistory className="fs-lg" />
              <small>History</small>
            </li>
          </NavLink>
          <NavLink
            style={(activeObject) => setActiveLink(activeObject)}
            to="/watchlater"
          >
            <li className="sidebar-item flex-center flex-dir-col pointer">
              <MdOutlineWatchLater className="fs-lg" />
              <small className="align-center">Watch Later</small>
            </li>
          </NavLink>
        </ul>
      </div>
  );
};
