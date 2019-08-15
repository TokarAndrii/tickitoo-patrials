import React from "react";
import { shallow } from "enzyme";
import Banner from "../Banner";

describe("Banner tests", () => {
  const props = {
    classNameHolder: "payment",
    title: "ОФОРМЛЕНИЕ БИЛЕТОВ",
    text: "Шаг 2 из 3"
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Banner {...props} />);
  });
  it("should should render Banner", () => {
    expect(wrapper.find(`.steps-hero`).length).toBe(1);
  });

  it(`should should render  h1  - ${props.title}`, () => {
    expect(
      wrapper.find(`.steps-hero__content h1`).contains(props.title)
    ).toEqual(true);
  });

  it(`should should render  span  - ${props.text}`, () => {
    expect(
      wrapper.find(`.steps-hero__content span`).contains(props.text)
    ).toEqual(true);
  });

  it(`should should be div with class='${props.classNameHolder}'`, () => {
    expect(wrapper.find(`.${props.classNameHolder}`).length).toBe(1);
  });
});
