import React from 'react';

const Confirmation = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {
        return (
            <section className="module">
                <div className="wrapper">
                    <h2 className="module-title">Thank you!</h2>
                    <p>Yahoo!</p>
                </div>
            </section>
        );
    }

    return (
        <section className="module">
            <div className="wrapper">
                <h2 className="module-title">Something went wrong!</h2>
                <p>Please try again!</p>
            </div>
        </section>
    );
};

Confirmation.propTypes = {};

export default Confirmation;