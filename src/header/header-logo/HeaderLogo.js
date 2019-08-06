import React from "react";
import Proptypes from 'prop-types';
import styles from "./HeaderLogo.module.sass";

const HeaderLogo = function ({ linkForLogo, altName, imageSrc }) {
  return (
    <a href={linkForLogo} className={styles['header__logo']}>
      <img alt={altName} src={imageSrc} />
    </a>
  );
}

HeaderLogo.propTypes = {
  altName: Proptypes.string.isRequired,
  imageSrc: Proptypes.string.isRequired,
  linkForLogo: Proptypes.string.isRequired
}

export default HeaderLogo;
