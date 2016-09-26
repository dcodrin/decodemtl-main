//TODO HANDLE FORM SUBMIT
import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ConfirmModal from '../modules/ConfirmModal';
import {subscribe} from '../../api/api';

const FormOptin = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        submitButton: React.PropTypes.string.isRequired,
        handleClick: React.PropTypes.func,
        interests: React.PropTypes.object
    },
    getInitialState(){
        return {
            modal: false,
            status: false
        }
    },
    _toggleModal() {
        this.setState({
            modal: false
        })
    },
    _handleSubmit(e) {
        e.preventDefault();
        if (this.props.handleClick) {
            this.props.handleClick();
        }
        const email = this._email.value.trim().toLowerCase();
        subscribe(email, this.props.interests)
            .then(() => {
                this._email.value = '';
                this.setState({
                    modal: true,
                    status: true
                })
            })
            .catch(() => {
                this._email.value = '';
                this.setState({
                    modal: true,
                    status: false
                })
            });
    },
    render() {
        return (
            <section className="module">
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal
                        ? <ConfirmModal
                        status={this.state.status}
                        modalType='subscribe'
                        toggleModal={this._toggleModal}/>
                        : null}
                </ReactCSSTransitionGroup>
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">{this.props.title}</p>
                        <p>{this.props.text}</p>
                        <form className="optin-form" onSubmit={this._handleSubmit}>
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder="Your email" ref={email => {
                                this._email = email
                            }}/>
                            <input className="btn-large" type="submit" name="submit" value={this.props.submitButton}/>
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

export default FormOptin;