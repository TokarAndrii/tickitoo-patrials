import { defineMessages } from "react-intl";

const paymentPageMessages = defineMessages({
  titleLeftSide: {
    id: "paymentPage.paymentPageMessages.titleLeftSideMessage",
    description: "text at title (left side) about checking data before payment",
    defaultMessage: "Проверьте данные перед оплатой"
  },
  passengersTitle: {
    id: "paymentPage.paymentPageMessages.passengersTitleMessage",
    description: "text -  passengers title, before passengers list",
    defaultMessage: "Пассажиры:"
  },
  routeTitle: {
    id: "paymentPage.paymentPageMessages.routeTitleMessage",
    description: "text -  route title, before route list",
    defaultMessage: "Маршрут:"
  },
  routeDetails: {
    id: "paymentPage.paymentPageMessages.routeDetailsMessage",
    description: "text before route details",
    defaultMessage: "Рейс:"
  },
  carrierDetails: {
    id: "paymentPage.paymentPageMessages.carrierDetailsMessage",
    description: "text before carrier details",
    defaultMessage: "Перевозчик:"
  },
  busDetails: {
    id: "paymentPage.paymentPageMessages.busDetailsMessage",
    description: "text before bus details",
    defaultMessage: "Автобус:"
  },
  titleRightSide: {
    id: "paymentPage.paymentPageMessages.titleRightSideMessage",
    description: "text at title (right side) about payment",
    defaultMessage: "Оплата"
  },
  sumDetails: {
    id: "paymentPage.paymentPageMessages.sumDetailsMessage",
    description: "text before sum",
    defaultMessage: "К оплате:"
  },
  sumAmount: {
    id: "paymentPage.paymentPageMessages.sumAmountMessage",
    description: "text at sum",
    defaultMessage: "1 150"
  },
  sumPennyAmount: {
    id: "paymentPage.paymentPageMessages.sumPennyAmountMessage",
    description: "text at penny amount of a sum",
    defaultMessage: ",00"
  },
  currency: {
    id: "paymentPage.paymentPageMessages.currencyMessage",
    description: "text currency",
    defaultMessage: "грн"
  },
  error: {
    id: "paymentPage.paymentPageMessages.errorMessage",
    description: "text at error popup",
    defaultMessage: "Нужно принять условия"
  },
  publicOfferText: {
    id: "paymentPage.paymentPageMessages.publicOfferTextMessage",
    description: "text public offer link",
    defaultMessage: "публичной оферты, политики конфиденциальности"
  },
  acceptTermsTextPart1: {
    id: "paymentPage.paymentPageMessages.acceptTermsTextPart1Message",
    description:
      "text accept terms text after checkbox before link of public offer",
    defaultMessage: "Я принимаю условия"
  },
  acceptTermsTextPart2: {
    id: "paymentPage.paymentPageMessages.acceptTermsTextPart2Message",
    description:
      "text accept terms text after checkbox after link of public offer",
    defaultMessage: "и даю согласие на обработку моих персональных данных"
  },
  buttonPayText: {
    id: "paymentPage.paymentPageMessages.buttonPayTextMessage",
    description: "text button pay text",
    defaultMessage: "Оплатить заказ картой"
  },
  securePaymentText: {
    id: "paymentPage.paymentPageMessages.securePaymentTextMessage",
    description: "text secure payment text",
    defaultMessage: "Безопасная оплата"
  },
  securePaymentTextDescription: {
    id: "paymentPage.paymentPageMessages.securePaymentTextDescriptionMessage",
    description: "text secure payment description text",
    defaultMessage: `Ваши платежные и личные данные надежно защищены. После нажатия
    на кнопку, вы будете перенаправлены на защищенную страницу для
    оплаты.`
  }
});

export default paymentPageMessages;
