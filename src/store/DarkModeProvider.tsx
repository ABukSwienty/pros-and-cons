import React, { useState } from "react";
import DarkModeContext from "./dark-mode-context";

const DarkModeProvider = (props: { children: React.ReactNode }) => {
  const [state, setState] = useState<{
    darkMode: boolean;
    className: string;
    icon: "moon" | "sun";
    tooltip: string;
  }>({
    darkMode: false,
    className: "",
    icon: "moon",
    tooltip: "Dark mode",
  });

  const toggleDarkMode = () => {
    setState((prev) => {
      const newState = {
        darkMode: !prev.darkMode,
        className: !prev.darkMode ? "dark" : "",
        icon: !prev.darkMode ? ("sun" as "sun") : ("moon" as "moon"),
        tooltip: !prev.darkMode ? "Light mode" : "Dark mode",
      };
      return newState;
    });
  };

  return (
    <DarkModeContext.Provider value={{ ...state, toggle: toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
