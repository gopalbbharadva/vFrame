import { actionTypes } from "../reducers/actionTypes";
import {
  deleteWatchLaterService,
  getWatchLaterService,
  postWatchLaterService,
} from "../services/watchLaterService";

export const getWatchLaterHandler = async (token, watchLaterDispatch) => {
  try {
    const res = await getWatchLaterService(token);
    console.log(res);
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
  dataStoreDispatch
) => {
  try {
    const res = await postWatchLaterService(token, videoItem);
    if (res.status === 201) {
      console.log(res.data.watchlater);
      dataStoreDispatch({
        type: actionTypes.WATCH_LATER,
        payload: res.data.watchlater,
      });
    }
  } catch (error) {
    watchLaterDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working.",
    });
  }
};

export const deleteWatchLaterHandler = async (
  token,
  videoItem,
  dataStoreDispatch
) => {
  try {
    const res = await deleteWatchLaterService(token, videoItem);
    if (res.status === 200) {
      console.log(res.data.watchlater);
      dataStoreDispatch({
        type: actionTypes.WATCH_LATER,
        payload: res.data.watchlater,
      });
    }
  } catch (error) {
    console.log(error);
    watchLaterDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working.",
    });
  }
};
