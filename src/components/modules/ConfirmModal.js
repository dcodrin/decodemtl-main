import React from 'react';

import ErrorSub from '../modules/ErrorSUB';
import SuccessSub from '../modules/SuccessSUB';

const ConfirmModal = React.createClass({
    //NOTE: form has to be an uncalled react element
    propTypes: {
        form: React.PropTypes.func,
        toggleModal: React.PropTypes.func.isRequired,
        modalType: React.PropTypes.string,
        status: React.PropTypes.bool
    },
    getInitialState(){
        return {
            confirm: this.props.status,
            status: this.props.status
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
    _preventMobileScroll (e) {
        e.preventDefault();
    },
    componentWillMount() {
        window.addEventListener('touchmove', this._preventMobileScroll);
    },
    componentWillUnmount() {
        window.removeEventListener('touchmove', this._preventMobileScroll);
    },
    render() {
        let title, text, titleError, textError;
        switch (this.props.modalType) {
            case 'visit':
                title = 'Thank you!';
                text = 'We will be in touch within 24 hours or by the next working day to schedule your visit.';
                titleError = 'Oops! Something went wrong!';
                textError = 'Please try again. If the issue persists, you can email us at hello@decodemtl.com.';
                break;
            case 'subscribe':
                title = 'Thank you for subscribing';
                text = 'You will start receiving our awesome emails shortly.';
                titleError = 'Oops! Sorry about that!';
                textError = 'We were unable to subscribe you. Please try again.';
                break;
            default:
                title = 'Thank you!';
                text = 'You\'re beautiful!';
                titleError = 'These are not the error messages you are looking for.';
                textError = 'Jedi mind tricks!'
        }

        const renderModalContent = () => {
            if (this.state.confirm && this.state.status) {
                return <SuccessSub title={title} text={text}/>
            } else if (this.props.form && this.state.status !== false) {
                const ScheduleVisit = this.props.form;
                return <ScheduleVisit handleClick={this._confirm} toggleModal={this.props.toggleModal}/>
            }
            return <ErrorSub title={titleError} text={textError}/>
        };

        return (
            <div style={{display: 'block'}}
                 className="modal modal-light">
                <div className="close-btn">
                    <svg onClick={this.props.toggleModal} id="close-x" className="close-x"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                    </svg>
                </div>
                <div className="modal-content">
                    {renderModalContent()}
                </div>
            </div>
        );
    }
});

export default ConfirmModal;