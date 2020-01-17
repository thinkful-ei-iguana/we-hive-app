import React from "react";
import ReactDOM from "react-dom";

import JoinCodeForm from "./JoinCodeForm";

describe(`JoinCodeForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<JoinCodeForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
