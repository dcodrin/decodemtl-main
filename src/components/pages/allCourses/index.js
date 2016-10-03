import React from 'react';
import Helmet from 'react-helmet';

import CourseHero from '../../modules/Hero';
import courses from '../../../config/courses';
import CourseItem from '../../modules/CourseItem';

const AllCourses = React.createClass({
    propTypes: {
        children: React.PropTypes.element
    },
    componentWillMount() {
        //Necessary for smooth fade transitions when routing from parent component.
        window.scrollTo(0, 0);
    },
    render() {
        return (
            <div>
                <Helmet
                    title="Web Development Courses | DecodeMTL"
                    meta={[
                        {
                            property: 'description',
                            content: 'Browse DecodeMTL\'s full-time and part-time courses in Web Development, HTML, CSS, and JavaScript.'
                        },
                    ]}/>
                <CourseHero moduleTitle={"web development"} jumboTitle={"courses"}
                            text={"Browse our upcoming Full-Time and Part-Time courses."}/>
                <CourseItem courses={courses}/>
            </div>
        );
    }
});

export default AllCourses;