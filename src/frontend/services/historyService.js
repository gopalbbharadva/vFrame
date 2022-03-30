import axios from "axios";

export const getHistoryService = (token) => {
  return axios.get("/api/user/history", {
    headers: {
      authorization: token,
    },
  });
};

export const postHistoryService = (token, video) => {
  return axios.post(
    "/api/user/history",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletHistoryService = (token, videoId) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const clearHistoryService = (token) => {
  return axios.delete("/api/user/history/all", {
    headers: { authorization: token },
  });
};
