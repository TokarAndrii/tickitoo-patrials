import React, { Component } from "react";
import styles from "./App.module.sass";
import testRouteData from "./route/testDataRoutes";
import RouteList from "./route/RouteList";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Bus from "./bus/Bus";
import ButtonBack from "./buttons/ButtonBack";
import Passenger from "./passenger/Passenger";
import TnankYou from "./thank_you/ThankYou";
//import smallBusMockData from "./bus/mockDataSeatsCart2";
import bigBusMockData from "./bus/bigBusMockData";
import utils from "./utils/index";
import Seat from "./seat/Seat";
import BusFreeSeating from "./busFreeSeating/BusFreeSeating";
import mockBusFreeSeatingObjectInfo from "./busFreeSeating/mockObjectInfo";
import PaymentPage from "./paymentPage/PaymentPage";
import paymentPageMockData from "./paymentPage//paymentPageListMockData";

//some stuff to get array from income request
//const { maps_seat } = mockDataSeats2;

const { maps_seat } = bigBusMockData;
const [first_element] = maps_seat;
const { map_seat } = first_element;
const sortedArray = utils.sortArray(map_seat);
const chunkedArray = utils.arrayTransform(sortedArray);

const mockPassengerData = {
  fullName: "Иванов Иван",
  seatNumber: 39,
  document: "паспорт ME 123456",
  ageCategory: "взрослый"
};

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.app}>
          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          />

          <div>
            <RouteList listRoute={testRouteData} fullView={true} />
          </div>

          <br />
          <br />
          <div>
            <RouteList listRoute={testRouteData} fullView={false} />
          </div>
        </div>
        <div style={{ marginTop: "300px" }} />

        <ButtonBack className={styles.buttonBack} message="назад" linkTo="/" />

        <main>
          <Passenger objectInfo={mockPassengerData} seatMessage="место" />
          <TnankYou
            title="Билеты успешно оплачены!"
            textAboutDownLoad="Вы можете скачать их, нажав на кнопку"
            downloadBtnMessage="Скачать билеты"
            textAboutSendToMail="Мы также выслали копию билетов на почту"
            email="example@mail.com"
            textAboutPrintTickets="Не забудьте распечатать их перед посадкой в автобус"
            textAboutThank="Благодарим за покупку! Приятного пути :)"
            backWaysBtnMessage="Искать обратный билет"
          />
        </main>

        {/* some bus holder */}
        <div
          style={{
            margin: "24px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Bus
            title="Выберите место на схеме автобуса"
            busName="Hyndai Universe Bus"
            seatsList={chunkedArray}
          />
          <br />
          <br />
          <BusFreeSeating objectInfo={mockBusFreeSeatingObjectInfo} />
        </div>

        <div className={styles.container}>
          <PaymentPage paymentPageInfo={paymentPageMockData} />
        </div>

        <Footer copirightText="&copy; 2018-2019 Tickitoo. Все права защищены." />
      </>
    );
  }
}

export default App;
