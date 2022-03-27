import React from "react";
import { Sidebar, VideoCard } from "../../components/componentExport";
import { useFilter, useDataStore } from "../../contexts/contextExport";
import { CategoryChip } from "./components/categorychips/CategoryChip";
import "./videolistpage.css";

export const VideolistPage = () => {
  const { dataStoreState } = useDataStore();
  const { categories, videos } = dataStoreState;
  const { filterState } = useFilter();
  const { category } = filterState;
  const filteredVideos = videos.filter((item) => item.category === category);

  return (
    <>
      <section className="main-container">
        <Sidebar />
        <div className="content-area">
          <div className="category-area">
            {categories.map((item, index) => (
              <CategoryChip videoCategory={item} key={index} />
            ))}
          </div>
          <div className="video-grid ">
            {(category === "All" ? videos : filteredVideos).map(
              (item, index) => (
                <VideoCard videoItem={item} key={index} />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
