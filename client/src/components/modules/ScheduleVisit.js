//TODO HANDLE FORM SUBMIT
import React from 'react';
import {Link} from 'react-router';

import {visit} from '../../api/api';

const ScheduleVisit = React.createClass({
    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        toggleModal: React.PropTypes.func
    },
    _handleSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value.trim().toLowerCase();
        visit(email)
            .then(() => {
                this.props.handleClick({status: 'success'})
            })
            .catch(() => {
                this.props.handleClick({status: 'failed'})
            });
    },
    render() {
        console.log('called from Schedule a Visit');
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">Let's schedule a visit!</p>
                        <p>Some one will get in touch with you!</p>
                        <form className="optin-form" onSubmit={this._handleSubmit}>
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder="Your email" ref="email"/>
                            <input className="btn-large" type="submit" name="submit" value="Submit"/>
                            <div className="foot-note text-body-small text-subtle">
                                By providing us with your email, you agree to the terms of our <Link to='/privacy'>Privacy
                                Policy</Link> and <Link to='/terms'>Terms of Service</Link>.
                            </div>
                        </form>
                        {/* /.optin-form */}
                    </div>
                    {/* /.module-boxed */}
                </div>
                {/* /.wrapper */}
            </section>
        );
    }
});

export default ScheduleVisit;