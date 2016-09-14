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

        const formTitle = 'Get instant access to our prep course material',
            formText = 'Discover the content our applicants must complete for admission, or start learning on your own!';

        return (
            <div>
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}/>
                <CourseHero CTAP={CTAPrimaryLarge} CTAS={CTASecondaryLarge} ref={hero => {this._hero = hero}} moduleTitle={"introduction to"} jumboTitle={"html & css"} text={"You will learn to build an nuclear fusion reactor in your garage"} subText={"oh and some html css"}/>
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
                <CourseProjectsSlider projects={projects} req={req}/>
                <Element name="instructor">
                    <CourseInstructor instructors={instructors}/>
                </Element>
                <Element name="faq">
                    <CourseFAQ faq={faq}/>
                </Element>
            </div>
        );
    }
});



export default Courses;


