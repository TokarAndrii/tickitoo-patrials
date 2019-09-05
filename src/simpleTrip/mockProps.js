const tripInfo = {
  id: 1,
  carrierName: "LEON POL TRANS",
  departure: {
    departureTime: "10:30",
    departureDate: "среда, 28 ноября",
    departureCity: "Киев",
    departureStation: 'Автовокзал "Центральный"'
  },
  arriving: {
    arrivingTime: "20:30",
    arrivingDate: "среда, 28 ноября",
    arrivingCity: "Львов",
    arrivingStation: 'Автовокзал "Центральный"'
  },
  travelTime: {
    hours: 13,
    minutes: 45
  },
  tripDetails: {
    generalInfo:
      "№ 10540/0011 Чернигов – Познань, по маршруту Киев – Варшава на 17 апреля 2019 года в 16:30",
    type: "Регулярный",
    bus: "BAZ-A079.23"
  },
  priceWithDiscount: 1050,
  priceWithoutDiscount: 1150,
  thereWay: true
};

export default tripInfo;
