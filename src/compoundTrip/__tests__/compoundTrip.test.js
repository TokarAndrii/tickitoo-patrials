import React from "react";
import { shallow } from "enzyme";
import CompoundTrip from "../CompoundTrip";
import SimpleTrip from "../../simpleTrip/SimpleTrip";
import mockProps from "../compoundTripMockProps";

describe("CompoundTrip tests", () => {
  let wrapper;
  const priceWithDiscount = 1050;
  const priceWithoutDiscount = 1050;
  beforeEach(() => {
    wrapper = shallow(
      <CompoundTrip
        priceWithDiscount={priceWithDiscount}
        priceWithoutDiscount={priceWithoutDiscount}
        listTripInfo={mockProps}
      />
    );
  });
  it("should render CompoundTrip", () => {
    expect(wrapper.find(".route").length).toBe(1);
  });
  it("should render SimpleTrip", () => {
    expect(wrapper.find(SimpleTrip).length).toBe(mockProps.length);
  });
  it("should render price with discount", () => {
    expect(wrapper.find(".route__price").contains(priceWithDiscount)).toEqual(
      true
    );
  });
  it("should render price without discount", () => {
    expect(
      wrapper.find(".route__price").contains(priceWithoutDiscount)
    ).toEqual(true);
  });
  it("should render button for choose places ", () => {
    expect(wrapper.find(".primary").length).toBe(1);
  });
});
