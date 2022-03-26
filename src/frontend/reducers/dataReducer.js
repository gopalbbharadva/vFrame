import { actionTypes } from "./actionTypes";

export const dataStoreReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_CATEGORIES:
      return { ...state, categories: action.payload };

    case actionTypes.INITIAL_VIDEOS:
      return { ...state, videos: action.payload };

    case actionTypes.CATEGORY_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    case actionTypes.VIDEO_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    default:
      return state;
  }
};
