import React from 'react';
import RouteItem from '../RouteItem';
import RouteList from '../RouteList';
import { shallow } from 'enzyme';
import mockDataListRoute from '../testDataRoutes';

describe("Route tests", ()=> {
    describe("Route Item tests", ()=> {
        const props = {
            routeSheduleTime : "12:30", 
            routeSheduleDescriptionTitle: "Київ",
            routeSheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            isActive: true
        };

        let wrapper;
        beforeEach(()=> {
            wrapper = shallow(<RouteItem {...props}/>);
        })

        it('should contain routeSheduleTime="12:30"', ()=> {
            expect(wrapper.find('.route__schedule-time').contains(props.routeSheduleTime)).toEqual(true);
        });

        it('should contain routeDescriptionText', ()=> {
            expect(wrapper.find('.route__schedule-description').contains(props.routeSheduleDescriptionText)).toEqual(true);
        });

        it('should contain routeSheduleDescriptionTitle="Київ"', ()=> {
            expect(wrapper.find('.route__schedule-description').contains(props.routeSheduleDescriptionTitle)).toEqual(true);
        });

        it('should contain class="is-active" if  prop isActive=true', ()=> {
            expect(wrapper.find('.is-active').length).toEqual(1)
        });
    });

    describe("Route List tests", ()=> {
        it("should not render any RouteItem if listRoute empty", ()=> {
            const wrapper = shallow(<RouteList fullView listRoute={[]}></RouteList>);
            expect(wrapper.find(RouteItem).length).toEqual(0)
        });

        it("should not render RouteList if listRoute is undefined", ()=> {
            const wrapper = shallow(<RouteList fullView={true}></RouteList>);
            expect(wrapper.find(RouteItem).length).toEqual(0)
        });

        it("should render only 2 RouteItem if fullView=true", ()=> {
            const wrapper = shallow(<RouteList listRoute={mockDataListRoute} fullView={true} ></RouteList>);
            expect(wrapper.find(RouteItem).length).toEqual(2)
        });

        it(`should render ${mockDataListRoute.length} (listRoute.length)  RouteItems if fullView=false, means - all the listRoute array `, 
            ()=> {
                const wrapper = shallow(<RouteList listRoute={mockDataListRoute} fullView={false} ></RouteList>);
                expect(wrapper.find(RouteItem).length).toEqual(mockDataListRoute.length)
        });
    })
})