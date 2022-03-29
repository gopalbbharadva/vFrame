import { actionTypes } from "../reducers/actionTypes";
import { loginService } from "../services/authService";

export const loginHandler = async (authDispatch, setIsLoggedIn, navigate) => {
  authDispatch({
    type: actionTypes.SET_DUMMY_DATA,
    payload: {
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    },
  });
  try {
    const res = await loginService();
    if (res.status === 200) {
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: res.data.encodedToken,
          isLoggedIn: true,
        })
      );
      setIsLoggedIn(true);
      navigate("/videolist");
      authDispatch({ type: actionTypes.CLEAR_FORM });
    } else {
      authDispatch({
        type: actionTypes.LOGIN_FAILED,
        payload: "User not exists.",
      });
    }
  } catch (error) {
    authDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const logoutHandler = (setIsLoggedIn) => {
  localStorage.removeItem("loginToken");
  setIsLoggedIn(false);
};
