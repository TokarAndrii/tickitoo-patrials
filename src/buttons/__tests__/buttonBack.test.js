import React from "react";
import { shallow } from "enzyme";
import ButtonBack from '../ButtonBack';

describe("ButtonBack tests", ()=> {
    const props = { 
        className: "test", 
        message: "test message", 
        linkTo: "testLink"
    }
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<ButtonBack {...props}/>)
    });

    it(`should render <a> with class=${props.className}`, ()=> {
        expect(wrapper.find("a").prop("className")).toEqual(props.className);
    });

    it(`should render <a> with href = ${props.linkTo}`, ()=> {
        expect(wrapper.find("a").prop("href")).toEqual(props.linkTo);
    });

    it(`should render <a> with correct message inside as children - ${props.message}`, ()=> {
        expect(wrapper.find("a").prop("children")).toEqual(props.message);
    });
});
