import React from 'react';
import {shallow} from 'enzyme';
import HeaderLogo from '../HeaderLogo';

const props = {
    linkForLogo : "/index",
    altName : "header_logo",
    imageSrc :"some src"
}

describe("HeaderLogo tests", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(
        <HeaderLogo  {...props} />)
    })

    it(`should render <a href="${props.linkForLogo}"> `, ()=> {
      expect(wrapper.find("a").prop('href')).toEqual(props.linkForLogo);  
    });

    it(`should render <img alt="${props.altName}"> `, ()=> {
        expect(wrapper.find("img").prop('alt')).toEqual(props.altName);
    });

    it(`should render <img src="${props.imageSrc}"> `, ()=> {
        expect(wrapper.find("img").prop('src')).toEqual(props.imageSrc);
    });
})