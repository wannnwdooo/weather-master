import React from "react";
import "./style/App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./Themes";

import MainPage from "./pages/Main";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainPage themeToggle={themeToggle}/>
    </ThemeProvider>
  );
}

export default App;
