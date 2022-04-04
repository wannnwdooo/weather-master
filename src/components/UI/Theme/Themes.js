import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "linear-gradient(to right bottom, #F6DDE9, #CA8ED4)",
  container: "#EFDDF6",
  border: "2px solid #EBE4EB",
  fontColor: "black",
  shadow: "12px 12px 2px 1px rgba(57, 13, 217, 0.15)",
};
export const darkTheme = {
  body: "linear-gradient(to right bottom, #bd7e88, #6759ab)",
  container: "rgba(24, 24, 24, 0.82)",
  border: "2px solid #c5c3c3",
  fontColor: "white",
  shadow: "12px 12px 2px 1px rgba(81, 103, 204, 0.3)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
  }

  fontColor {
    color: ${(props) => props.theme.fontColor};
  }

  container {
    background: ${(props) => props.theme.container};
  }

  border {
    border: ${(props) => props.theme.border};
  }

  shadow {
    box-shadow: ${(props) => props.theme.shadow};
  }
`;