import React from 'react';
import {Link} from 'react-router';

const CourseItem = (props) => {
    return (
        <div>
            {props.courses.map((course, i) => (
            <article key={i} className="module course-item">
                <div className="wrapper">
                    <div className="module-boxed course-item-container">
                        <div className="course-description">
                            <h1 className="module-title-medium">{course.title}<span className="module-title-jumbo">{course.jumboTitle}</span></h1>
                            <p>{course.text}</p>
                        </div>
                        <aside className="course-details module-boxed-medium">
                            <div className="course-details-block">
                                <h4>{course.type}</h4>
                                <ul className="course-length">
                                    <li>{course.duration}</li>
                                    <li>{course.hours}</li>
                                    <li>{course.days}</li>
                                </ul>
                            </div>
                            <div className="course-details-block">
                                <h4>Next Sessions</h4>
                                <ul className="course-sessions">
                                    <li>{course.nextSessions[0]}</li>
                                    <li>{course.nextSessions[1]}</li>
                                </ul>
                            </div>
                            <Link to={`/courses/${encodeURI(course.link)}`} className="cta btn-primary btn-small">Learn More</Link>
                        </aside>
                        {/*<!-- /.course-details -->*/}
                    </div>
                    {/*<!-- /.module-boxed -->*/}
                </div>
                {/*<!-- /.wrapper -->*/}
            </article>
            ))}
        </div>
    );
};

CourseItem.propTypes = {};

export default CourseItem;