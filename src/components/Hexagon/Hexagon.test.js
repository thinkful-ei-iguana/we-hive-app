import React from "react";
import ReactDOM from "react-dom";

import Hexagon from "./Hexagon";

describe(`Hexagon Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hexagon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
