import React from 'react';

const ErrorSUB = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <div className="module-boxed message-container message-container-error">
                    <i className="fa fa-exclamation-circle message-icon" aria-hidden="true"/>
                    <p className="text-body-large message message-error">Uh-oh an error occurred.</p>
                    <p>Please try again or contact <a href="mailto:hello@decodemtl.com">hello@decodemtl.com</a></p>
                </div>
            </div>
        </section>
    );
};

ErrorSUB.propTypes = {};

export default ErrorSUB;