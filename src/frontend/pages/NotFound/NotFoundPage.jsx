import React from "react";
import NotFound from "../../images/NotFound.svg";

export const NotFoundPage = () => {
  return (
    <div className="flex-center flex-dir-col">
      <img className="image" src={NotFound} alt="not found" />
      <p className="clr-red fs-lg mg-vrtl-md">Page Not Found</p>
    </div>
  );
};
