const paymentPageListMockData = {
    passengersList: [
        { fullName: "Иванов Иван",
        seatNumber: 39,
        document: "паспорт ME 123456",
        ageCategory: "взрослый"},
        { fullName: "Иванова Ирина",
        seatNumber: 40,
        document: "свидетеьлство о рождении Ш-АМ №123456",
        ageCategory: "ребенок"},

    ],
    tripDetailsInfo: {
        numberTrip: " № 10540/0011 Чернигов – Познань, по маршруту Киев – Варшава",
        listRoute: [
            {
                id: "1",
                routeScheduleTime: "12:00",
                routeScheduleDescriptionTitle: "Київ",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            },
            {
                id: "2",
                routeScheduleTime: "12:30",
                routeScheduleDescriptionTitle: "Боярка",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            },
            {
                id: "3",
                routeScheduleTime: "15:00",
                routeScheduleDescriptionTitle: "Житомир",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            },
            {
                id: "4",
                routeScheduleTime: "18:00",
                routeScheduleDescriptionTitle: "Хмельницький",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            },
            {
                id: "5",
                routeScheduleTime: "20:00",
                routeScheduleDescriptionTitle: "Тернопіль",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            }, {
                id: "6",
                routeScheduleTime: "24:00",
                routeScheduleDescriptionTitle: "Львів",
                routeScheduleDescriptionText: 'Автовокзал "Центральный", метро Демеевская; проспект Науки; дом 1/2',
            }
        ],
        carrier: "LEON POL TRANS",
        bus: "BAZ-A079.23"
    }
};


export default paymentPageListMockData;