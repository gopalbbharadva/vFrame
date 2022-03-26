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
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar pd-sm">
      <ul className="sidebar-list pd-md">
        <Link to="/">
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <IoHomeOutline className="fs-lg" />
            <small>Home</small>
          </li>
        </Link>
        <Link to="/videolist">
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <MdOutlineExplore className="fs-lg" />
            <small>Explore</small>
          </li>
        </Link>
        <Link to="/playlist">
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <MdPlaylistPlay className="fs-lg" />
            <small>Playlist</small>
          </li>
        </Link>
        <Link to="/likes">
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <AiOutlineLike className="fs-lg" />
            <small>Likes</small>
          </li>
        </Link>
        <Link to="/history">
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <MdHistory className="fs-lg" />
            <small>History</small>
          </li>
        </Link>
        <Link to='/watchlater'>
          <li className="sidebar-item flex-center flex-dir-col pointer">
            <MdOutlineWatchLater className="fs-lg" />
            <small className="align-center">Watch Later</small>
          </li>
        </Link>
      </ul>
    </div>
  );
};
