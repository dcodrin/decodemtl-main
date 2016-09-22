import React from 'react';

const ErrorSUB = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <div className="module-boxed message-container message-container-error">
                    <i className="fa fa-exclamation-circle message-icon" aria-hidden="true"/>
                    <p className="text-body-large message message-error">Uh-oh somehting bad happened.</p>
                    <p>Optional additional message…</p>
                </div>
            </div>
        </section>
    );
};

ErrorSUB.propTypes = {};

export default ErrorSUB;