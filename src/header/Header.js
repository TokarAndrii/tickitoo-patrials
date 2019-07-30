import React from "react";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSupport from "./headerSupport/HeaderSupport";
import HeaderLanguageSelector from "./header_language_selector/HeaderLanguageSelector";
import logoImage from "./header-logo/logo.png";
import "./Header.sass";

const Header = () => (
  <header>
    <div className="container">
      <div className="header__content">
        <HeaderLogo
          linkForLogo="/index"
          altName="header_logo_img"
          imageSrc={logoImage}
          className="header"
        />

        <HeaderSupport
          title="Служба поддержки:"
          phoneNumber="0 800 123 456"
          description="Бесплатно со всех стационарных и мобильных операторов Украины"
        />

        <div className="header__burger">
          <span />
          <span />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
