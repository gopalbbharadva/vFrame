import { createContext, useContext, useState, useReducer } from "react";
import { playListReducer } from "../reducers/playListReducer";

const PlaylistContext = createContext();
const initialState = {
  playLists: [],
  errors: "",
};

const PlaylistProvider = ({ children }) => {
  const [playListState, playListDispatch] = useReducer(
    playListReducer,
    initialState
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <PlaylistContext.Provider
      value={{ showModal, setShowModal, playListState, playListDispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
