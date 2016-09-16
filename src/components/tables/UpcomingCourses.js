import React from 'react';
import {Link} from 'react-router';

const UpcomingCourses = (props) => {
    return (
        <div className="row">
            <div className="cell">{props.courseName}</div>
            <div className="cell">{props.startDate.replace(/[a-z]+$/i, '')}<sup>{props.startDate.match(/\d+(.*)/)[1]}</sup></div>
            <div className="cell">{props.type}</div>
            <div style={{flexBasis: '15%'}} className="cell"><span className="read-more text-body-small"><Link to={`/courses/${props.link}`}>View course</Link></span></div>
        </div>
    );
};

UpcomingCourses.propTypes = {
    startDate: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    courseName: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
};

export default UpcomingCourses;