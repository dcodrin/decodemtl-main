//TODO implement custom schedule a visit form
import React from 'react';
import RouteTransition from 'react-easy-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SiteNav from './navigation/SiteNav';
import Footer from './navigation/MainFooter';
import FormOptin from './modules/FormOptin';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element
    },
    getInitialState(){
        return {
            modal: false,
            confirm: false
        };
    },
    _toggleModal(e) {
        e.preventDefault();
        console.log(this.state.modal);
        this.setState({
            modal: !this.state.modal
        })
    },
    _confirm() {
        this.setState({
            confirm: true
        });
    },
    render() {
        const renderModal = () => {
            if (this.state.modal) {
                return (
                    <div style={{display: 'block'}}
                         className="modal modal-dark"
                    >
                        <div className="close-btn">
                            <svg onClick={this._toggleModal} id="close-x" className="close-x"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                            </svg>
                        </div>
                        <div className="modal-content">
                            {this.state.confirm ? <p>THANK YOU!</p> :
                                <FormOptin handleClick={this._confirm} title="Take a tour of our space and meet with our team."
                                           text="You will receive a link to pick a date and time of that works for you."
                                           submitButton="Submit"/>}
                        </div>
                    </div>
                );
            }
            return null;
        };

        return (
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal ? renderModal() : null}
                </ReactCSSTransitionGroup>
                <SiteNav handleScheduleVisit={this._toggleModal} ref={siteNav => {
                    this._siteNav = siteNav
                }}/>
                <RouteTransition
                    path={this.props.location.pathname}
                    initialStyle={{opacity: 0}}
                    transition="opacity 150ms ease-in"
                    finalStyle={{opacity: 1}}
                    className="main-content" role="main"
                >
                    {this.props.children}
                </RouteTransition>
                <Footer/>
            </div>
        );
    }
});


export default App;
