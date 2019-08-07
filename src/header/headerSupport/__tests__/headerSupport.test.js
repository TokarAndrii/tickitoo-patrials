import React from 'react';
import {shallow} from 'enzyme';
import HeaderSupport from '../HeaderSupport';

const title = "Служба поддержки:";
const phoneNumber = "0 800 123 456";
const description = "Бесплатно со всех стационарных и мобильных операторов Украины";


describe("HeaderSupport tests", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(
            <HeaderSupport
                title={title}
                phoneNumber={phoneNumber}
                description={description}
            />);
    })

    it("should contains <div class='header__support'></div>", ()=> {
        expect(wrapper.find(".header__support").length).toBe(1);
    });

    it(`should contains <div class='header__support-title'></div> contains ${title}`, ()=> {
        expect(wrapper.find(".header__support-title").contains(title)).toEqual(true);
    });

    it(`should contains <div class='header__support-number'></div> contains ${phoneNumber}`, ()=> {
        expect(wrapper.find(".header__support-number").contains(phoneNumber)).toEqual(true);
    });

    it(`should contains <div class='header__support-description'></div> contains ${description}`, ()=> {
        expect(wrapper.find(".header__support-description").contains(description)).toEqual(true);
    });


})