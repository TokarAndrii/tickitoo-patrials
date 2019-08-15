import React, { Fragment } from "react";
import RouteItem from "./RouteItem";
import PropTypes from "prop-types";

const RouteList = function({ listRoute, fullView }) {
  const filteredList = !listRoute
    ? null
    : fullView
    ? listRoute
    : listRoute.filter(
        (item, index) => index === 0 || index === listRoute.length - 1
      );

  if (listRoute) {
    return (
      <Fragment>
        {filteredList.map((itemRoute, index) => {
          return (
            <RouteItem
              key={itemRoute.id}
              {...itemRoute}
              isActive={index === 0 || index === filteredList.length - 1}
            />
          );
        })}
      </Fragment>
    );
  }

  return null;
};

RouteList.propTypes = {
  listRoute: PropTypes.array.isRequired,
  fullView: PropTypes.bool.isRequired
};

export default RouteList;
