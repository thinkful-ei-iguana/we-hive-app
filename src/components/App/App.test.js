import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HiveProvider } from "../../context/HiveContext";
import { UserProvider } from "../../context/UserContext";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <HiveProvider>
          <App />
        </HiveProvider>
      </UserProvider>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
