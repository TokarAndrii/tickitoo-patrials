import React from "react";
import { shallow } from "enzyme";
import SimpleTrip from "../SimpleTrip";
import mockProps from "../mockProps";

describe("SimpleTrip tests", () => {
  let wrapper;
  const isDesktopTrue = true;
  const handleHeaderClick = () => {
    wrapper.setState({
      extended: true,
      showRouteDetails: false
    });
  };
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
  it("should not render Route at mobile version if extended and not  showRouteDetails", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.setState({ extended: false });
    expect(wrapper.find(".route__schedule").length).toBe(0);
  });

  it("should render Route at mobile version if extended and showRouteDetails", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.setState({ extended: true });
    expect(wrapper.find(".route__schedule").length).toBe(1);
  });
  it("should not render Route at mobile version  on click at route header", () => {
    wrapper.setProps({ isDesktop: false });
    const handleHeaderClick = () => {
      wrapper.setState({
        extended: true,
        showRouteDetails: false
      });
    };
    wrapper.find(".route__header").simulate("click", handleHeaderClick());
    expect(wrapper.find(".route__schedule").length).toBe(0);
  });
  it("should render route information at mobile version  on click at route header", () => {
    wrapper.setProps({ isDesktop: false });

    wrapper.find(".route__header").simulate("click", handleHeaderClick());
    expect(wrapper.find(".route__information").length).toBe(1);
  });
  it("should render price wit discount at mobile version  on click at route header", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.find(".route__header").simulate("click", handleHeaderClick());
    expect(
      wrapper.find(".route__bottom-price").contains(mockProps.priceWithDiscount)
    ).toEqual(true);
  });
  it("should not render price without discount at mobile version  on click at route header", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.find(".route__header").simulate("click", handleHeaderClick());
    expect(
      wrapper
        .find(".route__bottom-price")
        .contains(mockProps.priceWithoutDiscount)
    ).toEqual(false);
  });
  it("should render Route at mobile version on click at show route button", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.setState({
      extended: true,
      showRouteDetails: false
    });

    wrapper
      .find(".secondary")
      .simulate("click", wrapper.instance().handleToggleShowRoute());

    expect(wrapper.find(".route__schedule").length).toBe(1);
  });
  it("should not render Route at mobile version on 2nd click at show route button", () => {
    wrapper.setProps({ isDesktop: false });
    wrapper.setState({
      extended: true,
      showRouteDetails: false
    });

    wrapper
      .find(".secondary")
      .simulate("click", wrapper.instance().handleToggleShowRoute())
      .simulate("click", wrapper.instance().handleToggleShowRoute());

    expect(wrapper.find(".route__schedule").length).toBe(0);
  });
  it("should render Route at desktop version on click at details button", () => {
    wrapper
      .find(".secondary")
      .simulate("click", wrapper.instance().handleToggleExtend());

    expect(wrapper.find(".route__schedule").length).toBe(1);
  });
  it("should not render Route at desktop version on 2nd click at details button", () => {
    wrapper
      .find(".secondary")
      .simulate("click", wrapper.instance().handleToggleExtend())
      .simulate("click", wrapper.instance().handleToggleExtend());

    expect(wrapper.find(".route__schedule").length).toBe(0);
  });
});
