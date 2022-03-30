import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { useAuth, useDataStore } from "../../contexts/contextExport";
import { deleteLikeHandler } from "../../helperfunctions/likeHandler";
import Watchlater from "../../images/Watchlater.svg";
import Likedislike from "../../images/Likedislike.svg";
import "./LikeVideoPage.css";

export const LikeVideoPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { dataStoreState } = useDataStore();
  const { videos } = dataStoreState;
  const likedVideos = videos?.filter((item) => item.isLiked);

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
              src={Likedislike}
              className="fv-intro-image"
              alt="video thumbnail"
            />
            <p className="fs-xlg mg-vrtl-md">Liked videos</p>
            <p className="fs-md mg-vrtl-sm">
              {likedVideos.length}
              {likedVideos.length <= 1 ? " Video" : " Videos"}
            </p>
          </div>
          <div className="fv-videos">
            {likedVideos.length >= 1 ? (
              likedVideos.map((item) => {
                return (
                  <HorizontalVideoCard
                    deleteHandler={deleteLikeHandler}
                    videoItem={item}
                  />
                );
              })
            ) : (
              <div className="flex-center flex-dir-col">
                <p className="fs-lg">Empty like videos list</p>
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
