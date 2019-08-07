import React from 'react';
import {shallow} from 'enzyme';
import HeaderLanguageSelector from '../HeaderLanguageSelector';


const lng = "Рус";
const lng2 = "Укр";


describe("LanguageSelector tests", ()=> {
    it("should not render <div class='languages-list' if showLanguagesList=false></div>", ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>)
        expect(wrapper.find(".languages-list").length).toBe(0);
    });

    it("should render <div class='languages-list'></div> if showLanguagesList=true ", ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({showLanguagesList: true})
        expect(wrapper.find(".languages-list").length).toBe(1);
    });

    it(`should render <div class='visible-holder'> with language - ${lng}`, ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({language: lng});
        wrapper.update();
        expect(wrapper.find(".visible-holder").contains(lng)).toEqual(true);
    });

    
    it(`should not render <div class='visible-holder'> with language - ${lng2}`, ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({language: lng});
        wrapper.update();
        expect(wrapper.find(".visible-holder").contains(lng2)).toEqual(false);
    });

    it(`should render <img  class='angleUp'> with  showLanguagesList=true`, ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({showLanguagesList: true});
        wrapper.update();
        expect(wrapper.find("img.angleUp").length).toEqual(1);
    });

    it(`should not render <img  class='angleDown'> with showLanguagesList=true`, ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({showLanguagesList: true});
        wrapper.update();
        expect(wrapper.find("img.angleDown").length).toEqual(0);
    });

    it(`should not render <img  class='angleDown'> with  showLanguagesList=false`, ()=> {
        const wrapper = shallow(<HeaderLanguageSelector/>);
        wrapper.setState({showLanguagesList: false});
        wrapper.update();
        expect(wrapper.find("img.angleDown").length).toEqual(1);
    });
})

