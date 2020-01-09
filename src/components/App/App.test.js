import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HiveProvider } from "../../context/HiveContext";
import UserService from "../UserService/UserService";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <HiveProvider>
        <UserService>
          <App />
        </UserService>
      </HiveProvider>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
