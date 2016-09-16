import React from 'react';

export const CourseTestimonial = (props) => {
    return (
        <section className="module module-course testimonial-course">
            <div className="wrapper">
                    <div className="img-text-container profile-block">
                        <div className="img-text-pic">
                            <img src={props.testimonial.img} alt=""/>
                        </div>
                        <blockquote className="img-text-details">
                            <p>{props.testimonial.text}
                            </p>
                            <span className="credit">{props.testimonial.fullName}</span>
                            <div className="link-more">
                            </div>
                        </blockquote>
                    </div>
            </div>
        </section>
    );
};

CourseTestimonial.propTypes = {
    testimonial: React.PropTypes.object.isRequired
};

export default CourseTestimonial;