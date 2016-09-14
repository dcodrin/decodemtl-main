import React from 'react';

import HomeHero from '../../modules/HomeHero';
import HomeUpcomingCourses from '../../modules/HomeUpcomingCourses';
import CourseTestimonial from '../../modules/CourseTestimonial';
import FormOptin from '../../modules/FormOptin';
import UpcomingEvents from '../../modules/UpcomingEvents';
import PartnersLogos from '../../modules/PartnersLogos';
import HomeEvolving from '../../modules/HomeEvolving';
import LocationSlider from '../../modules/LocationSlider';

import upcomingCourses from '../../../config/upcomingCourses';
import testimonials from '../../../config/testimonials';
import events from '../../../config/events';

//TODO CHANGE PLACEHOLDER IMAGES
// /^\.\/wework(.*)\.jpg$/i will match all files starting with wework and ending with .jpg
var req = require.context('../../../assets/images', true, /^\.\/wework(.*)\.jpg$/i);


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
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                <FormOptin title="add some text here" text="and some of it here" submitButton="and submit"/>
                <LocationSlider req={req}/>
                <UpcomingEvents events={events} title='PUT SOME OPTIONAL TITLE' limit={5} text='OPTIONAL TEXT' filterOld={true}/>
                <PartnersLogos/>
            </div>
        );
    }
});

export default HomePage;