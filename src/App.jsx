import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./Context/theme";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Outlet } from "react-router-dom";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Provider store={store}>
          <Outlet />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
