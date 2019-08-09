import React from 'react';
import PropTypes from 'prop-types';
import styles from './Passenger.module.scss'

const Passenger = function(
    {seatMessage,  
        objectInfo: {fullName,  seatNumber, document, ageCategory}
    })  {

    return (
        <div className={styles['payment-data__info-item']}>
            <strong>{fullName}</strong>
            <p>{`${seatMessage} ${seatNumber}, ${ageCategory}, ${document}`}</p>
        </div>
    )
};

Passenger.propTypes = {
    objectInfo: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        seatNumber: PropTypes.string.isRequired,
        document: PropTypes.string.isRequired,
        ageCategory: PropTypes.string.isRequired,
    }).isRequired,
    seatMessage: PropTypes.string.isRequired,
}

export default Passenger;