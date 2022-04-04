import React from "react";
import "./style/App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Title from "./components/UI/Title/Title";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./components/UI/Theme/Themes";
import SliderButton from "./components/UI/Button/SliderButton";
import Description from "./components/UI/Description/Description";
import Input from "./components/UI/Input/Input";
import { AppWrapper } from "./components/UI/Wrapper/AppWrapper,";
import { InterfaceContainer } from "./components/UI/Container/InterfaceContainer";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <InterfaceContainer>
          <Title>Weather App</Title>
          <Input />
          <Description />
          <SliderButton themeToggle={themeToggle} />
        </InterfaceContainer>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
