import React, { useState } from "react";
import "./playlistitem.css";
import { usePlaylist } from "../../../contexts/PlaylistContext";
import { useAuth } from "../../../contexts/AuthContext";
import {
  deletePlayListVideoHandler,
  postPlayListVideoHandler,
} from "../../../helperfunctions/playListHandler";

export const PlaylistItem = ({ playListVideo }) => {
  const { token } = useAuth();
  const { _id: videoId } = playListVideo;
  const {
    playListState: { playLists },
    playListDispatch,
  } = usePlaylist();

  const toggleVideo = (playListId, videos) => {
    videos?.find((item) => item._id === videoId)
      ? deletePlayListVideoHandler(
          token,
          videoId,
          undefined,
          playListId,
          playListDispatch,
          videos
        )
      : postPlayListVideoHandler(
          token,
          playListId,
          playListVideo,
          playListDispatch
        );
  };

  return (
    <>
      {playLists?.map(
        ({ title: { title }, videos, _id: playListId, isChecked }) => {
          return (
            <div className="mg-vrtl-sm">
              <label htmlFor={playListId} className="pl-label pointer">
                <input
                  onClick={() => toggleVideo(playListId, videos, isChecked)}
                  checked={
                    videos?.find((item) => item._id === videoId) ? true : false
                  }
                  type="checkbox"
                  className="mg-sm"
                  id={playListId}
                />
                {title}
              </label>
            </div>
          );
        }
      )}
    </>
  );
};
// videos.some((item) => item._id === videoId)
