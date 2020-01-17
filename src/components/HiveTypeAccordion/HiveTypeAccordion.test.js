import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import HiveTypeAccordion from "./HiveTypeAccordion";

describe(`HiveTypeAccordion Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HiveTypeAccordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("opens any clicked tab", () => {
    const wrapper = shallow(<HiveTypeAccordion />);
    wrapper
      .find(".Accordion")
      .at(0)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
