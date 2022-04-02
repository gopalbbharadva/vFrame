import MockmanEs from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  VideolistPage,
  LikeVideoPage,
  LoginPage,
  PlayListPage,
  HistoryPage,
  WatchLaterPage,
} from "../../pages/pageExport";
import { PlayListVideosPage } from "../../pages/PlayListVideos/PlayListVideosPage";
import { SingleVideo } from "../../pages/singlevideo/SingleVideo";

export const Approute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videolist" element={<VideolistPage />} />
        <Route path="/playlist" element={<PlayListPage />} />
        <Route path="/likes" element={<LikeVideoPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />
        <Route path="/mockman" element={<MockmanEs />}></Route>
        <Route path="/videolist/:videoId" element={<SingleVideo />}></Route>
        <Route
          path="/playlist/:playListId"
          element={<PlayListVideosPage />}
        ></Route>
      </Routes>
    </>
  );
};
