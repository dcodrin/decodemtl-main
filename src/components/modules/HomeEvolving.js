import React from 'react';

const HomeEvolving = (props) => {
    return (
        <section className="module evolving-module">
            <div className="wrapper">
                <div className="module-boxed">
                    <h2 className="module-title">Constantly evolving</h2>
                    <div className="row-container one-half-container">
                        <div className="one-half-content">
                            <p>Our courses are created and continuously updated by our team of instructors who use the skills they teach everyday.</p>
                            <p>Unlike traditional education institutions, we are in close contact with employers and their most pressing technical needs, ensuring that our grads are dream-team picks for the best jobs in Montreal.</p>
                            <div className="link-more text-body-small">
                                <a href="#">This is a block link<span className="fa fa-caret-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="one-half-content">
                            <div className="cta-widget">
                                <div className="text-body-small">Want to learn more about life as a DecodeMTL student?</div>
                                <div className="cta cta-single">
                                    <a href="#" className="btn-primary btn-small">Schedule a visit</a>
                                </div>
                                <div className="text-body-small"><a className="phone-link" itemProp="telephone" href="tel:1-888-511-9155">Or Give us a call: 1-888-551-9155</a></div>
                            </div>
                        </div>
                    </div>
                    {/*!-- /.row-container --*/}
                </div>
                {/*!-- /.module-boxed --*/}
            </div>
            {/*!-- /.wrapper --*/}
        </section>
    );
};

HomeEvolving.propTypes = {};

export default HomeEvolving;