import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HiveProvider } from "./context/HiveContext";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <HiveProvider>
      <App />
    </HiveProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
