import { toast } from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import { loginService, signUpservice } from "../services/authService";

export const loginHandler = async (
  authDispatch,
  navigate,
  toastProps,
  setToken,
  setCurrentUser,
  location
) => {
  authDispatch({
    type: actionTypes.SET_DUMMY_DATA,
    payload: {
      email: "gopal123@gmail.com",
      password: "Gopal@123",
    },
  });
  try {
    const res = await loginService();
    if (res.status === 200) {
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: res.data.encodedToken,
          user: res.data.foundUser,
          isLoggedIn: true,
        })
      );
      toast.success(`Hi ${res.data.foundUser.firstName}`, toastProps);
      setToken(res.data.encodedToken);
      setCurrentUser(res.data.foundUser);
      navigate(location?.state?.from?.pathname, { replace: true });
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

export const signUpHandler = async (
  formData,
  authDispatch,
  navigate,
  toastProps,
  setToken,
  setCurrentUser
) => {
  try {
    const res = await signUpservice(formData);
    if (res.status === 201) {
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: res.data.encodedToken,
          user: res.data.createdUser,
          isLoggedIn: true,
        })
      );
      toast.success(`hi ${res.data.createdUser.firstName}`, toastProps);
      setToken(res.data.encodedToken);
      setCurrentUser(res.data.createdUser);
      navigate("/profile/");
    }
  } catch (error) {
    authDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const logoutHandler = (
  navigate,
  playListDispatch,
  dataStoreDispatch,
  toastProps,
  setToken,
  setCurrentUser
) => {
  localStorage.removeItem("loginToken");
  setToken("");
  setCurrentUser({});
  playListDispatch({ type: actionTypes.PLAYLIST_CLEAR });
  dataStoreDispatch({ type: actionTypes.DATASTORE_CLEAR });
  toast.success("You logged out successfully", toastProps);
  navigate("/videolist");
};
