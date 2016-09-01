import React from 'react';

const CourseInstructor = (props) => {
    return (
        <section className="module module-course instructor-course">
            <div className="wrapper">
                <h2 className="module-title">Meet Your Instructor</h2>
                <div className="img-text-container profile-block">
                    <div className="img-text-pic">
                        <img src={props.src} alt={props.alt} />
                    </div>
                    <div className="img-text-details">
                        <h4>{props.fullName}</h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

CourseInstructor.propTypes = {
    fullName: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
};

export default CourseInstructor;