import React from "react";
import styles from "./Footer.module.scss";
import MasterCardIcon from "./icon-ft-mastercard.png";
import VisaIcon from "./icon-ft-visa.png";

const Footer = function ({ copirightText })  {
  return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles['footer__content']}>
            <div className={styles['footer__copyright']}>{copirightText}</div>
            <div className={styles['footer__payments']}>
              <img
                src={MasterCardIcon}
                className={styles['footer__payments-mc']}
                alt="master card logo"
              />
              <img 
                src={VisaIcon} 
                className={styles['footer__payments-vs']} 
                alt="visa logo" 
              />
            </div>
          </div>
        </div>
    </footer>
  )
} 

export default Footer;
