import { defineMessages } from "react-intl";

const thankYouMessages = defineMessages({
    thankYouTitle: {
        id: "thankYou.thankYouMessages.thankYouTitleMessage",
        description: "text at thankYou inside <strong></strong>",
        defaultMessage: "Билеты успешно оплачены!"
    },
    textAboutDownLoad: {
        id: "thankYou.thankYouMessages.textAboutDownLoadMessage",
        description: "text before download btn",
        defaultMessage: "Вы можете скачать их, нажав на кнопку"
    },
    downloadBtnMessage: {
        id: "thankYou.thankYouMessages.downloadBtnMessage",
        description: "text at download tickets btn",
        defaultMessage: "Скачать билеты"
    },
    textAboutSendToMail: {
        id: "thankYou.thankYouMessages.textAboutSendToMailMessage",
        description: "text after download btn about send tickets to the email",
        defaultMessage: "Мы также выслали копию билетов на почту"
    },
    textAboutPrintTickets: {
        id: "thankYou.thankYouMessages.textAboutPrintTicketsMessage",
        description: "text after download btn about print tickets",
        defaultMessage: "Не забудьте распечатать их перед посадкой в автобус"
    },
    textAboutThank: {
        id: "thankYou.thankYouMessages.textAboutThankMessage",
        description: "text after download btn about about thank for buying",
        defaultMessage: "Благодарим за покупку! Приятного пути :)"
    },
    backWaysBtnMessage: {
        id: "thankYou.thankYouMessages.backWaysBtnMessage",
        description: "text at back ways btn",
        defaultMessage: "Искать обратный билет"
    },
});


export default thankYouMessages;
