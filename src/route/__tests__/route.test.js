import React from 'react';
import RouteItem from '../RouteItem';
import RouteList from '../RouteList';
import { shallow } from 'enzyme';
import mockDataListRoute from '../testDataRoutes';

describe("Route tests", ()=> {
    describe("Route Item tests", ()=> {
        const time = "12:30";
        const descriptionText = 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2';
        const title = "Київ";
        let wrapper;
        beforeEach(()=> {
            wrapper = shallow(<RouteItem 
                isActive 
                routeSheduleTime={time}
                routeSheduleDescriptionText={descriptionText}
                routeSheduleDescriptionTitle={title}
            ></RouteItem>);
        })

        it('should contain routeSheduleTime="12:30"', ()=> {
            expect(wrapper.find('.route__schedule-time').contains(time)).toEqual(true)
        });

        it('should contain routeDescriptionText', ()=> {
            expect(wrapper.find('.route__schedule-description').contains(descriptionText)).toEqual(true)
        });

        it('should contain routeSheduleDescriptionTitle="Київ"', ()=> {
            expect(wrapper.find('.route__schedule-description').contains(title)).toEqual(true)
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