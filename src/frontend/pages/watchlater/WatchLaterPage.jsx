import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { useAuth } from "../../contexts/contextExport";
import { useDataStore } from "../../contexts/contextExport";
import Watchlater from "../../images/Watchlater.svg";
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
        <div className="watch-later-grid pd-xlg">
          <div className="watch-later-info">
            <img
              src={Watchlater}
              className="wl-intro-image"
              alt="watch-later-image"
            />
            <p className="fs-xlg mg-vrtl-md">Watch later videos</p>
            <p className="fs-md mg-vrtl-sm">
              {watchLaterVideos.length}
              {watchLaterVideos.length <= 1 ? " Video" : " Videos"}
            </p>
          </div>
          <div className="watch-later-videos">
            {watchLaterVideos.length >= 1 ? (
              watchLaterVideos.map((item) => {
                return <HorizontalVideoCard videoItem={item} />;
              })
            ) : (
              <div className="flex-center flex-dir-col">
                <p className="fs-lg">Empty watch later list</p>
                <Link to="/videolist" className="btn is-solid fs-btw-ml">
                  Go to watch now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
