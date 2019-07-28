import React from "react";
import Seat from "./seat/Seat";
import RouteItem from "./route/RouteItem";
import styles from "./App.module.sass";

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
        <Seat seatNumber={33} isFree={false} handleChoseSeat={() => null} />
      </div>

      <div>
        <RouteItem
          routeSheduleTime="16:33"
          routeSheduleDescriptionTitle="Киев"
          routeSheduleDescriptionText={`Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2`}
        />
        <RouteItem
          routeSheduleTime="16:43"
          routeSheduleDescriptionTitle="Одесса"
          routeSheduleDescriptionText={`Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2`}
        />
      </div>
    </div>
  );
}

export default App;
