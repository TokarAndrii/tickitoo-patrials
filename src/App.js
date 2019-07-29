import React from "react";
import Seat from "./seat/Seat";
import styles from "./App.module.sass";
import testRouteData from './route/testDataRoutes';
import RouteList from './route/RouteList';

function App() {
  return (
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
        <RouteList listRoute={testRouteData} fullView></RouteList>

      </div>

      <br></br>
      <br></br>
      <div>
        <RouteList listRoute={testRouteData} ></RouteList>
      </div>


    </div>
  );
}

export default App;
