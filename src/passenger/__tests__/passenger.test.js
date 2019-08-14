import React from 'react';
import {shallow} from 'enzyme';
import Passenger from '../Passenger';

describe("Passenger tests", ()=> {
    const props = {
        seatMessage: "testMessage",
        objectInfo: {
            fullName: "testName",
            seatNumber: "testNumber",
            ageCategory: "testAgeCategory",
            document: "testDocument",
        }
    }
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Passenger {...props}/>)
    })

    it("should render <div class='payment-data__info-item'></div>", ()=> {
        expect(wrapper.find(".payment-data__info-item").length).toBe(1);
    });

    it(`should render fullName - ${props.objectInfo.fullName}`, ()=> {
        expect(wrapper.find("strong").prop("children")).toEqual(props.objectInfo.fullName);
    });

    it(`should render <p></p> 
        with text:  ${props.seatMessage} ${props.objectInfo.seatNumber}, ${props.objectInfo.ageCategory}, ${props.objectInfo.document}`, 
    ()=> {
        expect(wrapper.find("p").text())
        .toEqual(`${props.seatMessage} ${props.objectInfo.seatNumber}, ${props.objectInfo.ageCategory}, ${props.objectInfo.document}`);
    });
});
