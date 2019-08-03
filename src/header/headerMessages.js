import { defineMessages } from "react-intl";

const headerMessages = defineMessages({
  headerTextBeforePhoneNumber: {
    id: "header.headerMessages.headerTextBeforePhoneNumberMessage",
    description:
      "text at header (HeaderSupport component) before phone number (support)",
    defaultMessage: "Служба поддержки:"
  },
  headerTextAfterPhoneNumber: {
    id: "header.headerMessages.headerTextAfterPhoneNumberMessage",
    description:
      "text at header (HeaderSupport component) after phone number (description of pricing for calls)",
    defaultMessage:
      "Бесплатно со всех стационарных и мобильных операторов Украины"
  },
  headerSupportPhoneNumber: {
    id: "header.headerMessages.headerSupportPhoneNumberMessage",
    description: "support phone number at header (HeaderSupport component)",
    defaultMessage: "0 800 123 456"
  }
});

export default headerMessages;
