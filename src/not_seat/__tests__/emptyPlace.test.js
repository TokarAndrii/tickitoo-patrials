import React from "react";
import EmptyPlace from "../EmptyPlace";
import { shallow } from "enzyme";

describe("EmptyPlace tests", () => {
  it("should render Empty Place", () => {
    const wrapper = shallow(<EmptyPlace />);
    expect(wrapper.find(".emptyPlace").length).toEqual(1);
  });
});
