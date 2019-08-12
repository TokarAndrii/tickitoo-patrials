import React from 'react';
import RouteItem from '../RouteItem';
import { shallow } from 'enzyme';


describe("Route Item tests", ()=> {
    const props = {
        routeScheduleTime : "12:30", 
        routeScheduleDescriptionTitle: "Київ",
        routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
        isActive: true
    };

    let wrapper;
    beforeEach(()=> {
         wrapper = shallow(<RouteItem {...props}/>);
    })

    it('should contain routeScheduleTime="12:30"', ()=> {
        expect(wrapper.find('.route__schedule-time').contains(props.routeScheduleTime)).toEqual(true);
    });

    it('should contain routeDescriptionText', ()=> {
        expect(wrapper.find('.route__schedule-description').contains(props.routeScheduleDescriptionText)).toEqual(true);
    });

    it('should contain routeScheduleDescriptionTitle="Київ"', ()=> {
        expect(wrapper.find('.route__schedule-description').contains(props.routeScheduleDescriptionTitle)).toEqual(true);
    });

    it('should contain class="is-active" if  prop isActive=true', ()=> {
        expect(wrapper.find('.is-active').length).toEqual(1)
    });
});

    