import { useState } from "react";

const useTogglePassword = () => {
  const [passwordToggle, setPasswordToggle] = useState({
    type: "password",
    isEyeIcon: false,
  });

  const checkPasswordView = () => {
    passwordToggle.isEyeIcon
      ? setPasswordToggle({
          isEyeIcon: false,
          type: "password",
        })
      : setPasswordToggle({ isEyeIcon: true, type: "text" });
  };

  return {
    passwordToggle,
    checkPasswordView,
  };
};

export { useTogglePassword };
