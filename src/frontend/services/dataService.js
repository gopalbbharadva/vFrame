import axios from "axios";

export const getCategoryService = () => {
  return axios.get("/api/categories");
};

export const getVideoService = () => {
  return axios.get("/api/videos");
};
