import { actionTypes } from "../reducers/actionTypes";
import {
  deleteLikeService,
  getLikeService,
  postLikeService,
} from "../services/likeService";

export const getLikeHandler = async (token, dataStoreDispatch) => {
  try {
    const res = await getLikeService(token);
    console.log('like res',res.data.likes)
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.LIKE_VIDEO,
        paylaod: res.data.likes,
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
  navigate
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
      }
    } catch (error) {
      dataStoreDispatch({
        type: actionTypes.API_ERROR,
        payload: "API is not working",
      });
    }
  }
};

export const deleteLikeHandler = async (token, videoId, dataStoreDispatch) => {
  try {
    const res = await deleteLikeService(token, videoId);
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
