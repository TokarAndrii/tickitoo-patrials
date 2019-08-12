import { defineMessages } from "react-intl";

const busFreeSeatingMessages = defineMessages({
  busName: {
    id: "busFreeSeating.busFreeSeatingMessages.busNameMessage",
    description: "text at bus defore bus name",
    defaultMessage: "Автобус"
  },

  seatsLeft: {
    id: "busFreeSeating.busFreeSeatingMessages.seatsLeftMessage",
    description: "text at <p> seatsQuantityMessage about seats left before qty seats",
    defaultMessage: "На рейсе осталось"
  },

  freeSeating: {
    id: "busFreeSeating.busFreeSeatingMessages.freeSeatingMessage",
    description: "text at <p> about free seating",
    defaultMessage: "Этот перевозчик не дает возможности выбора мест при покупке билетов."
  },

  comeInAdvanceBeforeTrip: {
    id: "busFreeSeating.busFreeSeatingMessages.comeInAdvanceBeforeTripMessage",
    description: "text at <p> about come in advance before trip ",
    defaultMessage: "Пожалуйста, приходите на посадку заранее, чтобы занять лучшие места."
  },

  seat: {
    id: "busFreeSeating.busFreeSeatingMessages.seatMessage",
    description: "text at <p> seatsQuantityMessage about seats left after qty seats",
    defaultMessage: "мест"
  },

  stepCount: {
    id: "busFreeSeating.busFreeSeatingMessages.stepCountMessage",
    description: "text about steps numeration",
    defaultMessage: "Шаг 1/3"
  },

  buttonNext: {
    id: "busFreeSeating.busFreeSeatingMessages.buttonNextMessage",
    description: "text at <button> next",
    defaultMessage: "Далее"
  },

});

export default busFreeSeatingMessages;
