import React from 'react';

import CourseHero from '../modules/CourseHero';
import CourseOverview from '../modules/CourseOverview';
import CourseTuitionDates from'../modules/CourseTuitionDates';
import CourseCurriculum from '../modules/CourseCurriculum';
import FormOptin from '../modules/FormOptin';
import CourseInstructor from '../modules/CourseInstructor';
import SecondaryNav from '../navigation/SecondaryNav';
import CourseTestimonial from '../modules/CourseTestimonial';
import CourseSchedule from '../modules/CourseSchedule';
import CourseProjectsSlider from '../modules/CourseProjectsSlider';
import CourseCareerSupport from '../modules/CourseCareerSupport';
import CourseFAQ from '../modules/CourseFAQ';
import PartnersLogos from '../modules/PartnersLogos';
import Footer from '../navigation/MainFooter';

import tuitionDates from '../../config/tuitionDates';
import subjects from '../../config/subjects';
import instructors from '../../config/instructors';
import testimonials from '../../config/testimonials';
import projects from '../../config/projects';
import faq from '../../config/FAQ';

//TODO REPLACE PLACEHOLDER IMAGES
// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
const req = require.context("../../assets/images/", true, /^\.\/img(.*)\.jpg$/i);
import instructorImage from '../../assets/images/profile-team-ziad.jpg';


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
                <CourseHero ref={hero => {this._hero = hero}}/>
                <CourseOverview/>
                <CourseTuitionDates tuitionDates={tuitionDates}/>
                <CourseCurriculum subjects={subjects}/>
                <FormOptin/>
                <CourseTestimonial src={instructorImage} {...testimonials['Captain Planet']}/>
                <CourseSchedule/>
                <CourseInstructor {...instructors['Ziad Saab']} src={instructorImage}/>
                <CourseProjectsSlider projects={projects} req={req}/>
                <CourseCareerSupport/>
                <CourseFAQ faq={faq}/>
                <PartnersLogos/>
                <Footer/>
            </div>
        );
    }
});



export default Courses;


