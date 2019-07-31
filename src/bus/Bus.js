import React, { Component } from "react";
import Seat from "../seat/Seat";
import BusLegendItems from "./BusLegendItems";
import styles from "./Bus.module.sass";

class Bus extends Component {
  render() {
    const { seatsList, title, busName } = this.props;

    return (
      <div className={styles.busHolder}>
        <h3>{title}</h3>
        <div className={styles.bus}>
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </div>
        <div className={styles.busInfoHolder}>
          <p className={styles.busName}>{busName}</p>
          <BusLegendItems />
        </div>
      </div>
    );
  }
}

export default Bus;
