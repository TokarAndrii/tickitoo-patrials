import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import PaymentPage from "../PaymentPage";
import Passenger from "../../passenger/Passenger";
import RouteList from "../../route/RouteList";
import mockProps from "../paymentPageListMockData";

describe("PaymentPage tests", () => {
  let wrapper;

  const props = {
    linkToPublicOffer: "some link",
    paymentPageInfo: mockProps
  };

  beforeEach(() => {
    wrapper = shallow(<PaymentPage {...props} />);
  });

  it("should not render error message if !isError", () => {
    expect(wrapper.find(".warning-message").length).toBe(0);
  });

  it("should render error message if isError: true", () => {
    wrapper.setState({ isError: true });
    expect(wrapper.find(".warning-message").length).toBe(1);
  });

  it(`should render Link with to='${props.linkToPublicOffer}'`, () => {
    expect(wrapper.find(Link).prop("to")).toEqual(props.linkToPublicOffer);
  });

  it(`should render Passenger qty - ${props.paymentPageInfo.passengersList.length}`, () => {
    expect(wrapper.find(Passenger).length).toEqual(
      props.paymentPageInfo.passengersList.length
    );
  });

  it(`should render RouteList}`, () => {
    expect(wrapper.find(RouteList).length).toBe(1);
  });

  it(`should render <div class="payment-data__info-description"> with  numberTrip=${props.paymentPageInfo.tripDetailsInfo.numberTrip}}`, () => {
    expect(
      wrapper
        .find(".payment-data__info-description")
        .contains(props.paymentPageInfo.tripDetailsInfo.numberTrip)
    ).toEqual(true);
  });

  it(`should render <div class="payment-data__info-description"> with  numberTrip=${props.paymentPageInfo.tripDetailsInfo.carrier}}`, () => {
    expect(
      wrapper
        .find(".payment-data__info-description")
        .contains(props.paymentPageInfo.tripDetailsInfo.carrier)
    ).toEqual(true);
  });

  it(`should render <div class="payment-data__info-description"> with  numberTrip=${props.paymentPageInfo.tripDetailsInfo.bus}}`, () => {
    expect(
      wrapper
        .find(".payment-data__info-description")
        .contains(props.paymentPageInfo.tripDetailsInfo.bus)
    ).toEqual(true);
  });

  it(`should render  error message after handlePay method called if submitPublicOffer=false`, () => {
    const preventDefault = jest.fn();
    const mockEvent = {
      preventDefault: preventDefault
    };
    wrapper.instance().handlePay(mockEvent);
    expect(wrapper.find(".warning-message").length).toBe(1);
  });

  it(`should not render error message after handlePay method called if submitPublicOffer=true and isError: false`, () => {
    const preventDefault = jest.fn();
    const mockEvent = {
      preventDefault: preventDefault
    };
    wrapper.setState({ submitPublicOffer: true, isError: false });
    wrapper.instance().handlePay(mockEvent);
    expect(wrapper.find(".warning-message").length).toBe(0);
  });
});
