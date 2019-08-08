import React from "react";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSupport from "./headerSupport/HeaderSupport";
import HeaderLanguageSelector from './header_language_selector/HeaderLanguageSelector';
import logoImage from "./header-logo/logo.png";
import styles from "./Header.module.scss";

const Header = function () {
  return  (
    <header>
      <div className={styles.container}>
        <div className={styles["header__content"]}>
          <HeaderLogo
            linkForLogo="/index"
            altName="header_logo_img"
            imageSrc={logoImage}
            className={styles.header}
          />
  
          <HeaderSupport
            title="Служба поддержки:"
            phoneNumber="0 800 123 456"
            description="Бесплатно со всех стационарных и мобильных операторов Украины"
          />

          <HeaderLanguageSelector/>
          <div className={styles['header__burger']}>
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
