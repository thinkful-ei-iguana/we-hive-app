import React from "react";
import ReactDOM from "react-dom";

import AccordionItem from "./AccordionItem";

describe(`AccordionItem Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AccordionItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
