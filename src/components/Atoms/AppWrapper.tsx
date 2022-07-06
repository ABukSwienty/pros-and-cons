import React, { useContext } from "react";
import DarkModeContext from "../../store/dark-mode-context";
import bg from "../../assets/images/bg.jpg";

export const AppWrapper = (props: { children: React.ReactNode }) => {
  const darkModeCtx = useContext(DarkModeContext);
  return (
    <div className={`font-Roboto ${darkModeCtx.className}`}>
      {props.children}
    </div>
  );
};
