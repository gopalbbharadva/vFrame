import React, { useState } from "react";
import { getImageUrl } from "../../helperfunctions/getImageUrl";
import { ChannelAvatar } from "../componentExport";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./videocard.css";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  deleteWatchLaterHandler,
  postWatchLaterHandler,
} from "../../helperfunctions/watchLaterHandler";
import { useDataStore } from "../../contexts/DataStoreContext";

export const VideoCard = ({ videoItem }) => {
  const {
    _id: videoId,
    title,
    channel,
    isInWatchLater,
    views,
    duration,
    channelAvatar,
  } = videoItem;
  const imgSrc = getImageUrl(videoId);

  const [showMenu, setShowMenu] = useState(false);
  const { token } = useAuth();
  const { dataStoreDispatch } = useDataStore();
  const navigate = useNavigate();

  return (
    <>
      <div className="video-card pointer">
        <Link to={`/videolist/${videoId}`}>
          <div className="image-container">
            <img className="video-image" src={imgSrc} alt={VideoCard.title} />
            <span className="video-time">{duration}</span>
          </div>
        </Link>
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
            {showMenu && (
              <ul className="menu-list bd-3">
                <li className="menu-item">
                  {!isInWatchLater ? (
                    <button
                      onClick={() =>
                        postWatchLaterHandler(
                          token,
                          videoItem,
                          dataStoreDispatch,
                          navigate
                        )
                      }
                    >
                      <MdOutlineWatchLater className="fs-md mg-r" />
                      Save to Watch later
                    </button>
                  ) : (
                    <button
                      className="clr-red"
                      onClick={() =>
                        deleteWatchLaterHandler(
                          token,
                          videoItem._id,
                          dataStoreDispatch
                        )
                      }
                    >
                      <MdOutlineWatchLater className="fs-md mg-r" />
                      Discard from Watch later
                    </button>
                  )}
                </li>
                <li className="menu-item mg-top flex-center">
                  <button
                    className="flex-center"
                    onClick={() => setShowMenu(false)}
                  >
                    <MdPlaylistPlay className="fs-md mg-r" />
                    Save to Playlist
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
