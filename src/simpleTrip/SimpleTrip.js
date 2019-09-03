import React, { Component } from "react";
import Button from "../buttons/Button";
import Route from "../route/RouteList";
import routeData from "../route/testDataRoutes";
import styles from "./SimpleTrip.module.scss";
//TO DO PropTypes, Tests, MobileVersion after first code review

class SimpleTrip extends Component {
  constructor(props) {
    super(props);
    this.handleToggleExtend = this.handleToggleExtend.bind(this);
    this.state = { extended: false };
  }

  handleToggleExtend = () => {
    this.setState(prevState => ({ extended: !prevState.extended }));
  };

  render() {
    const { extended } = this.state;
    const { isDesktop = true, tripInfo } = this.props;
    const {
      carrierName,
      departure,
      arriving,
      travelTime,
      tripDetails,
      priceWithDiscount,
      thereWay
    } = tripInfo;

    const {
      time: departureTime,
      date: departureDate,
      city: departureCity,
      station: departureStation
    } = departure;

    const {
      time: arrivingTime,
      date: arrivingDate,
      city: arrivingCity,
      station: arrivingStation
    } = arriving;

    const { hours: travelTimeHours, minutes: travelTimeMinutes } = travelTime;

    const { generalInfo: tripGeneralInfo, type: tripType, bus } = tripDetails;

    return (
      <div className={styles["route__description"]}>
        <div className={styles["route__holder"]}>
          <div className={styles["route__header"]}>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--carrier"]
              ].join(" ")}
            >
              <div className={styles["route__inner-carrier"]}>
                <div
                  className={
                    thereWay
                      ? styles["route__carrier"]
                      : styles["route__carrier_back-way"]
                  }
                >
                  <span>Перевозчик</span>
                </div>
                <div className={styles["route__name"]}>{carrierName}</div>
              </div>
              {isDesktop && (
                <Button
                  message={extended ? "Свернуть" : "Подробнее"}
                  className={styles.primary}
                  handleClick={this.handleToggleExtend}
                />
              )}
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--departure"]
              ].join(" ")}
            >
              <div className={styles["route__time"]}>{departureTime}</div>
              <div className={styles["route__date"]}>{departureDate}</div>
              <div className={styles["route__city"]}>{departureCity}</div>
              <div className={styles["route__station"]}>{departureStation}</div>
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--arriving"]
              ].join(" ")}
            >
              <div className={styles["route__time"]}>{arrivingTime}</div>
              <div className={styles["route__date"]}>{arrivingDate}</div>
              <div className={styles["route__city"]}>{arrivingCity}</div>
              <div className={styles["route__station"]}>{arrivingStation}</div>
            </div>
            <div
              className={[
                styles["route__inner"],
                styles["route__inner--travel-time"]
              ].join(" ")}
            >
              <div className={styles["route__time"]}>
                {travelTimeHours}
                <span>ч.</span>
                <span>
                  <strong>{travelTimeMinutes}</strong>
                  мин.
                </span>
              </div>
            </div>
            {!isDesktop && (
              <div
                className={[
                  styles["route__inner"],
                  styles["route__inner--price"]
                ].join(" ")}
              >
                <div className={styles["btn-orange-border"]}>
                  <strong>{priceWithDiscount}</strong>
                  грн.
                </div>
              </div>
            )}
          </div>
          {extended && (
            <div className={styles["route__body"]}>
              <div className={styles["route__information"]}>
                <div className={styles["route__information-item"]}>
                  <span>Рейс:</span>
                  {tripGeneralInfo}
                </div>
                <div className={styles["route__information-item"]}>
                  <span>Тип рейса:</span>
                  {tripType}
                </div>
                <div className={styles["route__information-item"]}>
                  <span>Автобус:</span>
                  {bus}
                </div>
              </div>
              <div className={styles["route__schedule"]}>
                <Route listRoute={routeData} fullView={true}></Route>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SimpleTrip;
