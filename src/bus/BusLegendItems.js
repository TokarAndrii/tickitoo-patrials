import React from "react";
import styles from "./BusLegendItem.module.scss";

const BusLegendItems = function() {
  return (
    <div className={styles.busLegendItems}>
      <div className={styles.busLegendItemHolder}>
        <div
          className={[styles.seatTypeHolder, styles.seatTypeFree].join(" ")}
        />
        <p> - свободно</p>
      </div>
      <div className={styles.busLegendItemHolder}>
        <div
          className={[styles.seatTypeHolder, styles.seatTypeBusy].join(" ")}
        />
        <p> - занято</p>
      </div>
      <div className={styles.busLegendItemHolder}>
        <div
          className={[styles.seatTypeHolder, styles.seatTypeTaken].join(" ")}
        />
        <p> - выбрано</p>
      </div>
    </div>
  );
};

export default BusLegendItems;
