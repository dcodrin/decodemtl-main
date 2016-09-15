//TODO UNCOMMENT PROJECT SLIDER ONCE PROJECTS ARE AVAILABLEE
import React from 'react';
import {Element, scrollSpy} from 'react-scroll';

import CourseHero from '../../modules/Hero';
import CourseOverview from '../../modules/CourseOverview';
import CourseTuitionDates from'../../modules/CourseTuitionDates';
import CourseCurriculum from '../../modules/CourseCurriculum';
import FormOptin from '../../modules/FormOptin';
import CourseInstructor from '../../modules/CourseInstructor';
import SecondaryNav from '../../navigation/SecondaryNav';
import CourseTestimonial from '../../modules/CourseTestimonial';
//PROJECT SLIDER
// import CourseProjectsSlider from '../../modules/CourseProjectsSlider';
import CourseFAQ from '../../modules/FAQ';

import tuitionDates from './tuitionDates';
import subjects from './subjects';
import instructors from './instructors';
import testimonials from './testimonials';
//PROJECT SLIDER
// import projects from './projects';
import faq from './FAQ';
import overview from './courseOverview';


//TODO REPLACE PLACEHOLDER IMAGES
// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
//PROJECT SLIDER
// const req = require.context("../../../assets/images/", true, /^\.\/project-htmlcss(.*)\.jpg$/i); //project-course-num //testimonial-firstlast
import {CTAPrimaryLarge, CTASecondaryLarge} from '../../buttons/buttons';

const Courses = React.createClass({
    getInitialState() {
        return {
            secondaryNav: false
        };
    },
    componentDidMount() {
        scrollSpy.update();
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
        const secondaryLinks = [
            {
                to: 'overview', name: 'Overview'
            }, {
                to: 'tuition-dates', name: 'Tuition & Dates'
            }, {
                to: 'curriculum', name: "Curriculum"
            }, {
                to: 'instructor', name: `Instructor${instructors.length > 1 ? 's' : ''}`
            }, {
                to: 'faq', name: 'FAQ'
            }
        ];

        const formTitle = 'Get instant access to the course curriculum',
            formText = 'Enter your email below to take a peak at our detailed course curriculum.';

        return (
            <div>
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}/>
                <CourseHero CTAP={CTAPrimaryLarge} CTAS={CTASecondaryLarge} ref={hero => {this._hero = hero}} moduleTitle={"Part-Time"} jumboTitle={"HTML & CSS"} text={"Learn to write clean, standards-complient code, and become aquainted with the fundamentals of web design."} subText={""}/>
                <Element name="overview">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects}/>
                </Element>
                <FormOptin submitButton='Submit' title={formTitle} text={formText} />
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                {/*<CourseProjectsSlider projects={projects} req={req}/>*/}
                <Element name="instructor">
                    <CourseInstructor instructors={instructors}/>
                </Element>
                <Element name="faq">
                    <CourseFAQ title='Course FAQ' faq={faq}/>
                </Element>
            </div>
        );
    }
});



export default Courses;


