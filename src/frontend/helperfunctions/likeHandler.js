import toast from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import {
  deleteLikeService,
  getLikeService,
  postLikeService,
} from "../services/likeService";

export const getLikeHandler = async (token, dataStoreDispatch) => {
  try {
    const res = await getLikeService(token);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.LIKE_VIDEO,
        payload: res.data.likes,
      });
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const postLikeHandler = async (
  token,
  videoItem,
  dataStoreDispatch,
  navigate,
  toastProps
) => {
  if (!token) {
    navigate("/login");
  } else {
    try {
      const res = await postLikeService(token, videoItem);
      if (res.status === 201) {
        dataStoreDispatch({
          type: actionTypes.LIKE_VIDEO,
          payload: res.data.likes,
        });
        toast.success("Saved to Liked Videos", toastProps);
      }
    } catch (error) {
      dataStoreDispatch({
        type: actionTypes.API_ERROR,
        payload: "API is not working",
      });
    }
  }
};

export const deleteLikeHandler = async (
  token,
  videoId,
  dataStoreDispatch,
  skip1,
  skip2,
  toastProps
) => {
  try {
    const res = await deleteLikeService(token, videoId);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.LIKE_VIDEO,
        payload: res.data.likes,
      });
      toast("Removed from Liked Videos", toastProps);
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};
