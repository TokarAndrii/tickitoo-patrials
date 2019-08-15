import React from "react";
import PropTypes from "prop-types";
import styles from "./Banner.module.scss";

const Banner = ({ title, text, classNameHolder }) => (
  <div className={[styles["steps-hero"], styles[classNameHolder]].join(" ")}>
    <div className={styles.container}>
      <div className={styles["steps-hero__content"]}>
        <span>{text}</span>
        <h1>{title}</h1>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  classNameHolder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Banner;
