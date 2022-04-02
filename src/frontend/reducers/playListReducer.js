import { actionTypes } from "./actionTypes";

export const playListReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PLAYLIST_UPDATE:
      return { ...state, playLists: action.payload };

    case actionTypes.PLAYLIST_VIDEO_UPDATE:
      return {
        ...state,
        playLists: state.playLists.map((item) =>
          item._id === action.payload._id
            ? {
                ...item,
                videos: action.payload.videos,
              }
            : item
        ),
      };

    case actionTypes.PLAYLIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.PLAYLIST_CLEAR:
      return { playLists: [], errors: "" };

    default:
      return state;
  }
};
