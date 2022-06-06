import React from "react";
import "./Singlevideo.css";
import { Link, useParams } from "react-router-dom";
import { PlaylistModal } from "../../components/playlistmodal/PlaylistModal";
import { useDataStore, usePlaylist } from "../../contexts/contextExport";
import { VideoBody } from "./videobody/VideoBody";
import { getVideo } from "../../helperfunctions/getVideo";
import { useClickOutside } from "../../Hooks/useClickOutside";
import { IoArrowBackSharp } from "react-icons/io5";
import { VideoCard } from "../../components/componentExport";

export const SingleVideo = () => {
  const {
    dataStoreState: { videos },
  } = useDataStore();
  const { videoId } = useParams();
  const viedoUrl = getVideo(videoId);
  const currentVideo =
    videos.length !== 0 && videos.find((item) => item._id === videoId);

  const { showModal, setShowModal } = usePlaylist();

  const modalRef = useClickOutside(() => {
    setShowModal(false);
  });

  const suggestedVideos = videos.filter(
    (video) =>
      video.category === currentVideo.category && video._id !== currentVideo._id
  );

  return (
    <>
      <div className="video-area">
        <div className="video-main">
          <Link to="/videolist">
            <IoArrowBackSharp className="btn is-solid mg-vrtl-md bd-3 fs-btw-ml" />
          </Link>
          <div className="video-container">
            <iframe
              className="video"
              style={{ width: "100%" }}
              src={viedoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <VideoBody setShowModal={setShowModal} currentVideo={currentVideo} />
        </div>
        <div className="flex-center flex-dir-col mg-lg">
          <p className="fs-lg primary-clr mg-vrtl-md">Suggestions</p>
          {suggestedVideos?.map((video) => (
            <VideoCard videoItem={video} />
          ))}
        </div>
      </div>

      {showModal && (
        <PlaylistModal
          modalRef={modalRef}
          setShowModal={setShowModal}
          playListVideo={currentVideo}
        />
      )}
    </>
  );
};
