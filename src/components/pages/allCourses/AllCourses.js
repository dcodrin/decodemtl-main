import React from 'react';
import CourseHero from '../../modules/Hero';
import courses from '../../../config/courses';
import CourseItem from '../../modules/CourseItem';

const AllCourses = (props) => {
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
                {props.children ? props.children : renderCourses()}
            </div>
        );
};

AllCourses.propTypes = {
    children: React.PropTypes.element
};

export default AllCourses;