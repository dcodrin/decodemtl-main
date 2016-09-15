import React from 'react';
import {Link} from 'react-router';

const CourseSchedule = (props) => {
    return (
        <section className="module module-course course-schedule">
            <div className="wrapper">
                <div style={props.background ? {backgroundImage: 'url(' + props.background + ')'} : null} className="module-bg-img">
                    <h2 className="module-title">Typical Day</h2>
                    <p>By focusing as much as possible on project based learning, lecture time is kept to a minimum. You can expect the average day to unfold as follows:</p>
                    {/*!-- .two-col-table --*/}
                    <div className="two-col-table">
                        <div className="row">
                            <h4 className="cell cell-header">10am — Class</h4>
                            <div className="cell cell-content">Teacher guided lectures, live coding, and demos. Take a seat and yu absorb some knowledge!</div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">10am — Class</h4>
                            <div className="cell cell-content">Teacher guided lectures, live coding, and demos. Take a seat and absorb some knowledge!</div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">10am — Class</h4>
                            <div className="cell cell-content">Teacher guided lectures, live coding, and demos. Take a seat and absorb some knowledge!</div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">10am — Class</h4>
                            <div className="cell cell-content">Teacher guided lectures, live coding, and demos. Take a seat and absorb some knowledge!</div>
                        </div>
                    </div>
                    {/*!-- /.two-col-table --*/}
                </div>
                <div className="info-block info-block-blue info-block-centered">
                    Read more about our <Link to="#">workspace</Link> and <Link to="#">student housing options</Link>
                </div>
            </div>
        </section>
    );
};

CourseSchedule.propTypes = {
    background: React.PropTypes.string
};

export default CourseSchedule;