import { actionTypes } from "./actionTypes";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FILTER_BY_CATEGORY:
      return { category: action.payload };

    case actionTypes.SET_DEFAULT_CATEGORY:
      return { category: action.payload.category };

    default:
      return state;
  }
};
