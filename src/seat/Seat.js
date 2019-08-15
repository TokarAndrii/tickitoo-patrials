import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Seat.module.scss";

const Seat = function({ seatNumber, isFree, handleChooseSeat }) {
  const [chosen, setChosen] = useState(false);

  const toogleChosen = () => {
    isFree && setChosen(prevState => !prevState);
  };
  const handleClickSeat = () => {
    toogleChosen();
    handleChooseSeat();
  };

  return (
    <div
      className={[
        isFree ? styles.seat : styles.seatBusy,
        chosen ? styles.chosenSeat : null
      ].join(" ")}
      onClick={handleClickSeat}
    >
      {seatNumber}
    </div>
  );
};

Seat.propTypes = {
  seatNumber: PropTypes.string,
  isFree: PropTypes.bool.isRequired,
  handleChooseSeat: PropTypes.func.isRequired
};

Seat.defaultProps = {
  seatNumber: ""
};

export default Seat;
