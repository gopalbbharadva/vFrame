import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { useAuth, useDataStore } from "../../contexts//contextExport";
import { clearHistoryHandler, deleteHistoryHandler } from "../../helperfunctions/histroryHandler";
import History from "../../images/History.svg";
import "./historypage.css";

export const HistoryPage = () => {
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const { dataStoreState, dataStoreDispatch } = useDataStore();
  const { videos } = dataStoreState;
  const historyVideos = videos?.filter((item) => item.isInHistory);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
      <section className="main-container">
        <Sidebar />
        <div className="feature-video-grid pd-xlg">
          <div className="fv-info">
            <img
              src={History}
              className="fv-intro-image"
              alt="video thumbnail"
            />
            <p className="fs-xlg mg-vrtl-md">Watch History</p>
            <p className="fs-md mg-vrtl-sm">
              {historyVideos.length}
              {historyVideos.length <= 1 ? " Video" : " Videos"}
            </p>
            <button
              onClick={() => clearHistoryHandler(token, dataStoreDispatch)}
              className="btn is-solid is-outline fs-btw-ml"
            >
              Clear History
            </button>
          </div>
          <div className="fv-videos">
            {historyVideos.length >= 1 ? (
              historyVideos.map((item) => {
                return (
                  <HorizontalVideoCard
                    deleteHandler={deleteHistoryHandler}
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
      </section>
    </>
  );
};
