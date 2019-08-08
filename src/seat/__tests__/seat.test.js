import React from "react";
import Seat from "../Seat";
import { shallow } from "enzyme";

describe("Seat tests", () => {
  it("shoul be only one <div></div> rendered", () => {
    const wrapper = shallow(<Seat isFree handleChoseSeat={() => null} />);
    expect(wrapper.length).toEqual(1);
  });

  describe("test Seat with props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Seat isFree handleChoseSeat={() => null} seatNumber="34" />
      );
    });

    it("shoul not contains any <div></div> inside Seat", () => {
      expect(wrapper.contains(<div />)).toEqual(false);
    });

    it("should  contains number 34 inside Seat", () => {
      expect(wrapper.contains("34")).toEqual(true);
    });

    it("should render prop seatNumber as children", () => {
      expect(wrapper.prop("children")).toEqual("34");
    });
  });
});
