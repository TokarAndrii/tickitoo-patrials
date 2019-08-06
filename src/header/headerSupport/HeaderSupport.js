import React from 'react';
import Proptypes from 'prop-types';
import styles from './HeaderSupport.module.sass';

const HeaderSupport = function ({title, phoneNumber, description})  {
    return (
        <div className={styles['header__support']}>
            <div className={styles['header__support-inners']}>
                <div className={styles['header__support-inner']}>
                    <div className={styles['header__support-title']}>{title}</div>
                    <a href="tel" className={styles['header__support-number']}>{phoneNumber}</a>
                </div>
                <div className={styles['header__support-inner']}>
                    <div className={styles['header__support-description']}>{description}</div>
                </div>
            </div>
                <div className={styles['header__languages']}></div>
        </div>
    )
}

HeaderSupport.propTypes = {
    title: Proptypes.string.isRequired,
    phoneNumber: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
}


export default HeaderSupport;