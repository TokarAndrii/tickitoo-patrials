import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "./ButtonBack.module.scss";

const ButtonBack = function({ message, className, history }) {
  const handleRedirect = () => {
    console.log(history);
    history.goBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={className} onClick={handleRedirect}>
          {message}
        </p>
      </div>
    </div>
  );
};

ButtonBack.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(ButtonBack);
