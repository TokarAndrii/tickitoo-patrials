import React from 'react';
import EmptyPlace from '../EmptyPlace';
import { shallow } from 'enzyme';

describe("EmptyPlace tests", ()=> {
    it("shoul be only one <div></div> rendered", ()=> {
        const wrapper = shallow(<EmptyPlace></EmptyPlace>);
        expect(wrapper.length).toEqual(1);
    })
})