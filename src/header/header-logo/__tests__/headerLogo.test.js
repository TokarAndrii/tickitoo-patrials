import React from 'react';
import {shallow} from 'enzyme';
import HeaderLogo from '../HeaderLogo';

const link = "/index";
const alt = "header_logo";
const imageLink = "some src";

describe("HeaderLogo tests", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(
        <HeaderLogo   
                linkForLogo={link}
                altName={alt}
                imageSrc={imageLink}
        />)
    })

    it(`should render <a href="${link}"> `, ()=> {
      expect(wrapper.find("a").prop('href')).toEqual(link)  
    });

    it(`should render <img alt="${alt}"> `, ()=> {
        expect(wrapper.find("img").prop('alt')).toEqual(alt)  
    });

    it(`should render <img src="${imageLink}"> `, ()=> {
        expect(wrapper.find("img").prop('src')).toEqual(imageLink)  
    });
})