import React from "react";
import { shallow } from "enzyme";
import SimpleTrip from "../SimpleTrip";
import mockProps from "../mockProps";

describe("SimpleTrip tests", () => {
  let wrapper;
  const isDesktopTrue = true;
  beforeEach(() => {
    wrapper = shallow(
      <SimpleTrip isDesktop={isDesktopTrue} tripInfo={mockProps} />
    );
  });

  it("should render SimpleTrip", () => {
    expect(wrapper.find(".route__description").length).toBe(1);
  });

  it("should contain departure time", () => {
    expect(
      wrapper
        .find(".route__inner--departure")
        .contains(mockProps.departure.departureTime)
    ).toEqual(true);
  });
  it("should contain departure date", () => {
    expect(
      wrapper
        .find(".route__inner--departure")
        .contains(mockProps.departure.departureDate)
    ).toEqual(true);
  });
  it("should contain departure city", () => {
    expect(
      wrapper
        .find(".route__inner--departure")
        .contains(mockProps.departure.departureCity)
    ).toEqual(true);
  });
  it("should contain departure station", () => {
    expect(
      wrapper
        .find(".route__inner--departure")
        .contains(mockProps.departure.departureStation)
    ).toEqual(true);
  });
  it("should contain arriving time", () => {
    expect(
      wrapper
        .find(".route__inner--arriving")
        .contains(mockProps.arriving.arrivingTime)
    ).toEqual(true);
  });
  it("should contain arriving date", () => {
    expect(
      wrapper
        .find(".route__inner--arriving")
        .contains(mockProps.arriving.arrivingDate)
    ).toEqual(true);
  });
  it("should contain arriving city", () => {
    expect(
      wrapper
        .find(".route__inner--arriving")
        .contains(mockProps.arriving.arrivingCity)
    ).toEqual(true);
  });
  it("should contain arriving station", () => {
    expect(
      wrapper
        .find(".route__inner--arriving")
        .contains(mockProps.arriving.arrivingStation)
    ).toEqual(true);
  });
  it("should contain travel time hours", () => {
    expect(
      wrapper
        .find(".route__inner--travel-time")
        .contains(mockProps.travelTime.hours)
    ).toEqual(true);
  });
  it("should contain travel time minutes", () => {
    expect(
      wrapper
        .find(".route__inner--travel-time")
        .contains(mockProps.travelTime.minutes)
    ).toEqual(true);
  });
  it("should not render trip details if not extended", () => {
    expect(wrapper.find(".route__information").length).toBe(0);
  });

  it("should render trip details if extended", () => {
    wrapper.setState({ extended: true });
    expect(wrapper.find(".route__information").length).toBe(1);
  });
  it("should contains trip details  generalInfo if extended", () => {
    wrapper.setState({ extended: true });
    expect(
      wrapper
        .find(".route__information")
        .contains(mockProps.tripDetails.generalInfo)
    ).toEqual(true);
  });
  it("should contains trip details  type if extended", () => {
    wrapper.setState({ extended: true });
    expect(
      wrapper.find(".route__information").contains(mockProps.tripDetails.type)
    ).toEqual(true);
  });
  it("should contains trip details  bus if extended", () => {
    wrapper.setState({ extended: true });
    expect(
      wrapper.find(".route__information").contains(mockProps.tripDetails.bus)
    ).toEqual(true);
  });
});
