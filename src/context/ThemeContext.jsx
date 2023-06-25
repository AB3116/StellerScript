"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");

  function toggleMode() {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
