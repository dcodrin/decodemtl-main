import React from 'react';


import ErrorSub from '../modules/ErrorSUB';
import SuccessSub from '../modules/SuccessSUB';

const ConfirmModal = React.createClass({
    propTypes: {
        form: React.PropTypes.element.isRequired,
        toggleModal: React.PropTypes.func.isRequired
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
                        <SuccessSub /> : (this.state.confirm && !this.state.status) ?
                        <ErrorSub /> : React.cloneElement(this.props.form, {handleClick: this._confirm}) }
                </div>
            </div>
        );
    }
});

export default ConfirmModal;