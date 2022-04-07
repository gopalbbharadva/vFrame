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
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user || "");
  const isLoggedIn = localStorageToken?.isLoggedIn || false;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        authState,
        token,
        currentUser,
        authDispatch,
        setToken,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
