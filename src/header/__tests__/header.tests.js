import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';


describe("Header tests", ()=> {
    it("should contains <div class='header__content'></div>", ()=> {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find(".header__content").length).toEqual(1);
    })

})