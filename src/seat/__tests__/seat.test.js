import React from "react";
import Seat from "../Seat";
import { shallow } from "enzyme";

const mockCallback = jest.fn();

const defaultProps = { isFree: true, handleChooseSeat: mockCallback, seatNumber: "34" }


describe("Seat tests", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Seat {...defaultProps} />
    );
  });

  it("should render <div class='seat'></div>", () => {
    expect(wrapper.find(".seat").length).toEqual(1);
  });


  it("should  contains number 34 inside Seat", () => {
    expect(wrapper.contains("34")).toEqual(true);
  });

  it("should render prop seatNumber as children", () => {
    expect(wrapper.prop("children")).toEqual("34");
  });

  
  it("should onClick run handleChooseSeat", () => {
    wrapper.find(".seat").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  
});
