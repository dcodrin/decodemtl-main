//TODO UNCOMMENT PROJECT SLIDER ONCE PROJECTS ARE AVAILABLE
import React from 'react';
import Helmet from 'react-helmet';
import {Element, scrollSpy} from 'react-scroll';

import CourseHero from '../../modules/Hero';
import CourseOverview from '../../modules/Overview';
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
    componentWillMount() {
        //Necessary for smooth fade transitions when routing from parent component.
        window.scrollTo(0, 0);
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

        if (window.scrollY > scrollPosition && !this.state.secondaryNav) {
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

        const formTitle = 'Convince your employer to sponsor your tuition!',
            formText = 'Enter your email to download our free PDF guide and share it with your employer.';

        return (
            <div>
                <Helmet
                    title="Part-Time HTML & CSS Course | DecodeMTL"
                    meta={[
                        {property: 'description', content: 'Learn to write clean, standards-complient HTML & CSS, and become aquainted with the fundamentals of web design.'},
                    ]}/>
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}
                              syllabus='https://decode-main.herokuapp.com/downloads/htmlcss_syllabus.pdf'/>
                <CourseHero
                    CTAPText="Apply Now"
                    CTASText="Syllabus"
                    CTAPLink="/apply"
                    CTASLink="https://decode-main.herokuapp.com/downloads/htmlcss_syllabus.pdf"
                    CTAP={CTAPrimaryLarge}
                    CTAS={CTASecondaryLarge}
                    ref={hero => {
                        this._hero = hero
                    }}
                    moduleTitle={"Part-Time"}
                    jumboTitle={"HTML & CSS"}
                    text={"Learn to write clean, standards-complient code, and become aquainted with the fundamentals of web design."}
                    subText={""}/>
                <Element name="overview">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects}/>
                </Element>
                <FormOptin submitButton='Submit' title={formTitle} text={formText} interests={{'3782834739': true}}/>
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


