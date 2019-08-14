import React from 'react';
import {shallow} from 'enzyme';
import ThankYou from '../ThankYou';

const props = {
    email: "email",
    title: "title",
    textAboutDownLoad: "textAboutDownLoad",
    downloadBtnMessage: "downloadBtnMessage",
    textAboutSendToMail: "textAboutSendToMail",
    textAboutPrintTickets: "textAboutPrintTickets",
    textAboutThank: "textAboutThank",
    backWaysBtnMessage: "backWaysBtnMessage",
    showbackWaysBtn: true,
};

describe("ThankYou tests", ()=> {

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<ThankYou {...props}/>);
    });

    it("should render button with backWaysBtnMessage if showbackWaysBtn=true", ()=> {
        expect(wrapper.find("button.secondary").length).toEqual(0);
    });

    it(`should render <strong>${props.title}</strong>`, ()=> {
        expect(wrapper.find("strong").text()).toEqual(props.title);
    });

    it("should render button with downloadBtnMessage ", ()=> {
        expect(wrapper.find("button.primary").length).toEqual(0);
    });

    it(`should render <p>${props.textAboutDownLoad}</p> `, ()=> {
        expect(wrapper.find("strong + p").text()).toEqual(props.textAboutDownLoad);
    });

    it("should render two tags <p></p> ", ()=> {
        expect(wrapper.find("p").length).toEqual(2);
    });

});


it("should render button with backWaysBtnMessage if showbackWaysBtn=false", ()=> {
    const newProps = {...props, showbackWaysBtn : false };
    const wrapper = shallow(<ThankYou {...newProps} />)
    expect(wrapper.find("button.secondary").length).toEqual(0);
});


