import MockmanEs from "mockman-js";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  VideolistPage,
  LikeVideoPage,
  LoginPage,
  PlayListPage,
  HistoryPage,
  WatchLaterPage,
  SignupPage,
  NotFoundPage,
  PlayListVideosPage,
  Profile,
  SingleVideo,
} from "../../pages/pageExport";
import { ProfileCard, Settings } from "../../pages/Profile/profilePageExport";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../../contexts/AuthContext";

export const Approute = () => {
  const { token } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videolist" element={<VideolistPage />} />

        <Route path="/videolist/:videoId" element={<SingleVideo />}></Route>

        <Route
          path="/playlist"
          element={<PrivateRoute>{<PlayListPage />}</PrivateRoute>}
        ></Route>

        <Route
          path="/likes"
          element={<PrivateRoute>{<LikeVideoPage />}</PrivateRoute>}
        ></Route>

        <Route
          path="/history"
          element={<PrivateRoute>{<HistoryPage />}</PrivateRoute>}
        ></Route>

        <Route
          path="/watchlater"
          element={
            <PrivateRoute>
              <WatchLaterPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/playlist/:playListId"
          element={
            <PrivateRoute>
              <PlayListVideosPage />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/mockman" element={<MockmanEs />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>

        <Route path="/profile/" element={<Profile />}>
          <Route path="" element={<ProfileCard />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {!token ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<Navigate replace to="/videolist" />}
            />
            <Route
              path="/signup"
              element={<Navigate replace to="/videolist" />}
            />
          </>
        )}
      </Routes>
    </>
  );
};
