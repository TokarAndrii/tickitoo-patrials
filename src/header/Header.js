import React from 'react';
import HeaderLogo from './header-logo/HeaderLogo';
import HeaderSupport from './headerSupport/HeaderSupport';
import logoImage from './header-logo/logo.png';
import './Header.sass';

const Header = () => (
    <header>
        <div className="container">
            <div className="header__content">
                <HeaderLogo 
                    linkForLogo="/index" 
                    altName="headerLogoAlt" 
                    imageSrc={logoImage}
                    className="header">
                </HeaderLogo>

                <HeaderSupport 
                title="Служба поддержки:" 
                phoneNumber="0 800 123 456"
                description="Бесплатно со всех стационарных и мобильных операторов Украины">
                </HeaderSupport>

                <div className="header__burger">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

    </header>
);

export default Header;