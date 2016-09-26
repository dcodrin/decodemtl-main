import React from 'react';
import Helmet from 'react-helmet';

import CourseHero from '../../modules/Hero';
import courses from '../../../config/courses';
import CourseItem from '../../modules/CourseItem';

const AllCourses = (props) => {

    return (
        <div>
            <Helmet
                title="Courses"
                meta={[
                    {property: 'description', content: 'Courses'},
                ]}/>
            <CourseHero moduleTitle={"web development"} jumboTitle={"courses"} text={"Browse our upcoming Full-Time and Part-Time courses."}/>
            <CourseItem courses={courses}/>
        </div>
    );

};

AllCourses.propTypes = {
    children: React.PropTypes.element
};

export default AllCourses;