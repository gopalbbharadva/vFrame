import axios from "axios";

export const loginService = () => {
  return axios.post("/api/auth/login", {
    email: "gopal123@gmail.com",
    password: "Gopal@123",
  });
};

export const signUpservice = (formData) => {
  return axios.post("/api/auth/signup", formData);
};
