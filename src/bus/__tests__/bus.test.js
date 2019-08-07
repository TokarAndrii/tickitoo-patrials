import React from 'react';
import {shallow} from 'enzyme';
import Bus from '../Bus';
import utils from '../../utils/index';
import busListMockData from '../bigBusMockData';
import Seat from '../../seat/Seat';
import EmptyPlace from '../../not_seat/EmptyPlace';
import BusLegendItems from '../BusLegendItems';

const { maps_seat } = busListMockData;
const [first_element] = maps_seat;
const { map_seat } = first_element;
const sortedArray = utils.sortArray(map_seat);
const chunkedArray = utils.arrayTransform(sortedArray);

describe("Bus tests", ()=> {
    it("should not render Bus if no seatsList prop", ()=> {
        const wrapper = shallow(<Bus></Bus>);
        expect(wrapper.find(".busHolder").length).toEqual(0)
    });

    it("should not render BusItems if no seatsList=[]", ()=> {
        const wrapper = shallow(<Bus seatsList={[]}></Bus>);
        expect(wrapper.find(".busHolder").length).toEqual(0)
    });

    describe("shoul render with seatsList props", ()=> {
        let wrapper;
        const titleText = "Выберите место на схеме автобуса";
        const bus = "Hyndai Universe Bus";
        beforeEach(()=> {
            wrapper = shallow(
            <Bus 
                title={titleText} 
                seatsList={chunkedArray}
                busName={bus}
            ></Bus>);
        })
        it(`should contains <div class="busSalonPassenger"></div>`, ()=> {     
            expect(wrapper.find(".busSalonPassenger").length).toEqual(1);
        });

        it(`should contains title =  ${titleText}`, ()=> {     
            expect(wrapper.find(".busHolder").contains(titleText)).toEqual(true);
        });

        it(`should contains bus name =  ${bus}`, ()=> {     
            expect(wrapper.find(".busName").contains(bus)).toEqual(true);
        });

        it(`should contains BusLegendItems`, ()=> {     
            expect(wrapper.find(BusLegendItems).length).toEqual(1);
        });

    });

    describe("should render right component Seat or EmptyPlace", ()=> {
        let wrapper;
        beforeEach(()=> {
            wrapper = shallow(
                <Bus 
                    seatsList={[
                        [{id: "5290141811",
                        num: "В1",
                        seat_type: "1",
                        status: "1",
                        tariffs: ["Y"],
                        x: 0,
                        y: 0,
                        z: 0}]
                    ]}
                />
            );
        });

        it(`should render Seat if seat type=1`, ()=> {
            expect(wrapper.find(Seat).length).toEqual(1);
        });
        it(`should not render EmptyPlace if seat type=1`, ()=> {
            expect(wrapper.find(EmptyPlace).length).toEqual(0);
        });
    });




    it(`should render 1 Seat and 1 EmptyPlace`, ()=> {
        const wrapper = shallow(
            <Bus 
                seatsList={[
                    [
                        {id: "5290141811",
                            num: "В1",
                            seat_type: "1",
                            status: "1",
                            tariffs: ["Y"],
                            x: 0,
                            y: 0,
                            z: 0}, 
                        {id: "5290141811",
                            num: "В1",
                            seat_type: "0",
                            status: "1",
                            tariffs: ["Y"],
                            x: 0,
                            y: 0,
                            z: 0}, 
                    ]
                ]}
            />
        )
        expect(wrapper.find(Seat).length).toEqual(1);
        expect(wrapper.find(EmptyPlace).length).toEqual(1);
    });

})

