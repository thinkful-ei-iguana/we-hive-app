import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HiveProvider } from "./context/HiveContext";
import UserService from "../src/components/UserService/UserService";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <HiveProvider>
      <UserService>
        <App />
      </UserService>
    </HiveProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
