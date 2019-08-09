import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button';
import styles from './ThankYou.module.scss';

class ThankYou extends Component {
    render(){
        const {
            linkObjectTicket, linkBuyBackTicket, email,  
            title, textAboutDownLoad, downloadBtnMessage, 
            textAboutSendToMail, textAboutPrintTickets,
            textAboutThank, backWaysBtnMessage, showbackWaysBtn
        } = this.props;
        return (
            <div className={styles['transactions-success__content']}>
                <div className={styles['transactions-success__holder']}>
                    <strong>{title}</strong>
                    <p>{textAboutDownLoad}</p>
                    <div className={styles['transactions-success__action']}>
                        <Button 
                            message={downloadBtnMessage}
                            className={styles.primary}
                        />
                    </div>
                    <p>
                        {`${textAboutSendToMail} `}<b>{email}</b>
                        {/* {textAboutSendToMail}<b>{email}</b> */}
                        <br></br>
                        <br></br>
                        {textAboutPrintTickets}
                        <br></br>
                        <br></br>
                        {textAboutThank}
                    </p>
                    {showbackWaysBtn
                     && (
                            <div className={styles['transactions-success__action']}>
                                <Button 
                                    message={backWaysBtnMessage}
                                    className={styles.secondary}
                                />
                            </div>
                    )}

                </div>
            </div>

        )
    }
}

ThankYou.propTypes = {
    email: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    textAboutDownLoad: PropTypes.string.isRequired,
    downloadBtnMessage: PropTypes.string.isRequired,
    textAboutSendToMail: PropTypes.string.isRequired,
    textAboutPrintTickets: PropTypes.string.isRequired,
    textAboutThank: PropTypes.string.isRequired,
    backWaysBtnMessage: PropTypes.string.isRequired,
    showbackWaysBtn: PropTypes.bool,
    linkObjectTicket: PropTypes.object.isRequired,
    linkBuyBackTicket: PropTypes.object.isRequired,
}

ThankYou.defaultProps = {
    showbackWaysBtn: true,
}

export default ThankYou;