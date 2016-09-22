import React from 'react';

const SuccessSUB = (props) => {
    return (
        <sercption className="module">
            <div className="wrapper">
                <div className="module-boxed message-container message-container-success">
                    <i className="fa fa-check-circle-o message-icon" aria-hidden="true"/>
                    <p className="text-body-large message message-success">{props.title}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        </sercption>
    );
};

SuccessSUB.propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default SuccessSUB;
