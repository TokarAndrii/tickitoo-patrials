import React from "react";
import "./Footer.sass";
import MasterCardIcon from "./icon-ft-mastercard.png";
import VisaIcon from "./icon-ft-visa.png";

const Footer = function ({ copirightText })  {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__copyright">{copirightText}</div>
            <div className="footer__payments">
              <img
                src={MasterCardIcon}
                className="footer__payments-mc"
                alt="master card logo"
              />
              <img src={VisaIcon} className="footer__payments-vs" alt="visa logo" />
            </div>
          </div>
        </div>
    </footer>
  )
} 

export default Footer;
