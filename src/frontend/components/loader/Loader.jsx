import React from "react";
import { PongSpinner } from "react-spinners-kit";
import "./loader.css";

export const Loader = () => {
  const loaderColor = "#0ea5e9";
  return (
    <div className="loader-container">
      <PongSpinner color={loaderColor} size={150} />
    </div>
  );
};
