import React from "react";
import ReactDOM from "react-dom";

import PostCodeForm from "./PostCodeForm";

describe(`PostCodeForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PostCodeForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
