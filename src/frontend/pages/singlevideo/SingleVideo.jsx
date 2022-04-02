import React from "react";
import "./Singlevideo.css";
import { useParams } from "react-router-dom";
import { PlaylistModal } from "../../components/playlistmodal/PlaylistModal";
import { useDataStore, usePlaylist } from "../../contexts/contextExport";
import { NoteForm } from "./components/note/NoteForm";
import { VideoBody } from "./videobody/VideoBody";
import { getVideo } from "../../helperfunctions/getVideo";
import { useClickOutside } from "../../Hooks/useClickOutside";

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

  return (
    <>
      <div className="video-area">
        <div className="video-main pd-md">
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
        <NoteForm />
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
