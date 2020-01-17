import React from "react";
import ReactDOM from "react-dom";

import AddHiveForm from "./AddHiveForm";

describe(`AddHiveForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddHiveForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
