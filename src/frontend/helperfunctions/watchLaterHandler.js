import toast from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import {
  deleteWatchLaterService,
  getWatchLaterService,
  postWatchLaterService,
} from "../services/watchLaterService";

export const getWatchLaterHandler = async (token, watchLaterDispatch) => {
  try {
    const res = await getWatchLaterService(token);
    watchLaterDispatch({
      type: actionTypes.WATCH_LATER,
      payload: res.data.watchlater,
    });
  } catch (error) {
    watchLaterDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const postWatchLaterHandler = async (
  token,
  videoItem,
  dataStoreDispatch,
  navigate,
  toastProps
) => {
  if (!token) {
    navigate("/login");
    return;
  } else {
    try {
      const res = await postWatchLaterService(token, videoItem);
      if (res.status === 201) {
        dataStoreDispatch({
          type: actionTypes.WATCH_LATER,
          payload: res.data.watchlater,
        });
        toast.success("Saved to Watch Later", toastProps);
      }
    } catch (error) {
      dataStoreDispatch({
        type: actionTypes.API_ERROR,
        payload: "API is not working.",
      });
    }
  }
};

export const deleteWatchLaterHandler = async (
  token,
  videoId,
  dataStoreDispatch,
  skip1,
  skip2,
  toastProps
) => {
  try {
    const res = await deleteWatchLaterService(token, videoId);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.WATCH_LATER,
        payload: res.data.watchlater,
      });
      toast("Removed from Watch Later", toastProps);
    }
  } catch (error) {
    watchLaterDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working.",
    });
  }
};
