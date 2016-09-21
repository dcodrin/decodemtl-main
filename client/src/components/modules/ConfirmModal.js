import React from 'react';

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
    _confirm() {
        this.setState({
            confirm: true
        })
    },
    render() {
        const renderConfirm = () => {
            return (
                <section className="module">
                    <div className="wrapper">
                        <div className="module-boxed">
                            <p className="text-body-large">Thank you!</p>
                            <p>Thank you ver very much!</p>
                        </div>
                        {/* /.module-boxed */}
                    </div>
                    {/* /.wrapper */}
                </section>
            );
        };
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
                    {this.state.confirm ? renderConfirm() : React.cloneElement(this.props.form, {handleClick: this._confirm}) }
                </div>
            </div>
        );
    }
});

export default ConfirmModal;