import React from 'react';

import CourseHero from '../modules/CourseHero';
import CourseOverview from '../modules/CourseOverview';
const Courses = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <CourseHero/>
                <CourseOverview/>
            </div>
        );
    }
});

export default Courses;