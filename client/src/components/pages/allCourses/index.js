import React from 'react';
import RouteTransition from'react-easy-transition';

import CourseHero from '../../modules/Hero';
import courses from '../../../config/courses';
import CourseItem from '../../modules/CourseItem';

const AllCourses = (props) => {
        function renderCourses() {
            return (
                <div>
                    <CourseHero moduleTitle={"web development"} jumboTitle={"courses"} text={"Browse our upcoming Full-Time and Part-Time courses."}/>
                    <CourseItem courses={courses}/>
                </div>
            );
        }
        return (
            <div>
                <RouteTransition
                    path={props.location.pathname}
                    initialStyle={{opacity: 0}}
                    transition="opacity 300ms ease-in"
                    finalStyle={{opacity: 1}}
                >
                    {props.children ? props.children : renderCourses()}
                </RouteTransition>
            </div>
        );
};

AllCourses.propTypes = {
    children: React.PropTypes.element
};

export default AllCourses;