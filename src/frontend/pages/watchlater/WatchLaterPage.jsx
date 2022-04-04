import React, { useEffect } from "react";
import "./watchlaterpage.css";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, HorizontalVideoCard } from "../../components/componentExport";
import { useAuth, useDataStore } from "../../contexts/contextExport";
import { deleteWatchLaterHandler } from "../../helperfunctions/watchLaterHandler";
import Watchlater from "../../images/Watchlater.svg";

export const WatchLaterPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { toastProps } = useDataStore();
  const {
    dataStoreState: { videos },
  } = useDataStore();
  const watchLaterVideos = videos?.filter((item) => item.isInWatchLater);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
      <section className="main-wrapper">
        <div className="main-container">
          <Sidebar />
          <div className="video-grid-container">
            <div className="feature-video-grid">
              <div className="fv-info flex-center flex-dir-col">
                <img
                  src={Watchlater}
                  className="fv-intro-image"
                  alt="video thumbnail"
                />
                <p className="fs-xlg mg-vrtl-md">Watch later videos</p>
                <p className="fs-md mg-vrtl-sm">
                  {watchLaterVideos.length}
                  {watchLaterVideos.length <= 1 ? " Video" : " Videos"}
                </p>
              </div>
              <div className="fv-videos">
                {watchLaterVideos.length >= 1 ? (
                  watchLaterVideos.map((item, index) => {
                    return (
                      <HorizontalVideoCard
                        key={index}
                        toastProps={toastProps}
                        deleteHandler={deleteWatchLaterHandler}
                        videoItem={item}
                      />
                    );
                  })
                ) : (
                  <div className="flex-center flex-dir-col">
                    <p className="fs-lg">Empty watch later list</p>
                    <Link to="/videolist" className="btn is-solid fs-btw-ml">
                      Go to Watch Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
