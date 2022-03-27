import { actionTypes } from "./actionTypes";

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        loginData: { ...state.loginData, email: action.payload },
      };

    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        loginData: { ...state.loginData, password: action.payload },
      };

    case actionTypes.SET_DUMMY_DATA:
      return { ...state, loginData: action.payload };

    case actionTypes.CLEAR_FORM:
      return { ...state, loginData: { email: "", password: "" } };

    case actionTypes.CHECK_LOGIN_STATE:
      return { ...state, isLoggedIn: action.payload };

    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        errors: [...state.errors, { loginError: action.payload }],
      };

    case actionTypes.LOGIN_SERVER_ERROR:
      return {
        ...state,
        errors: [...state.errors, { loginApiError: action.payload }],
      };

    default:
      return state;
  }
};
