import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useDataStore } from "../../contexts/DataStoreContext";
import { getImageUrl } from "../../helperfunctions/getImageUrl";
import { deleteWatchLaterHandler } from "../../helperfunctions/watchLaterHandler";
import "./horizontalvideocard.css";

export const HorizontalVideoCard = ({ videoItem }) => {
  const { _id: videoId, title, channel, duration } = videoItem;
  const imgSrc = getImageUrl(videoId);

  const { token } = useAuth();
  const { dataStoreDispatch } = useDataStore();

  return (
    <div className="video-item pd-md pointer">
      <div className="wl-video-image-container">
        <img className="wl-video-image" src={imgSrc} alt={title} />
        <span className="video-time">{duration}</span>
      </div>
      <div className="wl-text pd-hztl-md">
        <p className="wl-title">{title}</p>
        <small className="wl-channel">{channel}</small>
        <button className="trash-btn fs-md">
          <FaTrashAlt
            onClick={() =>
              deleteWatchLaterHandler(token, videoId, dataStoreDispatch)
            }
          />
        </button>
      </div>
    </div>
  );
};
