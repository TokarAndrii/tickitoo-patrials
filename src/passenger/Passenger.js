import React from 'react';
import PropTypes from 'prop-types';
import styles from './Passenger.module.sass'

const Passenger = function(
    {seatMessage,  
        objectInfo: {fullName,  seatNumber, document, ageCategory}
    })  {

    return (
        <div className={styles['payment-data__info-item']}>
            <strong>{fullName}</strong>
            <p>{`${seatMessage} ${seatNumber}, ${ageCategory}, ${document} `}</p>
        </div>
    )
};

Passenger.propTypes = {
    objectInfo: PropTypes.object.isRequired,
    seatMessage: PropTypes.string.isRequired,
}

export default Passenger;