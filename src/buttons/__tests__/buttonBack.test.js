import React from "react";
import { shallow } from "enzyme";
import ButtonBack from '../ButtonBack';
import {Link} from 'react-router-dom';

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

    it(`should render <a class='${props.className}'></a>`, ()=> {
        expect(wrapper.find(Link).prop("className")).toEqual(props.className);
    });

    it(`should render Link with right link - ${props.linkTo}`, ()=> {
        expect(wrapper.find(Link).prop("to")).toEqual(props.linkTo);
    });

    it(`should render with correct message inside as children - ${props.message}`, ()=> {
        expect(wrapper.find(Link).prop("children")).toEqual(props.message);
    });
})