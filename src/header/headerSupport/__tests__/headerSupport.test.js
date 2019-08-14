import React from 'react';
import {shallow} from 'enzyme';
import HeaderSupport from '../HeaderSupport';

const props = {
    title : "Служба поддержки:",
    phoneNumber : "0 800 123 456",
    description : "Бесплатно со всех стационарных и мобильных операторов Украины"
}


describe("HeaderSupport tests", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(
            <HeaderSupport {...props}/>);
    })

    it("should contains <div class='header__support'></div>", ()=> {
        expect(wrapper.find(".header__support").length).toBe(1);
    });

    it(`should contains <div class='header__support-title'></div> contains ${props.title}`, ()=> {
        expect(wrapper.find(".header__support-title").contains(props.title)).toEqual(true);
    });

    it(`should contains <div class='header__support-number'></div> contains ${props.phoneNumber}`, ()=> {
        expect(wrapper.find(".header__support-number").contains(props.phoneNumber)).toEqual(true);
    });

    it(`should contains <div class='header__support-description'></div> contains ${props.description}`, ()=> {
        expect(wrapper.find(".header__support-description").contains(props.description)).toEqual(true);
    });

});
