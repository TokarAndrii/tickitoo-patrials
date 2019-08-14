import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import styles from './ButtonBack.module.scss';


const ButtonBack = function({ message, linkTo, className}){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <a className={className} href={linkTo}>{message}</a>
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
