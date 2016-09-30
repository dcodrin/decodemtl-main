//TODO HANDLE FORM SUBMIT
import React from 'react';
import {Link, withRouter} from 'react-router';

import {visit} from '../../api/api';

const ScheduleVisit = React.createClass({
    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        toggleModal: React.PropTypes.func
    },
    _handleSubmit(e) {
        e.preventDefault();
        const email = this._email.value.trim().toLowerCase();
        const optin = this._optin.checked;
        visit(email, optin)
            .then(() => {
                this._email.value = '';
                this.props.handleClick({status: 'success'})
            })
            .catch(() => {
                this._email.value = '';
                this.props.handleClick({status: 'failed'})
            });
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">Want to see if DecodeMTL is right for you?</p>
                        <p>Enter your email and we will get back to you asap to schedule a visit.</p>
                        <form className="optin-form" onSubmit={this._handleSubmit}>
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder="Your email" ref={email => {
                                this._email = email
                            }}/>
                            <input className="btn-large" type="submit" name="submit" value="Submit"/>
                            <div className="optin-checkbox">
                                <input type="checkbox" name="list-optin" id="list-optin" value="yes" ref={optin => {
                                    this._optin = optin
                                }}/>
                                <label htmlFor="list-optin">I want to receive info about new courses, workshops and
                                    events.</label>
                            </div>
                            <div className="foot-note text-body-small text-subtle">
                                By providing us with your email, you agree to the terms of our <Link
                                onClick={this.props.toggleModal.bind(null, true)} to='/privacy'>Privacy
                                Policy</Link> and <Link onClick={this.props.toggleModal.bind(null, true)} to='/terms'>Terms
                                of Service</Link>.
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

export default withRouter(ScheduleVisit);