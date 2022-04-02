import React from "react";
import { Sidebar } from "../../components/componentExport";
import "./playlistvideos.css";
import Playlist from "../../images/Playlist.svg";
import { Link, useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/PlaylistContext";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { deletePlayListVideoHandler } from "../../helperfunctions/playListHandler";

export const PlayListVideosPage = () => {
  const { playListId } = useParams();
  const {
    playListState: { playLists },
  } = usePlaylist();
  const playList = playLists.reduce(
    (acc, item) => (item._id === playListId ? item : acc),
    { title: "", videos: [], _id: "" }
  );

  const {
    title: { title },
    videos,
  } = playList;

  return (
    <section className="main-container">
      <Sidebar />
      <div className="feature-video-grid pd-xlg">
        <div className="fv-info">
          <img
            src={Playlist}
            className="fv-intro-image"
            alt="video thumbnail"
          />
          <p className="fs-lg md-vrtl-md">Playlist {title}</p>
          <p className="fs-md mg-vrtl-sm">
            {videos.length}
            {videos.length <= 1 ? " Video" : " Videos"}
          </p>
        </div>
        <div className="fv-videos">
          {videos.length >= 1 ? (
            videos.map((item) => {
              return (
                <HorizontalVideoCard
                  deleteHandler={deletePlayListVideoHandler}
                  videoItem={item}
                  playListId={playListId}
                />
              );
            })
          ) : (
            <div className="flex-center flex-dir-col">
              <p className="fs-lg">No videos in playlist</p>
              <Link to="/videolist" className="btn is-solid fs-btw-ml">
                Go to Watch Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
