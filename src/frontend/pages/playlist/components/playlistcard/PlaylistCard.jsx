import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { MdPlaylistPlay } from "react-icons/md";
import "./playlistcard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  useAuth,
  usePlaylist,
  useDataStore,
} from "../../../../contexts/contextExport";
import { deletePlayListHandler } from "../../../../helperfunctions/playListHandler";
import { useClickOutside } from "../../../../Hooks/useClickOutside";
import Playlist from "../../../../images/Playlist.svg";

export const PlaylistCard = ({ playListItem }) => {
  const { _id: playListId, title } = playListItem;
  const { token } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useClickOutside(() => {
    setShowMenu(false);
  });
  const { toastProps } = useDataStore();
  const { playListDispatch } = usePlaylist();

  return (
    <>
      <div className="video-card pointer">
        <Link to={`/playlist/${playListId}`}>
          <div className="image-container pl-card-border ">
            <img className="video-image" src={Playlist} alt="dummy playlist" />
            <div className="card-info flex-center flex-dir-col ">
              <p className="fs-btw-ml">{playListItem.videos.length}</p>
              <MdPlaylistPlay className="fs-xlg" />
            </div>
          </div>
        </Link>
        <div className="pl-video-body mg-vrtl-sm">
          <div className="video-text mg-hztl-sm">
            <p className="video-title ">{title.title}</p>
          </div>
          <div ref={menuRef} className="menu-area">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="menu-button fs-lg pointer"
            >
              <BiDotsVerticalRounded />
            </button>
            {showMenu && (
              <ul className="menu-list bd-3">
                <div className="menu-item">
                  <button
                    onClick={() =>
                      deletePlayListHandler(
                        token,
                        playListId,
                        playListDispatch,
                        toastProps
                      )
                    }
                    className="clr-red"
                  >
                    <FiTrash className="fs-md mg-r" />
                    Delete Playlist
                  </button>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
