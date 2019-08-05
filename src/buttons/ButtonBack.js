import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import styles from './ButtonBack.module.sass';


const ButtonBack = function({ message, linkTo, className}){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link
                    className={className}
                    to={linkTo}
                >
                    {message}
                </Link>
            </div>
        </div>

    )
};

ButtonBack.propTypes = {
    message: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}


export default ButtonBack;