import React, { useState, useEffect, useRef } from "react";
import "./videocard.css";
import { getImageUrl } from "../../helperfunctions/getImageUrl";
import { ChannelAvatar } from "../componentExport";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useDataStore } from "../../contexts/contextExport";
import {
  deleteWatchLaterHandler,
  postWatchLaterHandler,
} from "../../helperfunctions/watchLaterHandler";
import { postHistoryHandler } from "../../helperfunctions/histroryHandler";
import { PlaylistModal } from "../playlistmodal/PlaylistModal";
import { useClickOutside } from "../../Hooks/useClickOutside";

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

  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { token } = useAuth();
  const { dataStoreDispatch, toastProps } = useDataStore();
  const navigate = useNavigate();

  const domRef = useClickOutside(() => {
    setShowMenu(false);
  });

  const modalRef = useClickOutside(() => {
    setShowModal(false);
  });

  const checkLogin = () => {
    token ? setShowModal(true) : navigate("/login");
  };

  return (
    <>
      {showModal && (
        <PlaylistModal
          modalRef={modalRef}
          setShowModal={setShowModal}
          playListVideo={videoItem}
        />
      )}
      <div className="video-card pointer">
        <Link
          to={`/videolist/${videoId}`}
          onClick={() =>
            postHistoryHandler(token, videoItem, dataStoreDispatch, toastProps)
          }
        >
          <div className="image-container">
            <img className="video-image" src={imgSrc} alt={VideoCard.title} />
            <span className="video-time">{duration}</span>
          </div>
        </Link>
        <div className="video-body mg-vrtl-sm">
          <ChannelAvatar channelImg={channelAvatar} />
          <div className="video-text mg-hztl-sm">
            <p className="video-title ">{title}</p>
            <small className="video-channel-title mg-vrtl-sm">{channel}</small>
            <small>{views} views</small>
          </div>
          <div ref={domRef} className="menu-area">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="menu-button pointer"
            >
              <BsThreeDotsVertical />
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
                          navigate,
                          toastProps
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
                          dataStoreDispatch,
                          undefined,
                          undefined,
                          toastProps
                        )
                      }
                    >
                      <MdOutlineWatchLater className="fs-md mg-r" />
                      Discard from Watch later
                    </button>
                  )}
                </li>
                <li className="menu-item flex-center">
                  <button className="flex-center" onClick={checkLogin}>
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
