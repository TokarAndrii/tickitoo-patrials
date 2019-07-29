import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Seat.module.sass";

const Seat = ({ seatNumber, isFree, handleChoseSeat }) => {
  const [chosen, setChosen] = useState(false);

  const toogleChosen = () => {
    isFree && setChosen(prevState => !prevState);
  };
  const handleClickSeat = () => {
    toogleChosen();
    handleChoseSeat();
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
  seatNumber: PropTypes.number,
  isFree: PropTypes.bool.isRequired,
  handleChoseSeat: PropTypes.func.isRequired
};

Seat.defaultProps = {
  seatNumber: "",
}



export default Seat;

// Description: Создать функциональный компонент который будет отображать место пассажира в автобусе с подсветкой по статусу.
// Место может быть свободным, забронированным, выбранным. https://take.ms/Fg0bd
// Место на схеме - это квадрат с округлыми в 5 px углами и шириной/высотой в 32 px. Расстояние между квадратами - 5 px.
// Серым #e4e3e3 отмечены занятое места, оно не реагируют на наведение курсора.
// При наведении на свободное место, оно подсвечиваются голубым #dcf1f7
// При нажатии на свободное место, оно закрашивается синим #0691b5
// Props:

// number
// bool
// function

// Props Description: В пропсах будет:

// Номер места
// Флаг свободно/занято
// Родительская функция для смены состояния места на выбранное.

// Props Source:
// От родительского компонента.
// CSS specs: Используем SASS/SCSS из предоставленной верстки переформатировать в SASS
