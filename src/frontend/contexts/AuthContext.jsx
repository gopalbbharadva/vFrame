import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  loginData: { email: "", password: "" },
  errors: [],
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const loginToken = JSON.parse(localStorage.getItem("loginToken"));
  const token = loginToken && loginToken.token;
  const [isLoggedIn, setIsLoggedIn] = useState(
    loginToken && loginToken.isLoggedIn
  );

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, authState, token, setIsLoggedIn, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
