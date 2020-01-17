import React from "react";
import ReactDOM from "react-dom";

import ActivityForm from "./ActivityForm";

describe(`ActivityForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ActivityForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
