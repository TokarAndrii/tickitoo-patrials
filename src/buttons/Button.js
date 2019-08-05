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
    className: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    type:  "button" 
}

export default Button;