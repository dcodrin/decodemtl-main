//TODO implement custom schedule a visit form
import React from 'react';
import RouteTransition from 'react-easy-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SiteNav from './navigation/SiteNav';
import Footer from './navigation/MainFooter';
import ScheduleVisit from './modules/ScheduleVisit';
import ConfirmModal from './modules/ConfirmModal';

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
            modal: !this.state.modal,
            confirm: false
        })
    },
    _confirm() {
        this.setState({
            confirm: true
        });
    },
    render() {
        return (
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal ? <ConfirmModal form={<ScheduleVisit title="Schedule a visit yo!" text="test"/>}
                                                      toggleModal={this._toggleModal}/> : null}
                </ReactCSSTransitionGroup>
                <SiteNav handleScheduleVisit={this._toggleModal} ref={siteNav => {
                    this._siteNav = siteNav
                }}/>
                <main className="main-content">
                    <RouteTransition
                        path={this.props.location.pathname}
                        initialStyle={{opacity: 0}}
                        transition="opacity 150ms ease-in"
                        finalStyle={{opacity: 1}}
                    >
                        {this.props.children}
                    </RouteTransition>
                </main>
                <Footer/>
            </div>
        );
    }
});


export default App;
