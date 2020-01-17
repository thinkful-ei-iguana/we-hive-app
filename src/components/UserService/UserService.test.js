import React from "react";
import ReactDOM from "react-dom";

import UserService from "./UserService";

describe(`UserService Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserService />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
