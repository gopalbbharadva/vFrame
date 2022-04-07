import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  useDataStore,
  usePlaylist,
} from "../../../contexts/contextExport";
import { logoutHandler } from "../../../helperfunctions/authHandlers";

export const Settings = () => {
  const { dataStoreDispatch, toastProps } = useDataStore();
  const { playListDispatch } = usePlaylist();
  const navigate = useNavigate();
  const { setToken, setCurrentUser } = useAuth();

  return (
    <div className="pd-lg">
      <button
        onClick={() =>
          logoutHandler(
            navigate,
            playListDispatch,
            dataStoreDispatch,
            toastProps,
            setToken,
            setCurrentUser
          )
        }
        className="btn is-solid fs-btw-ml"
      >
        Log Out
      </button>
    </div>
  );
};
