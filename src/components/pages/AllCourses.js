import React from 'react';
import CourseHero from '../modules/CourseHero';
import courses from '../../config/courses';
import CourseItem from '../modules/CourseItem';

const AllCourses = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        function renderCourses() {
            return (
                <div>
                    <CourseHero moduleTitle={"web development"} jumboTitle={"courses"} text={"Welcome to the magical world of unicorns."}/>
                    <CourseItem courses={courses}/>
                </div>
            );
        }
        return (
            <div>
                {this.props.children ? this.props.children : renderCourses()}
            </div>
        );
    }
});

export default AllCourses;