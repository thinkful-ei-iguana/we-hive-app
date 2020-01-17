import React from "react";
import ReactDOM from "react-dom";

import TargetDate from "./TargetDate";

describe(`TargetDate Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TargetDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
