import React from 'react';
import formSerialize from 'form-serialize';
import {withRouter} from 'react-router';

import {contact} from '../../api/api';

const ContactForm = React.createClass({
    propTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        return {
            confirm: false,
            status: false
        };
    },
    _handleSubmit(e) {
        e.preventDefault();
        const userData = formSerialize(e.target, {hash: true});
        contact(userData)
            .then(() => {
                this.props.router.push({pathname: '/success', query: {status: 'success'}})
            })
            .catch(() => {
                this.props.router.push({pathname: '/success', query: {status: 'failed'}})
            });
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <form className="contact-form" onSubmit={this._handleSubmit}>
                            <h3 className="module-title-medium">What can we do for you?</h3>
                            <section className="contact-details-section">
                                <div className="required">
                                    <label htmlFor="first-name" className="visually-hidden">First Name</label>
                                    <input type="text" name="first-name" id="first-name"
                                           placeholder="First Name"
                                           aria-required required/>
                                </div>
                                <div className="required">
                                    <label htmlFor="last-name" className="visually-hidden">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" placeholder="Last Name"
                                           aria-required required/>
                                </div>

                                <div className="required">
                                    <label htmlFor="tel" className="visually-hidden">Your Phone</label>
                                    <input type="tel" name="tel" id="tel" placeholder="Your Phone"
                                           aria-required required/>
                                </div>

                                <div className="required">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" name="email" placeholder="Your email" aria-required
                                           required/>
                                </div>
                            </section>
                            <section className="message-section">
                                <label htmlFor="message" className="visually-hidden">Your message</label>
                                <textarea name="message" id="message" placeholder="Your message"/>
                            </section>
                            <section className="submit-section">
                                <div className="optin-checkbox">
                                    <input type="checkbox" name="list-optin" id="list-optin" value="yes"/>
                                    <label htmlFor="list-optin">I want to receive info about new courses, workshops
                                        and events.</label>
                                </div>
                                <input className="btn-large" type="submit" name="submit" value="Submit"/>
                                <div className="foot-note text-body-small text-subtle">
                                    By providing us with your email, you agree to the terms of our <a href='#'>Privacy
                                    Policy</a> and <a href="#">Terms of Service</a>.
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
});

export default withRouter(ContactForm);