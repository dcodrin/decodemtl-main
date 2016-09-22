import React from 'react';

const Confirmation = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {


    return (
        <section className="module">
            <div className="wrapper">
                <h2 className="module-title">Success!</h2>
                <p>Your application has been received. Our team is currently reviewing it and will get back to you within 48 hours (not including weekends or holidays).</p>
                <p>If you have any questions in the mean time, please <a href="mailto:hello@decodemtl.com">email us</a>.</p>
                <h2 className="module-title">Something went wrong!</h2>
                <p>Please try again!</p>
            </div>
        </section>
    );
};

Confirmation.propTypes = {};

export default Confirmation;