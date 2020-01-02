import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GoalProvider } from "./context/GoalContext";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <GoalProvider>
      <App />
    </GoalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
