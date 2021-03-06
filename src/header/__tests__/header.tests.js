import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';


describe("Header tests", () => {
    it("should render Header", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".header__content").length).toEqual(1);
    });

});
