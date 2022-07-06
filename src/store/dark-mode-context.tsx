import React from "react";

export interface DarkModeContextInt {
  darkMode: boolean;
  className: string;
  icon: "moon" | "sun";
  tooltip: string;
  toggle: () => void;
}

const DarkModeContext = React.createContext<DarkModeContextInt>({
  darkMode: false,
  className: "",
  icon: "moon",
  tooltip: "Dark mode",
  toggle: () => {},
});

export default DarkModeContext;
