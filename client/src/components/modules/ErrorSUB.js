import React from 'react';

const ErrorSUB = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <div className="module-boxed message-container message-container-error">
                    <i className="fa fa-exclamation-circle message-icon" aria-hidden="true"/>
                    <p className="text-body-large message message-error">{props.title}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    );
};

ErrorSUB.propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default ErrorSUB;