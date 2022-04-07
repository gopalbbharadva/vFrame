import axios from "axios";

export const loginService = () => {
  return axios.post("/api/auth/login", {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  });
};

export const signUpservice = (formData) => {
  return axios.post("/api/auth/signup", formData);
};
