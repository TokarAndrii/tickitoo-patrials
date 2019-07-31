import React from "react";
import Seat from "./seat/Seat";
import styles from "./App.module.sass";
import testRouteData from "./route/testDataRoutes";
import RouteList from "./route/RouteList";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Bus from "./bus/Bus";

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
          <Seat seatNumber={32} isFree handleChoseSeat={() => null} />
          <Seat seatNumber={33} isFree handleChoseSeat={() => null} />
          <Seat seatNumber={34} isFree={false} handleChoseSeat={() => null} />
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
        />
      </div>
      <Footer copirightText="&copy; 2018-2019 Tickitoo. Все права защищены." />
    </>
  );
}

export default App;
