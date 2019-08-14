import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe("Button tests", () => {

    const mockCallback = jest.fn();

    const props = {
        className: "test", 
        message: "test message", 
        handleClick: mockCallback, 
        type: "button",
        name: "testName"
    };

    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<Button {...props}></Button>);
    })

    it(`should render Button with  class='${props.className}'`, () => {
        expect(wrapper.find("button.test").length).toBe(1);
    });

    it(`should render Button with correct message inside as children - ${props.message}`, () => {
        expect(wrapper.find("button.test").prop("children")).toEqual(props.message);
    });

    it(`should render Button with correct type attribute -  type=${props.type}`, () => {
        expect(wrapper.find("button.test").prop("type")).toEqual(props.type);
    });

    it("should call on 'click' event handleClick  function one time", () => {
        wrapper.find("button.test").simulate("click")
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});
