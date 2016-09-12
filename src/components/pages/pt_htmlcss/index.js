import React from 'react';

import CourseHero from '../../modules/CourseHero';
import CourseOverview from '../../modules/CourseOverview';
import CourseTuitionDates from'../../modules/CourseTuitionDates';
import CourseCurriculum from '../../modules/CourseCurriculum';
import FormOptin from '../../modules/FormOptin';
import CourseInstructor from '../../modules/CourseInstructor';
import SecondaryNav from '../../navigation/SecondaryNav';
import CourseTestimonial from '../../modules/CourseTestimonial';
import CourseProjectsSlider from '../../modules/CourseProjectsSlider';
import CourseFAQ from '../../modules/CourseFAQ';

import tuitionDates from './tuitionDates';
import subjects from './subjects';
import instructors from './instructors';
import testimonials from './testimonials';
import projects from './projects';
import faq from './FAQ';
import overview from './courseOverview';


//TODO REPLACE PLACEHOLDER IMAGES
// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
const req = require.context("../../../assets/images/", true, /^\.\/project-htmlcss(.*)\.jpg$/i); //project-course-num //testimonial-firstlast
import {CTAPrimaryLarge, CTASecondaryLarge} from '../../buttons/buttons';

const Courses = React.createClass({
    getInitialState() {
        return {
            secondaryNav: false
        };
    },
    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    },
    _handleScroll(e) {
        const headerWrapper = this._hero._headerWrapper;
        const scrollPosition = headerWrapper.offsetTop + headerWrapper.offsetHeight;
        if(window.innerWidth < 800) {
            this.setState({
                secondaryNav: false
            });
            return;
        }
        if(window.scrollY > scrollPosition && !this.state.secondaryNav) {
            this.setState({
                secondaryNav: true
            })
        } else if (window.scrollY < scrollPosition && this.state.secondaryNav) {
            this.setState({
                secondaryNav: false
            });
        }
    },
    render() {
        return (
            <div>
                <SecondaryNav display={this.state.secondaryNav}/>
                <CourseHero CTAP={CTAPrimaryLarge} CTAS={CTASecondaryLarge} ref={hero => {this._hero = hero}} moduleTitle={"introduction to"} jumboTitle={"html & css"} text={"You will learn to build an nuclear fusion reactor in your garage"} subText={"oh and some html css"}/>
                <CourseOverview overview={overview}/>
                <CourseTuitionDates tuitionDates={tuitionDates}/>
                <CourseCurriculum subjects={subjects}/>
                <FormOptin/>
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                <CourseProjectsSlider projects={projects} req={req}/>
                <CourseInstructor instructors={instructors}/>
                <CourseFAQ faq={faq}/>
            </div>
        );
    }
});



export default Courses;


