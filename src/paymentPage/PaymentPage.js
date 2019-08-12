import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../buttons/Button";
import Passenger from "../passenger/Passenger";
import RouteList from "../route/RouteList";
import styles from "./PaymentPage.module.scss";
import pciIcon from "./pci.png";
import visaIcon from "./visa.png";
import masterCardIcon from "./mastercard.png";

class PaymentPage extends Component {
  render() {
    const {
      paymentPageInfo: { passengersList, tripDetailsInfo }
    } = this.props;
    const { numberTrip, carrier, bus, listRoute } = tripDetailsInfo;
    return (
      <div className={styles["payment-data__content"]}>
        <div className={styles["payment-data__info"]}>
          <div className={styles["payment-data__info-lside"]}>
            <div className={styles["payment-data__info-passenger"]}>
              <div className={styles["payment-data__info-title"]}>
                Проверьте данные перед оплатой
              </div>
              <div className={styles["payment-data__info-bottom"]}>
                <div className={styles["payment-data__info-strong"]}>
                  Пассажиры:
                </div>
                <Fragment>
                  {passengersList.map(passenger => (
                    <Passenger seatMessage="место" objectInfo={passenger} />
                  ))}
                </Fragment>
              </div>
            </div>
            <div className={styles["payment-data__info-route"]}>
              <div className={styles["payment-data__info-strong"]}>
                Маршрут:
              </div>
              <div className={styles["route__schedule"]}>
                <RouteList fullView={false} listRoute={listRoute} />
              </div>
              <div className={styles["payment-data__info-description"]}>
                <ul>
                  <li>
                    <p>
                      <span>Рейс:</span>
                      {numberTrip}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Перевозчик:</span>
                      {carrier}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Автобус:</span>
                      {bus}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["payment-data__info-rside"]}>
            <div className={styles["payment-data__info-title"]}>Оплата</div>
            <div className={styles["payment-data__info-middle"]}>
              <div className={styles["payment-data__info-center"]}>
                <div className={styles["payment-data__sum"]}>
                  <p>К оплате:</p>
                  <strong>
                    1 150
                    <span>,00</span>
                    <span>грн</span>
                  </strong>
                </div>
                <div className={styles["payment-data__checkbox"]} />
                <div className={styles["payment-data__action"]}>
                  <div className={styles["payment-data__action-lside"]}>
                    <Button
                      className={styles.primary}
                      message="Оплатить заказ картой"
                      type="button"
                      handleClick={() => null}
                    />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className={styles["payment-data__action-rside"]}>
                    <img
                      className={styles["icon-visa"]}
                      src={visaIcon}
                      alt="visa"
                    />
                    <img
                      className={styles["icon-mastercard"]}
                      src={masterCardIcon}
                      alt="masterCard"
                    />
                  </div>
                </div>
                <div className={styles["payment-data__paymentinfo"]}>
                  Ваши платежные и личные данные надежно защищены. После нажатия
                  на кнопку, вы будете перенаправлены на защищенную страницу для
                  оплаты.
                </div>
                <img
                  src={pciIcon}
                  alt="payment-data__pci"
                  className={styles["payment-data__pci"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PaymentPage.propTypes = {};

export default PaymentPage;
