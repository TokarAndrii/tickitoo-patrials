import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../Footer';


describe("Footer tests", ()=> {
    let wrapper;
    const copiright = "&copy; 2018-2019 Tickitoo. Все права защищены.";

    beforeEach(()=> {
        wrapper = shallow(<Footer copirightText={copiright}></Footer>);
    })

    it('should contains copirightText at <div class="footer__copyright"></div> ', ()=> {
        expect(wrapper.find('.footer__copyright').contains(copiright)).toEqual(true)
    });

    it('should contains 2 <img> tags ', ()=> {
        expect(wrapper.find('img')).toHaveLength(2)
    });

    it('should contains 1 <img> tags with class="footer__payments-mc" ', ()=> {
        expect(wrapper.find('img.footer__payments-mc')).toHaveLength(1)
    });

    it('should contains 1 <img> tags with class="footer__payments-vs" ', ()=> {
        expect(wrapper.find('img.footer__payments-vs')).toHaveLength(1)
    });

})