import React from "react";
import "./RouteItem.sass";

const RouteItem = ({
  isActive,
  routeSheduleTime,
  routeSheduleDescriptionTitle,
  routeSheduleDescriptionText
}) => {
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

export default RouteItem;
