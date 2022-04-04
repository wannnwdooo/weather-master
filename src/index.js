import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { Global } from "./style/Global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
