import React from 'react';

import CourseHero from '../modules/CourseHero';
import CourseOverview from '../modules/CourseOverview';
import CourseTuitionDates from'../modules/CourseTuitionDates';
import CourseCurriculum from '../modules/CourseCurriculum';
import FormOptin from '../modules/FormOptin';
import CourseInstructor from '../modules/CourseInstructor';

import tuitionDates from '../../../config/tuitionDates';
import subjects from '../../../config/subjects';
import instructors from '../../../config/instructors';
import instructorImage from '../../assets/images/profile-team-ziad.jpg';

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
                <CourseTuitionDates tuitionDates={tuitionDates}/>
                <CourseCurriculum subjects={subjects}/>
                <FormOptin/>
                <CourseInstructor {...instructors['Ziad Saab']} src={instructorImage}/>
            </div>
        );
    }
});

export default Courses;

