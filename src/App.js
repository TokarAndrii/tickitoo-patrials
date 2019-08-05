import React, { Component } from "react";
import styles from "./App.module.sass";
import testRouteData from "./route/testDataRoutes";
import RouteList from "./route/RouteList";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Bus from "./bus/Bus";
import Button from './buttons/Button';
import ButtonBack from './buttons/ButtonBack';
//import smallBusMockData from "./bus/mockDataSeatsCart2";
import bigBusMockData from "./bus/bigBusMockData";
import utils from "./utils/index";

//some stuff to get array from income request
//const { maps_seat } = mockDataSeats2;

const { maps_seat } = bigBusMockData;
const [first_element] = maps_seat;
const { map_seat } = first_element;
const sortedArray = utils.sortArray(map_seat);
const chunkedArray = utils.arrayTransform(sortedArray);

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.app}>
          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          />

          <div>
            <RouteList listRoute={testRouteData} fullView={true} />
          </div>

          <br />
          <br />
          <div>
            <RouteList listRoute={testRouteData} fullView={false} />
          </div>
        </div>
        <div style={{ marginTop: "300px" }} />

        <ButtonBack 
          className={styles.buttonBack} 
          message="назад"
          linkTo="/"
        />
        
        <div
          style={{
            margin: "24px 0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Button 
            message="button primary"
            className={styles.primary}
          />          
          <Button 
          message="button secondary"
          className={styles.secondary}
          />     
         </div>

        {/* some bus holder */}
        <div
          style={{
            margin: "24px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          
          <Bus
            title="Выберите место на схеме автобуса"
            busName="Hyndai Universe Bus"
            seatsList={chunkedArray}
          />
        </div>
        <Footer copirightText="&copy; 2018-2019 Tickitoo. Все права защищены." />
      </>
    );
  }
}

export default App;
