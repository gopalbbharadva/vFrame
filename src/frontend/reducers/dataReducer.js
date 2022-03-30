import { actionTypes } from "./actionTypes";

export const dataStoreReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_CATEGORIES:
      return { ...state, categories: action.payload };

    case actionTypes.INITIAL_VIDEOS:
      return { ...state, videos: action.payload };

    case actionTypes.WATCH_LATER:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInWatchLater: action.payload.some((item) => item._id === video._id),
        })),
      };

    case actionTypes.LIKE_VIDEO:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isLiked: action.payload.some((item) => item._id === video._id),
        })),
      };

    case actionTypes.HISTORY_VIDEO:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInHistory: action.payload.some((item) => item._id === video._id),
        })),
      };

    case actionTypes.API_ERROR:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};
