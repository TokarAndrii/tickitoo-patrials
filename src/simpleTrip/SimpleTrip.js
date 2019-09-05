import React, { Component, createRef } from "react";
import Button from "../buttons/Button";
import Route from "../route/RouteList";
import routeData from "../route/testDataRoutes";
import styles from "./SimpleTrip.module.scss";
//TO DO PropTypes, Tests, MobileVersion after first code review

class SimpleTrip extends Component {
  constructor(props) {
    super(props);
    this.state = { extended: false, showRouteDetails: true };
    this.handleToggleExtend = this.handleToggleExtend.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  headerRef = createRef();

  handleToggleExtend = () => {
    const { isDesktop } = this.props;
    if (isDesktop) {
      this.setState(prevState => ({ extended: !prevState.extended }));
    }
    if (!isDesktop) {
      this.setState(prevState => ({
        extended: !prevState.extended,
        showRouteDetails: false
      }));
    }
  };

  handleToggleShowRoute = () => {
    this.setState(prevState => ({
      showRouteDetails: !prevState.showRouteDetails
    }));
  };

  handleHeaderClick = e => {
    const { isDesktop } = this.props;
    if (this.headerRef.current) {
      const isTargetInsideContainer = this.headerRef.current.contains(e.target);

      if (isTargetInsideContainer && !isDesktop) {
        this.handleToggleExtend();
      }
    }
  };

  componentDidMount() {
    const { isDesktop } = this.props;
    if (!isDesktop) {
      window.addEventListener("click", this.handleHeaderClick);
    }
  }

  componentWillMount() {
    const { isDesktop } = this.props;
    if (!isDesktop) window.removeEventListener("click", this.handleHeaderClick);
  }

  render() {
    const { extended, showRouteDetails } = this.state;
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
      departureTime,
      departureDate,
      departureCity,
      departureStation
    } = departure;

    const {
      arrivingTime,
      arrivingDate,
      arrivingCity,
      arrivingStation
    } = arriving;

    const { hours: travelTimeHours, minutes: travelTimeMinutes } = travelTime;

    const { generalInfo: tripGeneralInfo, type: tripType, bus } = tripDetails;

    return (
      <div className={styles["route__description"]}>
        <div className={styles["route__holder"]}>
          <div className={styles["route__header"]} ref={this.headerRef}>
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
                  className={styles.secondary}
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
                {!extended && !isDesktop && (
                  <div className={styles["btn-orange-border"]}>
                    <strong>{priceWithDiscount}</strong>
                    грн.
                  </div>
                )}
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
              {!isDesktop && (
                <Button
                  message="Показать маршрут"
                  className={[styles.secondary, styles.wideButton].join(" ")}
                  handleClick={this.handleToggleShowRoute}
                />
              )}

              {showRouteDetails && (
                <div className={styles["route__schedule"]}>
                  <Route listRoute={routeData} fullView={true}></Route>
                </div>
              )}
              {!isDesktop && (
                <div className={styles["route__bottom"]}>
                  <div className={styles["route__bottom-price"]}>
                    <p>Стоимость за 1 пассажира:</p>
                    <strong>
                      {priceWithDiscount}
                      <span>грн.</span>
                    </strong>
                  </div>
                  <Button
                    className={[styles.primary, styles.wideButtonPrimary].join(
                      " "
                    )}
                    message="Выбрать места"
                  ></Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SimpleTrip;
