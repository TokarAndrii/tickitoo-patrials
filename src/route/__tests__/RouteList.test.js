import React from 'react';
import RouteItem from '../RouteItem';
import RouteList from '../RouteList';
import { shallow } from 'enzyme';
import mockDataListRoute from '../testDataRoutes';


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
        const wrapper = shallow(<RouteList listRoute={mockDataListRoute} fullView={false} ></RouteList>);
        expect(wrapper.find(RouteItem).length).toEqual(2)
    });

    it(`should render ${mockDataListRoute.length} (listRoute.length)  RouteItems if fullView=false, means - all the listRoute array `, 
        ()=> {
            const wrapper = shallow(<RouteList listRoute={mockDataListRoute} fullView={true} ></RouteList>);
            expect(wrapper.find(RouteItem).length).toEqual(mockDataListRoute.length)
    });
})