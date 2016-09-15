import React from 'react';

const ContactForm = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <h3 className="module-title-medium">What can we do for you?</h3>
                        <form className="contact-form" action="" method="post">
                            <label htmlFor="first-name" className="visually-hidden">First Name</label>
                            <input type="text" name="first-name" id="first-name" placeholder="First Name"/>

                            <label htmlFor="last-name" className="visually-hidden">Last Name</label>
                            <input type="text" name="last-name" id="last-name" placeholder="Last Name"/>

                            <label htmlFor="tel" className="visually-hidden">Your Phone (optional)</label>
                            <input type="tel" name="tel" id="tel" placeholder="Your Phone (optional)"/>

                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder="Your email"/>

                            <label htmlFor="message" className="visually-hidden">Your message</label>
                            <textarea name="message" id="message" placeholder="Your message"/>

                            <div className="optin-checkbox">
                                <input type="checkbox" name="list-optin" id="list-optin" value="yes"/>
                                <label htmlFor="list-optin">Send me info about new courses, workshops and events.</label>
                            </div>

                            <input className="btn-large" type="submit" name="submit" value="Submit"/>

                            <div className="foot-note text-body-small text-subtle">
                                By providing us with your email, you agree to the terms of our <a href='#'>Privacy
                                Policy</a> and <a href="#">Terms of Service</a>.
                            </div>
                        </form>
                        {/*<!-- /.contact-form -->*/}
                    </div>
                    {/*<!-- /.module-boxed -->*/}
                </div>
                {/*<!-- /.wrapper -->*/}
            </section>
        );
    }
});

export default ContactForm;