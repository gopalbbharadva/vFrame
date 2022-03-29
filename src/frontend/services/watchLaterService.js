import axios from "axios";

export const getWatchLaterService = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: {
      authorization: token,
    },
  });
};

export const postWatchLaterService = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteWatchLaterService = (token, videoId) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};
