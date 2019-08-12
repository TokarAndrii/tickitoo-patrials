import React from "react";
import Button from "../buttons/Button";
import PropTypes from 'prop-types';
import styles from "./BusFreeSeating.module.scss";

const BusFreeSeating = function({
  objectInfo: { fromCity, toCity, dateTrip, nameBus, seatsQty }
}) {
  return (
    <div className={styles.holder}>
      <div className={styles.content}>
        <div className={styles["holder_top_row"]}>
          <span className={styles.tripRoute}>
            {fromCity}- {toCity}
          </span>
          <span className={styles.dateTrip}>( {dateTrip})</span>
          <span className={styles.stepNumerationHolder}>Шаг 1/3</span>
          <p className={styles.busName}>Автобус: {nameBus}</p>
        </div>
        <div className={styles["holder_bottom_row"]}>
          <p className={styles.seatsQuantityMessage}>
            На рейсе осталось
            <strong>
              {seatsQty}
              <span>мест</span>
            </strong>
          </p>
          <p>
            Этот перевозчик не дает возможности выбора мест при покупке билетов.
          </p>
          <p>
            Пожалуйста, приходите на посадку заранее, чтобы занять лучшие места.
          </p>
          <Button
            message="Далее"
            className={styles.primary}
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};

BusFreeSeating.propTypes = {
  objectInfo: PropTypes.shape({
    fromCity: PropTypes.string.isRequired,
    toCity: PropTypes.string.isRequired,
    dateTrip: PropTypes.string.isRequired,
    nameBus: PropTypes.string.isRequired,
    seatsQty: PropTypes.number.isRequired,
  }).isRequired
}

export default BusFreeSeating;
