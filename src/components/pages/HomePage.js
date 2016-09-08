import React from 'react';

import HomeHero from '../modules/HomeHero';
import HomeUpcomingCourses from '../modules/HomeUpcomingCourses';
import CourseTestimonial from '../modules/CourseTestimonial';
import FormOptin from '../modules/FormOptin';
import UpcomingEvents from '../modules/UpcomingEvents';
import PartnersLogos from '../modules/PartnersLogos';
import MainFooter from '../navigation/MainFooter';

import upcomingCourses from '../../config/upcomingCourses';
import testimonials from '../../config/testimonials';
import instructorImage from '../../assets/images/profile-team-ziad.jpg';
import events from '../../config/events';

const HomePage = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <HomeHero/>
                <HomeUpcomingCourses upcomingCourses={upcomingCourses}/>
                <CourseTestimonial src={instructorImage} {...testimonials['Captain Planet']}/>
                <FormOptin/>
                <UpcomingEvents events={events}/>
                <PartnersLogos/>
                <MainFooter/>
            </div>
        );
    }
});

export default HomePage;