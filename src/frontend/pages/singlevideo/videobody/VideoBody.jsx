import React from "react";
import "./videobody.css";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import {
  MdOutlineShare,
  MdOutlineWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import { useAuth, useDataStore } from "../../../contexts/contextExport";
import {
  deleteLikeHandler,
  postLikeHandler,
} from "../../../helperfunctions/likeHandler";
import { deleteWatchLaterHandler, postWatchLaterHandler } from "../../../helperfunctions/watchLaterHandler";
import { useNavigate } from "react-router-dom";

export const VideoBody = ({ currentVideo }) => {
  const { token } = useAuth();
  const { dataStoreDispatch } = useDataStore();
  const navigate = useNavigate();

  return (
    <div className="video-description">
      <p className="video-title fs-btn mg-vrtl-sm">{currentVideo.title}</p>
      <ul className="feature-list">
        <li className="mg-sm">
          {!currentVideo.isLiked ? (
            <button
              onClick={() =>
                postLikeHandler(
                  token,
                  currentVideo,
                  dataStoreDispatch,
                  navigate
                )
              }
              className="flex-center flex-dir-col bg-transparent"
            >
              <AiOutlineLike className="fs-lg" />
              <small>Like</small>
            </button>
          ) : (
            <button
              onClick={() =>
                deleteLikeHandler(token, currentVideo._id, dataStoreDispatch)
              }
              className=" flex-center flex-dir-col bg-transparent "
            >
              <AiTwotoneLike className="filled-like fs-lg" />
              <small>Liked</small>
            </button>
          )}
        </li>
        <li className="mg-sm">
          {!currentVideo.isInWatchLater ? (
            <button
              onClick={() =>
                postWatchLaterHandler(
                  token,
                  currentVideo,
                  dataStoreDispatch,
                  navigate
                )
              }
              className=" flex-center flex-dir-col bg-transparent "
            >
              <MdOutlineWatchLater className="fs-lg" />
              <small>Watch Later</small>
            </button>
          ) : (
            <button
              onClick={() =>
                deleteWatchLaterHandler(
                  token,
                  currentVideo._id,
                  dataStoreDispatch,
                  navigate
                )
              }
              className=" flex-center flex-dir-col bg-transparent "
            >
              <MdOutlineWatchLater className="filled-watch-later fs-lg" />
              <small>Watch Later</small>
            </button>
          )}
        </li>
        <li className="mg-sm">
          <button className="flex-center flex-dir-col bg-transparent">
            <MdPlaylistPlay className="fs-lg" />
            <small>Play List</small>
          </button>
        </li>
        <li className="mg-sm">
          <button className="flex-center flex-dir-col bg-transparent">
            <MdOutlineShare className="fs-lg" />
            <small>Share</small>
          </button>
        </li>
      </ul>
    </div>
  );
};
