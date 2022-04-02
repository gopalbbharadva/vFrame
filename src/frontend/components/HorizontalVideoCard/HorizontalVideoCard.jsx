import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth, useDataStore } from "../../contexts/contextExport";
import { usePlaylist } from "../../contexts/PlaylistContext";
import { getImageUrl } from "../../helperfunctions/getImageUrl";
import "./horizontalvideocard.css";

export const HorizontalVideoCard = ({
  videoItem,
  deleteHandler,
  playListId,
}) => {
  const { _id: videoId, title, channel, duration } = videoItem;
  const imgSrc = getImageUrl(videoId);

  const { token } = useAuth();
  const { dataStoreDispatch } = useDataStore();
  const { playListDispatch } = usePlaylist();

  return (
    <div className="feature-video-item pd-md pointer">
      <Link to={`/videolist/${videoId}`}>
        <div className="fv-video-image-container">
          <img className="fv-video-image" src={imgSrc} alt={title} />
          <span className="video-time">{duration}</span>
        </div>
      </Link>
      <div className="fv-text pd-hztl-md">
        <p className="fv-title">{title}</p>
        <small className="fv-channel">{channel}</small>
        <button className="trash-btn fs-md">
          <FaTrashAlt
            onClick={() =>
              deleteHandler(
                token,
                videoId,
                dataStoreDispatch,
                playListId,
                playListDispatch
              )
            }
          />
        </button>
      </div>
    </div>
  );
};
