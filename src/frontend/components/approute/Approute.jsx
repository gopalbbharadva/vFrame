import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, VideolistPage } from "../../pages/pageExport";

export const Approute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videolist" element={<VideolistPage />} />
      </Routes>
    </div>
  );
};
