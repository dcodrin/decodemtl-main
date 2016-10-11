import React from 'react';
import Helmet from 'react-helmet';

const Success = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {
        return (
            <section className="module">
                <div className="wrapper">
                    <h2 className="module-title">Success!</h2>
                    <p>Your request has been received. Our team is currently reviewing it and will get back to you within 48 hours (not including weekends or holidays).</p>
                </div>
            </section>
        );
    }
    return (
        <section className="module">
            <Helmet
                title="Confirmation | DecodeMTL"
                meta={[
                    {property: 'description', content: ''},
                ]}/>
            <div className="wrapper">
                <h2 className="module-title">Something went wrong!</h2>
                <p>Please try again! If the problem persists, please contact <a href="mailto:hello@decodemtl.com">hello@decodemtl.com</a>.</p>
            </div>
        </section>
    );

};

Success.propTypes = {};

export default Success;