import React from "react";
import "./HeaderLogo.sass";

const HeaderLogo = ({ linkForLogo, altName, imageSrc }) => (
  <a href={linkForLogo} className="header__logo">
    <img alt={altName} src={imageSrc} />
  </a>
);

export default HeaderLogo;
