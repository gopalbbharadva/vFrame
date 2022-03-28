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

export const deleteWatchLaterService = (token, video) => {
  return axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: {
      authorization: token,
    },
  });
};
