import React from 'react';

import HomeHero from '../../modules/HomeHero';
import HomeUpcomingCourses from '../../modules/HomeUpcomingCourses';
import CourseTestimonial from '../../modules/CourseTestimonial';
import FormOptin from '../../modules/FormOptin';
import UpcomingEvents from '../../modules/UpcomingEvents';
import PartnersLogos from '../../modules/PartnersLogos';
import HomeEvolving from '../../modules/HomeEvolving';
import LocationSlider from '../../modules/LocationSlider';
import ConfirmModal from '../../modules/ConfirmModal';
import ScheduleVisit from '../../modules/ScheduleVisit';
import Helmet from 'react-helmet';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import upcomingCourses from '../../../config/upcomingCourses';
import testimonials from '../../pages/wd_bootcamp/testimonials';
import events from '../../../config/events';

//TODO CHANGE PLACEHOLDER IMAGES
// /^\.\/wework(.*)\.jpg$/i will match all files starting with wework and ending with .jpg
var req = require.context('../../../assets/images', true, /^\.\/wework(.*)\.jpg$/i);

const HomePage = React.createClass({
    propTypes: {},
    getInitialState(){
        return {
            modal: false
        };
    },
    _toggleModal(e) {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        })
    },
    render() {
        return (
            <div>
                <Helmet
                    title="Home!"
                    meta={[
                        {property: 'description', content: 'Home'},
                    ]}/>
                <HomeHero/>
                <HomeEvolving handleClick={this._toggleModal}/>
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal
                        ? <ConfirmModal
                        modalType='visit'
                        form={ScheduleVisit}
                        toggleModal={this._toggleModal}/>
                        : null}
                </ReactCSSTransitionGroup>
                <HomeUpcomingCourses upcomingCourses={upcomingCourses}/>
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                <FormOptin title="Join our growing community"
                           text="Enter your email to receive info about new courses, workshops and events."
                           submitButton="Submit"/>
                <LocationSlider req={req}/>
                <UpcomingEvents events={events} title='Upcoming Events' limit={5} text='' filterOld={true}/>
                <PartnersLogos/>
            </div>
        );
    }
});

export default HomePage;