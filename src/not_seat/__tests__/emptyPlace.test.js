import React from 'react';
import EmptyPlace from '../EmptyPlace';
import { shallow } from 'enzyme';

describe("EmptyPlace tests", ()=> {
    it("should  <div class='emptyPlace'></div> rendered", ()=> {
        const wrapper = shallow(<EmptyPlace></EmptyPlace>);
        expect(wrapper.find(".emptyPlace").length).toEqual(1);
    })
})