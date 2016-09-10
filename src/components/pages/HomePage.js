import React from 'react';

import HomeHero from '../modules/HomeHero';
import HomeUpcomingCourses from '../modules/HomeUpcomingCourses';
import CourseTestimonial from '../modules/CourseTestimonial';
import FormOptin from '../modules/FormOptin';
import UpcomingEvents from '../modules/UpcomingEvents';
import PartnersLogos from '../modules/PartnersLogos';
import MainFooter from '../navigation/MainFooter';
import HomeEvolving from '../modules/HomeEvolving';
import LocationSlider from '../modules/LocationSlider';

import upcomingCourses from '../../config/upcomingCourses';
import testimonials from '../../config/testimonials';
import events from '../../config/events';

//TODO CHANGE PLACEHOLDER IMAGES
// /^\.\/wework(.*)\.jpg$/i will match all files starting with wework and ending with .jpg
var req = require.context('../../assets/images', true, /^\.\/wework(.*)\.jpg$/i);
import instructorImage from '../../assets/images/profile-team-ziad.jpg';


const HomePage = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <HomeHero/>
                <HomeEvolving/>
                <HomeUpcomingCourses upcomingCourses={upcomingCourses}/>
                <CourseTestimonial src={instructorImage} {...testimonials['Captain Planet']}/>
                <FormOptin/>
                <LocationSlider req={req}/>
                <UpcomingEvents events={events}/>
                <PartnersLogos/>
                <MainFooter/>
            </div>
        );
    }
});

export default HomePage;