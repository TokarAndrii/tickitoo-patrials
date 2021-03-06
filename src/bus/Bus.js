import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Seat from "../seat/Seat";
import EmptyPlace from "../not_seat/EmptyPlace";
import BusLegendItems from "./BusLegendItems";
import seatTypesEnum from "../seat/seat_types_enumeration";
import seatStatusEnum from "../seat/seat_status_enumerations";
import steeringWheelIcon from "./steering-wheel.svg";
import styles from "./Bus.module.scss";

//seatsList - needs to transform props using utils function - busUtils
class Bus extends Component {
  render() {
    const { seatsList, title, busName } = this.props;

    return (
      <Fragment>
        {seatsList && seatsList.length > 0 && (
          <div className={styles.busHolder}>
            <h3>{title}</h3>
            <div className={styles.bus}>
              <div className={styles.busDriversCab}>
                <img
                  src={steeringWheelIcon}
                  alt="steering wheel"
                  width="32px"
                  height="32px"
                  className={styles["steeringWheel"]}
                />
              </div>
              <div className={styles.busSalonPassenger}>
                {seatsList.map((row, index) => {
                  return (
                    <div className={styles.seatsRow} key={index}>
                      {row.map(seat => {
                        return (
                          <div key={seat.id}>
                            {seat.seat_type === seatTypesEnum.emptyPlace && (
                              <EmptyPlace />
                            )}
                            {seat.seat_type !== seatTypesEnum.emptyPlace && (
                              <Seat
                                isFree={seat.status === seatStatusEnum.freeSeat}
                                handleChooseSeat={() => null}
                                seatNumber={seat.num}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.busInfoHolder}>
              <p className={styles.busName}>Автобус {busName}</p>
              <div className={styles.busLegendItemsHolder}>
                <BusLegendItems />
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

Bus.propTypes = {
  title: PropTypes.string.isRequired,
  busName: PropTypes.string.isRequired,
  seatsList: PropTypes.array.isRequired
};

export default Bus;
