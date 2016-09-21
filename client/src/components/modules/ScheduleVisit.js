//TODO HANDLE FORM SUBMIT
import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const ScheduleVisit = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        handleClick: React.PropTypes.func
    },
    _handleSubmit(e) {
        e.preventDefault();
        if (this.props.handleClick) {
            this.props.handleClick();
        }
        const email = this.refs.email.value.trim().toLowerCase();
        axios.post('http://localhost:3100/visit', {email})
            .then(({data: response}) => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">{this.props.title}</p>
                        <p>{this.props.text}</p>
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