import React from "react";
import styles from "./App.module.sass";
import testRouteData from "./route/testDataRoutes";
import RouteList from "./route/RouteList";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Bus from "./bus/Bus";
import mockDataSeats from "./bus/mockDataSeatsCart";


//some stuff to get array from income request
const {maps_seat} = mockDataSeats;
const [first_element ] = maps_seat;
const {map_seat} = first_element;



function App() {
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
        >
        </div>

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
          busName="Автобус Hyndai Universe Bus"
          seatsList={map_seat}
        />
      </div>
      <Footer copirightText="&copy; 2018-2019 Tickitoo. Все права защищены." />
    </>
  );
}

export default App;
