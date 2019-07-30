import React from 'react';
import  './HeaderLogo.sass';


const HeaderLogo = ({linkForLogo, altName, imageSrc}) => 
    <a href={linkForLogo} alt={altName} className="header__logo">
        <img src={imageSrc}></img>
    </a>

export default HeaderLogo;