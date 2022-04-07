import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useDataStore } from "../../../contexts/contextExport";
import { loginHandler } from "../../../helperfunctions/authHandlers";
import { useTogglePassword } from "../../../Hooks/useTogglePassword";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./loginpage.css";
import { actionTypes } from "../../../reducers/actionTypes";

export const LoginPage = () => {
  const { authState, authDispatch, setToken, setCurrentUser } = useAuth();
  const { loginData } = authState;
  const navigate = useNavigate();
  const { passwordToggle, checkPasswordView } = useTogglePassword();
  const { toastProps } = useDataStore();

  return (
    <>
      <div className="flex-center">
        <div className="login-card">
          <p className="text-login fs-lg">Login</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler(
                authDispatch,
                navigate,
                toastProps,
                setToken,
                setCurrentUser
              );
            }}
          >
            <div className="input-icon-container input-primary">
              <AiOutlineMail className="fs-lg" />
              <input
                onChange={(e) =>
                  authDispatch({
                    type: actionTypes.SET_EMAIL,
                    payload: e.target.value,
                  })
                }
                value={loginData.email}
                name="email"
                type="email"
                className="input"
                placeholder="e.g abc@gmail.com"
              />
            </div>
            <div className="input-icon-container input-primary">
              <AiOutlineLock className="fs-lg" />
              <input
                onChange={(e) =>
                  authDispatch({
                    type: actionTypes.SET_PASSWORD,
                    payload: e.target.value,
                  })
                }
                value={loginData.password}
                type={passwordToggle.type}
                name="password"
                className="input"
                placeholder="e.g abc123"
              />
              {passwordToggle.isEyeIcon ? (
                <FaRegEye
                  className="pointer fs-lg"
                  onClick={checkPasswordView}
                />
              ) : (
                <FaRegEyeSlash
                  className="pointer fs-lg"
                  onClick={checkPasswordView}
                />
              )}
            </div>
            <div className="horizontal-div">
              <label className="cursor" htmlFor="remember-me">
                <input id="remember-me" type="checkbox" />
                Remember me
              </label>
              <a className="forgot-link pointer">Forgot Password?</a>
            </div>
            <div className="btn-area">
              <button className="btn is-secondary">
                Login With Test Credentials.
              </button>
              <button className="btn is-solid">Login</button>
            </div>
          </form>
          <span className="text-or">Or</span>
          <p className="align-center">
            New user?
            <Link to="/signup">
              <a className="auth-link cursor">Create an account</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
