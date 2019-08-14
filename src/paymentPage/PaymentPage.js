import React, { Component, Fragment, createRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../buttons/Button";
import Passenger from "../passenger/Passenger";
import RouteList from "../route/RouteList";
import styles from "./PaymentPage.module.scss";
import pciIcon from "./pci.png";
import visaIcon from "./visa.png";
import masterCardIcon from "./mastercard.png";

const INITIAL_STATE = {
  isError: false,
  submitPublicOffer: false,
}

class PaymentPage extends Component {

  constructor(props){
    super(props);
    this.handlePay = this.handlePay.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  checkBoxRef = createRef();

  payButtonRef = createRef();

  state = {...INITIAL_STATE};

  handleTogglePublicOffer = () => this.setState(prevState => ({submitPublicOffer: !prevState.submitPublicOffer}));


  handlePay = e => {
    e.preventDefault();

    const {submitPublicOffer} = this.state;

    if(!submitPublicOffer){
      this.setState({isError: true})
    }
  }

  handleToggleError = () => this.setState(prevState => ({isError: !prevState.isError}));


  handleWindowClick = e => {
  
    const {isError, submitPublicOffer} = this.state;

    let isTargetInsidecheckBox;
    let isTargetInsideButton;

    if(isError && submitPublicOffer &&  this.checkBoxRef.current){
       isTargetInsidecheckBox = this.checkBoxRef.current.contains(e.target);
      
       isTargetInsidecheckBox && this.handleToggleError();
    }
    
    if(isError && !submitPublicOffer &&  this.payButtonRef.current){
      isTargetInsideButton = this.payButtonRef.current.contains(e.target);
      
      !isTargetInsideButton && this.handleToggleError();
    }
  
  
  }

  componentDidMount(){
    window.addEventListener("click",  this.handleWindowClick);
  }

  componentWillUnmount(){
    window.removeEventListener("click",  this.handleWindowClick);
  }

  render() {

    const {
      paymentPageInfo: { passengersList, tripDetailsInfo }, linkToPublicOffer
    } = this.props;

    const { numberTrip, carrier, bus, listRoute } = tripDetailsInfo;

    const {isError} = this.state;

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
                  {passengersList && passengersList.map(passenger => (
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
                <div className={styles["payment-data__checkbox"]}>
                  <label 
                    className={[styles['field-checkbox'], 
                                styles['field-checkbox--dark'], 
                                styles['filed-label']].join(" ")}>
                    <input ref={ref => this.checkBoxRef = ref} type="checkbox" onChange={this.handleTogglePublicOffer}></input>
                    <span className={styles['field-checkbox__mark']}></span>
                    {isError && (<span className={styles['warning-message']}>Нужно принять условия</span>)}                    
                    <span className={styles['field-checkbox__title']}>
                      Я принимаю условия
                      <Link to={linkToPublicOffer}>публичной оферты, политики конфиденциальности</Link>
                      и даю согласие на обработку моих персональных данных								
                    </span>
                  </label>
                </div>
                <div className={styles["payment-data__action"]}>
                  <div className={styles["payment-data__action-lside"]} ref={this.payButtonRef}>
                    <Button
                      className={styles.primary}
                      message="Оплатить заказ картой"
                      type="button"
                      handleClick={this.handlePay}
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

PaymentPage.propTypes = {
  linkToPublicOffer: PropTypes.string.isRequired,
  //it can be described as PropTypes.shape() later - when form of this prop will be known for sure
  paymentPageInfo: PropTypes.object.isRequired,
};

export default PaymentPage;

