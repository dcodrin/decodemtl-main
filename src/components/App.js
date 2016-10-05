//TODO implement custom schedule a visit form
//TODO bug fix --> Privacy policy & terms links should close modal upon click
import React from 'react';
import RouteTransition from './RouteTransition';
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
            modal: false
        };
    },
    _toggleModal(prevent, e) {
        //Fixes issue when toggling the modal from Links that redirect and the modal is not closing
        // Need to pass prevent (true||false) in order to prevent the redirect or to allow it
        if (!e) {
            e = prevent;
            e.preventDefault();
        }
        this.setState({
            modal: !this.state.modal
        })
    },
    componentDidMount() {
        const evt = document.createEvent("HTMLEvents");
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
    },
    render() {
        return (
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal
                        ? <ConfirmModal
                        modalType="visit"
                        form={ScheduleVisit}
                        toggleModal={this._toggleModal}/>
                        : null}
                </ReactCSSTransitionGroup>
                <SiteNav handleScheduleVisit={this._toggleModal} ref={siteNav => {
                    this._siteNav = siteNav
                }}/>
                <main className="main-content">
                    <RouteTransition
                        path={this.props.location.pathname}
                        initialStyle={{opacity: 0}}
                        transition="opacity 150ms ease-in"
                        finalStyle={{opacity: 1}}>
                        {this.props.children}
                    </RouteTransition>
                </main>
                <Footer/>
            </div>
        );
    }
});


export default App;