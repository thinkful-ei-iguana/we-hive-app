import React from "react";
import ReactDOM from "react-dom";
import AccordionItem from "./AccordionItem";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AccordionItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
