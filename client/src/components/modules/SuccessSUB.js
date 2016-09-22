import React from 'react';

const SuccessSUB = (props) => {
    return (
        <sercption className="module">
            <div className="wrapper">
                <div className="module-boxed message-container message-container-success">
                    <i className="fa fa-check-circle-o message-icon" aria-hidden="true"/>
                    <p className="text-body-large message message-success">Thank-you for whatever!</p>
                    <p>Optional additional message…</p>
                </div>
            </div>
        </sercption>
    );
};

SuccessSUB.propTypes = {};

export default SuccessSUB;
