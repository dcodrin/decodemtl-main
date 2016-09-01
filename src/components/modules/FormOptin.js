import React from 'react';

import {Link} from 'react-router';

const FormOptin = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    getInitialState() {
        return {
            input: ''
        };
    },
    _handleInput(e) {
        this.setState({
            input: e.target.value
        });
    },
    _handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.input, 'FUTURE ACTION');
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">Get Instant access to our prep course material</p>
                        <p>Discover the content our applicants must complete for admission, or start learning on your
                            own!</p>
                        <form className="optin-form" onSubmit={this._handleSubmit}>
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder="Your email" onChange={this._handleInput}/>
                            <input className="btn-large" type="submit" name="submit" value="Submit"/>
                            <div className="foot-note text-body-small text-subtle">
                                By providing us with your email, you agree to the terms of our <Link to='#'>Privacy
                                Policy</Link> and <Link to='#'>Terms of Service</Link>.
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

export default FormOptin;