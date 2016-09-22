import React from 'react';


import ErrorSub from '../modules/ErrorSUB';
import SuccessSub from '../modules/SuccessSUB';

const ConfirmModal = React.createClass({
    propTypes: {
        form: React.PropTypes.element.isRequired,
        toggleModal: React.PropTypes.func.isRequired,
        modal: React.PropTypes.string
    },
    getInitialState(){
        return {
            confirm: false
        }
    },
    _confirm({status}) {
        if (status === 'success') {
            return this.setState({
                confirm: true,
                status: true
            })
        }
        this.setState({
            confirm: true,
            status: false
        })
    },
    render() {
        let title, text, titleError, textError;
        switch (this.props.modal) {
            case 'visit':
                title = 'Thank you!';
                text = 'Someone will get in touch to schedule a visit.';
                titleError = 'Oops! Sorry about that!';
                textError = 'Something went wrong. Please try so schedule a visit one more time!';
                break;
            case 'subscribe':
                title = 'Thank you for subscribing';
                text = 'You will be getting cool emails soon.';
                titleError = 'Oops! Sorry about that!';
                textError = 'We were unable to subscribe you. Please try again!';
                break;
            default:
                title = 'Thank you!';
                text = 'You\'re beautiful!';
                titleError = '';
                textError = ''
        }

        return (
            <div style={{display: 'block'}}
                 className="modal modal-light"
            >
                <div className="close-btn">
                    <svg onClick={this.props.toggleModal} id="close-x" className="close-x"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                    </svg>
                </div>
                <div className="modal-content">
                    {(this.state.confirm && this.state.status) ?
                        <SuccessSub title={title} text={text}/> : (this.state.confirm && !this.state.status) ?
                        <ErrorSub title={titleError}
                                  text={textError}/> : React.cloneElement(this.props.form, {handleClick: this._confirm}) }
                </div>
            </div>
        );
    }
});

export default ConfirmModal;