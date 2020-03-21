import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HiveProvider } from "./context/HiveContext";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <HiveProvider>
        <App />
      </HiveProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
