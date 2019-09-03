import React, { Component } from "react";
import SimpleTrip from "../simpleTrip/SimpleTrip";
import Button from "../buttons/Button";
import styles from "./CompoundTrip.module.scss";
//TO DO PropTypes, Tests, MobileVersion after first code review

class CompoundTrip extends Component {
  render() {
    const {
      listTripInfo = [],
      priceWithDiscount,
      priceWithoutDiscount
    } = this.props;

    return (
      <div className={styles.route}>
        <div className={styles["route__description"]}>
          {listTripInfo &&
            listTripInfo.map(trip => (
              <SimpleTrip key={trip.id} tripInfo={trip} />
            ))}
        </div>
        <div className={styles["route__cost"]}>
          <div className={styles["route__cost-middle"]}>
            <div
              className={[
                styles["route__price"],
                styles["route__price--oldprice"]
              ].join(" ")}
            >
              {priceWithoutDiscount}
              <span>грн.</span>
            </div>
            <div className={styles["route__price"]}>
              {priceWithDiscount}
              <span>грн.</span>
            </div>
            <Button message="Выбрать" className={styles["btn-orange"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default CompoundTrip;
