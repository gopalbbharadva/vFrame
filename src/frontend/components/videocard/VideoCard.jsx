import React, { useState } from "react";
import { getImageUrl } from "../../helperfunctions/getImageUrl";
import { ChannelAvatar } from "../componentExport";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./videocard.css";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

export const VideoCard = ({ videoItem }) => {
  const { _id, title, channel, views, duration, channelAvatar } = videoItem;
  const imgSrc = getImageUrl(_id);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="video-card pointer">
        <div className="image-container">
          <img className="video-image" src={imgSrc} alt={VideoCard.title} />
          <span className="video-time">{duration}</span>
        </div>
        <div className="video-body mg-vrtl-sm">
          <ChannelAvatar channelImg={channelAvatar} />
          <div className="video-text mg-hztl-sm">
            <p className="video-title ">{title}</p>
            <small className="video-channel-title mg-top">{channel}</small>
            <small className="mg-top">{views} views</small>
          </div>
          <div className="menu-area">
            <button
              className="menu-button fs-lg pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <BiDotsVerticalRounded />
            </button>
          </div>
        </div>
        {showMenu && (
          <ul className="menu-list bd-3">
            <li
              onClick={() => setShowMenu(false)}
              className="menu-item flex-align-start pointer"
            >
              <MdOutlineWatchLater className="fs-md" />
              <p className="mg-l">Save to Watch later</p>
            </li>
            <li
              onClick={() => setShowMenu(false)}
              className="menu-item mg-top flex-align-start pointer"
            >
              <MdPlaylistPlay className="fs-md" />
              <p className="mg-l">Save to Playlist</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
