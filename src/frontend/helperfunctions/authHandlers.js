import { toast } from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import { loginService } from "../services/authService";

export const loginHandler = async (
  authDispatch,
  setIsLoggedIn,
  navigate,
  toastProps
) => {
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
      toast.success("User logged in!!", toastProps);
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

export const logoutHandler = (
  setIsLoggedIn,
  navigate,
  playListDispatch,
  dataStoreDispatch,
  toastProps
) => {
  localStorage.removeItem("loginToken");
  setIsLoggedIn(false);
  playListDispatch({ type: actionTypes.PLAYLIST_CLEAR });
  dataStoreDispatch({ type: actionTypes.DATASTORE_CLEAR });
  toast.success("You logged out successfully", toastProps);
  navigate("/videolist");
};
