import React from 'react';
import './HeaderSupport.sass';

const HeaderSupport = ({title, phoneNumber, description}) => 
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
</div>;


export default HeaderSupport;