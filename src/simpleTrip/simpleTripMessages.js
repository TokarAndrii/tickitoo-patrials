import { defineMessages } from "react-intl";

const simpleTripMessages = defineMessages({
  carrier: {
    id: "simpleTrip.simpleTripMessages.carrierSimpleTripMessage",
    description: "text before carrier name",
    defaultMessage: "Перевозчик"
  },
  showDetailsButtonText: {
    id: "simpleTrip.simpleTripMessages.showDetailsButtonTextMessage",
    description: "text at button show details of trip",
    defaultMessage: "Подробнее"
  },
  hideDetailsButtonText: {
    id: "simpleTrip.simpleTripMessages.hideDetailsButtonTextMessage",
    description: "text at button hide details of trip",
    defaultMessage: "Свернуть"
  },
  tripGeneralInfo: {
    id: "simpleTrip.simpleTripMessages.tripGeneralInfoMessage",
    description:
      "text at block about trip before - number, date, time, cities from and to, destinations",
    defaultMessage: "Рейс:"
  },
  tripType: {
    id: "simpleTrip.simpleTripMessages.tripTypeMessage",
    description: "text at block about trip before - type of trip",
    defaultMessage: "Тип рейса:"
  },
  bus: {
    id: "simpleTrip.simpleTripMessages.busMessage",
    description: "text at block about trip before - bus name",
    defaultMessage: "Автобус:"
  }
});

export default simpleTripMessages;
