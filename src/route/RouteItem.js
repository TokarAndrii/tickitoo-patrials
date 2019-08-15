import React from "react";
import Proptypes from "prop-types";
import "./RouteItem.scss";

const RouteItem = function({
  isActive,
  routeScheduleTime,
  routeScheduleDescriptionTitle,
  routeScheduleDescriptionText
}) {
  return (
    <div
      className={
        isActive ? `route__schedule-inner is-active` : `route__schedule-inner`
      }
    >
      <div className="route__schedule-time">{routeScheduleTime}</div>
      <div className="route__schedule-check">
        <span />
      </div>
      <div className="route__schedule-description">
        <strong>{routeScheduleDescriptionTitle}</strong>
        <p>{routeScheduleDescriptionText}</p>
      </div>
    </div>
  );
};

RouteItem.propTypes = {
  isActive: Proptypes.bool.isRequired,
  routeScheduleTime: Proptypes.string.isRequired,
  routeScheduleDescriptionTitle: Proptypes.string.isRequired,
  routeScheduleDescriptionText: Proptypes.string.isRequired
};

export default RouteItem;
