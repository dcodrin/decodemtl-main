import React from 'react';

const CourseOverview = (props) => {
    return (
        <section className="module module-course overview-course">
            <div className="wrapper">
                <h2 className="module-title">Overview</h2>
                <ul className="petal-icon-list">
                    {props.overview.map((point, i) => (
                        <li key={i}><span className="petal-icon" aria-hidden="true"/>{point.text}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

CourseOverview.propTypes = {
    overview: React.PropTypes.array.isRequired
};

export default CourseOverview;