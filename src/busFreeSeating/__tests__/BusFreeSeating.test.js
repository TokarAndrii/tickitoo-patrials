import React from 'react';
import {shallow} from 'enzyme';
import BusFreeSeating from '../BusFreeSeating';
import Button from '../../buttons/Button';

describe("BusFreeSeating tests", ()=> {
    const props = {
        objectInfo: {
            fromCity: "Киев",
            toCity: "Варшава",
            dateTrip: "среда, 28 ноября",
            nameBus: "Hyndai Universe Bus",
            seatsQty: 15
        }
    }
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<BusFreeSeating {...props}/>);
    });

    it(`should render <span class='tripRoute'> with ${props.objectInfo.fromCity} - ${props.objectInfo.toCity}`, ()=>{
        expect(wrapper.find(".tripRoute").contains(props.objectInfo.fromCity)).toEqual(true);
        expect(wrapper.find(".tripRoute").contains(props.objectInfo.toCity)).toEqual(true);
    });

    it(`should render <span class='dateTrip'> with ${props.objectInfo.dateTrip}`, ()=>{
        expect(wrapper.find(".dateTrip").contains(props.objectInfo.dateTrip)).toEqual(true);
    });

    it(`should render <p class='busName'> with ${props.objectInfo.nameBus}`, ()=>{
        expect(wrapper.find(".busName").contains(props.objectInfo.nameBus)).toEqual(true);
    });

    it(`should render <p class='seatsQuantityMessage'> with ${props.objectInfo.seatsQty}`, ()=>{
        expect(wrapper.find(".seatsQuantityMessage strong").contains(props.objectInfo.seatsQty)).toEqual(true);
    });

    it(`should render Button inside BusFreeSeating`, ()=>{
        expect(wrapper.find(Button).length).toBe(1);
    });

});
