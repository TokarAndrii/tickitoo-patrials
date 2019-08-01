import React from 'react';
import Proptypes from 'prop-types';
import './HeaderSupport.sass';

const HeaderSupport = function ({title, phoneNumber, description})  {
    return (
        <div className="header__support">
            <div className="header__support-inners">
                <div className="header__support-inner">
                    <div className="header__support-title">{title}</div>
                    <a href="tel" className="header__support-number">{phoneNumber}</a>
                </div>
                <div className="header__support-inner">
                    <div className="header__support-description">{description}</div>
                </div>
            </div>
                <div className="header__languages"></div>
        </div>
    )
}

HeaderSupport.propTypes = {
    title: Proptypes.string.isRequired,
    phoneNumber: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
}


export default HeaderSupport;