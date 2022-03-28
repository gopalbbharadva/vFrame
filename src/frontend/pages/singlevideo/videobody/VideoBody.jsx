import React from "react";
import "./videobody.css";
import {
  FiArrowLeftCircle,
  FiHeart,
  FiPaperclip,
  FiTrash,
} from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import {
  MdOutlineShare,
  MdOutlineWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";

export const VideoBody = ({ currentVideo }) => {
  return (
    <div className="video-description">
      <p className="video-title fs-btn mg-vrtl-sm">{currentVideo.title}</p>
      <ul className="feature-list">
        <li className="flex-center flex-dir-col ">
          <AiOutlineLike className="fs-lg" />
          <small>Like</small>
        </li>
        <li className="flex-center flex-dir-col mg-sm">
          <MdOutlineWatchLater className="fs-lg" />
          <small>Watch Later</small>
        </li>
        <li className="flex-center flex-dir-col mg-sm">
          <MdPlaylistPlay className="fs-lg" />
          <small>Play List</small>
        </li>
        <li className="flex-center flex-dir-col mg-sm">
          <MdOutlineShare className="fs-lg" />
          <small>Share</small>
        </li>
      </ul>
    </div>
  );
};
