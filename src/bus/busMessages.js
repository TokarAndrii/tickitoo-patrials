import { defineMessages } from "react-intl";

// react-intl messages for bus component and busLegendItem which inside bus
const busMessages = defineMessages({
  busTitle: {
    id: "bus.busMessages.busTitleMessage",
    description: "text at bus at <h3></h3>",
    defaultMessage: "Выберите место на схеме автобуса"
  },
  busName: {
    id: "bus.busMessages.busNameMessage",
    description: "text at bus defore bus name",
    defaultMessage: "Автобус"
  },
  busLegendItemFree: {
    id: "bus.busMessages.busLegendItemFreeMessage",
    description: "text at bus legend (free)",
    defaultMessage: "свободно"
  },
  busLegendItemBusy: {
    id: "bus.busMessages.busLegendItemBusyMessage",
    description: "text at bus legend (busy)",
    defaultMessage: "занято"
  },
  busLegendItemTaken: {
    id: "bus.busMessages.busLegendItemTakenMessage",
    description: "text at bus legend (taken)",
    defaultMessage: "выбрано"
  }
});

export default busMessages;
