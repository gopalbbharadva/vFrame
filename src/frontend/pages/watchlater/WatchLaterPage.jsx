import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components/componentExport";
import { useAuth } from "../../contexts/contextExport";
import { useDataStore } from "../../contexts/contextExport";
import "./watchlaterpage.css";

export const WatchLaterPage = () => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  const { dataStoreState } = useDataStore();
  const { videos } = dataStoreState;
  const watchLaterVideos =
    videos && videos.filter((item) => item.isInWatchLater);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
      <section className="main-container">
        <Sidebar />
        <div className="video-grid mg-xlg">
          {watchLaterVideos.map((item) => (
            <VideoCard videoItem={item} />
          ))}
        </div>
      </section>
    </>
  );
};
