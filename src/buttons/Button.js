import React from 'react';
import PropTypes from 'prop-types';

const Button = function({className, message, handleClick, type}){
    return (
        <button 
            className={className} 
            onClick={handleClick}
            type={type}
        >
            {message}
        </button>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    type:  "button",
    className: "",
}

export default Button;
