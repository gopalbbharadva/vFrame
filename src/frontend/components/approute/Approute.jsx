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
      </Routes>
    </>
  );
};
