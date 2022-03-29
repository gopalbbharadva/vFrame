import axios from "axios";
import { actionTypes } from "../reducers/actionTypes";

export const getLikeService = (token) => {
  return axios.get("/api/user/likes", {
    headers: {
      authorization: token,
    },
  });
};

export const postLikeService = (token, video) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteLikeService = (token, videoId) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};
