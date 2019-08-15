import React from "react";
import { shallow } from "enzyme";
import HomePage from "../HomePage";

describe("HomePage tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should render HomePage", () => {
    expect(wrapper.find(".filter").length).toBe(1);
  });

  it("should render title", () => {
    expect(wrapper.find(".filter__title").length).toBe(1);
  });

  it("should render 5 images at advantages", () => {
    expect(wrapper.find(".filter__advantages img").length).toBe(5);
  });

  it("should render 5 titles at advantages", () => {
    expect(wrapper.find(`.filter__advantages-title`).length).toBe(5);
  });
});
