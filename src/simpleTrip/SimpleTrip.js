import React, { Component } from "react";
import Button from "../buttons/Button";
import styles from "./SimpleTrip.module.scss";

class SimpleTrip extends Component {
  state = {
    extended: false
  };

  handleToggleExtend = () => {
    this.setState(prevState => ({ extended: prevState.extended }));
  };

  render() {
    const { extended } = this.state;
    const { thereWay, isDesktop, tripInfo } = this.props;
    return (
      <div className={styles["route__description"]}>
        <div className={styles["route__holder"]}>
          <div className={[styles["route__header"], styles["open"]].join(" ")}>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--carrier"]
              ].join(" ")}
            >
              <div className={styles["route__inner-carrier"]}>
                <div className={styles["route__carrier"]}>
                  <span>Перевозчик</span>
                </div>
                <div className={styles["route__name"]}>"LEON POL TRANS"</div>
              </div>
              <Button message="Подробнее" className={styles.primary} />
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--departure"]
              ].join(" ")}
            >
              <div className={styles["route__time"]}>16:30</div>
              <div className={styles["route__date"]}>среда, 28 ноября</div>
              <div className={styles["route__city"]}>Киев</div>
              <div className={styles["route__station"]}>
                Автовокзал "Центральный"
              </div>
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--arriving"]
              ].join(" ")}
            >
              <div className={styles["route__time"]}>16:30</div>
              <div className={styles["route__date"]}>среда, 28 ноября</div>
              <div className={styles["route__city"]}>Киев</div>
              <div className={styles["route__station"]}>
                Автовокзал "Центральный"
              </div>
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--travel-time"]
              ].join(" ")}
            ></div>
          </div>
          {extended && <div className={styles["route__body"]}>route__body</div>}
        </div>
      </div>
    );
  }
}

export default SimpleTrip;
