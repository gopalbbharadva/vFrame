import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import { signUpHandler } from "../../../helperfunctions/authHandlers";
import { useForm } from "../../../Hooks/useForm";
import { useTogglePassword } from "../../../Hooks/useTogglePassword";
import "./signuppage.css";

export const SignupPage = () => {
  const {
    passwordToggle,
    confirmPasswordToggle,
    checkPasswordView,
    checkConfirmPasswordView,
  } = useTogglePassword();

  const { formData, errors, formHandler } = useForm();
  const { authDispatch, setToken, setCurrentUser } = useAuth();
  const { toastProps } = useDataStore();

  const navigate = useNavigate();

  return (
    <div class="container">
      <div class="signup-card">
        <p class="text-signup fs-lg">Signup</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="name-section">
            <input
              onChange={formHandler}
              name="firstName"
              required
              id="first-name"
              className="input is-input-primary"
              type="text"
              placeholder="Firstname*"
            />
            <input
              onChange={formHandler}
              name="lastName"
              required
              id="last-name"
              className="input is-input-primary"
              type="text"
              placeholder="Lastname*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              required
              name="email"
              id="email"
              className="input"
              type="email"
              placeholder="e.g abc@gmail.com*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              name="password"
              required
              type={passwordToggle.type}
              className="input pd-sm"
              placeholder="Password*"
            />
            {passwordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkPasswordView}
              />
            ) : (
              <FaRegEyeSlash
                onClick={checkPasswordView}
                className="cursor pd-hztl-sm fs-lg"
              />
            )}
          </div>
          <div class="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              name="confirmPassword"
              required
              className="input pd-sm"
              placeholder="Confirm password"
              type={confirmPasswordToggle.type}
            />
            {confirmPasswordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkConfirmPasswordView}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor pd-hztl-sm fs-lg"
                onClick={checkConfirmPasswordView}
              />
            )}
          </div>
          {errors.isMatch && <p className="error-msg">{errors.isMatch}</p>}
          <button
            onClick={() =>
              signUpHandler(
                formData,
                authDispatch,
                navigate,
                toastProps,
                setToken,
                setCurrentUser
              )
            }
            disabled={
              Object.entries(errors).length === 0 &&
              Object.entries(formData).length === 5
                ? false
                : true
            }
            className="btn is-solid wd-100"
          >
            Sign Up
          </button>
        </form>
        <p class="align-center">
          Already have an account?
          <Link to="/login">
            <a className="auth-link cursor">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
