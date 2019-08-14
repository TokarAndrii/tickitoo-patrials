import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo';

const props = {
    linkForLogo: "/index",
    altName: "header_logo",
    imageSrc: "some src"
}

describe("HeaderLogo tests", () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow( <HeaderLogo  {...props} />);
    })

    it(`should render <Link to="${props.linkForLogo}"> `, () => {
      expect(wrapper.find(Link).prop('to')).toEqual(props.linkForLogo);  
    });

    it(`should render HeaderLogo with alt attr ="${props.altName}"> `, () => {
        expect(wrapper.find("img").prop('alt')).toEqual(props.altName);
    });

    it(`should render HeaderLogo with correct src - ${props.imageSrc}`, () => {
        expect(wrapper.find("img").prop('src')).toEqual(props.imageSrc);
    });
});
