import React from "react";
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = function ({ linkForLogo, altName, imageSrc }) {

  return (
    <Link to={linkForLogo} className={styles['header__logo']}>
      <img alt={altName} src={imageSrc} />
    </Link>
  );
}

HeaderLogo.propTypes = {
  altName: Proptypes.string.isRequired,
  imageSrc: Proptypes.string.isRequired,
  linkForLogo: Proptypes.string.isRequired
}

export default HeaderLogo;



