import React from "react";
import { Sidebar } from "../../components/componentExport";
import "./playlistvideos.css";
import Playlist from "../../images/Playlist.svg";
import { Link, useParams } from "react-router-dom";
import { usePlaylist, useDataStore } from "../../contexts/contextExport";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { deletePlayListVideoHandler } from "../../helperfunctions/playListHandler";
import { IoArrowBackSharp } from "react-icons/io5";

export const PlayListVideosPage = () => {
  const { playListId } = useParams();
  const { toastProps } = useDataStore();
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
    <section className="main-wrapper">
      <div className="main-container">
        <Sidebar />
        <div className="video-grid-container">
          <div className="feature-video-grid ">
            <div className="fv-info flex-center flex-dir-col">
              <Link to="/playlist" className="back-button">
                <IoArrowBackSharp
                  className="btn is-solid  
                mg-vrtl-md bd-3 fs-btw-ml"
                />
              </Link>
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
            <div>
              <div className="fv-videos">
                {videos.length >= 1 ? (
                  videos.map((item) => {
                    return (
                      <HorizontalVideoCard
                        toastProps={toastProps}
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
          </div>
        </div>
      </div>
    </section>
  );
};
