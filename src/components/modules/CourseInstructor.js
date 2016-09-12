import React from 'react';

const CourseInstructor = (props) => {
    return (
        <section className="module module-course instructor-course">
            <div className="wrapper">
                <h2 className="module-title">Meet Your Instructor{props.instructors.length > 1 ? 's' : null}</h2>
                {props.instructors.map((instructor, i) => (
                    <div key={i} className="img-text-container profile-block">
                        <div className="img-text-pic">
                            <img src={instructor.img} alt=""/>
                        </div>
                        <div className="img-text-details">
                            <h4>{instructor.fullName}</h4>
                            <p>{instructor.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

CourseInstructor.propTypes = {
    instructors: React.PropTypes.array.isRequired
};

export default CourseInstructor;


