import React from "react";
import "./playlistitem.css";
import {
  usePlaylist,
  useAuth,
  useDataStore,
} from "../../../contexts/contextExport";
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
  const { toastProps } = useDataStore();

  const toggleVideo = (playListId, videos) => {
    videos?.find((item) => item._id === videoId)
      ? deletePlayListVideoHandler(
          token,
          videoId,
          undefined,
          playListId,
          playListDispatch,
          toastProps
        )
      : postPlayListVideoHandler(
          token,
          playListId,
          playListVideo,
          playListDispatch,
          toastProps
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
