import { toast } from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import { loginService, signUpservice } from "../services/authService";

export const loginHandler = async (
  authDispatch,
  navigate,
  toastProps,
  setToken,
  setCurrentUser
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
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem(
        "loginToken",
        JSON.stringify({
          token: res.data.encodedToken,
          user: res.data.foundUser,
          isLoggedIn: true,
        })
      );
      toast.success("User logged in!!", toastProps);
      setToken(res.data.encodedToken);
      setCurrentUser(res.data.foundUser);
      navigate("/profile/");
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
