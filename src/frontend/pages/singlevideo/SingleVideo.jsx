import React from "react";

import { useParams } from "react-router-dom";
import { useDataStore } from "../../contexts/DataStoreContext";
import { NoteForm } from "./components/note/NoteForm";
import "./Singlevideo.css";
import { VideoBody } from "./videobody/VideoBody";

export const SingleVideo = () => {
  const { dataStoreState } = useDataStore();
  const { videos } = dataStoreState;
  const { videoId } = useParams();
  const viedoUrl = `https://www.youtube.com/embed/${videoId}`;
  const currentVideo =
    videos.length !== 0 && videos.find((item) => item._id === videoId);

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
          <VideoBody currentVideo={currentVideo} />
        </div>
        <NoteForm />
      </div>
    </>
  );
};
