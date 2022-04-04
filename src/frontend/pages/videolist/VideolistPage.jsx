import React, { useEffect } from "react";
import { Sidebar, VideoCard } from "../../components/componentExport";
import { useFilter, useDataStore } from "../../contexts/contextExport";
import { actionTypes } from "../../reducers/actionTypes";
import { CategoryChip } from "./components/categorychips/CategoryChip";
import Videonotfound from "../../images/Videosnotfound.svg";
import "./videolistpage.css";

export const VideolistPage = () => {
  const { dataStoreState, searchText } = useDataStore();
  const { categories, videos } = dataStoreState;
  const {
    filterState: { category },
    filterDispatch,
  } = useFilter();

  useEffect(() => {
    filterDispatch({
      type: actionTypes.SET_DEFAULT_CATEGORY,
      payload: { category: "All" },
    });
  }, []);

  const filteredVideos =
    category === "All"
      ? videos
      : videos.filter((item) => item.category === category);

  const filterBySearchVideos = filteredVideos.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <section className="main-wrapper">
        <div className="main-container">
          <Sidebar />
          <div className="video-grid-container">
            {filterBySearchVideos.length ? (
              <div className="content-area">
                <div className="category-area">
                  {categories.map((item, index) => (
                    <CategoryChip videoCategory={item} key={index} />
                  ))}
                </div>
                <div className="video-grid ">
                  {filterBySearchVideos.map((item, index) => (
                    <VideoCard videoItem={item} key={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="fv-info flex-center flex-dir-col">
                <img
                  className="fv-intro-image"
                  src={Videonotfound}
                  alt="Video not found svg"
                />
                <p className="fs-lg mg-sm clr-red">No videos found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
