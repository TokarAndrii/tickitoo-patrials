import React from "react";
import Proptypes from 'prop-types';
import "./RouteItem.sass";

const RouteItem = function ({
  isActive,
  routeSheduleTime,
  routeSheduleDescriptionTitle,
  routeSheduleDescriptionText
})  {
  return (
    <div className={isActive ? `route__schedule-inner is-active` : `route__schedule-inner`}>
      <div className="route__schedule-time">{routeSheduleTime}</div>
      <div className="route__schedule-check">
        <span />
      </div>
      <div className="route__schedule-description">
        <strong>{routeSheduleDescriptionTitle}</strong>
        <p>{routeSheduleDescriptionText}</p>
      </div>
    </div>
  );
};

RouteItem.propTypes = {
  isActive: Proptypes.bool.isRequired,
  routeSheduleTime:Proptypes.string.isRequired,
  routeSheduleDescriptionTitle: Proptypes.string.isRequired,
  routeSheduleDescriptionText: Proptypes.string.isRequired,
}

export default RouteItem;
