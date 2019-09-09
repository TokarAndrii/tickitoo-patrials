import React, { Component } from "react";
import PropTypes from "prop-types";
import SimpleTrip from "../simpleTrip/SimpleTrip";
import Button from "../buttons/Button";
import styles from "./CompoundTrip.module.scss";

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
              <SimpleTrip key={trip.id} tripInfo={trip} isDesktop={false} />
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
            <Button message="Выбрать" className={styles["primary"]} />
          </div>
        </div>
      </div>
    );
  }
}

CompoundTrip.propTypes = {
  listTripInfo: PropTypes.array.isRequired,
  priceWithDiscount: PropTypes.number.isRequired,
  priceWithoutDiscount: PropTypes.number.isRequired
};

export default CompoundTrip;
