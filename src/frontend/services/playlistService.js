import axios from "axios";

export const getPlaylistService = async () => {
  return axios.get("/api/user/playlists");
};

export const postPlaylistService = (token, playListTitle) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: { title: playListTitle } },
    {
      headers: { authorization: token },
    }
  );
};

export const deletePlayListService = (token, videoId) => {
  return axios.delete(`/api/user/playlists/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const getPlayListVideosService = (token, playListId) => {
  return axios.get(`/api/user/playlists/${playListId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const postPlayListVideoService = (token, playListId, playListVideo) => {
  return axios.post(
    `/api/user/playlists/${playListId}`,
    {
      video: playListVideo,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletePlayListVideoService = (token, videoId, playListId) => {
  return axios.delete(`/api/user/playlists/${playListId}/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};
